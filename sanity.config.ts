import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'rhythm-raga-studio',
  title: 'Rhythm Raga CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fm53fox4',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: () => null, // Hide navbar for embedded studio
    },
  },
})