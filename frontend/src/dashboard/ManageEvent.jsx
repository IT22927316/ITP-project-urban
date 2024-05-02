import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageEvent = () => {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-events").then(res => res.json()).then(data => setAllEvents(data));
  },[])

  //delete 1 article
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/event/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("Event Delete Successfully!")
      //setAllEvents(data);
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Event</h2>  

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Event Name</Table.HeadCell>
          <Table.HeadCell>Event Date</Table.HeadCell>
          <Table.HeadCell>Event Fee</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {
          allEvents.map((event, index) => <Table.Body className="divide-y" key={event._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{event.event_name}</Table.Cell>
            <Table.Cell>{event.event_date}</Table.Cell>
            <Table.Cell>{event.event_fee}</Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-events/${event._id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(event._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}

export default ManageEvent