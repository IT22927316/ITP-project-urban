import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CommunityMain = () => {
    const [communityforms, setCommunityforms] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect( () =>{
      fetch("http://localhost:5000/all-communityforms").then(res => res.json()).then(data => setCommunityforms(data));
    }, [])

    const filteredCommunityForms = communityforms.filter(communityform => 
      communityform.community_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      communityform.community_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      communityform.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className='mt-28 px-8 lg:px-28'>
        <div className="flex justify-between items-center">
        <h2 className='text-5xl text-green-90MMMmm0 font-bold '>Welcome to Our Communitites</h2>
     
        <div className='flex flex-col items-end'>
            {/* Search bar with rounded shape and icon */}
            <div className="relative w-96"> {/* Adjusted width */}
              <input
                type="text"
                placeholder="Search Commmunity, Category or Location"
                onChange={(e) => setSearchQuery(e.target.value)}
                className='h-10 pl-10 pr-10 text-sm rounded-full shadow-sm w-full border border-gray-300' // Adjusted styles for rounded shape
              />
              {/* Search icon */}
              <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
                <FaSearch className="" size="20px"/> {/* Adjusted for correct sizing */}
              </div>
            </div>
          </div>
     </div>
  
        <div className='grid gap-8 my-12 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 '>
        {filteredCommunityForms.map(communityform => (
              <Card key={communityform._id} className="group bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={communityform.communityImage} alt="" className='w-full h-48 object-cover transition-transform duration-200 group-hover:scale-110'/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {communityform.community_name}
              </h5>
              <p className="text-sm text-gray-500 font-semibold">
                Location: {communityform.location}
              <br></br>
                Category: {communityform.community_type}
              </p>
              
              <button className='bg-green-700 font-semibold text-white py-2 rounded hover:bg-black transition-all duration-300'>
                <Link to={`/communityform/${communityform._id}`}>
                  Explore More
                </Link>
              </button>
              
  
            </Card>)
          )}
        </div>
  
      </div>
    )
}

export default CommunityMain