export const offeringsPage = {
  name: 'offeringsPage',
  title: 'Offerings Page',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Offerings',
    },
    {
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'string',
      initialValue: 'Comprehensive Music and Dance Programs for All Ages and Skill Levels',
    },
    {
      name: 'programsOrder',
      title: 'Programs Display Order',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'program' }],
        },
      ],
      description: 'Drag to reorder how programs appear on the offerings page',
    },
    {
      name: 'additionalInfo',
      title: 'Additional Information Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Info Card Title',
              type: 'string',
            },
            {
              name: 'icon',
              title: 'Icon/Emoji',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
      description: 'Cards showing trial classes, performance opportunities, etc.',
    },
    {
      name: 'ctaSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          initialValue: 'Ready to Start Your Journey?',
        },
        {
          name: 'subtitle',
          title: 'CTA Subtitle',
          type: 'string',
          initialValue: 'Choose your program and begin your musical adventure with Rhythm Raga Academy today!',
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Offerings Page',
        subtitle: 'Programs and course information',
      }
    },
  },
}