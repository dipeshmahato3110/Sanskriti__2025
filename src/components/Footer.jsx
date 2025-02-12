import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillFacebook, AiFillMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='w-full text-center flex flex-col justify-center items-center overflow-hidden relative'>
      <h1
        className='SanskritiFont  text-gray-700 font-extrabold text-5xl md:text-6xl leading-none text-center
      text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-500 to-red-700 select-none'>
        {" "}
        : contact us :
      </h1>

      <div className='md:grid md:grid-cols-4 flex flex-col gap-8 py-8 content-center md:text-left '>
        <div>
          <p className='text-zinc-200 ProgressFont text-2xl py-2 underline underline-offset-8'>
            General Convenors
          </p>
          <div className='flex flex-col gap-3 md:text-left text-zinc-200 CaptainFont  text-lg tracking-wider'>
            <p>Arijit Ghosh : +91 8583839750</p>
            <p>Nilay Ghosh : +91 9062127305</p>
            <p>Tomojit Kundu : +91 9476165314</p>
          </div>
        </div>
        <div>
          <p className='text-zinc-200 ProgressFont text-2xl py-2 underline underline-offset-8'>
            Finance Convenors
          </p>
          <div className='flex flex-col gap-3 md:text-left text-zinc-200 CaptainFont text-lg tracking-wider'>
            <p>Ankan Sarkar : +91 8159090604</p>
            <p>Asif Mondal : +91 9475480351</p>
          </div>
        </div>

        <div>
          <p className='text-zinc-200 ProgressFont text-2xl py-2 underline underline-offset-8'>
            Event Coordinator
          </p>
          <div className='flex flex-col gap-3 md:text-left text-zinc-200 CaptainFont  text-lg tracking-wider'>
            <p>Sayak Naskar : +91 7044143234</p>
          </div>
        </div>
        <div>
          <p className='text-zinc-200 ProgressFont text-2xl py-2 underline text-center  underline-offset-8'>
            Socials
          </p>
          <div className='flex  text-3xl text-zinc-200 justify-center gap-4'>
            <Link
              className='hover:text-white'
              href='https://www.instagram.com/fetsu.sanskriti_ju'
              target='_blank'
              rel='noopener noreferrer'>
              <AiFillInstagram />
            </Link>

            <Link
              className='hover:text-white'
              href='https://www.facebook.com/fetsanskritiju'
              target='_blank'
              rel='noopener noreferrer'>
              <AiFillFacebook />
            </Link>
            <Link
              className='hover:text-white'
              href='mailto:ju.fetsanskriti@gmail.com'
              target='_blank'
              rel='noopener noreferrer'>
              <AiFillMail />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-zinc-200 py-2 text-sm md:text-base'>
        Copyright © 2024 F.E.T.S.U. - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
