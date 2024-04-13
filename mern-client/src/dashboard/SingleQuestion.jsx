import React from 'react'
import { useLoaderData } from 'react-router-dom'


const SingleQuestion = () => {
  const {_id, user_name, article_title, question_des} = useLoaderData();

  return (
      <div >
      <div className='space-y-1'>
          <h2 className='text-3xl font-bold my-5 leading-snug'>Question For Article : {article_title}</h2>
          <p className='mb-10 text-lg'>Question By : {user_name}</p>
          <p className='mb-10 text-lg'>Question : {question_des}</p>
          <hr/>
      </div>
    </div>
  )
}


export default SingleQuestion