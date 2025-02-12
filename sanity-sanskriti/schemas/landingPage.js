import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
        defineField({
            name: 'event',
            title: 'Event',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
        defineField({
            name: 'desktopBackground',
            title: 'DesktopBackground',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'mobileBackground',
            title: 'MobileBackground',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'sanskritiLogo',
            title: 'Sanskriti Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],

})
