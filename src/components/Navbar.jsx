import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineShrink } from "react-icons/ai";
import {
  AiOutlineDollarCircle,
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineExperiment,
  AiOutlineProject,
  AiOutlineUser,
} from "react-icons/ai";

import { GiPartyPopper, GiGuitarBassHead } from "react-icons/gi";
import { RiMenu4Fill, RiGalleryFill, RiMapPinTimeLine } from "react-icons/ri";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [linkColor, setLinkColor] = useState("#1f2937");

  const { asPath } = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-15 ease-in-out duration-300 top-0 z-20 bg-[#1A1A1D] opacity-95"
          : "fixed w-full h-15 top-0 z-20 bg-transparent"
      }>
      <div className='flex justify-between items-center py-2 px-4 '>
        <div className='flex justify-center items-center pt-2'>
          <Link href='/'>
            <h2 className='SanskritiFont text-zinc-200'>Sanskriti</h2>
          </Link>
        </div>

        <div className='text-zinc-200 text-2xl'>
          <ul className='hidden md:flex'>
            <li
              className={`ml-10 nav-item uppercase  ${
                asPath == "/" ? "text-[#b52550]" : ""
              }`}>
              <Link href='/'>Home</Link>
            </li>
            <li
              className={`ml-10 nav-item  uppercase  ${
                asPath == "/#about" ? "text-[#b52550]" : ""
              }`}>
              <Link href='/#about'>About</Link>
            </li>
            <li
              className={`ml-10 nav-item  uppercase  ${
                asPath == "/#performance" ? "text-[#b52550]" : ""
              }`}>
              <Link href='/#performance'>Performance</Link>
            </li>
            <li
              className={`ml-10 nav-item  uppercase  ${
                asPath == "/#timeline" ? "text-[#b52550]" : ""
              }`}>
              <Link href='/#timeline'>Timeline</Link>
            </li>
            <li
              className={`ml-10 nav-item  uppercase  ${
                asPath == "/#events" ? "text-[#b52550]" : ""
              }`}>
              <Link href='/#events'>Events</Link>
            </li>
            <li
              className={`ml-10 nav-item  uppercase  ${
                asPath == "/#gallery" ? "text-[#b52550]" : ""
              }`}>
              <Link href='/#gallery'>Gallery</Link>
            </li>

            <li
              className={`ml-10 nav-item  uppercase  ${
                asPath == "/#contact" ? "text-[#b52550]" : ""
              }`}>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className='md:hidden text-zinc-200'>
            <RiMenu4Fill size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 " : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "bg-[#1A1A1D] fixed left-0 top-0 w-[65%] sm:w-[40%] md:w-[45%] h-screen p-4 ease-in duration-500 z-30"
              : "bg-[#1A1A1D] fixed hidden  p-4 ease-in duration-500 z-30"
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/' legacyBehavior>
                <h2 className='SanskritiFont text-zinc-200'>Sanskriti</h2>
              </Link>
              <div
                onClick={handleNav}
                className='text-[#C3073F] p-3 cursor-pointer hover:text-[#950740] text-lg'>
                <AiOutlineShrink />
              </div>
            </div>
            <div className='border-b border-gray-700 my-4'></div>
          </div>
          <div className='py-4 flex flex-col text-gray-500 text-2xl '>
            <ul>
              <Link href='/' legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className={`
                  py-2 px-2 
                  nav-item 
                  rounded-lg 
                  font-semibold
                  my-2 
                 
                  hover:text-zinc-200  
                  ${asPath == "/" ? "bg-zinc-800 text-zinc-200" : ""}`}>
                  <div className='grid grid-cols-5 gap-1 capitalize'>
                    <AiOutlineHome className='text-2xl' />
                    <p>home</p>
                  </div>
                </li>
              </Link>
              <Link href='/#about' legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className={`
                  py-2 px-2 
                  nav-item 
                  rounded-md 
                  font-semibold 
                  my-2 
                 
                  hover:text-zinc-200  
                  ${asPath == "/#about" ? "bg-zinc-800 text-zinc-200" : ""}`}>
                  <div className='grid grid-cols-5 gap-1 capitalize'>
                    <AiOutlineQuestionCircle className='text-2xl' />
                    <p>about </p>
                  </div>
                </li>
              </Link>
              <Link href='/#performance' legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className={`
                  py-2 px-2 
                  nav-item 
                  rounded-md 
                  font-semibold 
                  my-2 
                 
                  hover:text-zinc-200  
                  ${
                    asPath == "/#performance" ? "bg-zinc-800 text-zinc-200" : ""
                  }`}>
                  <div className='grid grid-cols-5 gap-1 capitalize'>
                    <GiGuitarBassHead className='text-2xl' />
                    <p>performance </p>
                  </div>
                </li>
              </Link>
              <Link href='/#timeline' legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className={`
                  py-2 px-2 
                  nav-item 
                  rounded-md 
                  font-semibold 
                  my-2 
                 
                  hover:text-zinc-200  
                  ${
                    asPath == "/#timeline" ? "bg-zinc-800 text-zinc-200" : ""
                  }`}>
                  <div className='grid grid-cols-5 gap-1 capitalize'>
                    <RiMapPinTimeLine className='text-2xl' />
                    <p>timeline </p>
                  </div>
                </li>
              </Link>
              <Link href='/#events' legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className={`
                  py-2 px-2 
                  nav-item 
                  rounded-md 
                  font-semibold 
                  my-2 
                 
                  hover:text-zinc-200  
                  ${asPath == "/#events" ? `bg-zinc-800 text-zinc-200` : ``}`}>
                  <div className='grid grid-cols-5 gap-1 capitalize'>
                    <GiPartyPopper className='text-2xl' />
                    <p>events </p>
                  </div>
                </li>
              </Link>
              <Link href='/#gallery' legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className={`
                  py-2 px-2 
                  nav-item 
                  rounded-md 
                  font-semibold 
                  my-2 
                 
                  hover:text-zinc-200  
                  ${asPath == "/#gallery" ? "bg-zinc-800 text-zinc-200" : ""}`}>
                  <div className='grid grid-cols-5 gap-1 capitalize'>
                    <RiGalleryFill className='text-2xl' />
                    <p>gallery </p>
                  </div>
                </li>
              </Link>

              <Link href='/#contact' legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className={`
                  py-2 px-2 
                  nav-item 
                  rounded-md 
                  font-semibold 
                  my-2 
                 
                  hover:text-zinc-200  
                  ${asPath == "/#contact" ? "bg-zinc-800 text-zinc-200" : ""}`}>
                  <div className='grid grid-cols-5 gap-1 capitalize'>
                    <AiOutlineUser className='text-2xl' />
                    <p>contact </p>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
