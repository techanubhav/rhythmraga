export const footer = {
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    {
      name: 'academyInfo',
      title: 'Academy Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Academy Name',
          type: 'string',
          initialValue: 'Rhythm Raga',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          initialValue: 'Premier Music & Dance Academy',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          initialValue: 'mansibh10@gmail.com',
          validation: (Rule: any) => Rule.required().email(),
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          initialValue: '+61 402 286 502',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'address',
          title: 'Physical Address',
          type: 'text',
          rows: 3,
          description: 'Complete address for the academy',
        },
      ],
    },
    {
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Link Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
              description: 'Internal link (e.g., /about) or external URL',
            },
          ],
        },
      ],
      initialValue: [
        { label: 'About Us', url: '/about' },
        { label: 'Our Offerings', url: '/offerings' },
        { label: 'Register', url: '/registration' },
        { label: 'Contact', url: '/contact' },
      ],
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      description: 'Add your social media profiles',
    },
    {
      name: 'copyright',
      title: 'Copyright Settings',
      type: 'object',
      fields: [
        {
          name: 'companyName',
          title: 'Company Name',
          type: 'string',
          initialValue: 'Rhythm Raga Academy',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'customText',
          title: 'Custom Copyright Text',
          type: 'string',
          description: 'Leave empty to use default format: © YEAR Company Name. All rights reserved.',
        },
        {
          name: 'startYear',
          title: 'Academy Founded Year',
          type: 'number',
          initialValue: 2014,
          description: 'Used for copyright range if different from current year',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'academyInfo.name',
      subtitle: 'academyInfo.tagline',
    },
    prepare(selection: any) {
      const { title, subtitle } = selection
      return {
        title: 'Footer Settings',
        subtitle: `${title || 'Academy'} - ${subtitle || 'Tagline'}`,
      }
    },
  },
}