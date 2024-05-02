import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { storage } from './firebase'; // Ensure this import path is correct
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const ProductUpdate = () => {
    const uId = localStorage.getItem('uId');
    console.log('id=>>>', uId);
    const [product, setProduct] = useState({
        paymentID: '',
        userName: '',
        itemName: '',
        itemPrice: '',
        date: '',
        rType: '',
        rDetails: '',
        imageUrl: '',
        quantity: '',
        isPayment: false,
        isRefund: false,
        totalAmount: ''
    });
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const baseurl = 'http://localhost:4555';

    useEffect(() => {
        if (!uId) {
            setError('No product ID found');
            return;
        }
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${baseurl}/checkout/${uId}`);
                const data = await response.json();
                if (response.ok) {
                    setProduct(data.checkout);
                } else {
                    throw new Error(data.message || 'Failed to load the product data');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message || 'An error occurred');
            }
        };

        fetchProduct();
    }, [uId, baseurl]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const fileRef = ref(storage, `images/${file.name}`);
        setUploading(true);

        const uploadTask = uploadBytesResumable(fileRef, file);
        uploadTask.on('state_changed', 
            () => {}, // Log some progress feedback
            (error) => {
                console.error("Upload failed:", error);
                setUploading(false);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setProduct(prev => ({ ...prev, imageUrl: downloadURL }));
                    setUploading(false);
                });
            }
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${baseurl}/checkout/update/${uId}`, product);
            alert('Product updated successfully!');
            console.log('Checkout updated successfully!', response.data);
            location.href ='/admin/dashboard/payment-dashboard'
            localStorage.removeItem('uId');
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Checkout updated Faild!');
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="justify-center items-center h-screen bg-gray-100 w-full">
            <header className="bg-green-600 p-4 text-white">
                <h1 className="text-xl">Knowledge and Resource Sharing Hub</h1>
            </header>
            <div className="bg-green-200 p-4 flex justify-between items-center">
                <h2 className="text-lg text-black font-bold align-middle">Update Product</h2>
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-1/2">
                    {/* Payment ID - Read-only as it shouldn't change after creation */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentID">
                            Payment ID
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="paymentID"
                            type="text"
                            placeholder="Payment ID"
                            name="paymentID"
                            value={product.paymentID}
                            onChange={handleChange}
                            disabled // Assuming you don't want this to be editable
                        />
                    </div>

                    {/* User Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
                            User Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="userName"
                            type="text"
                            placeholder="User Name"
                            name="userName"
                            value={product.userName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Item Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                            Item Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="itemName"
                            type="text"
                            placeholder="Item Name"
                            name="itemName"
                            value={product.itemName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Item Price */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemPrice">
                            Item Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="itemPrice"
                            type="text"
                            placeholder="Item Price"
                            name="itemPrice"
                            value={product.itemPrice}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Resources Type */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rType">
                            Resources Type
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="rType"
                            type="text"
                            placeholder="Resources Type"
                            name="rType"
                            value={product.rType}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Resources Details */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rDetails">
                            Resources Details
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="rDetails"
                            type="text"
                            placeholder="Resources Details"
                            name="rDetails"
                            value={product.rDetails}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Quantity - Assuming it should be editable */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                            Quantity
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="quantity"
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUpload">
                            Upload Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="imageUpload"
                            type="file"
                            onChange={handleImageUpload}
                            disabled={uploading}
                        />
                        {uploading && <p className="text-blue-500">Uploading Image...</p>}
                        {product.imageUrl && (
                            <div className="mt-3">
                                <img src={product.imageUrl} alt="Product" className="img-thumbnail" style={{ width: "100px", height: "100px" }} />
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductUpdate;
