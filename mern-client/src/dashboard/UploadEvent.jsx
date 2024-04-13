import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

const UploadEvent = () => {

  //handle event submission
  const handleEventSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      const event_name = form.event_name.value;
      const event_date = form.event_date.value;
      const event_location = form.event_location.value;
      const event_time = form.event_time.value;
      const event_fee = form.event_fee.value;
      const event_description = form.event_description.value;
      const event_image = form.event_image.value;
      
      const eventObj = {
        event_name, event_date, event_location, event_time, event_fee, event_description, event_image
      }

      console.log(eventObj)

      //send data to database
      fetch("http://localhost:5000/upload-event", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(eventObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Event Uploaded Successfully!")
        form.reset();
      })

  }

  return (
    <div className='px- my-12'>
      <h2 className='mb-3 text-3xl font-bold'>Upload An Event</h2>

      <form onSubmit={handleEventSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* First Row - event name*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_name" value="Event Title" />
          </div>
          <TextInput id="event_name" name='event_name' type="text" placeholder="Event Title" required />
        </div>

        {/* First Row - event fee */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_fee" value="Event Fee" />
          </div>
          <TextInput id="event_fee" name='event_fee' type="text" placeholder="Event Fee" required />
        </div>
      </div>

      {/* Second Row - event date*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_date" value="Event Date" />
          </div>
          <TextInput id="event_date" name='event_date' type="text" placeholder="Event Date" required />
        </div>

        {/* Second Row - event time*/}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_time" value="Event Time" />
          </div>
          <TextInput id="event_time" name='event_time' type="text" placeholder="Event Time" required />
        </div>
      </div>

        {/* 3rd Row - event location*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_location" value="Event Location" />
          </div>
          <TextInput id="event_location" name='event_location' type="text" placeholder="Event Location" required />
        </div>

        {/* 3rd Row - event image*/}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_image" value="Event Image URL" />
          </div>
          <TextInput id="event_image" name='event_image' type="text" placeholder="Event Image URL" required />
        </div>
      </div>



      {/* 4th Row - event description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="event_description" value="Event Description" />
        </div>
        <Textarea id="event_description" name='event_description' placeholder="Event Description Here" required  className='w-full' rows={10} />
      </div>

      <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/admin/dashboard">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-500'>Upload Event</Button>
        </div>

    </form>
    </div>
  )
}

export default UploadEvent