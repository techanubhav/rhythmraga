export const gallery = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Photo/Video Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Performance', value: 'performance' },
          { title: 'Classes', value: 'classes' },
          { title: 'Events', value: 'events' },
          { title: 'Facilities', value: 'facilities' },
          { title: 'Graduation/Awards', value: 'graduation' },
          { title: 'Wedding Choreography', value: 'wedding' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'program',
      title: 'Related Program',
      type: 'reference',
      to: [{ type: 'program' }],
      description: 'Which program does this photo relate to?',
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      description: 'When was this photo taken?',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags for easy searching and filtering',
    },
    {
      name: 'isActive',
      title: 'Show in Gallery',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Featured Image',
      type: 'boolean',
      description: 'Show this image prominently on the website',
      initialValue: false,
    },
    {
      name: 'photographer',
      title: 'Photographer Credit',
      type: 'string',
      description: 'Optional photographer credit',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle ? `Category: ${subtitle}` : 'No category',
        media,
      }
    },
  },
}