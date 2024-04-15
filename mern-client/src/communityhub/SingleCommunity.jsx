import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';

const SingleCommunity = () => {
  const communityData = useLoaderData(); // Fetch all data using useLoaderData

  if (!communityData) {
    return <div>Loading...</div>; // Display loading indicator while data is being fetched
  }

  const {_id, community_name, community_type, community_vision, community_members,location, description, communityImage} = useLoaderData();

  return (
    <div className='px-4 lg:px-20 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/3'>
          <img src={communityImage} alt="" className='rounded md:w-10/12'/>
      </div>

      <div className='md:w-2/3 space-y-4'>
          <h2 className='text-4xl text-green-700 font-bold my-5 md:w-4/5 leading-snug'>{community_name}<br/></h2>

          <p className='mb-10 text-lg md:w-5/6 font-bold'>Category:</p> {community_type}
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6 font-bold'>Vision:</p> {community_vision}
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6 font-bold'>Location:</p> {location}
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6 font-bold'>About Community:</p> {description}
          <hr></hr>
          
          

              <Link to="/communitypage"className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Join Us</button></Link>
      </div>
    </div>
  )
}

export default SingleCommunity