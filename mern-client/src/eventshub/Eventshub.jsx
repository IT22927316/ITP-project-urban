import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Eventshub = () => {
    const [events, setEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      fetch("http://localhost:5000/all-events")
        .then(res => res.json())
        .then(data => setEvents(data));
    }, []);

    const filteredEvents = events.filter(event => 
      event.event_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.event_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.event_location.toLowerCase().includes(searchQuery.toLowerCase())
    );


  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='flex justify-between items-start mb-8'>
      <h2 className='text-5xl font-bold'>
              Upcoming Events
          </h2>
          <div className='flex flex-col items-end'>
            {/* Search bar with rounded shape and icon */}
            <div className="relative w-96"> {/* Adjusted width */}
              <input
                type="text"
                placeholder="Search Events"
                onChange={(e) => setSearchQuery(e.target.value)}
                className='h-10 pl-10 pr-10 rounded-full shadow-sm w-full border border-gray-300' // Adjusted styles for rounded shape
              />
              {/* Search icon */}
              <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
                <FaSearch className="" size="20px"/> {/* Adjusted for correct sizing */}
              </div>
            </div>
          </div>
        </div>
      

        <div className='grid gap-8 my-12 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1'>
                {filteredEvents.map(event => (
                    <div key={event._id} className="group bg-white rounded-lg shadow-lg overflow-hidden">
                        <Link to={`/event/${event._id}`} className="block">
                            <img src={event.event_image} alt="" className='w-full h-48 object-cover transition-transform duration-200 group-hover:scale-110'/>
                            <div className="p-4 h-48"> {/* Fixed height for text container */}
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
                                    {event.event_name}
                                </h5>
                                <p className="text-sm text-gray-500 font-semibold">
                                    Event Location : {event.event_location}
                                </p>
                                <p className="text-sm text-gray-500 font-semibold">
                                    Event Date : {event.event_date} | Event Fee : {event.event_fee}
                                </p>
                                {/* Additional content and buttons */}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

    </div>
  )
}



export default Eventshub