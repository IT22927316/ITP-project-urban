import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

const UploadAnswer = () => {
  
  //handle answer submission
  const handleAnswerSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      const user_name = form.user_name.value;
      const admin_name = form.admin_name.value;
      const answer_des = form.answer_des.value;
      

      const answerObj = {
        user_name, admin_name, answer_des
      }

      console.log(answerObj)

      //send data to database
      fetch("http://localhost:5000/upload-answer", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(answerObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Answer Uploaded Successfully!")
        form.reset();
      })

  }

  return (
    <div >
        
      <h2 className='mb-8 text-3xl font-bold text-center'>Upload Answer</h2>

      <form onSubmit={handleAnswerSubmit} className="flex flex-col flex-wrap gap-4">
      {/* First Row */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="user_name" value="User Name" />
        </div>
        <TextInput id="user_name" name='user_name' type="text" placeholder="User Name Here!" required />
      </div>

      {/* Second Row */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="admin_name" value="Admin Name" />
        </div>
        <TextInput id="admin_name" name='admin_name' type="text" placeholder="Admin Name Here !" required />
      </div>

      {/* 4th Row - Answer description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="answer_des" value="Answer" />
        </div>
        <Textarea id="answer_des" name='answer_des' placeholder="Enter Your Answer Here !" required  className='w-full' rows={7} />
      </div>

      <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/admin/dashboard/manage-question">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-500'>Submit Answer</Button>
        </div>

    </form>
    </div>
  )
}

export default UploadAnswer