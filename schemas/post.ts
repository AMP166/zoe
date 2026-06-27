import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'published', title: 'Published', type: 'boolean', initialValue: true }),
    defineField({ name: 'featured', title: 'Show on homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'date', title: 'Date', type: 'datetime', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Training', 'Travel', 'Camp', 'Race Day', 'Result', 'Media', 'Personal'] }
    }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Short excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'body',
      title: 'Post body',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'mainImage' }
  }
});
