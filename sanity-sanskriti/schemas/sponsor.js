import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'sponsor',
    title: 'Sponsor',
    type: 'document',
    fields: [
        defineField({
            name: 'company',
            title: 'company',
            type: 'string',
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),

    ],

})
