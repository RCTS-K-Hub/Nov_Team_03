// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import CardsList from './cards';
import Charts from './charts'; // Import your Charts component
import TableComponent from './table'; // Import TableComponent
import FormDataForm from './formdata'; // Import FormDataForm
import Footer from './footer';
import './App.css';

const Home = () => (
  <div style={{ textAlign: 'center', fontSize: '5em', fontWeight: 'bold', marginTop: '50px', color: 'maroon' }}>
    WELCOME!
  </div>
);

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (term) => {
    // Add logic to handle the search term, e.g., filter data, redirect, etc.
    console.log('Search term:', term);
  };

  const chartsData = [
    { title: 'Hydrangea', waterRequired: 30, sunlight: 50, nutrients: 20 },
    { title: 'Impatiens', waterRequired: 40, sunlight: 30, nutrients: 30 },
    { title: 'Truncata', waterRequired: 50, sunlight: 30, nutrients: 20 },
    { title: 'Andean Lupin', waterRequired: 60, sunlight: 20, nutrients: 20 },
  ];

  return (
    <div className="App">
      <Router>
        <Navbar toggleSidebar={toggleSidebar} handleSearch={handleSearch} />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<CardsList />} />
            <Route path="/charts" element={<Charts data={chartsData} />} />
            <Route path="/table" element={<TableComponent />} />
            <Route path="/formdata" element={<FormDataForm />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
