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
      rows: 10,
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
    defineField({
      name: 'mainIngredients',
      title: 'Main Ingredients',
      type: 'text',
      rows: 3,
      description: 'List the main active ingredients in this product',
    }),
    defineField({
      name: 'suitableFor',
      title: 'Suitable For',
      type: 'text',
      rows: 2,
      description: 'Who is this product suitable for? (e.g., adults, children, specific conditions)',
    }),
    defineField({
      name: 'suggestedUsage',
      title: 'Suggested Usage',
      type: 'text',
      rows: 3,
      description: 'How to use this product (dosage, frequency, instructions)',
    }),
    defineField({
      name: 'specification',
      title: 'Specification',
      type: 'text',
      rows: 4,
      description: 'Technical specifications, dimensions, or other product details',
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
