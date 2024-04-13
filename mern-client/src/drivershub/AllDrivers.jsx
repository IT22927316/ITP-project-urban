import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const AllDrivers = () => {
  const [driverdetails, setDriverDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-driverdetails")
      .then(res => res.json())
      .then(data => setDriverDetails(data))
      .catch(error => console.error('Error loading the driver details:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Drivers Page</h1>
      <ul className="divide-y divide-gray-200">
        {driverdetails.map(driverdetail => (
          <li key={driverdetail._id} className="py-2 flex items-center justify-between">
            <div className="flex items-center">
              <img src={driverdetail.imageURL} alt="" className="rounded-full w-10 h-10 mr-2"/>
              <div>
                <h2 className="text-base font-semibold">{driverdetail.name}</h2>
                <p className="text-gray-500 text-sm">per Km: {driverdetail.deliveryFee}</p>
              </div>
            </div>
            <Link to={`/singleprofile/${driverdetail._id}`} className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/singledriver">
        <Button className="mt-4 ml-4 items-center rounded-full w-40 h-10 bg-green-700">Single Driver</Button>
      </Link>
    </div>
  );
}

export default AllDrivers;
