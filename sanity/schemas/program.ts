export const program = {
  name: 'program',
  title: 'Programs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Program Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Program Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Program Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Music', value: 'music' },
          { title: 'Dance', value: 'dance' },
          { title: 'Special Services', value: 'special' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ageGroups',
      title: 'Age Groups',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Kids (4-7)', value: 'kids-4-7' },
          { title: 'Children (8-14)', value: 'children-8-14' },
          { title: 'Adults (15+)', value: 'adults' },
          { title: 'All Ages', value: 'all-ages' },
        ],
      },
    },
    {
      name: 'skillLevels',
      title: 'Skill Levels',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
    },
    {
      name: 'learningOutcomes',
      title: 'What You\'ll Learn',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of skills and knowledge students will gain',
    },
    {
      name: 'pricing',
      title: 'Pricing Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'level',
              title: 'Level/Package Name',
              type: 'string',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
            },
            {
              name: 'frequency',
              title: 'Class Frequency',
              type: 'string',
            },
            {
              name: 'fee',
              title: 'Monthly Fee',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Package Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'instructor',
      title: 'Primary Instructor',
      type: 'reference',
      to: [{ type: 'instructor' }],
    },
    {
      name: 'featured',
      title: 'Featured Program',
      type: 'boolean',
      description: 'Show this program on the home page',
      initialValue: false,
    },
    {
      name: 'isActive',
      title: 'Active Program',
      type: 'boolean',
      description: 'Is this program currently accepting students?',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle ? `Category: ${subtitle}` : 'No category set',
        media,
      }
    },
  },
}