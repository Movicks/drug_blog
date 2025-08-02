import { defineType, defineField } from 'sanity';

export const healthProduct = defineType({
  name: 'healthProduct',
  title: 'Health Product',
  type: 'document',
  fields: [
    defineField({
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Health Supplements', value: 'health-supplements' },
          { title: 'Herbal Products', value: 'herbal-products' },
          { title: 'Medical Devices', value: 'medical-devices' },
          { title: 'Fitness Equipment', value: 'fitness-equipment' },
          { title: 'Health Foods', value: 'health-foods' },
          { title: 'Over-the-Counter Drugs', value: 'otc-drugs' },
          { title: 'Personal Care', value: 'personal-care' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (NGN)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'rating',
      title: 'Product Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(5),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
});
