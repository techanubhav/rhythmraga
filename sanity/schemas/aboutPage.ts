export const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'ourStory',
      title: 'Our Story Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Story',
        },
        {
          name: 'content',
          title: 'Story Content',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'founderImage',
          title: 'Founder Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'vision',
      title: 'Vision Statement',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'instructors',
      title: 'Featured Instructors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'instructor' }],
        },
      ],
      description: 'Select instructors to feature on the about page',
    },
    {
      name: 'achievements',
      title: 'Achievements Section',
      type: 'object',
      fields: [
        {
          name: 'studentAccomplishments',
          title: 'Student Accomplishments',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'academyRecognition',
          title: 'Academy Recognition',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      name: 'facilities',
      title: 'Facilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Facility Name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'icon',
              title: 'Icon/Emoji',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Facility Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
        subtitle: 'Page content and information',
      }
    },
  },
}