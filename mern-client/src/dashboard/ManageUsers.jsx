import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageUsers = () => {
  const [allUserdetails, setAllUserdetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-userdetails").then(res => res.json()).then(data => setAllUserdetails(data));
  },[])

  //delete 1 USER
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/userdetail/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("User Deleted Successfully!")
      //setAllUserdetails(data);
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Users</h2>  

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Full Name</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {
          allUserdetails.map((userdetail, index) => <Table.Body className="divide-y" key={userdetail._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{userdetail.full_name}</Table.Cell>
            <Table.Cell>{userdetail.username}</Table.Cell>
            <Table.Cell>{userdetail.user_email}</Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-userdetails/${userdetail._id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(userdetail._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}

export default ManageUsers