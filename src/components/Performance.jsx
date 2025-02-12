import React from "react";
import Artist from "./Artist";

const Performance = ({ artist }) => {
  return (
    <div className='w-full min-h-screen text-center flex flex-col justify-center items-center overflow-hidden relative'>
      <h1
        className='SanskritiFont text-gray-700 font-extrabold text-5xl md:text-8xl leading-none text-center py-6
      text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-500 to-emerald-700 select-none'>
        {" "}
        : performances :
      </h1>
      <div className='h-full flex justify-center items-center mx-auto py-4 px-10 '>
        <div className=' grid  grid-cols-2 md:grid-cols-3 gap-8 align-middle content-center place-items-center mx-auto bg-[#1A1A1D]'>
          {artist.map((artist) => (
            <Artist key={artist._id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
