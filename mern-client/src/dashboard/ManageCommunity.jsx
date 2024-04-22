import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { FaSearch } from "react-icons/fa";
import { PiCheckCircleBold } from "react-icons/pi";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import userImg1 from "../assets/urbanlogo.jpeg";

const ManageCommunity = () => {
  const [allCommunityforms, setAllCommunityforms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

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
  }, [showDeleteSuccessMessage]); // Add showDeleteSuccessMessage to the dependency array


  const generatePDF = () => {
    console.log("Generating PDF...");
    // Create a new PDF instance
    const doc = new jsPDF();

     // Add logo
     const img = new Image();
     img.src = userImg1;
     img.onload = function () {
       doc.addImage(this, 'JPEG', 10, 10, 20, 20); // Adjust position and size as needed
  
    // Set initial y position for content
    let yPos = 20;
  
     // Add company name
     doc.setFontSize(16);
     doc.text('UrbanHarvestHub', 35, 20);

    // Add header
    doc.setFontSize(20);
    doc.setTextColor(0, 102, 0); // Dark green
       // Calculate the width of the text
       const textWidth = doc.getStringUnitWidth('Community List') * doc.internal.getFontSize() / doc.internal.scaleFactor;
       // Calculate the x-position to center the text
       const centerX = (doc.internal.pageSize.width - textWidth) / 2;
       // Add title (centered horizontally)
       doc.text('Community List', centerX, 40);
 
    doc.setTextColor(0); // Reset text color
    doc.setFontSize(12);
    const today = new Date().toLocaleDateString();
    doc.text(`Date: ${today}`, 150, 20);
  
    
  // Add a table to the PDF
  //yPos += 10; // Increment y position for table headers
  doc.autoTable({
   // startY: yPos,
    head: [['No','Community Name', 'Vision', 'Location', 'Category', 'Date', 'Author']],
    body: allCommunityforms.map((community,index) => [
      index + 1,
      community.community_name,
      community.community_vision,
      community.location,
      community.community_type,
      new Date(community.date_added).toLocaleString(),
      community.added_by
    ]),
    startY: 50, // Adjust starting Y position as needed
    headStyles: {
      fillColor: [47, 133, 90], // Green color for the head row
      textColor: [255, 255, 255] // White text color for the head row
    },
    alternateRowStyles: {
      fillColor: [223, 240, 216], // Light green color for alternate rows
      textColor: [0, 0, 0] // Black text color for alternate rows
    }
  });
  
    // Add footer
    const footerText = 'Signature Of the Community Manager';
    const footerHeight = 20;
    const pageHeight = doc.internal.pageSize.height;
    doc.setTextColor(0); // Black color
    doc.text('____________________________', 100, pageHeight - footerHeight-10); // Adjust position
    doc.text(footerText, 100, pageHeight - footerHeight); // Adjust position
 
    // Save the PDF
    doc.save('community-list.pdf');
};
  };
 

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
        setShowDeleteSuccessMessage(true);
        setTimeout(() => {
          setShowDeleteSuccessMessage(false);
        }, 5000); // Hide the message after 5 seconds
      })
      .catch(error => {
        console.error('Error deleting community:', error);
        // Handle error, e.g., display an error message to the user
      });
  };

   // Filter communities based on search query
   const filteredCommunityForms = allCommunityforms.filter(communityform => 
    communityform.community_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    communityform.community_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    communityform.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='px-4 my-12'>
      <div className='flex justify-between items-start mb-8'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Communities</h2>

        {/* Search bar */}
        <div className="relative w-96 mb-4">
          <input
            type="text"
            placeholder="Search Commmunity, Category or Location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='h-10 pl-10 pr-10 text-sm rounded-full shadow-sm w-full border border-gray-300'
          />
          <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
            <FaSearch size="20px" />
          </div>
        </div>
      </div>

       {/* Report Genarating Button */}
       <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
      <Button onClick={generatePDF} type="submit" className='w-48 h-10 bg-green-500  '>Generate Report</Button>
      </div>
      <br />

      {/* Table */}  
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Community Name</Table.HeadCell>
          <Table.HeadCell>Vision</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {filteredCommunityForms.map((communityform, index) => (
          <Table.Body className="divide-y" key={communityform._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{communityform.community_name}</Table.Cell>
              <Table.Cell>{communityform.community_vision}</Table.Cell>
              <Table.Cell>{communityform.location}</Table.Cell>
              <Table.Cell>{communityform.community_type}</Table.Cell>
              <Table.Cell>
                <Link className=" bg-yellow-300 px-4 py-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-communities/${communityform._id}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(communityform._id)} className='bg-red-600 px-4 py-1 font-semibold text-white hover:bg-sky-600'>Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>

      {/* Delete Success Message */}
      {showDeleteSuccessMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded flex items-center">
          <PiCheckCircleBold className="h-6 w-6 mr-2" />
          <span>Community Deleted Successfully!</span>
        </div>
      )}

    </div>
  );
};

export default ManageCommunity;
