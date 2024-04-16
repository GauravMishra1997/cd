// App.js
import React, { useState } from 'react';
import Table from './table';
import data from './data'; // Import your dummy data here
import './styles.css';





const App = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSort = key => {
    // Implement sorting logic here
  };

  const handleSearch = query => {
    // Implement search logic here
  };

  return (
    <div>
      <input type="text" placeholder="Search by College Name" onChange={e => handleSearch(e.target.value)} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;
