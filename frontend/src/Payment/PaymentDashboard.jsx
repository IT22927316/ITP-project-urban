import React,{useState, useEffect} from 'react';
// Import Tailwind CSS styles
import 'tailwindcss/tailwind.css';
import axios from 'axios';
import jsPDF from "jspdf";
import 'jspdf-autotable';

const PaymentDashboard = () => {
    const [checkouts, setCheckouts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const baseurl = 'http://localhost:4555';

    useEffect(() => {
        fetch(`${baseurl}/checkout/get`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setCheckouts(data.existingCheckOuts);
                }
            })
            .catch(error => console.error('Error fetching checkouts:', error));
    }, []);

    const handleDelete = (id) => {
      fetch(`${baseurl}/checkout/delete/${id}`, { method: 'DELETE' })
          .then(response => response.json())
          .then(data => {
              if (data.message === "Delete Successfull") {
                alert("Delete Successfull");
                  setCheckouts(prev => prev.filter(item => item._id !== id));
              }
          })
          .catch(error => console.error('Error deleting checkout:', error));
  };

  const handleEdit = (id) => {
    console.log('id=>>>', id);
    localStorage.setItem('uId', id);
    location.href = '/admin/dashboard/product-update';
  };
  const handleRefund = async (checkoutId) => {
    const updatedCheckout = checkouts.find(item => item._id === checkoutId);
    if (!updatedCheckout) {
        console.error('Checkout item not found');
        return;
    }

    // Set isRefund to true
    updatedCheckout.isRefund = true;

    try {
        const response = await axios.put(`${baseurl}/checkout/update/${checkoutId}`, updatedCheckout);
        if (response.data.success) {
            console.log('Refund status updated successfully!');
            // Update the state to reflect the change
            setCheckouts(prev => prev.map(item => item._id === checkoutId ? {...item, isRefund: true} : item));
        } else {
            throw new Error('Failed to update refund status');
        }
    } catch (error) {
        console.error('Error updating refund status:', error);
    }
};

const handleSearch = (e) => {
  setSearchQuery(e.target.value);
};

//search
// Filter checkouts based on searchQuery
const filteredCheckouts = checkouts.filter(item =>
  item.paymentID.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
);



//report generating✔✔❌❌

const handleGenerateReport = () => {
  const doc = new jsPDF();

  // Document title and metadata
  const reportTitle = "payment Report";
  const contactDetails = {
    email: "mailus@s.com",
    tel: "+94 76 333 2222",
    address: "No 221/B, Kandy Road, Malabe"
  };
  const today = new Date();
  const dateFormatted = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Setting up the document
  doc.setFont("helvetica");
  doc.setTextColor("#000000");
  doc.setFontSize(22);
  doc.text(reportTitle, 10, 20);

  // Generated date
  doc.setFontSize(10);
  doc.setTextColor("#333333");
  doc.text(`Generated on: ${dateFormatted}`, 5, 10);

  // Contact Details
  doc.setFontSize(12);
  doc.setTextColor("#000000");
  doc.text("Contact Us:", 14, 40);
  doc.setFontSize(10);
  doc.setTextColor("#555555");
  doc.text(`Tel: ${contactDetails.tel}`, 14, 45);
  doc.text(`Email: ${contactDetails.email}`, 14, 50);
  doc.text(`Address: ${contactDetails.address}`, 14, 55);
  doc.setDrawColor("#dddddd");
  doc.line(14, 70, 198, 70); // Drawing a line for separation

  // Define the columns
  const tableColumn = ["ID", "User name", "Item Name", "Refund Status","Quentity", "total Amount","Date","Payment Status"];
  // Assuming 'users' is already defined and loaded with data
  const tableRows = checkouts.map(items => [
    items._id,
    items.userName,
    items.itemName,
    items.isRefund?'Refunded':'Not Refunded',
    items.quantity,
    items.totalAmount,
    items.date,
    items.isPayment?'Paid':'Not Paid'
  ]);

  // Add table to the PDF
  doc.autoTable(tableColumn, tableRows, {
    startY: 65,
    theme: "striped",
    styles: { fontSize: 9, cellPadding: 4, overflow: 'linebreak' },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 25 },
      2: { cellWidth: 25 },
      3: { cellWidth: 30 },
      4: { cellWidth: 20 },
      5: { cellWidth: 25 },
      6: { cellWidth: 25 },
      7: { cellWidth: 30 }
    },
    headStyles: { fillColor: [22, 160, 133], textColor: '#FFFFFF', fontStyle: 'bold' },
    margin: { horizontal: 14 },
    bodyStyles: { valign: 'top' },
    showHead: 'everyPage',
    pageBreak: 'auto'
  });

  // Save the PDF with a formatted filename
  const fileName = `payment-report-${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}.pdf`;
  doc.save(fileName);
};



  return (
    <div className="container mx-auto">
      <header className="bg-green-600 p-4 text-white">
        <h1 className="text-xl">Payment Management</h1>
      </header>
      <nav className="bg-green-500 p-2">
        {/* Navigation items */}
      </nav>
      <section className="p-4">
      <div className="bg-green-200 p-4 flex justify-between items-center">
          <h2 className="text-lg">Admin Dashboard</h2>
          <div className="flex gap-2 items-center">
          <label htmlFor="search" className="sr-only">Search</label>
                    <input
                          id="search"
                          type="text"
                          placeholder="Search"
                          className="p-2 border border-gray-400"
                          value={searchQuery}
                          onChange={handleSearch}
                        />
            <button
              className="bg-green-700 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleGenerateReport}
            >
              Generate Report
            </button>
          </div>
        </div>

        <table className="min-w-full table-auto">
          <thead className="border-b">
            <tr>
              {/* Table headers */}
            </tr>
          </thead>
          <tbody>
          <tr className="text-center border-b">
                <th className="p-2">Payment ID</th>
                <th className="p-2">User Name</th>
                <th className="p-2">Item Name</th>
                <th className="p-2">Date</th>
                <th className="p-2">Total Amount</th>
                <th className="p-2">payment Status</th>
                <th className="p-2">Apply Refund</th>
                <th className="p-2">Action</th>
                {/* Table row items */}
              </tr>
            {filteredCheckouts.map((item, index) => (
              <tr className="text-center border-b" key={index}>
                <th className="p-2">{item.paymentID}</th>
                <th className="p-2">{item.userName}</th>
                <th className="p-2">{item.itemName}</th>
                <th className="p-2">{item.date}</th>
                <th className="p-2">{item.totalAmount}</th>
                <th className="p-2">{item.isPayment? "Payed" : "NotPayed"}</th>
                <th className="p-2">
                <button
                    className={`bg-red-500 hover:bg-red-700 text-white p-2 ${item.isRefund ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => !item.isRefund && handleRefund(item._id)}
                    disabled={item.isRefund}
                >
                    {item.isRefund ? 'Refunded' : 'Refund'}
                </button>

                  </th>
                <th className="p-2">
                  <button className="bg-green-500 text-white p-2 m-2" onClick={()=>handleEdit(item._id)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white p-2">Delete</button>
                </th>
                {/* Table row items */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PaymentDashboard;
