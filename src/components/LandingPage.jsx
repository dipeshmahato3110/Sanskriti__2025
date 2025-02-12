import React from "react";
import Image from "next/image";
import background from "../../public/assets/background.jpg";
import { urlFor } from "../../sanity";
const LandingPage = ({ landingPageInfo }) => {
  return (
    <div className='w-full h-screen text-center flex flex-col justify-center items-center overflow-hidden relative'>
      <div className='z-10 select-none'>
        <p className='ProgressFont  md:text-4xl text-left text-zinc-200'>
          F.E.T.S.U. presents
        </p>
        <p
          className='SanskritiFont sanskritiHeader leading-none
            bg-gradient-to-r bg-clip-text text-transparent 
            from-amber-500 via-orange-500 to-pink-500
            animate-text font-extrabold text-[20vw] md:text-[18vw] z-10 '>
          Sanskriti <span className='  tracking- text-[8vw] -ml-4'>2025</span>
        </p>

        <p
          className='SanskritiFont text-zinc-200 font-extrabold text-3xl md:text-8xl leading-none
      '>
          redefining culture...
        </p>
      </div>
      <div className='w-full'>
        <Image
          src={urlFor(landingPageInfo[0].desktopBackground).url()}
          alt='background'
          fill
          className='opacity-20 grayscale hidden md:inline '
        />
        <Image
          src={urlFor(landingPageInfo[0].mobileBackground).url()}
          alt='background'
          fill
          className='opacity-20 grayscale md:hidden '
        />

        <div className='absolute bottom-0 h-[8em] w-full bg-gradient-to-b from-transparent to-[#1A1A1D]'></div>
      </div>
    </div>
  );
};

export default LandingPage;
