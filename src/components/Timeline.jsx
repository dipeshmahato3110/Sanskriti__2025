import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const EventTimeline = dynamic(() => import("../components/EventTimeline"), {
  ssr: false,
});
const Timeline = () => {
  return (
    <div className="w-full min-h-screen md:p-24 flex flex-col  items-center overflow-hidden relative gap-2">
      <div>
        <h1
          className="SanskritiFont text-gray-700 font-extrabold text-5xl md:text-8xl leading-none text-center py-8
        text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-amber-500 to-orange-700 select-none"
        >
          : event timeline :
        </h1>
      </div>
      <EventTimeline />
      <div className="py-5">
        <Link href="https://drive.google.com/file/d/1KfDTc4RVsoHyvVcs6ZizdYOFVdU8yrzS/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="w-72 h-10 rounded-sm text-lg md:text-2xl text-zinc-200 uppercase CaptainFont leading-none tracking-wider bg-rose-600 hover:bg-rose-800">
            All Events Brochure
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Timeline;
