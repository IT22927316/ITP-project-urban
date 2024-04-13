import React from 'react'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function MainDriverPage() {
  return (
    <div>
        <br/><br/><br/>
        MainDriverPage
        <Link to="/alldrivers">
            <Button className='ml-4 items-center rounded-full w-40 h-10 bg-green-700'>All Drivers</Button>
        </Link>
    </div>
  )
}

export default MainDriverPage