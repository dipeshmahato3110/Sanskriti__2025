import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'socials',
    title: 'Socials',
    type: 'document',
    fields: [
        defineField({
            name: 'Account',
            title: 'Account',
            type: 'string',
            options: {
                list: [
                    { title: "Facebook", value: "facebook" },
                    { title: "Instagram", value: "instagram" },
                ]
            }
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "url",
        })

    ],

})
