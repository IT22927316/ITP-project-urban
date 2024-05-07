import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';

const SingleEvent = () => {
  const {_id, event_name, event_date, event_location, event_time, event_fee, event_description, event_image} = useLoaderData();

  return (
      <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
          <img src={event_image} alt="" className='rounded h-256 w-96'/>
      </div>

      <div className='md:w-1/2 space-y-6'>
          <h2 className='text-4xl font-bold my-5 md:w-4/5 leading-snug'>{event_name}</h2>

          <hr></hr>
          
          <p className='mb-10 text-lg md:w-5/6'>Event Date: {event_date}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>Event Time: {event_time}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>Event Location : {event_location}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>About Event: <br></br><br></br>{event_description}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>Event Fee: {event_fee}</p>
          <p className='mb-10 text-lg md:w-5/6'></p>

              <Link to="/events" className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Events</button></Link>
      </div>
    </div>
  )
}
export default SingleEvent