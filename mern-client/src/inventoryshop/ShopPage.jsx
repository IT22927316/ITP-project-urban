import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useCart } from '../inventoryshop/CartContext';
import { FaCartPlus } from 'react-icons/fa6'; // Importing the cart icon
import { FaSearch } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { BiCartAdd } from "react-icons/bi";

const ShopPage = () => {
  const { state, dispatch } = useCart();
  const [inventoryItems, setInventoryItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/all-inventoryitems")
      .then(res => res.json())
      .then(data => setInventoryItems(data));
  }, []);

  const handleAddToCart = (item) => {
    console.log('Add to Cart button clicked', item);
    const existingCartItem = state.items.find(cartItem => cartItem.item_name === item.item_name);
    if (existingCartItem) {
      const newQuantity = existingCartItem.quantity + 1;
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: existingCartItem.id, quantity: newQuantity } });
    } else {
      const newItem = { ...item, quantity: 1 };
      dispatch({ type: 'ADD_TO_CART', payload: newItem });
    }
  };

  const filteredInventoryItems = inventoryItems.filter(article =>
    article.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='flex justify-between items-start mb-8'>
        <h2 className='text-5xl font-bold'>Welcome To Our Shop</h2>
        <div className='flex flex-col items-end'>
          {/* Search bar with rounded shape and icon */}
          <div className="relative w-96"> {/* Adjusted width */}
            <input
              type="text"
              placeholder="Search Products"
              onChange={(e) => setSearchQuery(e.target.value)}
              className='h-10 pl-10 pr-10 rounded-full shadow-sm w-full border border-gray-300' // Adjusted styles for rounded shape
            />
            {/* Search icon */}
            <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
              <FaSearch className="" size="20px" /> {/* Adjusted for correct sizing */}
            </div>
          </div>
        </div>
      </div>

      <div className='grid gap-5 my-12 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 '>
        {filteredInventoryItems.map(inventoryItem => (
          <Card key={inventoryItem._id} className="h-90 relative transition-shadow duration-300 ease-in-out hover:shadow-xl">
            <div className="relative">
              <Link to={`/inventoryitem/${inventoryItem._id}`}>
                <img src={inventoryItem.imageUrl} alt="" className='w-full h-60 object-cover object-center hover:opacity-100 hover:scale-105 transition duration-300' />
              </Link>
              {/* Add to Cart button positioned in the top right corner of the image, at the bottom */}
              <button className='absolute bottom-1 right-1 bg-green-500 text-white font-semibold w-12 h-12 rounded-full shadow-md hover:bg-green-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center'
                onClick={() => handleAddToCart(inventoryItem)}>
                <BiCartAdd style={{ fontSize: '2rem', color: '#f1faf6' }} />
              </button>
            </div>

            <Link to={`/inventoryitem/${inventoryItem._id}`}>
              <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-2">

                {inventoryItem.item_name}
              </h5>

              <p className="text-sm text-gray-500 font-semibold">
                <p><strong>Category : </strong>{inventoryItem.category}</p>
                <p><strong>Price : </strong>LKR {inventoryItem.price}</p>
              </p>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
