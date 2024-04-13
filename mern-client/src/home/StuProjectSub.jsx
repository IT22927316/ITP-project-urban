import React from 'react'
import { Link } from 'react-router-dom'
import studentproPic from "../assets/stuproimage2.jpeg"

const StuProjectSub = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-3xl font-bold mb-6 leading-snug'>Want To Share Your Projects With Us ?<br/>Submit Your Projects Now!</h2>
                <p>Welcome to the forefront of green innovation! Our platform invites students passionate about sustainability and the
                     future of food production to showcase their urban agriculture projects. Here, we celebrate creative solutions that contribute 
                     to food security, environmental sustainability, and the reimagining of urban spaces. Whether it's a high-tech vertical farm, a 
                     community garden project, or an innovative water-saving technique, we provide a space for your ideas to bloom and inspire others.
                      Share your project with us and join a community dedicated to making cities greener, one project at a time.</p>
                <Link to="/studentprojects" className='mt-5 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Student Projects</button></Link>
            </div>
            <div>
                <img src={studentproPic} alt="w-80" className='rounded' />
            </div>
        </div>
    </div>
  )
}


export default StuProjectSub