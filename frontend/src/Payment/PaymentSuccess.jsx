import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import checkmarkImage from '../assets/checkmar.webp'; // Make sure to import your images correctly
import qrCodeImage from '../assets/qr-code.webp';
import psuccess from '../assets/navpic.webp';

const PaymentSuccess = () => {
  const paymentStatus = JSON.parse(localStorage.getItem('payInfo'));

  console.log('Payment Status:', paymentStatus);
  return (
    <div className="bg-green-100 p-8 w-full">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">THANK YOU!</h1>
        <img src={checkmarkImage} alt="Checkmark" className="mx-auto my-4 w-64 rounded-lg" />
        <h2 className="text-xl font-semibold text-green-700">Payment Successful</h2>
        <p className="text-md text-gray-600 my-2">Receipt sent to the email</p>
      </header>

      <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full" style={{backgroundImage: `url(${psuccess})`, backgroundSize: 'cover'}}>
        <div className="flex  ">
          <div className="bg-pink-200 p-4 rounded-lg mb-6 float-left w-1/2">
            <h3 className="font-bold text-lg mb-4">Order Receipt</h3>
            <p>Item Price: {paymentStatus.totalAmount}LKR</p>
            <p>Order ID: {paymentStatus.paymentID}</p>
            <p>Payment Status:{paymentStatus.payment == true ? "Successful":"UnSuccessfull" } </p>
            <img src={qrCodeImage} alt="QR Code" className="mx-auto my-4 w-40 " />
          </div>
        <div className="text-center mt-6 float-right w-1/2" style={{
            marginLeft:'10vw',
            marginTop:'8vw'
            }}>
                <a href='/admin/dashboard/product-view'><button className="bg-white hover:bg-slate-300 text-green-700 font-bold py-2 px-4 rounded-lg mx-2 my-2 ">
                Make another Payment
                </button></a>
                <a href='/'><button className="bg-white hover:bg-slate-300 text-green-700 font-bold py-2 px-4 rounded-lg mx-2 my-2">
                Back to Home
                </button></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
