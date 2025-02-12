import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'coordinator',
  title: 'Coordinator',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      options: {
        list: [
          { title: "4th Year", value: "4th Year" },
          { title: "3rd Year", value: "3rd Year" },
          { title: "2nd Year", value: "2nd Year" },
          { title: "1st Year", value: "1st Year" },
        ]
      }
    }),

    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: "Architecture", value: "Architecture" },
          { title: "Chemical Engineering", value: "Chemical Engineering" },
          { title: "Civil Engineering", value: "Civil Engineering" },
          { title: "Computer Science & Engineering", value: "Computer Science & Engineering" },
          { title: "Construction Engineering", value: "Construction Engineering" },
          { title: "Electrical Engineering", value: "Electrical Engineering" },
          { title: "Electronics & Telecommunication Engineering", value: "Electronics & Telecommunication Engineering" },
          { title: "Food Technology", value: "Food Technology" },
          { title: "Information Technology", value: "Information Technology" },
          { title: "Instrumentation & Electronics Engineering", value: "Instrumentation & Electronics Engineering" },
          { title: "Mechanical Engineering", value: "Mechanical Engineering" },
          { title: "Metallurgical & Material Engineering", value: "Metallurgical & Material Engineering" },
          { title: "Pharmacy", value: "Pharmacy" },
          { title: "Power Engineering", value: "Power Engineering" },
          { title: "Printing Engineering", value: "Printing Engineering" },
          { title: "Production Engineering", value: "Production Engineering" },
        ]
      }
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',

    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
