import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageQuestions = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-questions").then(res => res.json()).then(data => setAllQuestions(data));
  },[])

  //delete 1 Qustion
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/question/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("Question Deleted Successfully!")
      //setAllQuestions(data);
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Questions</h2>  

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Article Title</Table.HeadCell>
          <Table.HeadCell>Question</Table.HeadCell>
          <Table.HeadCell><span>Answer Or Delete</span></Table.HeadCell>
        </Table.Head>
        {
          allQuestions.map((question, index) => <Table.Body className="divide-y" key={question._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{question.user_name}</Table.Cell>
            <Table.Cell>{question.article_title}</Table.Cell>
            <Table.Cell>{question.question_des}</Table.Cell>
            <Table.Cell>
            <div className="flex items-center"> {/* Add this div with flex */}
        <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2" to={`/admin/dashboard/answer-question/${question._id}`}>
            Answer
        </Link>
        <button onClick={() => handleDelete(question._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600 ml-2'>
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


export default ManageQuestions