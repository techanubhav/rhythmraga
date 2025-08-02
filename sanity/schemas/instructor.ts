export const instructor = {
  name: 'instructor',
  title: 'Instructors',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      description: 'e.g., Lead Vocal Instructor, Dance Choreographer',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed biography and background',
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      description: 'Brief description for cards and previews',
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Areas of expertise and instruments taught',
    },
    {
      name: 'experience',
      title: 'Years of Experience',
      type: 'number',
      description: 'Years of teaching experience',
    },
    {
      name: 'education',
      title: 'Education & Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'achievements',
      title: 'Notable Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'programs',
      title: 'Programs Taught',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'program' }],
        },
      ],
      description: 'Programs this instructor teaches',
    },
    {
      name: 'isActive',
      title: 'Active Instructor',
      type: 'boolean',
      description: 'Is this instructor currently teaching?',
      initialValue: true,
    },
    {
      name: 'featured',
      title: 'Featured Instructor',
      type: 'boolean',
      description: 'Show this instructor prominently on the website',
      initialValue: false,
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'email',
      description: 'Optional: Direct contact email for this instructor',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'website',
          title: 'Personal Website',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle || 'Instructor',
        media,
      }
    },
  },
}