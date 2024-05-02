import React, { useState,useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { storage } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import UUID function

const ProductCreate = () => {
    const [product, setProduct] = useState({
        paymentID: '',
        userName: '',
        itemName: '',
        itemPrice: '',
        date: '',
        rType: '',
        rDetails: '',
        imageUrl: '',
      });
      const [uploading, setUploading] = useState(false);
      const date = new Date().toISOString().split('T')[0];
      const baseurl = 'http://localhost:4555';

      useEffect(() => {
        setProduct({ ...product, date });
        }, []);

    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
      
        const fileRef = ref(storage, `images/${file.name}`);  // Updated to use the ref function properly
        setUploading(true);
      
        try {
          const uploadTask = uploadBytesResumable(fileRef, file);  // Start the upload
          uploadTask.on('state_changed', 
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
            }, 
            (error) => {
              // Handle unsuccessful uploads
              console.error("Upload failed:", error);
              setUploading(false);
            }, 
            () => {
              // Handle successful uploads on complete
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setProduct({ ...product, imageUrl: downloadURL });
                setUploading(false);
              });
            }
          );
        } catch (error) {
          console.error("Error uploading file: ", error);
          setUploading(false);
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting product:', product);
      
        try {
          const response = await axios.post(`${baseurl}/product/add`, product);
          console.log('Product added:', response.data);
          // Optionally clear form here or redirect, provide user feedback
          alert('Product added successfully!');
          location.href='/admin/dashboard/product-view';
          setProduct({
            paymentID: uuidv4(),
            userName: '',
            itemName: '',
            itemPrice: '',
            date: '',
            rType: '',
            rDetails: '',
            imageUrl: '',
          });
          location.href='/admin/dashboard/product-view';
        } catch (error) {
          console.error("Error adding product: ", error);
          // Handle error, give user feedback
        }
      };
      

  return (
    <div className=" justify-center items-center h-screen bg-gray-100 w-full">

        <header className="bg-green-600 p-4 text-white">
            <h1 className="text-xl">Knowledge and Resource Sharing Hub</h1>
        </header>
        <nav className="bg-green-500 p-2">
            {/* Navigation items */}
        </nav>
        <div className="bg-green-200 p-4 flex justify-between items-center">
          <h2 className="text-lg text-black font-bold align-middle ">Add New Product</h2>
        </div>
        <div className="flex justify-center items-center ">
        
        {/* Product form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-1/2">

        {/* Payment ID Field */}
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
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentID">
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
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentID">
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentID">
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentID">
        Resourses Type
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rType"
          type="text"
          placeholder="Resourses Type"
          name="rType"
          value={product.rType}
          onChange={handleChange}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentID">
        Resourses Details
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rDetails"
          type="text"
          placeholder="Resourses Details"
          name="rDetails"
          value={product.rDetails}
          onChange={handleChange}
        />

        {/* Other fields following the same pattern... */}

        {/* Image URL Field */}
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
      {product.imageUrl && <p className="text-green-500">Image Uploaded Successfully!</p>}


        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ProductCreate;
