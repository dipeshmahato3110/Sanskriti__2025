import React from "react";
import Image from "next/image";
import hourglass from "../../public/assets/hourglass.gif";
const ComingSoonCard = () => {
  return (
    <div className='max-w-screen md:w-screen group cursor-pointer flex flex-col gap-2  drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out items-center'>
      <div className='w-full flex gap-2 animate-pulse'>
        <Image src={hourglass} width={200} height={400} alt='/' />

        <div className='w-full h-full flex justify-center items-center rounded-sm text-4xl md:text-8xl  uppercase CaptainFont leading-none tracking-wider text-teal-400 animate-pulse   '>
          More Events Coming Soon...
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;
