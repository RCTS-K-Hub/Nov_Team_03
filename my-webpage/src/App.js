import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import Table from './components/Table';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file for general styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <SearchBar />
          <Cards />
          <Table />
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
