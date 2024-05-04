import React, { useState, useEffect } from 'react';
import ManageDrivers from './ManageDrivers';

const printDriverReport = () => {
  const [DriverData, setDrivereData] = useState([]);

  useEffect(() => {
    console.log("Fetching article data...");
    // Fetch article data from backend API
    fetch('http://localhost:5000/all-drivers')
      .then(response => response.json())
      .then(data => {
        console.log("Driver data:", data);
        setDrivereData(data);
      })
      .catch(error => console.error('Error fetching article data:', error));
  }, []);
  
  return (
    <div>
      {/* Render the ManageCommunity component and pass communityData as props */}
      <ManageDrivers DriverData={DriverData} />
    </div>
  );
};

export default printDriverReport;