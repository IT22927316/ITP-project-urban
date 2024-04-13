import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageContactUs = () => {
  const [allContactusforms, setAllContactusforms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-contactusforms").then(res => res.json()).then(data => setAllContactusforms(data));
  },[])

  //delete 1 Qustion
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/contactusform/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("Contact Form Deleted Successfully!")
      //setAllContactusforms(data);
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage User Contacts</h2>  

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell><span>View Or Delete</span></Table.HeadCell>
        </Table.Head>
        {
          allContactusforms.map((contactusform, index) => <Table.Body className="divide-y" key={contactusform._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{contactusform.user_name}</Table.Cell>
            <Table.Cell>{contactusform.user_email}</Table.Cell>
            <Table.Cell>{contactusform.category}</Table.Cell>
            <Table.Cell>
            <div className="flex items-center"> {/* Add this div with flex */}
        <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2" to={`/admin/dashboard/singlecontactusform/${contactusform._id}`}>
            View
        </Link>
        <button onClick={() => handleDelete(contactusform._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 ml-2'>
            Delete
        </button>
        </div>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}


export default ManageContactUs