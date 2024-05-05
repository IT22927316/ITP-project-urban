import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import deliverimage from "../assets/deliveryimage.jpg";

const MainDriverPage = () => {
  const [availableDrivers, setAvailableDrivers] = useState([]);

  useEffect(() => {
    async function fetchAvailableDrivers() {
      try {
        const response = await fetch("http://localhost:5000/all-driverdetails?status==available");
        if (!response.ok) {
          throw new Error('Failed to fetch available drivers');
        }
        const data = await response.json();
        setAvailableDrivers(data);
      } catch (error) {
        console.error('Error fetching available drivers:', error);
      }
    }
    fetchAvailableDrivers();
  }, []);

  return (
    <div>
      <br/><br/><br/>
      <div className=" px-4 lg:px-24 flex items-center">
        <div className='flex w-full flex-col md:flex-row justify-between items-start gap-12 pb-5'>
        
        {/*leftside*/}
        <div className='md:w-3/5 bg-white p-10 rounded-lg shadow-md flex flex-col justify-center items-center space-y-4 w-full h-full mt-8'>
          <div className="text-left">
            <h2 className='text-4xl font-bold leading-snug text-black'>Experience a<br/>hassle-free delivery with our efficient service.</h2>
            <p className='md:w-4/5 mt-3 italic'>Your package is at your fingertip !</p>
          </div>
          <div className="flex justify-center flex-grow">
            <img src={deliverimage} alt="" className='rounded w-30 md:w-60'/>
          </div>
        </div>

        {/*rightside*/}
        <div className='overflow-y-auto max-h-screen md:w-1/2' style={{ '-ms-overflow-style':'none', 'scrollbar-width':'none' }}>
          <div className='mt-10 text-5xl font-bold my-5 leading-snug'>
            <span className='text-green-700'>Available Drivers</span>
          </div>
          <Link to="/alldrivers" className="text-gray-500 hover:text-gray-700">
            <text className="mt-10 text-sm hover:gray flex justify-end mb-5">See All Drivers</text>
          </Link>
          <div className="ml-5"> 
            <div className="space-y-4">
              {availableDrivers.map(driverdetail => (
                <div key={driverdetail._id} className="rounded-lg overflow-hidden shadow-md" style={{ background: 'linear-gradient(220deg, #86e374, #ceffc4)' }}>
                  <li className="py-4 px-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={driverdetail.imageURL} alt="" className="rounded-full w-12 h-12 mr-4"/>
                      <div>
                        <h2 className="text-lg font-semibold">{driverdetail.name}</h2>
                        <p className="text-gray-600 text-sm">per Km : <span className="text-red-500 text-2xl font-bold">{driverdetail.deliveryFee}</span></p>
                      </div>
                    </div>
                    <Link to={`/singledriver/${driverdetail._id}`} className="text-gray-500 hover:text-gray-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg> 
                    </Link>
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default MainDriverPage;
