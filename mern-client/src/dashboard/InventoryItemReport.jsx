import React, { useState, useEffect } from 'react';
import ManageInventoryItems from './ManageInventoryItems';

const InventoryItemReport = () => {
  const [inventoryItemData, setInventoryItemData] = useState([]);

  useEffect(() => {
    console.log("Fetching inventory items data...");
    // Fetch Inventory Items data from backend API
    fetch('http://localhost:5000/all-inventoryitems')
      .then(response => response.json())
      .then(data => {
        console.log("Inventory Item data:", data);
        setInventoryItemData(data);
      })
      .catch(error => console.error('Error fetching inventory items data:', error));
  }, []);
  
  return (
    <div>
      {/* Render the ManageInventoryItems component and pass inventoryItemsData as props */}
      <ManageInventoryItems inventoryItemData={inventoryItemData} />
    </div>
  );
};

export default InventoryItemReport;