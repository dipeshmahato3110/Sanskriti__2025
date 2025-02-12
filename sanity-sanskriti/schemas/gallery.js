import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Index',
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

    ],

})
