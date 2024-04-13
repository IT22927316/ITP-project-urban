import studentpic from '../assets/student11.jpeg'

import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';


const StudentProjects = () => {
    const [studentprojects, setStudentprojects] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/all-studentprojects").then(res => res.json()).then(data => setStudentprojects(data));
      }, [])

  return (
    <div className='mt-28 px-4 lg:px-24'>
    <div className='flex justify-between items-center'>
        <h2 className='text-5xl font-bold'>
            Student Project Submissions
        </h2>
        <div className='flex justify-end'>
          <Link to="/articleshub">
          <Button className='ml-4 items-center w-48 h-10 bg-green-700 rounded-full'>Visit Knowledgehub</Button>
          </Link>
        </div>
      </div>
        <div className='mt-16 py-12 bg-green-300 px-4 lg:px-24 rounded'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Add Your Project !</h2>
                <p>Share your knowledge , how you acheive , what was your steps for success , what are the faliures and what are the pros and cons are.</p>
                <Link to="/uploadproject" className='mt-5 block'>
                  <button className='bg-white text-black font-semibold px-5 py-2 rounded hover:bg-yellow-200 transition-all duration-300'>Add Your Project</button>
                </Link>
            </div>
            <div>
                <img src={studentpic} alt="w-96" className='w-40 h-40'/>
            </div>
        </div>
    </div>

    <br/>

    <div className='grid gap-8 lg:grid-cols-2 sm:grid-cols-1'>
  {
    studentprojects.map(studentproject => (
    <Card key={studentproject._id}>
      <div className="flex flex-row items-start">
        <img src={studentproject.project_mainpic} className='h-48 w-32'/>
        <div className="ml-4">
          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {studentproject.student_name}
          </p><br/>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className='text-semibold'>Title: {studentproject.project_title}</span>
            <br/><br/>
            <span className='text-semibold'>Category: {studentproject.project_category}</span>
          </p>
          <br/>
          <button className='bg-green-700 font-semibold text-white py-2 px-5 rounded hover:bg-black transition-all duration-300'>
              <Link to={`/studentproject/${studentproject._id}`}>
                  Browse Now  
              </Link>
            </button>
        </div>
      </div>
      </Card>
    ))
  }
    </div>
    <br/>
    </div>
  )
}

export default StudentProjects