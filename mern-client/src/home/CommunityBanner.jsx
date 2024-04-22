import React from 'react'
import { Link } from 'react-router-dom'
import eventPic from "../assets/communityimg1.jpg"

const CommunityBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-5xl font-bold mb-6 leading-snug'>Join and connect with our <span className='text-green-700'>Green Communities</span></h2>
                <p className='mb-10 text-lg md:w-5/6'>Join our communities for a dynamic congregation of urban growers and 
                    eco-minded individuals committed to nurturing not just plants, but 
                    relationships and knowledge as well. In this collaborative haven, members
                     from all walks of life come together to exchange wisdom, share successes, 
                     and support each other’s horticultural endeavors. Here, conversations sprout 
                     effortlessly, from balcony beautification to large-scale urban farming initiatives.
                      Engage in community-driven projects, participate in local meet-ups, and contribute 
                      to our resource pool. Whether you’re a novice plant parent or a seasoned soil steward, our
                       community is your fertile ground for growth, innovation, and connection.</p>

                       {/* stats */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>250+</h3>
                        <p className='text-base'>Communities</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>10+</h3>
                        <p className='text-base'>Weekly Events</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1500+</h3>
                        <p className='text-base'>Active Members</p>
                    </div>
                </div>

                <Link to="/communitymain" className='mt-5 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Communities</button></Link>
            </div>
            <div>
                <img src={eventPic} alt="w-96 " />
            </div>
        </div>
    </div>
  )
}

export default CommunityBanner