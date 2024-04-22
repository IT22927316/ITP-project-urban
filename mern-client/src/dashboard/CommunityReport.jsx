import React, { useState, useEffect } from 'react';
import ManageCommunity from './ManageCommunity';

const CommunityReport = () => {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    console.log("Fetching community data...");
    // Fetch community data from backend API
    fetch('http://localhost:5000/all-communityforms')
      .then(response => response.json())
      .then(data => {
        console.log("Community data:", data);
        setCommunityData(data);
      })
      .catch(error => console.error('Error fetching community data:', error));
  }, []);
  
  return (
    <div>
      {/* Render the ManageCommunity component and pass communityData as props */}
      <ManageCommunity communityData={communityData} />
    </div>
  );
};

export default CommunityReport;