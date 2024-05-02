import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CommunityMain = () => {
    const [communityforms, setCommunityforms] = useState([]);

    useEffect( () =>{
      fetch("http://localhost:5000/all-communityforms").then(res => res.json()).then(data => setCommunityforms(data));
    }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>Welcome to Our Communitites</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 '>
        {
          communityforms.map(communityform => <Card
          >
            <img src={communityform.communityImage} alt="" className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {communityform.community_name}
            </h5>
            <p className="font-normal text-1xl text-gray-700 dark:text-gray-400">
              <p>Community Location: {communityform.location}</p>
              <p>Active Members: {communityform.community_members}</p>
            </p>
            
            
            <button className='bg-green-700 font-semibold text-white py-2 rounded hover:bg-black transition-all duration-300'>
              <Link to={`/communityform/${communityform._id}`}>
                Join Channel
              </Link>
            </button>
            

          </Card>)
        }
      </div>

    </div>
  )
}
;;

export default CommunityMain