import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useCart } from '../inventoryshop/CartContext';
import { Link } from 'react-router-dom';

const SingleItem = () => {
  const { state, dispatch } = useCart();
  const { item_name, productDescription, category, unitOfMearsurement, quantity, manufactureDate, expireDate, price, imageUrl } = useLoaderData();

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
  };

  return (
    <div>
      <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
          <img src={imageUrl} alt="" className='rounded md:w-8/12' />
        </div>

        <div className='md:w-1/2 space-y-6'>
          <h2 className='text-4xl text-green-700 font-bold my-5 md:w-4/5 leading-snug'>{item_name}</h2>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'><strong>Category: </strong>{category}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>{productDescription}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>{unitOfMearsurement}</p>
          <p className='mb-10 text-lg md:w-5/6'><strong>Quantity: </strong>{quantity}</p>
          <p className='mb-10 text-lg md:w-5/6'><strong>Manufacturer Date: </strong>{manufactureDate}</p>
          <p className='mb-10 text-lg md:w-5/6'><strong>Expire Date: </strong>{expireDate}</p>
          <p className='mb-10 text-lg md:w-5/6 '><strong>Price: </strong>LKR {price}</p>

          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'></p>


          {/* Removed <Link> wrapper from the Add to Cart button */}
          <div className="flex gap-4">
            <Link to="/checkout" style={{ width: '100%' }}>
              <button className='bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-800 hover:shadow-lg transition-all duration-300 w-full' onClick={handleBuyNow}>Buy Now</button>
            </Link>
            <button className='bg-green-200 text-green-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-300 hover:shadow-lg transition-all duration-300 w-full' onClick={handleAddToCart}>{buttonText}</button>
          </div>


          {/* Link to shop page */}
          <a href="/shop" className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Back</button></a>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
