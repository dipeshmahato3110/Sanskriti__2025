import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        defineField({
            name: 'index',
            title: 'Index',
            type: 'string',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'day',
            title: 'Day',
            type: 'string',
            options: {
                list: [
                    { title: "Curtain Raiser", value: "Curtain Raiser" },
                    { title: "Western Night", value: "Western Night" },
                    { title: "Eastern Night", value: "Eastern Night" },
                    { title: "Reunion Night", value: "Reunion Night" },
                    { title: "Final Night", value: "Final Night" },
                ]
            }
        }),
        defineField({
            name: 'venue',
            title: 'Venue',
            type: 'string',
            options: {
                list: [
                    { title: "Salt Lake Campus", value: "Salt Lake Campus" },
                    { title: "OAT - Jadavpur Campus", value: "OAT - Jadavpur Campus" },
                ]
            }
        }),
        defineField({
            name: 'artiststatus',
            title: 'Artist Status',
            type: 'string',
            options: {
                list: [
                    { title: "Not Revealed", value: "notrevealed" },
                    { title: "Revealed", value: "revealed" },
                ]
            },

        }),
    ],

    orderings: [
        {
            title: 'Id Order',
            name: 'idOrder',
            by: [
                { field: 'index', direction: 'asc' }
            ]
        }]
})
