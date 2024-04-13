import React from 'react'
import { Link } from 'react-router-dom'
import contactpic from "../assets/contact1.jpeg"

const ContactUsPage = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Any Issues Regarding Our Website ?</h2>
                <p>At UrbanHarvest Hub, we're committed to providing you with exceptional customer care. Our dedicated support team is here to assist you 
                    with any inquiries, ensuring your experience is seamless and enjoyable. We pride ourselves on our swift 
                    response times and personalized assistance, guaranteeing that your questions and concerns are addressed promptly and efficiently.</p>
                <Link to="/uploadcontactform" className='mt-5 block'>
                    <button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                        Contact-Us
                    </button>
                </Link>
            </div>
            <div>
                <img src={contactpic} alt="w-96" className='w-56 h-56' />
            </div>
        </div>
    </div>
  )
}

export default ContactUsPage