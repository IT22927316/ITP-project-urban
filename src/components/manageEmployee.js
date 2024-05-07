import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Table } from 'flowbite-react';
import { Button } from 'flowbite-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ManageEmployee = () => {
  const [posts, setPosts] = useState([]);

  retrivePost(() => {
    axios("http://localhost:8005/posts")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setPosts(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error, e.g., display an error message to the user
      });
  }, []);

  const generatePDF = () => {
    console.log("Generating PDF...");
    // Create a new PDF instance
    const doc = new jsPDF();
  
    // Add a title to the PDF
    doc.text('Employees List', 10, 10);
  
    // Add a table to the PDF
    doc.autoTable({
      head: [['Employee ID', 'Name', 'Email', 'Job Role']],
      body: posts.map(post => [
        post.Employee_ID,
        post.Name,
        post.Email,
        post.jobRole
      ]),
    });
  
    // Save the PDF
    doc.save('employees-list.pdf');
  };

  const handleDelete = (id) => {
    axios(`http://localhost:8005/post/delete/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        alert("Employee Deleted Successfully!");
        // You may want to update the state here if needed
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
        // Handle error, e.g., display an error message to the user
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Employees</h2>
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Employee ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Job Role</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {posts.map((post, index) => (
          <Table.Body className="divide-y" key={post.Employee_ID}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{post.Employee_ID}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{post.Name}</Table.Cell>
              <Table.Cell>{post.Email}</Table.Cell>
              <Table.Cell>{post.jobRole}</Table.Cell>
              <Table.Cell>
                <button onClick={() => handleDelete(post._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      <br></br>
      <Button onClick={generatePDF} type="submit" className='w-48 h-10 bg-green-700'>Generate Report</Button>
    </div>
  );
};

export default ManageEmployee;