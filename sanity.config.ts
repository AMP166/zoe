import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'zoe_pedersen_studio',
  title: 'Zoe Pedersen Updates',
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'cr9j4oby',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes }
});
