import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const ManageInventoryItems = () => {
  const [allInventoryItems, setAllInventoryItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/all-inventoryitems")
      .then(res => res.json())
      .then(data => setAllInventoryItems(data));
  }, []);

  // Delete 1 inventory item
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/inventoryitem/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Inventory Item Delete Successfully!");
        // setAllInventoryItems(data);
      });
  };

  // Filter inventory items based on search query
  const filteredInventoryItems = allInventoryItems.filter(inventoryItem =>
    inventoryItem.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inventoryItem.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inventoryItem.unitOfMearsurement.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inventoryItem.quantity.toString().includes(searchQuery.toLowerCase()) ||
    inventoryItem.manufactureDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inventoryItem.expireDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inventoryItem.price.toString().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='px-4 my-12'>
      <div className='flex justify-between items-start mb-8'>
        <h2 className='mb-8 text-3xl font-bold'>Manage Your Inventory Item</h2>

        {/* Search bar */}
        <div className="relative w-96 mb-4">
          <input
            type="text"
            placeholder="Search Inventory Items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='h-10 pl-10 pr-10 rounded-full shadow-sm w-full border border-gray-300'
          />
          <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
            <FaSearch size="20px" />
          </div>
        </div>
      </div>
      
      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Product Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Unit of Measurement</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Manufacture Date</Table.HeadCell>
          <Table.HeadCell>Expire Date</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {filteredInventoryItems.map((inventoryItem, index) => (
          <Table.Body className="divide-y" key={inventoryItem._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{inventoryItem.item_name}</Table.Cell>
              <Table.Cell>{inventoryItem.category}</Table.Cell>
              <Table.Cell>{inventoryItem.unitOfMearsurement}</Table.Cell>
              <Table.Cell>{inventoryItem.quantity}</Table.Cell>
              <Table.Cell>{inventoryItem.manufactureDate}</Table.Cell>
              <Table.Cell>{inventoryItem.expireDate}</Table.Cell>
              <Table.Cell>{inventoryItem.price}</Table.Cell>
              <Table.Cell>
                <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-inventoryitems/${inventoryItem._id}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(inventoryItem._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageInventoryItems;
