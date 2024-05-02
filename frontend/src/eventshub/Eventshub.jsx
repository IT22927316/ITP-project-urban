import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Eventshub = () => {
    const [events, setEvents] = useState([]);

    useEffect( () =>{
      fetch("http://localhost:5000/all-events").then(res => res.json()).then(data => setEvents(data));
    }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>Join Our Events</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 '>
        {
          events.map(event => <Card
          >
            <img src={event.event_image} alt="" className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {event.event_name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>Event Date: {event.event_date}</p>
              <p>Event Fee: {event.event_fee}</p>
            </p>
            
            <button className='bg-green-700 font-semibold text-white py-2 rounded hover:bg-black transition-all duration-300'>
              <Link to={`/event/${event._id}`}>
                Browse Now
              </Link>
            </button>
            
          </Card>)
        }
      </div>

    </div>
  )
}



export default Eventshub