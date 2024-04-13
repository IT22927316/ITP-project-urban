import React from 'react'
import InventoryImg from "../assets/inventoryimg1.jpeg"
import { Link } from 'react-router-dom';

const InventoryBanner = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={InventoryImg} alt="" className='rounded md:w-10/12'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Check Out Our <span className='text-green-700'>Urban Inventory</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Dive into our 'Garden Gear Gateway,' the all-in-one inventory system designed for 
            the dedicated cultivator. Our digital shelves are stocked with a verdant variety of seeds, tools, and resources 
            to ensure your gardening endeavors are fruitful. From the rarest heirloom seeds to the most resilient gardening 
            tools, we’ve curated our collection to support sustainable and successful urban agriculture. Daily essentials? 
            We’ve got those too, making sure you're equipped for every planting season. Whether you’re looking to start your 
            first pot of herbs or manage a rooftop vegetable garden, our inventory is the bedrock of your horticultural journey. 
            Shop, sow, and reap the benefits of high-quality products that help your urban oasis thrive.</p>

                {/* stats */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>300+</h3>
                        <p className='text-base'>Inventory Listings</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>10+</h3>
                        <p className='text-base'>Daily Items</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1500+</h3>
                        <p className='text-base'>Delivered Items</p>
                    </div>
                </div>

                <Link to="/shop" className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Our Inventory</button></Link>
        </div>
    </div>
  )
}

export default InventoryBanner