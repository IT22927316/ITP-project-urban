import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ShopPage = () => {
    const [inventoryitems, setInventoryitems] = useState([]);

    useEffect( () =>{
      fetch("http://localhost:5000/all-inventoryitems").then(res => res.json()).then(data => setInventoryitems(data));
    }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>Wellcome To Our Shop</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 '>
        {
          inventoryitems.map(inventoryitem => <Card
          >
            <img src={inventoryitem.itemImage} alt="" className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {inventoryitem.item_name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>Item Category: {inventoryitem.category}</p>
              <p>Item Price: Rs{inventoryitem.price}/=</p>
            </p>
            
            
            <button className='bg-green-700 font-semibold text-white py-2 rounded hover:bg-black transition-all duration-300'>
              <Link to={`/inventoryitem/${inventoryitem._id}`}>
                Browse More
              </Link>
            </button>
            

          </Card>)
        }
      </div>

    </div>
  )
}

export default ShopPage