// Charts.js
import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import the Chart.js library
import './charts.css';


const Charts = ({ data }) => {
  useEffect(() => {
    // Cleanup function to destroy charts when the component is unmounted
    return () => {
      if (window.chart) {
        window.chart.destroy();
      }
    };
  }, []);

  const generateChartData = (plantData) => {
    return {
      labels: ['Water Required', 'Sunlight', 'Nutrients'],
      datasets: [
        {
          data: [plantData.waterRequired, plantData.sunlight, plantData.nutrients],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
  };

  return (
    <div className="charts-container">
      {data.map((plant, index) => (
        <div key={index} className="chart-item">
          <h2>{`Chart for ${plant.title}`}</h2>
          <Pie data={generateChartData(plant)} />
        </div>
      ))}
    </div>
  );
};

export default Charts;
