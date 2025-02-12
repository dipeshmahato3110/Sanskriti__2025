import React from "react";
import EventCard from "./EventCard";
import ComingSoonCard from "./ComingSoonCard";
const EventContainer = ({ events }) => {
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 w-full gap-8 px-6 md:pl-8'>
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
    
    // <div className='grid md:grid-cols-4 grid-cols-2 w-full gap-8 px-6 md:pl-8'>
    //   <ComingSoonCard />
    // </div>
  );
};

export default EventContainer;
