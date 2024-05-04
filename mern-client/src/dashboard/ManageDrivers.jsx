import React, { useEffect, useState } from 'react'
import { Button } from 'flowbite-react';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const ManageDrivers = () => {
  const [allDrivers, setAllDrivers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-driverdetails").then(res => res.json()).then(data => setAllDrivers(data));
  },[])

//generate PDF
const generatePDF = ()=>{
  console.log("Generate Pdf...");
  const doc = new jsPDF();

  //Add a title to the PDF
  doc.text('UrbanHarvest', 10, 5);
  doc.text('Event-List', 10,10);

  //add a pdf to the pdf
doc.autoTable({
  head: [['Driver Name', 'License No', 'Vehicle Type']],
  body: allDrivers.map(driverdetail => [
    driverdetail.name,
    driverdetail.licenseNo,
    driverdetail.vechicleType
  ]),
});

//save pdf
doc.save('Driver-List.pdf');

};

  //delete 1 driver
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/driverdetail/${_id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data =>  {
      alert("Driver Delete Successfully!")
      //setAllDrivers(data);
    })
  }


  return (
    <div className='px-1 my-12'>
      

      <div className='flex justify-between items-start mb-8'>
          <h2>
              <p  className='text-3xl font-bold'>Manage Drivers</p><br/>
          </h2>
          <div className='flex flex-col items-end'>
            <div className='flex mt-4'>
                <Button onClick={generatePDF} type="submit" className='w-48 h-10 bg-green-700'>Print Report</Button>
            </div>
          </div>
        </div>

      {/* Table */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>
          <Table.HeadCell>Vehicle Type</Table.HeadCell>
          <Table.HeadCell>Number Plate</Table.HeadCell>
          <Table.HeadCell>Delivery Fee</Table.HeadCell>
          <Table.HeadCell><span>Edit Or Delete</span></Table.HeadCell>
        </Table.Head>
        {
          allDrivers.map((driverdetail, index) => <Table.Body className="divide-y" key={driverdetail._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{driverdetail.name}</Table.Cell>
            <Table.Cell>{driverdetail.gender}</Table.Cell>
            <Table.Cell>{driverdetail.vehicleType}</Table.Cell>
            <Table.Cell>{driverdetail.vehicleNo}</Table.Cell>
            <Table.Cell>{driverdetail.deliveryFee}</Table.Cell>
            <Table.Cell>

              
              <Link className="font-medium text-cyan-600 hover:bg-sky-200 dark:text-cyan-500 mr-10 justify-between" to={`/admin/dashboard/edit-driverdetails/${driverdetail._id}`}>
                Edit
              </Link>
              <Button onClick={() => handleDelete(driverdetail._id)} className='bg-red-600 px-2 py-1 font-semibold text-white rounded-lg hover:bg-sky-600 w-auto h-6'>Delete</Button>

            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}

export default ManageDrivers