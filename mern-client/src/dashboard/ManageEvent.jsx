import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Button } from 'flowbite-react';
import userImg1 from "../assets/urbanlogo.jpeg";

const ManageEvent = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetch("http://localhost:5000/all-events")
    .then(res => res.json())
    .then(data => setAllEvents(data))
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle error, e.g., display an error message to the user
    });
  },[])

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
      const textWidth = doc.getStringUnitWidth('Event Details Report') * doc.internal.getFontSize() / doc.internal.scaleFactor;
      // Calculate the x-position to center the text
      const centerX = (doc.internal.pageSize.width - textWidth) / 2;
      // Add title (centered horizontally)
      doc.text('Event Details Report', centerX, 40);

      // Add a table to the PDF
      doc.autoTable({
        head: [['Number', 'Event Name', 'Location', 'Date', 'Time', 'Fee']],
        body: allEvents.map((event, index) => [
          index + 1,
          event.event_name,
          event.event_location,
          event.event_date,
          event.event_time,
          event.event_fee
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
      doc.text('Signature Of the Event Planner : ...................................', 60, doc.autoTable.previous.finalY + 20);
      doc.text('Signature Of the Finance Officer : ...................................', 60, doc.autoTable.previous.finalY + 40);
      doc.text('Signature Of the Owner : ...................................', 60, doc.autoTable.previous.finalY + 60);

      // Save the PDF
      doc.save('event-details-report.pdf');
    };
  };


  //delete 1 article
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/event/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("Event Delete Successfully!")
      //setAllEvents(data);
    })
  }

  // Filter inventory items based on search query
  const filteredEvents = allEvents.filter(event =>
    event.event_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.event_date.toString().includes(searchQuery.toLowerCase()) ||
    event.event_fee.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='px-4 my-12'>
      <div className='flex justify-between items-start mb-8'>
        <h2 className='text-3xl font-bold'>Manage Events</h2>

        {/* Search bar */}
        <div className="relative w-96 mb-4">
          <input
            type="text"
            placeholder="Search Event"
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
          <Table.HeadCell>Event Name</Table.HeadCell>
          <Table.HeadCell>Event Date</Table.HeadCell>
          <Table.HeadCell>Event Fee</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>

        {filteredEvents.map((event, index) => <Table.Body className="divide-y" key={event._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{event.event_name}</Table.Cell>
            <Table.Cell>{event.event_date}</Table.Cell>
            <Table.Cell>{event.event_fee}</Table.Cell>
            <Table.Cell>
              <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/edit-events/${event._id}`}>
                Edit
              </Link>
              <button onClick={() => handleDelete(event._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}

export default ManageEvent