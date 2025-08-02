export const testimonial = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'studentName',
      title: 'Student/Parent Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'program',
      title: 'Program Taken',
      type: 'reference',
      to: [{ type: 'program' }],
    },
    {
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(500),
    },
    {
      name: 'rating',
      title: 'Rating (1-5 stars)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: 'photo',
      title: 'Student Photo (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'relationship',
      title: 'Relationship to Student',
      type: 'string',
      options: {
        list: [
          { title: 'Student', value: 'student' },
          { title: 'Parent', value: 'parent' },
          { title: 'Guardian', value: 'guardian' },
        ],
      },
      initialValue: 'student',
    },
    {
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial prominently',
      initialValue: false,
    },
    {
      name: 'dateGiven',
      title: 'Date Given',
      type: 'date',
      description: 'When was this testimonial provided?',
    },
  ],
  preview: {
    select: {
      title: 'studentName',
      subtitle: 'testimonial',
      media: 'photo',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle ? `"${subtitle.substring(0, 60)}..."` : 'No testimonial text',
        media,
      }
    },
  },
}