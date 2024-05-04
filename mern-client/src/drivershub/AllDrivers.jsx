import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import van from "../assets/delivery/van.png";
import car from "../assets/delivery/car.png";
import motorbike from "../assets/delivery/motor bike.png";
import scooty from "../assets/delivery/scooty.png";

const AllDrivers = () => {
  const [driverDetails, setDriverDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVehicleType, setFilteredVehicleType] = useState("");
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/all-driverdetails")
      .then(res => res.json())
      .then(data => setDriverDetails(data));
  }, []);

  const filteredDrivers = driverDetails.filter(driverDetail => 
    driverDetail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driverDetail.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driverDetail.vehicleType.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter(driverDetail => 
    filteredVehicleType === "" || driverDetail.vehicleType.toLowerCase() === filteredVehicleType.toLowerCase()
  );

  return (
    <div className="p-4 mx-auto">
      <br/><br/><br/>
          <div className='w-full flex justify-center'>
            <div className='w-1/2'>
              <div className='text-5xl font-bold my-5 md:w-3/4 leading-snug mx-auto text-center'>
                <span className='text-green-700'>All Drivers</span>
              </div>
            </div>
          </div>

          <div className='flex justify-between mt-4 pl-7'>
              <Link to="/deliverydrivers" className="text-gray-500 hover:text-gray-700">
                    <text className="text-sm hover:gray ">Check Available Drivers</text>
              </Link>

              <div className="relative w-96">
                <input
                  type="text"
                  placeholder="Search Drivers"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='h-10 pl-10 pr-10 rounded-full shadow-sm w-full border border-gray-300'/>

                <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
                  <FaSearch className="" size="20px"/>
                </div>
              </div>
          </div>

    
      <div className="flex justify-center space-x-4 mt-4 relative ">
        
          {/*van button*/}
          <div className="text-center">
            <button
              className={`rounded-full h-20 w-20 bg-gray-300 flex items-center justify-center ${filteredVehicleType === 'van' ? 'bg-green-500' : ''}`}
              onClick={() => setFilteredVehicleType('van')}
            >
              <img src={van} alt="Van" className="h-12 w-12 mb-2 hover:scale-150 transition-transform duration-300" />
            </button>
          </div>

          {/*car button*/}
          <div className="text-center">
            <button
              className={`rounded-full h-20 w-20 bg-gray-300 flex items-center justify-center ${filteredVehicleType === 'car' ? 'bg-green-500' : ''}`}
              onClick={() => setFilteredVehicleType('car')}
            >
              <img src={car} alt="Car" className="h-12 w-12 mb-2 hover:scale-150 transition-transform duration-300" />
            </button>
          </div>

          {/*motor bike button*/}
          <div className="text-center">
            <button
              className={`rounded-full h-20 w-20 bg-gray-300 flex items-center justify-center ${filteredVehicleType === 'motor bike' ? 'bg-green-500' : ''}`}
              onClick={() => setFilteredVehicleType('motor bike')}
            >
              <img src={motorbike} alt="Motor Bike" className="h-12 w-12 mb-2 hover:scale-150 transition-transform duration-300" />
            </button>
          </div>

          {/*scooty button*/}
          <div className="text-center">
            <button
              className={`rounded-full h-20 w-20 bg-gray-300 flex items-center justify-center ${filteredVehicleType === 'scooty' ? 'bg-green-500' : ''}`}
              onClick={() => setFilteredVehicleType('scooty')}
            >
              <img src={scooty} alt="Scooty" className="h-12 w-12 mb-2 hover:scale-150 transition-transform duration-300" />
            </button>
          </div>

      </div>


      <div className='grid gap-8 my-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {filteredDrivers.map(driverDetail => (
          <div key={driverDetail._id} className="rounded-lg overflow-hidden shadow-md" style={{ background: 'linear-gradient(220deg, #86e374,#c9edc2)' }}>

            <li className="py-4 px-6 flex items-center justify-between">
                <div className="flex items-center">
                  <img src={driverDetail.imageURL} alt="" className="rounded-full w-12 h-12 mr-4"/>
                  <div>
                    <h2 className="text-lg font-semibold pl-2">{driverDetail.name}</h2>
                    <p className="text-gray-600 text-sm pl-2">per Km : <span className="text-red-500 font-bold text-2xl">{driverDetail.deliveryFee}</span></p>
                  </div>
                </div>

              <Link to={`/singledriver/${driverDetail._id}`} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
            </li>

          </div>
        ))}
      </div>

    </div>
  );
}

export default AllDrivers;
