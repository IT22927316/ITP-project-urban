import React, { useState, useEffect } from 'react';
import GenerateArticle from './GenerateArticle';

const PrintArticleReport = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    console.log("Fetching article data...");
    // Fetch article data from backend API
    fetch('http://localhost:5000/all-articles')
      .then(response => response.json())
      .then(data => {
        console.log("Article data:", data);
        setArticleData(data);
      })
      .catch(error => console.error('Error fetching article data:', error));
  }, []);
  
  return (
    <div>
      {/* Render the ManageCommunity component and pass communityData as props */}
      <GenerateArticle articleData={articleData} />
    </div>
  );
};

export default PrintArticleReport;