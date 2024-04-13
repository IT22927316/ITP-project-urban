import React from 'react'
import BannerCard from '../home/BannerCard'

import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Cultivate, Connect, Thrive<span className='text-blue-700'><br/>The Urban Harvester's Knowledge Hub</span></h2>
                <p className='md:w-4/5'>Knowledge Hub is your go-to source for sharing and expanding urban agricultural wisdom. 
                With an open invitation for users to access a rich tapestry of articles and contribute their own insights, our 
                platform fosters a vibrant exchange of ideas, techniques, and personal growth stories. Whether you're a seasoned urban farmer
                or just planting your first seeds, this hub is a fertile ground for learning, sharing, and cultivating a greener future.</p>
                <div>
                    <button className='bg-white px-6 py-2 font-medium'>Browse Our KnowledgeHub</button>

                    <Link to={`/articleshub`}>
                        <button className='bg-green-500 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Browse</button>
                    </Link>
                    
                </div>
            </div>

            {/* Right Side */}
            <div>
                <BannerCard></BannerCard>
            </div>

        </div>
    </div>
  )
}

export default Banner