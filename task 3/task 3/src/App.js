// App.js
import React, { useState,  useEffect }from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import PieChart from './components/PieCharts';
import AttendanceTable from './components/AttendanceTable';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [attendanceData, setAttendanceData] = useState({});
  const [students, setStudents] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleSubmitForm = (formData) => {
    // Handle the form data submission logic here
    console.log('Form data submitted:', formData);
  };

  const containerStyle = {
    marginLeft: sidebarOpen ? '250px' : '0', // Adjust the width based on your sidebar width
    transition: 'margin-left 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
  };

  const pieChartData1 = {
    labels: ['Dry Fruits', 'Fruits', 'Leafy', 'Vegitables',],
    values: [20,30,25,25], 
    colors: ['#241468', '#9F0D7F', '#EA1179', '#F79BD3',],
  };
  
  const pieChartData2 = {
    labels:['Dry Fruits', 'Fruits', 'Leafy', 'Vegitables',],
    values: [30,15,20,35],
    colors: ['#241468', '#9F0D7F', '#EA1179', '#F79BD3',],
  };
  
  const pieChartData3 = {
    labels: ['Dry Fruits', 'Fruits', 'Leafy', 'Vegitables',],
    values:[25,25,25,25],
    colors:['#241468', '#9F0D7F', '#EA1179', '#F79BD3',],
  };
  
  const pieChartData4 = {
    labels:[ 'Dry Fruits', 'Fruits', 'Leafy', 'Vegitables',],
    values: [15,35,30,20],
    colors:['#241468', '#9F0D7F', '#EA1179', '#F79BD3',],

  };
  

  useEffect(() => {

    const mockStudents = [
      { id: 1, name: 'Dry Fruits',Nutrients: '5%',fatPercentage: '1%', nutrients: '15',energy:'yes'} ,
      { id: 2, name: 'Fruits', Nutrients: '20%',fatPercentage:'1%', nutrients: '20',energy:'yes'},
      { id: 3, name: 'Leafy', Nutrients: '30%',fatPercentage: '1%', nutrients: '30',energy:'yes'} ,
      { id: 4, name: 'Vegitables', Nutrients: '35%',fatPercentage: '1%', nutrients: '4',energy:'yes'},
      
    ];

    // Simulating a data fetch (replace it with your actual data fetching logic)
    setTimeout(() => {
      setStudents(mockStudents);
    }, 1000);
  }, []); // Run this effect only once when the component mounts

  const handleToggleAttendance = (studentId) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [studentId]: !prevData[studentId],
    }));
  };

  return (
    <div className="App" style={containerStyle}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} closeMenu={toggleSidebar} />
      <Card sidebarOpen={sidebarOpen} />
      <div className="heading-container" id="PieCharts">
        <h1>PieCharts</h1>
      </div>
      <div className="pie-charts-container">
        <PieChart data={pieChartData1} title="Aug" />
        <PieChart data={pieChartData2} title="Sep" />
        <PieChart data={pieChartData3} title="Oct" />
        <PieChart data={pieChartData4} title="Nov" />
      </div>
      
      <div id="Table">
        {students ? (
          <AttendanceTable
            students={students}
            attendanceData={attendanceData}
            onToggleAttendance={handleToggleAttendance}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Form onSubmit={handleSubmitForm} />
      <Footer />
    </div>
  );
}

export default App;