import React from 'react';
import FavEventImg from "../assets/agrievent1.png"
import { Link } from 'react-router-dom';

const FavEvent = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavEventImg} alt="" className='rounded md:w-10/12'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Green Gatherings<br/><span className='text-green-700'>Agri Events Hub</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Step into the vibrant world of agricultural innovation at our Green Gatherings: Agri Events Hub. Connect with 
                fellow enthusiasts, learn from industry experts, and participate in a variety of events designed to sow the 
                seeds of knowledge and cultivate a deeper understanding of sustainable practices. From workshops on organic 
                farming to seminars on the latest in agrotechnology, our hub offers a rich calendar of events that promise to 
                inspire and engage the entire urban agriculture community. Join us to share experiences, network with pioneers, 
                and grow your passion for green living. Your journey towards a more sustainable future is just an event away.</p>

                {/* stats */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>10+</h3>
                        <p className='text-base'>Event Listings<br/><span className='font-bold'>For This Month</span></p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>500+</h3>
                        <p className='text-base'>Registered Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>200+</h3>
                        <p className='text-base'>Successful Events </p>
                    </div>
                </div>

                <Link to="/events" className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Events</button></Link>
        </div>
    </div>
  )
}

export default FavEvent