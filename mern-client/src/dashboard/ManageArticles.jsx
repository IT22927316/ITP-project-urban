import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Button} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const ManageArticles = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:5000/all-articles")
    .then(res => res.json())
    .then(data => setAllArticles(data))
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle error, e.g., display an error message to the user
    });
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


  const filteredArticles = allArticles.filter(article => 
    article.articleTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className='px-4 my-12'>

<div className='flex justify-between items-start mb-8'>
          <h2 className='text-3xl font-bold'>
              Manage Articles
          </h2>
          <div className='flex flex-col items-end'>
            {/* Search bar with rounded shape and icon */}
            <div className="relative w-96"> {/* Adjusted width */}
              <input
                type="text"
                placeholder="Search articles"
                onChange={(e) => setSearchQuery(e.target.value)}
                className='h-10 pl-10 pr-10 rounded-full shadow-sm w-full border border-gray-300' // Adjusted styles for rounded shape
              />
              {/* Search icon */}
              <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
                <FaSearch className="" size="20px"/> {/* Adjusted for correct sizing */}
              </div>
            </div>
            <div className='flex mt-4'>
              
              <Link to="/admin/dashboard/generate-report-article">
                <Button className='ml-4 items-center rounded-full w-40 h-10 bg-green-700'>Generate Report</Button>
              </Link>
            </div>
          </div>
        </div>

      
      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Article Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {filteredArticles.map((article, index) => <Table.Body className="divide-y" key={article._id}>
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