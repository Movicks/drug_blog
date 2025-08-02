// /contact.ts

import { defineField, defineType } from 'sanity';

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'officeLocation',
      title: 'Office Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          { name: 'valid email format' }
        ),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(
          /^\+?[1-9]\d{1,14}$/,
          { name: 'valid phone number (E.164)' }
        ),
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(
          /^\+?[1-9]\d{1,14}$/,
          { name: 'valid WhatsApp number (E.164)' }
        ),
    }),
    defineField({
      name: 'clients',
      title: 'Clients',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'position',
      media: 'profileImage',
    },
  },
});
