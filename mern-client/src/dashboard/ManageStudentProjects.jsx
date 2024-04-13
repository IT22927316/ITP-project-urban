import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageStudentProjects = () => {
  const [allStudentprojects, setAllStudentprojects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-studentprojects").then(res => res.json()).then(data => setAllStudentprojects(data));
  },[])

  //delete 1 student project
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/studentproject/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("Student Project Delete Successfully!")
      //setAllStudentprojects(data);
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Student Projects</h2>  

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Student Name</Table.HeadCell>
          <Table.HeadCell>Project Title</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {
          allStudentprojects.map((studentproject, index) => <Table.Body className="divide-y" key={studentproject._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{studentproject.student_name}</Table.Cell>
            <Table.Cell>{studentproject.project_title}</Table.Cell>
            <Table.Cell>{studentproject.project_category}</Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-studentproject/${studentproject._id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(studentproject._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}


export default ManageStudentProjects