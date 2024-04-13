import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

const UploadReview = () => {
  const reviewformCategories = [
    "KnowledgeHub",
    "Events",
    "Communities",
    "Inventory-Listings",
    "Payment-Methods",
    "Deliveries",
    "Weaatherhub"
  ]

  const [selectedReviewformCategory, setSelectedReviewformCategory] = useState(reviewformCategories[0]);

  const handleChangeSelectedValue = (event) => {
      console.log(event.target.value);
      setSelectedReviewformCategory(event.target.value);
  }

  //handle review form submission
  const handleReviewformSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      const full_name = form.full_name.value;
      const category = form.categoryName.value;
      const review_title = form.review_title.value;
      const content = form.content.value;
      const service_rate = form.service_rate.value;

      const reviewformObj = {
        full_name, category, review_title, content, service_rate
      }

      console.log(reviewformObj)

      //send data to database
      fetch("http://localhost:5000/upload-reviewform", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(reviewformObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Review Uploaded Successfully!")
        form.reset();
      })

  }

  return (
    <div className='w-full px-4 my-12'>
        <br/>
      <h2 className='mb-8 text-3xl font-bold text-center'>Upload A Review</h2>

      <form onSubmit={handleReviewformSubmit} className="flex flex-col gap-4">

        {/* First Row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="full_name" value="Full Name" />
          </div>
          <TextInput id="full_name" name='full_name' type="text" placeholder="Full Name" required />
        </div>

        {/* authorName */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="review_title" value="Review Title" />
          </div>
          <TextInput id="review_title" name='review_title' type="text" placeholder="Review Title" required />
        </div>
      </div>

        {/* Second Row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="service_rate" value="Service Rate" />
          </div>
          <TextInput id="service_rate" name='service_rate' type="text" placeholder="Service Rate" required />
        </div>

        {/* category */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Category Type"/>
          </div>

          <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedReviewformCategory} onChange={handleChangeSelectedValue}>
            {
              reviewformCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </Select>

        </div>
      </div>


        {/* Third Row: Review Description */}
        <div className='w-full'>
          <Label htmlFor="content" value="Review Description" />
          <Textarea id="content" name='content' placeholder="Write Your Review Description" required rows={10} />
        </div>

        <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/reviewpage">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-500'>Upload Review</Button>
        </div>
      </form>
    </div>
  )
}

export default UploadReview