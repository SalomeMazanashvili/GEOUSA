import { defineField, defineType } from 'sanity'

export const vacancy = defineType({
  name: 'vacancy',
  title: 'Vacancy',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'salary', title: 'Salary', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'isActive', title: 'Is Active', type: 'boolean', initialValue: true }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
})
