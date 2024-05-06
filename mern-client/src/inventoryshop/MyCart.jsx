import React, { useState } from 'react';
import { useCart } from '../inventoryshop/CartContext';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const { state, dispatch } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [pickupMethod, setPickupMethod] = useState('');

  const handleQuantityChange = (item, newQuantity) => {
    let quantity = parseInt(newQuantity);
    if (quantity < 1) {
      quantity = 1; // Ensure minimum quantity is 1
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };
  

  // Calculate total price by multiplying item price with its quantity for each item in the cart
  const totalPrice = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleProceedToCheckout = () => {
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
    <div className="mt-8 px-4 lg:px-24">
      <br /><br /><br />
      <h2 className="text-4xl font-bold text-center mb-8">Your Cart</h2>

      <table className="table-fixed w-full mb-8">
        <thead>
          <tr className="bg-green-300">
            <th className="w-1/6 py-2 text-center">Image</th>
            <th className="w-2/6 py-2 text-center">Item</th>
            <th className="w-1/6 py-2 text-center">Price</th>
            <th className="w-1/6 py-2 text-center">Quantity</th>
            <th className="w-1/6 py-2 text-center">Total</th>
            <th className="w-1/6 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map(item => (
            <tr key={item.id} className="border-b">
              <td className="py-4">
                <div className="flex justify-center items-center">
                  <img src={item.imageUrl} alt={item.name} className="h-16 w-16 object-cover" />
                </div>
              </td>
              <td className="py-4 text-center">{item.item_name}</td>
              <td className="py-4 text-center">LKR {parseFloat(item.price).toFixed(2)}</td>
              <td className="py-4 text-center">
                <div className="flex justify-center items-center">
                  <button className="text-white bg-red-500 hover:bg-red-600 active:bg-red-700 px-3 py-2 rounded-l rounded-r" onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</button>
                  <span className="px-3 py-2 bg-gray-200 rounded text-gray-700">{item.quantity}</span>
                  <button className="text-white bg-green-500 hover:bg-green-600 active:bg-green-700 px-3 py-2 rounded-l rounded-r" onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
                </div>
              </td>
              <td className="py-4 text-center">LKR {(item.price * item.quantity).toFixed(2)}</td>
              <td className="py-4 text-center">
                <button className="text-red-600 hover:text-red-700 font-semibold" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mb-4">
        <Link to="/shop" className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:bg-black transition-all duration-300">
          Continue Shopping
        </Link>
        <p className="text-lg font-semibold">Total: LKR {totalPrice.toFixed(2)}</p>
      </div>

      <div className="flex justify-end mb-4">
        <button onClick={handleProceedToCheckout} className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:bg-green-800 transition-all duration-300">
          Proceed to Checkout
        </button>
      </div>

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
};

export default MyCart;
