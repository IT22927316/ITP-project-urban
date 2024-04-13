import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageAnswers = () => {
  const [allAnswers, setAllAnswers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-answers").then(res => res.json()).then(data => setAllAnswers(data));
  },[])

  //delete 1 Qustion
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/question/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("Answer Deleted Successfully!")
      //setAllAnwers(data);
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Answers</h2>  

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Admin Name</Table.HeadCell>
          <Table.HeadCell>Answer</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {
          allAnswers.map((answer, index) => <Table.Body className="divide-y" key={answer._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{answer.user_name}</Table.Cell>
            <Table.Cell>{answer.admin_name}</Table.Cell>
            <Table.Cell>{answer.answer_des}</Table.Cell>
            <Table.Cell>
            <div className="flex items-center"> {/* Add this div with flex */}
        <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2" to={`/admin/dashboard/edit-answers/${answer._id}`}>
            Edit
        </Link>
        <button onClick={() => handleDelete(answer._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 ml-2'>
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


export default ManageAnswers