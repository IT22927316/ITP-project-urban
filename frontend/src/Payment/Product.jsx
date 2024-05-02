import React, { useState, useEffect } from 'react';
const Product = () => {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const baseurl = 'http://localhost:4555';

    useEffect(() => {
        fetch(`${baseurl}/product/get`)
            .then(response => response.json())
            .then(data => {
                setProducts(data.existingProducts);
                // Initialize quantities for each product
                let initialQuantities = {};
                data.existingProducts.forEach(product => {
                    initialQuantities[product.paymentID] = 1;
                });
                setQuantities(initialQuantities);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const handleQuantityChange = (paymentID, newValue) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [paymentID]: newValue
        }));
    };

    const handlePayment = (product) => {
        const checkoutData = {
            ...product,
            quantity: quantities[product.paymentID]
        };
        console.log('Proceeding to payment with:', checkoutData);
        localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    };

    return (
        <div className='w-full'>
            <header className="bg-green-600 p-4 text-white">
                <h1 className="text-xl">Knowledge and Resource Sharing Hub</h1>
            </header>
            <div className="bg-green-200 p-4 flex justify-between items-center">
                <h2 className="text-lg text-black font-bold align-middle ">Product</h2>
                <button
              className="bg-green-700 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
              onClick={()=> location.href='/admin/dashboard/product-create'}
            >
              Product Add
            </button>
            </div>
            <div className='flex flex-wrap'>
                {products.map((product) => (
                    <div className='w-1/3 p-4' key={product.paymentID}>
                        <div className='bg-white rounded-lg shadow-md p-4'>
                            <img src={product.imageUrl} alt={product.itemName} className='w-full h-auto mb-3' style={{ width: '25vw', height: '25vw', alignSelf: 'center' }} />
                            <p className='text-lg font-semibold mb-3'>{product.itemName}</p>
                            <p>{product.rDetails}</p>
                            <p className='text-sm text-gray-700'>Posted by {product.userName} on {product.date}</p>
                            <p>LKR. <b>{product.itemPrice}</b> /=</p>
                            <div className="mt-4">
                                <label htmlFor={`quantity-${product.paymentID}`} className="block text-sm font-medium text-gray-700">Quantity</label>
                                <select
                                    id={`quantity-${product.paymentID}`}
                                    name="quantity"
                                    value={quantities[product.paymentID]}
                                    onChange={e => handleQuantityChange(product.paymentID, e.target.value)}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                >
                                    {[...Array(10).keys()].map(x => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-4 flex justify-center">
                              <a href='/admin/dashboard/checkout'>
                               <button 
                                    onClick={() => handlePayment(product)}
                                    className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 w-full"
                                >
                                    Pay
                                </button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
