import React,{useEffect, useState} from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Visa from '../assets/visa.png';
import Paypal from '../assets/paypal.png';

const CheckoutPage = () => {
  const [card, setCard] = useState({
    cardName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: ''
  });
  const [isCard, setIsCard] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const checkoutData = JSON.parse(localStorage.getItem('checkoutData'));
  
    // Handle form submission
    const totalAmount = (checkoutData.itemPrice * checkoutData.quantity).toFixed(2);
    const baseurl = 'http://localhost:4555';

    //validations

    const validateForm = () => {
      const errors = {};
      const regexCardNumber = /^\d{16}$/; // Basic validation for 16 digit card number
      const regexCVV = /^\d{3,4}$/; // Basic validation for 3 or 4 digit CVV
      const regexMonth = /^(0[1-9]|1[0-2])$/; // MM format
      const regexYear = /^\d{4}$/; // YYYY format
  
      if (!card.cardName.trim()) {
          errors.cardName = "Card name is required.";
      }
      if (!regexCardNumber.test(card.cardNumber)) {
          errors.cardNumber = "Card number must be 16 digits.";
      }
      if (!regexMonth.test(card.month)) {
          errors.month = "Enter a valid month (MM).";
      }
      if (!regexYear.test(card.year) || card.year < new Date().getFullYear()) {
          errors.year = "Enter a valid year (YYYY).";
      }
      if (!regexCVV.test(card.cvv)) {
          errors.cvv = "CVV must be 3 or 4 digits.";
      }
  
      setValidationErrors(errors);
      return Object.keys(errors).length === 0; // Return true if no errors
  };
  




    const handleChange = (event) => {
      const { name, value } = event.target;
      setCard({ ...card, [name]: value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!validateForm()) {
        console.log('Validation failed');
        return; // Stop submission if validation fails
      }
      // Simulate card addition
      fetch(`${baseurl}/card/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(card)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Card added:', data);
        if (data.success) {
          setIsCard(true);
          handlePayment(data.paymentID);
          console.log('Payment processed with ID:', data.paymentID);
        }
      })
      .catch(error => console.error('Error adding card:', error));
      
    };
    
    const handlePayment = (paymentID) => {
        const paymentInfo = {
          ...checkoutData,
          paymentID: paymentID,
          isPayment: true,
          isRefund: false,
          totalAmount: totalAmount
        };
        console.log('Processing payment =>>:', paymentInfo);
    
        fetch(`${baseurl}/checkout/create`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(paymentInfo)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Payment processed and checkout updated:', data);
          localStorage.removeItem('checkoutData');
          let payInfo ={
            paymentID: paymentID,
            totalAmount: totalAmount,
            payment: true

          };
          localStorage.setItem('payInfo', JSON.stringify(payInfo));
          // Additional logic after successful payment
          window.location.href = '/admin/dashboard/PaymentSuccess';
        })
        .catch(error => console.error('Error during checkout:', error));
    };
  
    return (
      <div className="bg-gray-100 p-6 w-full">
        <header className="bg-green-600 p-4 text-white">
            <h1 className="text-xl">Payment </h1>
        </header>
        <nav className="bg-green-500 p-2">
            {/* Navigation items */}
        </nav>
        {/* ... */}
        <div className="flex-auto justify-center items-center ">
        <div className="bg-green-200 p-4 flex justify-between items-center">
          <h2 className="text-lg text-white font-bold align-middle ">Check out</h2>
        </div>
            
          {/* Payment form */}
          <div className=" w-1/3 float-left" style={{marginLeft:'10vw', marginTop:'2vw'}}>
            {/* ... */}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-lg mb-4 font-semibold text-center">Payment Method</h2>
              
              {/* Payment method selection */}
              <div className="mb-6">
                <div className="flex justify-around">
                  <button className="focus:outline-none">
                    <img src={Visa} alt="Credit Card" className='w-40' />
                  </button>
                  <button className="focus:outline-none">
                    <img src={Paypal} alt="PayPal" className='w-40' />
                  </button>
                </div>
              </div>
              <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name on Card" 
               name="cardName" value={card.cardName} onChange={handleChange}/>
                {validationErrors.cardName && <p className="text-red-500 text-xs italic">{validationErrors.cardName}</p>}
            </div>
            <div className="mb-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Credit Card Number"
              name="cardNumber" value={card.cardNumber} id="cardNumber" onChange={handleChange} />
               {validationErrors.cardNumber && <p className="text-red-500 text-xs italic">{validationErrors.cardNumber}</p>}
            </div>
            {/* Expiry date and CVV */}
            <div className="flex justify-between">
              <div className="mb-4">
                <input className="w-28 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Month" 
                name="month" value={card.month} onChange={handleChange}/>
                 {validationErrors.month && <p className="text-red-500 text-xs italic">{validationErrors.month}</p>}
              </div>
              <div className="mb-4">
                <input className="w-28 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Year" 
                name="year" value={card.year} onChange={handleChange}/>
                  {validationErrors.year && <p className="text-red-500 text-xs italic">{validationErrors.year}</p>}
              </div>
              <div className="mb-4">
                <input className="w-24 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="CVV" 
                name="cvv" value={card.cvv} onChange={handleChange} />
                  {validationErrors.cvv && <p className="text-red-500 text-xs italic">{validationErrors.cvv}</p>}
              </div>
            </div>
  
                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    disabled={Object.keys(validationErrors).length !== 0}
                >
                    Pay Now
                </button>

              {/* ... */}
            </form>
          </div>
  
          {/* Order Summary */}
          <div className="ml-8 w-full max-w-sm float-right" style={{marginRight:'10vw', marginTop:'2vw'}}>
            <div className="bg-yellow-200 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
              <div className="mb-4">
                <img src={checkoutData.imageUrl} alt="Anko White Linear Pot" className="w-full h-auto mb-3"/>
                <p>Item Name: <b>{checkoutData.itemName}</b></p>
                <p>Item Price: <b>{checkoutData.itemPrice} LKR</b> </p>
                <p>Item Quantity: <b>{checkoutData.quantity}</b> piece</p>
                <p className="font-bold">Total Price →<span 
                style={{
                    padding:'0.5vw', 
                    backgroundColor:'red',
                    marginLeft:'5vw',
                    borderRadius:'5px',
                    color:'white',
                    }}>{totalAmount} LKR</span> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CheckoutPage;
  