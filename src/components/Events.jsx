import React from "react";
import EventContainer from "../components/EventContainer";

const Events = ({ events }) => {
  return (
    <div className="'w-full min-h-screen md:px-24 flex flex-col justify-center overflow-hidden relative gap-4">
      <h1
        className='SanskritiFont text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-500 to-red-700 
      font-extrabold text-5xl md:text-8xl leading-none text-center py-8 select-none'>
        : events :
      </h1>
      <EventContainer events={events} />
    </div>
  );
};

export default Events;
