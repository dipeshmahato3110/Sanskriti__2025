import React from "react";
import Image from "next/image";
import { urlFor } from "../../sanity";
const Gallery = ({ images }) => {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <h1
        className='SanskritiFont text-gray-700 font-extrabold text-5xl md:text-8xl leading-none text-center py-10
      text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-teal-500 to-blue-700 select-none'>
        : Gallery :
      </h1>
      <div className='masonry sm:masonry-sm md:masonry-md  px-4 md:px-40'>
        {images.map((image) => (
          <Image
            key={image._id}
            src={urlFor(image.image).url()}
            alt={image._id}
            width={500}
            height={500}
            className='mb-4 opacity-90 shadow-inner hover:scale-105 transition-transform duration-200 ease-out'
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
