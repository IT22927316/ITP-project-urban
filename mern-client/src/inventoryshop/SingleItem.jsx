import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useCart } from '../inventoryshop/CartContext';
import { Link } from 'react-router-dom';

const SingleItem = () => {
  const { state, dispatch } = useCart();
  const { item_name, productDescription, category, unitOfMearsurement, quantity, manufactureDate, expireDate, price, imageUrl } = useLoaderData();

  const [showModal, setShowModal] = useState(false);
  const [pickupMethod, setPickupMethod] = useState('');

  // Check if the item is already in the cart
  const existingCartItem = state.items.find(item => item.item_name === item_name);

  const handleAddToCart = () => {
    console.log('Add to Cart button clicked');
    // If item is already in the cart, increment quantity
    if (existingCartItem) {
      const newQuantity = existingCartItem.quantity + 1;
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: existingCartItem.id, quantity: newQuantity } });
    } else {
      // If item is not in the cart, add it
      const item = { item_name, price, imageUrl, quantity: 1 };
      dispatch({ type: 'ADD_TO_CART', payload: item });
    }
  };

  // Render button with appropriate text based on whether the item is already in the cart
  const buttonText = existingCartItem ? 'Add More to Cart' : 'Add to Cart';

  const handleBuyNow = () => {
    console.log('Buy Now button clicked');
    // Implement logic to proceed to checkout page
    // For now, just open the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePickupMethod = (method) => {
    setPickupMethod(method);
    setShowModal(false);
  };

  return (
    <div>
      <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
          <img src={imageUrl} alt="" className='rounded md:w-8/12' />
        </div>

        <div className='md:w-1/2 space-y-6'>
          <h2 className='text-4xl text-green-700 font-bold my-5 md:w-4/5 leading-snug'>{item_name}</h2>
          <hr />

          <p className='mb-10 text-lg md:w-5/6'><strong>Category: </strong>{category}</p>
          <hr />

          <p className='mb-10 text-lg md:w-5/6'>{productDescription}</p>
          <hr />

          <p className='mb-10 text-lg md:w-5/6'>{unitOfMearsurement}</p>
          <p className='mb-10 text-lg md:w-5/6'><strong>Quantity: </strong>{quantity}</p>
          <p className='mb-10 text-lg md:w-5/6'><strong>Manufacturer Date: </strong>{manufactureDate}</p>
          <p className='mb-10 text-lg md:w-5/6'><strong>Expire Date: </strong>{expireDate}</p>
          <p className='mb-10 text-lg md:w-5/6'><strong>Price: </strong>LKR {price}</p>

          <hr />

          <div className="flex gap-4">
            <button className='bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300 w-full' onClick={handleBuyNow}>Buy Now</button>
            <button className='bg-green-200 text-green-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-300 hover:shadow-lg transition-all duration-300 w-full' onClick={handleAddToCart}>{buttonText}</button>
          </div>

          <br />
        </div>
      </div>

      {/* Render modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-3xl relative">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Before Checking Out</h2>
            <div className="flex justify-center mb-4">
              <img src="/shopping-cart-icon.png" alt="Shopping Cart" className="h-48 w-48" />
            </div>
            <p className="mb-4 text-center text-lg">Choose the method of picking up the package</p>
            <div className="flex justify-between mb-4">
              <Link to="/checkout">
                <button className={`bg-green-500 text-white font-semibold py-3 px-10 rounded-lg hover:bg-green-600 transition-all duration-300 ${pickupMethod === 'store' ? 'bg-green-600' : ''}`} onClick={() => handlePickupMethod('store')}>
                  Store Pickup
                </button>
              </Link>
              <Link to="/deliverydrivers">
                <button className={`bg-green-500 text-white font-semibold py-3 px-10 rounded-lg hover:bg-green-600 transition-all duration-300 ${pickupMethod === 'driver' ? 'bg-green-800' : ''}`} onClick={() => handlePickupMethod('driver')}>
                  Hire a Driver
                </button>
              </Link>
            </div>
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleItem;
