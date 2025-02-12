import React from "react";
import { urlFor } from "../../sanity";
import Image from "next/image";
const Artist = ({ artist }) => {
  return (
    <div
      className={`drop-shadow-xl relative hover:scale-105 transition-transform duration-200 ease-out border border-zinc-700 `}>
      <Image
        src={urlFor(artist.mainImage).url()}
        alt={artist.name}
        width={400}
        height={400}
        className={`${
          artist.artiststatus === "notrevealed"
            ? "grayscale blur-sm opacity-10 "
            : ""
        }`}
      />

      {artist.artiststatus === "notrevealed" && (
        <div className='absolute flex justify-center items-center text-zinc-300 capitalize inset-1/2 CaptainFont text-3xl md:text-6xl'>
          revealing soon
        </div>
      )}
    </div>
  );
};

export default Artist;
