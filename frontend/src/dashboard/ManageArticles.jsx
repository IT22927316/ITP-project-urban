import React, { useEffect, useState } from 'react'

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';


const ManageArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-articles").then(res => res.json()).then(data => setAllArticles(data));
  },[])

  //delete 1 article
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/article/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("Article Delete Successfully!")
      //setAllArticles(data);
    })
  }


  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Article</h2>  

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Article Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {
          allArticles.map((article, index) => <Table.Body className="divide-y" key={article._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{article.articleTitle}</Table.Cell>
            <Table.Cell>{article.authorName}</Table.Cell>
            <Table.Cell>{article.category}</Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-articles/${article._id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(article._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}

export default ManageArticles