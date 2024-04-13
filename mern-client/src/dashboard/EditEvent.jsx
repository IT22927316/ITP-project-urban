import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EditEvent = () => {
  const {id} = useParams();
  const {event_name, event_date, event_location, event_time, event_fee, event_description, event_image} = useLoaderData();

  

  //handle event submission
  const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;

      const event_name = form.event_name.value;
      const event_date = form.event_date.value;
      const event_location = form.event_location.value;
      const event_time = form.event_time.value;
      const event_fee = form.event_fee.value;
      const event_description = form.event_description.value;
      const event_image = form.event_image.value;
      

      const updateEventObj = {
        event_name, event_date, event_location, event_time, event_fee, event_description, event_image
      }

      //console.log(eventObj)
      //update event data
      fetch(`http://localhost:5000/event/${id}`,{
        method: "PATCH",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(updateEventObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Event Updated Successfully!")
      })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Event Details</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* First Row - event title*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_name" value="Event Title" />
          </div>
          <TextInput id="event_name" name='event_name' type="text" placeholder="Event Title" required defaultValue={event_name} />
        </div>

        {/* First row - event fee */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_fee" value="Event Fee" />
          </div>
          <TextInput id="event_fee" name='event_fee' type="text" placeholder="Event Fee" required defaultValue={event_fee}/>
        </div>
      </div>

    {/* 2nd Row - event date*/}
    <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_date" value="Event Date" />
          </div>
          <TextInput id="event_date" name='event_date' type="text" placeholder="Event Date" required defaultValue={event_date} />
        </div>

        {/* 2nd row - event time */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_time" value="Event Time" />
          </div>
          <TextInput id="event_time" name='event_time' type="text" placeholder="Event Time" required defaultValue={event_time}/>
        </div>
      </div>


      {/* 3rd Row - event location*/}
    <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_location" value="Event Location" />
          </div>
          <TextInput id="event_location" name='event_location' type="text" placeholder="Event Location" required defaultValue={event_location} />
        </div>

        {/* 3rd row - event image*/}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="event_image" value="Event Image URL" />
          </div>
          <TextInput id="event_image" name='event_image' type="text" placeholder="Event Image URL" required defaultValue={event_image}/>
        </div>
      </div>
      
      {/* 4th Row - Event description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="event_description" value="Event Description" />
        </div>
        <Textarea id="event_description" name='event_description' placeholder="Event Description Here" required  className='w-full' rows={10} defaultValue={event_description}/>
      </div>

      <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/admin/dashboard/manage-event">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-500'>Update Event</Button>
        </div>

    </form>
    </div>
  )
}
export default EditEvent