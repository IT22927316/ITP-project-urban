
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JoinCommunity = () => {
  const {_id, community_name, community_type, community_vision, community_members, location, description, communityImage} = useLoaderData();

  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
          <img src={communityImage} alt="" className='rounded md:w-10/12'/>
      </div>

      <div className='md:w-1/2 space-y-6'>
          <h2 className='text-4xl font-bold my-5 md:w-4/5 leading-snug'>{community_name}<br/></h2>

          <p className='mb-10 text-lg md:w-5/6'>Category: {community_type}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>Vision: {community_vision}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>Number of Members: {community_members}</p>
          <hr></hr>
          
          <p className='mb-10 text-lg md:w-5/6'>Location: {location}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>About Community:<br></br><br></br> {description}</p>
          <hr></hr>
          
          <p className='mb-10 text-lg md:w-5/6'></p>
      </div>
    </div>
  );
}

export default JoinCommunity;
