import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'About',
            title: 'About',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'sanskritiLogo',
            title: 'Sanskriti-Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'text',
        }),

    ],

})
