import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';


const QPage = () => {
    const [questions, setQuestions] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/all-questions").then(res => res.json()).then(data => setQuestions(data));
      }, [])

  return (
    <div className='px-4 my-12'>
        <br/>
        <h2 className='text-3xl font-bold text-center'>Questions</h2>
      
    <br/>
      {/* Table */}
      <Table>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Article Title</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Question</Table.HeadCell>
        </Table.Head>
        {
          questions.map((question, index) => <Table.Body className="divide-y" key={question._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{question.article_title}</Table.Cell>
            <Table.Cell>{question.user_name}</Table.Cell>
            <Table.Cell>{question.question_des}</Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>

  )
}

export default QPage