import React, { props } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../sanity';

const serializers = {
    types: {

        image: ({ value }) => {
            return (
                <div className='relative w-full h-auto m-10 mx-auto flex justify-center py-8'>
                    <Image
                        className='object-contain'
                        src={urlFor(value).url()}
                        alt="Image"
                        width={500}
                        height={500} />
                </div>
            )
        },

    },

    list: {
        bullet: ({ children }) => <ul className="mt-xl list-disc p-2" style={{ paddingLeft: "1rem" }}>{children}</ul>,
        number: ({ children }) => <ol className="mt-lg list-decimal p-2" style={{ paddingLeft: "1rem" }}>{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li style={{ listStyleType: 'disc', padding: "0.5rem 0" }}>{children}</li>,
        number: ({ children }) => <li style={{ listStyleType: 'decimal', padding: "0.5rem 0" }}>{children}</li>,
    },
    block: {
        h1: ({ children }) => (
            <h1 className='text-5xl font-bold' style={{ padding: '1rem 0' }}>{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className='text-4xl font-bold' style={{ padding: '1rem 0' }}>{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className='text-3xl font-bold' style={{ padding: '1rem 0' }}>{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className='text-2xl font-bold' style={{ padding: '1rem 0' }}>{children}</h4>
        ),
        h5: ({ children }) => (
            <h5 className='text-xl font-bold' style={{ padding: '1rem 0' }}>{children}</h5>
        ),
        h6: ({ children }) => (
            <h6 className='text-lg font-bold' style={{ padding: '1rem 0' }}>{children}</h6>
        ),
        blockquote: ({ children }) => (
            <blockquote className='border-l-zinc-600 border-l-4 pl-5 py-5 my-5' style={{ paddingLeft: '1rem', padding: "1rem 0", margin: "1rem 0" }}>
                {children}
            </blockquote>
        )
    },
    marks: {
        // Ex. 1: custom renderer for the em / italics decorator
        em: ({ children }) => <em className="font-semibold">{children}</em>,

        // Ex. 2: rendering a custom `link` annotation
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
                <Link href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'} style={{ textDecoration: "underline", textUnderlineOffset: "4px", color: "lightseagreen" }}>
                    {children}
                </Link>
            )
        },
    },

}

export default serializers


