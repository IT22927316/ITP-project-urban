import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditAnswers = () => {
  const {id} = useParams();
  const {user_name, admin_name, answer_des, que_index} = useLoaderData();

  //handle article submission
  const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;

      const user_name = form.user_name.value;
      const admin_name = form.admin_name.value;
      const answer_des = form.answer_des.value;
      const que_index = form.answer_des.value;
      

      const updateAnswerObj = {
        user_name, admin_name, answer_des, que_index
      }

      //console.log(articleObj)
      //update article data
      fetch(`http://localhost:5000/answer/${id}`,{
        method: "PATCH",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(updateAnswerObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Answer Updated Successfully!")
      })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Answer</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* First Row user-name */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="user_name" value="User Name" />
          </div>
          <TextInput id="user_name" name='user_name' type="text" placeholder="User Name" required defaultValue={user_name} />
        </div>

        {/* admin-Name */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="admin_name" value="Admin Name" />
          </div>
          <TextInput id="admin_name" name='admin_name' type="text" placeholder="Admin Name" required defaultValue={admin_name}/>
        </div>
      </div>

      {/* 3rd Row - answer description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="answer_des" value="Answer Description" />
        </div>
        <Textarea id="answer_des" name='answer_des' placeholder="Answer Description" required  className='w-full' rows={5} defaultValue={answer_des}/>
      </div>

      {/* 4th Row - question index */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="que_index" value="Question Index" />
        </div>
        <TextInput id="que_index" name='que_index' type="text" placeholder="User Question Index Here" required defaultValue={que_index}/>
      </div>

        <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/admin/dashboard/manage-question">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-500'>Update Answer</Button>
        </div>

    </form>
    </div>
  )
}

export default EditAnswers