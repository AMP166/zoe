import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { samplePosts } from '../data';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.SANITY_API_VERSION || '2026-06-27';
const configured = Boolean(projectId && projectId !== 'replace_with_sanity_project_id');

export const client = configured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

const builder = client ? imageUrlBuilder(client) : null;
export function urlFor(source: any) {
  return builder?.image(source);
}

const postProjection = `{
  title,
  "slug": slug.current,
  category,
  location,
  date,
  excerpt,
  featured,
  mainImage,
  body,
  "bodyText": pt::text(body)
}`;

export async function getPosts() {
  if (!client) return samplePosts;
  const posts = await client.fetch(`*[_type == "post" && defined(slug.current) && published == true] | order(date desc) ${postProjection}`);
  return posts.length ? posts : samplePosts;
}

export async function getFeaturedPosts() {
  const posts = await getPosts();
  return posts.filter((post: any) => post.featured).slice(0, 3);
}

export async function getPostBySlug(slug: string) {
  if (!client) return samplePosts.find((post) => post.slug === slug);
  return client.fetch(`*[_type == "post" && slug.current == $slug][0] ${postProjection}`, { slug });
}

export function imageSrc(post: any, fallback = '/assets/zoe-hero.jpg') {
  if (post?.mainImage && builder) return urlFor(post.mainImage)?.width(1600).height(1000).fit('crop').auto('format').url();
  return post?.image || fallback;
}
