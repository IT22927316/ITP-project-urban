import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Button} from 'flowbite-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import userImg1 from "../assets/urbanlogo.jpeg";


const GenerateArticle = () => {
  const [allArticles, setAllArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-articles").then(res => res.json()).then(data => setAllArticles(data));
  },[])

  //generatepdf
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
      const textWidth = doc.getStringUnitWidth('Articles Report') * doc.internal.getFontSize() / doc.internal.scaleFactor;
      // Calculate the x-position to center the text
      const centerX = (doc.internal.pageSize.width - textWidth) / 2;
      // Add title (centered horizontally)
      doc.text('Article-List Report', centerX, 40);
  
    
  
    // Add a table to the PDF
    doc.autoTable({
      head: [['ARTICLE NAME', 'AUTHOR NAME','CATEGORY', 'APPROVED ADMIN', 'SUBMIT DATE']],
      body: allArticles.map(article => [
        article.articleTitle,
        article.authorName,
        article.category,
        article.approvedAdmin,
        article.submitDate,
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
    doc.text('Signature Of the Agriculture Expert : ...................................', 60, doc.autoTable.previous.finalY + 20);
    doc.text('Signature Of the Owner : ...................................', 60, doc.autoTable.previous.finalY + 40);
    
    // Save the PDF
    doc.save('article-list.pdf');
  };
}

  return (
    <div className='px-4 my-12'>
      <div className='flex justify-between items-start mb-8'>
          <h2>
              <p  className='text-3xl font-bold'>Article Report Preveiw</p><br/>
          </h2>
          
          <div className='flex flex-col items-end'>
            <div className='flex mt-4'>
                <Button onClick={generatePDF} type="submit" className='w-48 h-10 bg-green-700'>Print Report</Button>
            </div>
          </div>
        </div>

      {/* Table */}
      <Table className='lg:w-[1180px] '>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Article Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Approved Admin</Table.HeadCell>
          <Table.HeadCell><span>Submit Date</span></Table.HeadCell>
        </Table.Head>
        {
          allArticles.map((article, index) => <Table.Body className="divide-y" key={article._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index + 1}</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{article.articleTitle}</Table.Cell>
            <Table.Cell>{article.authorName}</Table.Cell>
            <Table.Cell>{article.approvedAdmin}</Table.Cell>
            <Table.Cell>{article.submitDate}</Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>

    </div>
  )
}

export default GenerateArticle

