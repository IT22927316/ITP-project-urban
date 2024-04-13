import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

const SingleArticle = () => {
  const { _id, articleTitle, authorName, category, articleDescription, articlePdfUrl, imageUrl } = useLoaderData();

  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col lg:flex-row justify-between items-center gap-12'>
      <div className='lg:w-2/5 flex justify-center'>
        <img src={imageUrl} alt="" className='rounded w-full max-w-xs lg:max-w-sm'/>
      </div>

      <div className='lg:w-3/5 space-y-6'>
        <h2 className='text-4xl font-bold my-5 leading-snug'>{articleTitle}<br/><span className='text-green-700'>{authorName}</span></h2>

        <p className='text-lg'>Category: {category}</p>
        <hr/>

        <p className='text-lg'>{articleDescription}</p>
        <hr/>
        
        {articlePdfUrl && (
          <p className='text-lg'>Tutorial Video Link<br/><a href={articlePdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">{articlePdfUrl}</a></p>
        )}

        <div className='flex justify-end items-center space-x-4'>
          <Link to="/articleshub">
            <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
          </Link>
          <Link to="/qnasection">
            <Button className='w-48 h-10 bg-green-700'>Submit A Question</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleArticle;
