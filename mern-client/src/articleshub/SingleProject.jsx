import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';


const SingleProject = () => {
  const {_id, student_name, project_title, project_category, project_mainpic, project_summary,
        step1_image, step1_title, step1_dedscription, step2_image, step2_title, step2_dedscription,
        step3_image, step3_title, step3_dedscription,step4_image, step4_title, step4_dedscription,
        step5_image, step5_title, step5_dedscription, faliures} = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24 rounded'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div className='md:w-1/2'>
                <h2 className='text-3xl font-bold mb-6 leading-snug'>{project_title}</h2>
                <p>Student:{student_name}</p><br/>
                <p>Category:{project_category}</p>
                <br/>
                <p>Project Summary:<br/>{project_summary}</p>
                
            </div>
            <div>
                <img src={project_mainpic} alt="w-96" className='h-80 w-56' />
            </div>
        </div>
    </div>
    <br/><br/>
    <h2 className='text-4xl font-bold text-center mb-12'>Project Steps</h2>
    <Card>
        <div className='px-4  flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-5/6'>
                <p className='mb-10 text-lg md:w-11/12 font-semibold'>Step 1: {step1_title}</p>
                <p className='mb-10 text-lg md:w-11/12 font-semibold' >Description: <br/><br/>{step1_dedscription}</p>
            </div>

            <div className='md:w-1/2 space-y-6'>
                <img src={step1_image} alt="" className='rounded w-96 h-64'/> 
            </div>
        </div>
    </Card>
    <br/>
    <Card>
        <div className='px-4  flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-5/6'>
                <p className='mb-10 text-lg md:w-11/12 font-semibold'>Step 2: {step2_title}</p>
                <p className='mb-10 text-lg md:w-11/12 font-semibold' >Description: <br/><br/>{step2_dedscription}</p>
            </div>

            <div className='md:w-1/2 space-y-6'>
                <img src={step2_image} alt="" className='rounded w-96 h-64'/> 
            </div>
        </div>
    </Card>
    <br/>
    <Card>
        <div className='px-4  flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-5/6'>
                <p className='mb-10 text-lg md:w-11/12 font-semibold'>Step 3: {step3_title}</p>
                <p className='mb-10 text-lg md:w-11/12 font-semibold' >Description: <br/><br/>{step3_dedscription}</p>
            </div>

            <div className='md:w-1/2 space-y-6'>
                <img src={step3_image} alt="" className='rounded w-96 h-64'/> 
            </div>
        </div>
    </Card>
    <br/>
    <Card>
        <div className='px-4  flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-5/6'>
                <p className='mb-10 text-lg md:w-11/12 font-semibold'>Step 4: {step4_title}</p>
                <p className='mb-10 text-lg md:w-11/12 font-semibold' >Description: <br/><br/>{step4_dedscription}</p>
            </div>

            <div className='md:w-1/2 space-y-6'>
                <img src={step4_image} alt="" className='rounded w-96 h-64'/> 
            </div>
        </div>
    </Card>
    <br/>
    <Card>
        <div className='px-4  flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-5/6'>
                <p className='mb-10 text-lg md:w-11/12 font-semibold'>Step 5: {step5_title}</p>
                <p className='mb-10 text-lg md:w-11/12 font-semibold' >Description: <br/><br/>{step5_dedscription}</p>
            </div>

            <div className='md:w-1/2 space-y-6'>
                <img src={step5_image} alt="" className='rounded w-96 h-64'/> 
            </div>
        </div>
    </Card>
    <br/>
    <div>
        <Card>
        <h2 className='text-4xl font-bold text-center mb-12'>What Not To Do</h2>
        <p>{faliures}</p>
        <br/>
        <button className='bg-green-700 font-semibold text-white py-2 px-5 rounded hover:bg-black transition-all duration-300'>
            <Link to='/studentprojects'>
                Visit More Projects  
            </Link>
        </button>
        </Card>
    </div>
    <br/>
    </div>
  )
}


export default SingleProject