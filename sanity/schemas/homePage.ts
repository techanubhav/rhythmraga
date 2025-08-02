export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title displayed on the home page hero section',
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Subtitle text below the main title',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Background image for the hero section',
    },
    {
      name: 'aboutPreview',
      title: 'About Preview Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Discover Your Rhythm',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'featuredPrograms',
      title: 'Featured Programs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'program' }],
        },
      ],
      description: 'Select up to 3 programs to feature on the home page',
      validation: (Rule: any) => Rule.max(3),
    },
    {
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon/Emoji',
              type: 'string',
              description: 'Emoji or icon character',
            },
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'text',
            },
          ],
        },
      ],
      description: 'Key features/benefits to highlight',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare(selection: any) {
      const { title, subtitle } = selection
      return {
        title: 'Home Page',
        subtitle: title || 'No title set',
      }
    },
  },
}