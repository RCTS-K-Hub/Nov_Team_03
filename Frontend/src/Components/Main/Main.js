import React from 'react';
import Navbar from '../Nav/Nav';
import SideNav from '../SideNav/SideNav';
import Home from '../Home/Home';
import Cards from '../Cards/Cards';
import PieCharts from '../PieCharts/PieChart';
import Table from '../Table/Table';
import Form from '../Form/Form';
import Footer from '../Footer/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <SideNav />
      <Home/>
      <Cards />
      <PieCharts/>
      <Table/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;









