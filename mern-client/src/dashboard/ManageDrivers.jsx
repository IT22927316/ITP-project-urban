import React, { useEffect, useState } from 'react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Button } from 'flowbite-react';
import userImg1 from "../assets/urbanlogo.jpeg";
import { PiCheckCircleBold } from "react-icons/pi";

const ManageDrivers = () => {
  const [allDrivers, setAllDrivers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/all-driverdetails")
      .then(res => res.json())
      .then(data => setAllDrivers(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error, e.g., display an error message to the user
      });
  }, []);

  const generatePDF = () => {
    console.log("Generating PDF...");
    // Create a new PDF instance
    const doc = new jsPDF();

    // Add logo
    const img = new Image();
    img.src = userImg1;
    img.onload = function () {
      doc.addImage(this, 'JPEG', 10, 10, 20, 20); // Adjust position and size as needed

      // Add company name
      doc.setFontSize(16);
      doc.text('UrbanHarvestHub', 35, 20);

      // Add current date
      const currentDate = new Date().toLocaleDateString();
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(`Date: ${currentDate}`, 160, 25); // Adjust position as needed

      // Add line separating logo, company name, and date from title
      doc.setLineWidth(0.5); // Set line width
      doc.setDrawColor(0); // Set line color (black)
      doc.line(10, 30, doc.internal.pageSize.width - 10, 30); // Draw line

      // Add title
      doc.setFontSize(20);
      doc.setTextColor(47, 133, 97); // Set text color (RGB)
      // Calculate the width of the text
      const textWidth = doc.getStringUnitWidth('Delivery Driver Report') * doc.internal.getFontSize() / doc.internal.scaleFactor;
      // Calculate the x-position to center the text
      const centerX = (doc.internal.pageSize.width - textWidth) / 2;
      // Add title (centered horizontally)
      doc.text('Delivery Driver Report', centerX, 40);

      // Add a table to the PDF
      doc.autoTable({
        head: [['Number','Driver Name', 'Gender', 'License No', 'Vehicle Type','Vehicle No', 'Delivery Fee']],
        body: allDrivers.map((driverdetail, index) => [
          index + 1,
          driverdetail.name,
          driverdetail.gender,
          driverdetail.licenseNo,
          driverdetail.vehicleType,
          driverdetail.vehicleNo,
          driverdetail.deliveryFee
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

      // Add signature areas
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text('Signature Of the Distribution Manager : ...................................', 60, doc.autoTable.previous.finalY + 20);
      doc.text('Signature Of the Admin 1 : ...................................', 60, doc.autoTable.previous.finalY + 40);
      doc.text('Signature Of the Admin 2 : ...................................', 60, doc.autoTable.previous.finalY + 60);

      // Save the PDF
      doc.save('delivery-driver-report.pdf');
    };
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/driverdetail/${id}`, {
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
        // Update the state after deletion if needed
        // For example, fetch all inventory items again
      })
      .catch(error => {
        console.error('Error deleting driver profile:', error);
        // Handle error, e.g., display an error message to the user
      });
  };

  // Filter drivers based on search query
  const filteredDrivers = allDrivers.filter(driverdetail =>
    driverdetail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driverdetail.gender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='px-4 my-12'>
      <div className='flex justify-between items-start mb-8'>
        <h2 className='text-3xl font-bold'>Manage Driver Profiles</h2>

        {/* Search bar */}
        <div className="relative w-96 mb-4">
          <input
            type="text"
            placeholder="Search Drivers"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='h-10 pl-10 pr-10 rounded-full shadow-sm w-full border border-gray-300'
          />
          <div className="absolute top-0 left-0 mt-2.5 ml-4 text-gray-500">
            <FaSearch size="20px" />
          </div>
        </div>
      </div>

      <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
        <Button onClick={generatePDF} type="submit" className='w-48 h-10 bg-green-700'>Generate Report</Button>
      </div>
      <br />

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>
          <Table.HeadCell>License No</Table.HeadCell>
          <Table.HeadCell>Vehicle Type</Table.HeadCell>
          <Table.HeadCell>Vehicle No </Table.HeadCell>
          <Table.HeadCell>Delivery Fee</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        
        {filteredDrivers.map((driverdetail, index) => (
          <Table.Body className="divide-y" key={driverdetail._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{driverdetail.name}</Table.Cell>
              <Table.Cell>{driverdetail.gender}</Table.Cell>
              <Table.Cell>{driverdetail.licenseNo}</Table.Cell>
              <Table.Cell>{driverdetail.vehicleType}</Table.Cell>
              <Table.Cell>{driverdetail.vehicleNo}</Table.Cell>
              <Table.Cell>{driverdetail.deliveryFee}</Table.Cell>
              <Table.Cell>
                <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-driverdetails/${driverdetail._id}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(driverdetail._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
      {/* Delete Success Message */}
      {showDeleteSuccessMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded flex items-center">
          <PiCheckCircleBold className="h-6 w-6 mr-2" />
          <span>Driver Profile Deleted Successfully!</span>
        </div>
      )}
    </div>
  );
};

export default ManageDrivers;
