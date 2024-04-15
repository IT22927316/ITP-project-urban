import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageCommunity = () => {
  const [allCommunityforms, setAllCommunityforms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-communityforms")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setAllCommunityforms(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error, e.g., display an error message to the user
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/communityform/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        alert("Community Deleted Successfully!");
        // You may want to update the state here if needed
      })
      .catch(error => {
        console.error('Error deleting community:', error);
        // Handle error, e.g., display an error message to the user
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Communities</h2>
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Community Name</Table.HeadCell>
          <Table.HeadCell>Vision</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {allCommunityforms.map((communityform, index) => (
          <Table.Body className="divide-y" key={communityform._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{communityform.community_name}</Table.Cell>
              <Table.Cell>{communityform.community_vision}</Table.Cell>
              <Table.Cell>{communityform.location}</Table.Cell>
              <Table.Cell>{communityform.community_type}</Table.Cell>
              <Table.Cell>
                <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-communities/${communityform._id}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(communityform._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageCommunity;
