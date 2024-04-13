import React from 'react'
import QPage from './QPage'
import APage from './APage'

import { Button, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const QnAsection = () => {
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <div className='flex justify-between items-center'>
        <h2 className='text-5xl font-bold'>
            Q & A Section
        </h2>
        <div className='flex justify-end items-center gap-4'>
          <Link to="/articleshub">
            <Button className='items-center w-48 h-10 bg-green-700 rounded-full'>Visit Knowledgehub</Button>
          </Link>
        </div>
      </div>
        <div className='mt-16 py-12 bg-green-300 px-4 lg:px-24 rounded'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Any Questions About Articles ?</h2>
                <p>Discover the vibrant world of urban agriculture with our informative articles and get your green questions
                     answered. This is your space to learn, share, and engage with fellow urban gardening enthusiasts. 
                    Post your queries and let the collective wisdom of our community guide your urban farming journey</p>
                <Link to="/uploadquestion" className='mt-5 block'>
                  <button className='bg-white text-black font-semibold px-5 py-2 rounded hover:bg-yellow-200 transition-all duration-300'>Ask A Question</button>
                </Link>
            </div>
            <div>
                <img src="https://i.pinimg.com/564x/10/cf/44/10cf4478a9edc1c2e6c56865bb28c36a.jpg" alt="w-96" className='w-40 h-40 rounded'/>
            </div>
        </div>
        </div>
      <QPage/>
      <APage/>
    </div>
  )
}

export default QnAsection
