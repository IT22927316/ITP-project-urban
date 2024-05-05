import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

const SingleDriverProfile = () => {
  const { _id, imageURL,name,NIC, description, age, gender, contactNo, licenseNo, vehicleType, vehicleNo, deliveryFee } = useLoaderData();

  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col lg:flex-row justify-between items-center gap-12'>
      <div className='lg:w-2/5 flex justify-center'>
        <img src={imageURL} alt="" className='rounded w-full h-100'/>
      </div>

      <div className='lg:w-3/5 space-y-6'>
          <h2 className='text-4xl font-bold my-5 leading-snug'>{name}</h2>

          <p style={{ fontSize: '1.5rem' }}>{description}</p>
          <hr style={{ height: '2px', backgroundColor: '#bdbbbb', border: 'none' }} />

          
          <p className='text-lg'>Age : {age}</p>

          <p className='text-lg'>NIC : {NIC}</p>
  
          <p className='text-lg'>Gender : {gender}</p>

          <p className='text-lg'>Contact Number : {contactNo}</p>
          
          <p className='text-lg'>Licence Number : {licenseNo}</p>
          
          <p className='text-lg'>Vehicle Type : {vehicleType}</p>
          
          <p className='text-lg'>Vehicle Number : {vehicleNo}</p>
      
          <p className='text-lg'>Delivery Fee : {deliveryFee}</p>
        

          <div className='flex justify-end items-center space-x-4'>
            <Link to="/deliverydrivers">
              <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>

            <Link to="/">
              <Button className='w-48 h-10 bg-green-700'>Confirm Driver</Button>
            </Link>
          </div>

      </div>
    </div>
  )
}

export default SingleDriverProfile;
