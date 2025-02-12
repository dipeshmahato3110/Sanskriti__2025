import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: "id",
            title: "Id",
            type: "number",
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'coordinator',
            title: 'Coordinator',
            type: 'array',
            of: [{
                type: 'reference',
                title: 'coordinators',
                to: {
                    type: 'coordinator'
                }
            }],

        }),

        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
        }),

        defineField({
            name: 'time',
            title: 'Time',
            type: 'string',
        }),
        defineField({
            name: 'venue',
            title: 'Venue',
            type: 'string',
        }),
        defineField({
            name: 'prelims_date',
            title: 'Prelims-Date',
            type: 'string',
        }),
        defineField({
            name: 'prelims_time',
            title: 'Prelims-Time',
            type: 'string',
        }),
        defineField({
            name: 'prelims_venue',
            title: 'Prelims-Venue',
            type: 'string',
            options: {
                list: [
                    { title: "Salt Lake Campus", value: "Salt Lake Campus" },
                    { title: "Jadavpur Campus", value: "Jadavpur Campus" },
                ]
            }
        }),
        defineField({
            name: 'finals_date',
            title: 'Finals-Date',
            type: 'string',
        }),
        defineField({
            name: 'finals_time',
            title: 'Finals-Time',
            type: 'string',
        }),
        defineField({
            name: 'finals_venue',
            title: 'Finals-Venue',
            type: 'string',
            options: {
                list: [
                    { title: "Salt Lake Campus", value: "Salt Lake Campus" },
                    { title: "Jadavpur Campus", value: "Jadavpur Campus" },
                ]
            }
        }),
        defineField({
            name: 'eventDetails',
            title: 'Event Details',
            type: 'blockContent',
        }),

        defineField({
            name: 'registrationLink',
            title: 'Registration Link',
            type: 'url',
        }),
        defineField({
            name: 'deadline',
            title: 'Deadline',
            type: 'string',
        }),
        defineField({
            name: 'registrationStatus',
            title: 'Registration Status',
            type: 'string',
            options: {
                list: [
                    { title: "Open", value: "open" },
                    { title: "Closed", value: "closed" },
                ]
            },

        }),
    ],
    orderings: [
        {
            title: 'Id Order',
            name: 'idOrder',
            by: [
                { field: 'id', direction: 'asc' }
            ]
        }]
})
