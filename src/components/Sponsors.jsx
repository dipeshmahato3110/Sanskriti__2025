import React from "react";
import Image from "next/image";
import { urlFor } from "../../sanity";
const Sponsors = ({ sponsors }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1
        className='SanskritiFont text-gray-700 font-extrabold text-5xl md:text-8xl leading-none text-center py-10
      text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-pink-500 to-rose-700 select-none'>
        : past associate sponsors :
      </h1>
      <div className='masonry-sponsors-sm md:masonry-sponsors-md px-8 md:px-4 py-4 '>
        {sponsors.map((sponsor) => (
          <Image
            key={sponsor._id}
            src={urlFor(sponsor.logo).url()}
            alt={sponsor.company}
            width={150}
            height={150}
            className='mb-4 opacity-90 shadow-inner'
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
