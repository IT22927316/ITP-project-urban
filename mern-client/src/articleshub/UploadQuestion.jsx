import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

import qnapic from "../assets/qnapage1.jpeg";


const UploadQuestion = () => {
  
  //handle question submission
  const handleQuestionSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      const user_name = form.user_name.value;
      const question_des = form.question_des.value;
      const article_title = form.article_title.value;
      

      const questionObj = {
        user_name, question_des, article_title
      }

      console.log(questionObj)

      //send data to database
      fetch("http://localhost:5000/upload-question", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(questionObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Question Uploaded Successfully!")
        form.reset();
      })

  }

  return (
    <div className='w-full px-4 my-12'>
        <br/>
        <Card style={{
            //backgroundImage: `url(${qnapic})`,
            //backgroundSize: 'cover',       // This will ensure that the image covers the whole card
            //backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
            //backgroundPosition: 'center'   // This centers the image in the card 
            }}>
      <h2 className='mb-8 text-3xl font-bold text-center'>Upload Your Question</h2>

      <form onSubmit={handleQuestionSubmit} className="flex flex-col flex-wrap gap-4">
      {/* First Row */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="user_name" value="Your Name" />
        </div>
        <TextInput id="user_name" name='user_name' type="text" placeholder="Your Name Here!" required />
      </div>

      {/* Second Row */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="article_title" value="Article Title" />
        </div>
        <TextInput id="article_title" name='article_title' type="text" placeholder="Article Title Here !" required />
      </div>

      {/* 3rd Row - question description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="question_des" value="Question" />
        </div>
        <Textarea id="question_des" name='question_des' placeholder="Enter Your Question Here !" required  className='w-full' rows={10} />
      </div>

      <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/qnasection">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-700'>Submit Question</Button>
        </div>
    </form>
    </Card>
    </div>
  )
}

export default UploadQuestion