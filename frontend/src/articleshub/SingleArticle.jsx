import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';

const SingleArticle = () => {
  const {_id, articleTitle, authorName, category, articleDescription, articlePdfUrl, imageUrl} = useLoaderData();

  return (
      <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
          <img src={imageUrl} alt="" className='rounded md:w-10/12'/>
      </div>

      <div className='md:w-1/2 space-y-6'>
          <h2 className='text-4xl font-bold my-5 md:w-4/5 leading-snug'>{articleTitle}<br/><span className='text-green-700'>{authorName}</span></h2>

          <p className='mb-10 text-lg md:w-5/6'>Category: {category}</p>
          <hr></hr>

          <p className='mb-10 text-lg md:w-5/6'>{articleDescription}</p>
          <hr></hr>
          <p className='mb-10 text-lg md:w-5/6'>Tutorial Video Link<br/>{articlePdfUrl}</p>
          <p className='mb-10 text-lg md:w-5/6'></p>

              <Link to="/articleshub" className='mt-8 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Back</button></Link>
      </div>
    </div>
  )
}

export default SingleArticle