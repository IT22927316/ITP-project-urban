import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Button} from 'flowbite-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


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
  
    // Add a title to the PDF
    doc.text('UrbanHarvestHub', 10, 5);
    doc.text('Article-List', 10, 10);
    
  
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
    });
  
    // Save the PDF
    doc.save('article-list.pdf');
  };


  return (
    <div className='px-4 my-12'>
      <div className='flex justify-between items-start mb-8'>
          <h2>
              <p  className='text-3xl font-bold'>Print Article Report</p><br/>
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

