import React from "react";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { motion, useScroll } from "framer-motion";
const About = ({ about }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='w-full md:min-h-screen text-center flex flex-col md:justify-center md:items-center overflow-hidden relative'>
      <div className='w-full'>
        <h1
          className='SanskritiFont text-gray-700 font-extrabold text-4xl md:text-8xl leading-none text-center pb-8
        text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-red-700 select-none'>
          : what is sanskriti ? :
        </h1>
        <div className='text-left flex  justify-center items-center'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='px-8 flex items-center'>
              <Image
                src={urlFor(about[0].image).url()}
                alt={about[0].about}
                width={700}
                height={700}
              />
            </div>
            <div className='flex justify-center items-center '>
              <div className='absolute -z-10 opacity-20 hidden md:inline'>
                <Image
                  src={urlFor(about[0].sanskritiLogo).url()}
                  alt={about[0].about}
                  width={350}
                  height={350}
                />
              </div>

              <div className=' md:text-left pb-8 md:pb-0 text-zinc-200 px-8 md:px-0 md:max-w-[48ch] first-letter:tracking-wider leading-tight text-sm md:text-xl'>
                <span className='font-bold text-3xl md:text-5xl SanskritiFont'>
                  {" "}
                  Sanskriti{" "}
                </span>
                {about[0].text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
