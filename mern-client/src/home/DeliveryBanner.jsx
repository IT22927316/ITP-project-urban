import React from 'react'
import { Link } from 'react-router-dom'
import greenjobpic from "../assets/deliveryimg2.jpeg"

const DeliveryBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'><span>Green Route Delivery<br/></span>Bringing the Harvest to Your Doorstep</h2>
                <p>Green Route Delivery revolutionizes the way you receive gardening goods, seeds, and fresh produce. Our dedicated team 
                    of eco-friendly drivers ensures that every item is delivered to your doorstep with care, speed, and sustainability in 
                    mind. From last-minute gardening projects to regular supplies, we connect you to the earth's bounty without you having to 
                    leave the comfort of your home. Experience the convenience of direct-to-door delivery while supporting a green supply chain 
                    with every order.</p>
                <Link to="/deliverydrivers" className='mt-5 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Delivery Drivers</button></Link>
            </div>
            <div>
                <img src={greenjobpic} alt="w-96 " />
            </div>
        </div>
    </div>
  )
}

export default DeliveryBanner