import React from 'react'
import { Link } from 'react-router-dom'
import greenjobpic from "../assets/greenjobimg1.jpeg"

const JobBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'><span>AgriCareers Hub<br/></span>Sowing Seeds of Opportunity</h2>
                <p> Our dedicated platform bridges the gap between passion and profession, connecting you with a myriad of 
                    opportunities in the agricultural sector. Whether you're starting out or ready to branch out, find positions 
                    that let you nurture the earth and your career. From community garden coordinators to urban farm educators, 
                    your next green job awaits. Grow your professional roots with us and be part of the movement towards a sustainable future.</p>
                <Link to="/articleshub" className='mt-5 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Job Opportunities</button></Link>
            </div>
            <div>
                <img src={greenjobpic} alt="w-96 " />
            </div>
        </div>
    </div>
  )
}

export default JobBanner