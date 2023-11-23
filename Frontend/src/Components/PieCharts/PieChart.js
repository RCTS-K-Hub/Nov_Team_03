import React, { useEffect, useRef, useState } from 'react';
import { Pie3D } from 'react-pie3d';
import './PieChart.css';

const PieChart = ({ chartData, chartName }) => {
  const [hoveredLabel, setHoveredLabel] = useState(null);

  const handleLabelHover = (label) => {
    setHoveredLabel(label);
  };

  const handleLabelLeave = () => {
    setHoveredLabel(null);
  };

  useEffect(() => {
    // If you need to perform any cleanup or additional logic, you can do it here
    // ...
  }, [chartData]);

  const customColors = ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0'];

  return (
    <div className={`programming-stats programming-stats-${chartData.id}`}>
      <div className="chart-container">
        <h1 className='Charts-head'>{chartName}</h1>
        <Pie3D
          data={chartData.data.map((value, index) => ({
            label: chartData.labels[index],
            value,
            color: customColors[index],
          }))}
          innerRadius={0}
          outerRadius={1}
          height={300}
          onSliceHover={handleLabelHover}
          onSliceLeave={handleLabelLeave}
          enableGlow={true} // Disable the glow effect for a cleaner look
        />
      </div>
      <div className="details">
        <ul>
          {chartData.labels.map((label, i) => (
            <li key={i} className={hoveredLabel === label ? 'hovered' : ''}>
              {`${label}: ${chartData.data[i]}%`}
            </li>
          ))}
        </ul>
        {hoveredLabel && (
          <div className="tooltip">
            <p>{hoveredLabel}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProgrammingLanguagesChart = () => {
  const chartData1 = {
    chartLabel: 'Tamil nadu',
    labels: ['phishing', 'Ransomware', 'cryptojacking', 'Social Engineering', 'Software Privacy'],
    data: [30, 25, 20, 15, 10],
  };
  const chartData2 = {
    chartLabel: 'Andhra pradesh',
    labels: ['phishing', 'Ransomware', 'cryptojacking', 'Social Engineering', 'Software Privacy'],
    data: [20, 30, 10, 25, 15],
  };
  const chartData3 = {
    chartLabel: 'Kerala',
    labels: ['phishing', 'Ransomware', 'cryptojacking', 'Social Engineering', 'Software Privacy'],
    data: [40, 20, 15, 15, 10],
  };
  const chartData4 = {
    chartLabel: 'Maharashtra',
    labels: ['phishing', 'Ransomware', 'cryptojacking', 'Social Engineering', 'Software Privacy'],
    data: [35, 10, 25, 15, 15],
  };

  return (
    <div className="Chart-container" id="Piecharts">
      <div className="Chart-overview">Top States</div>
      <div className="Chart">
        <PieChart chartData={{ ...chartData1, id: 1 }} chartName="Tamil Nadu" />
        <PieChart chartData={{ ...chartData2, id: 2 }} chartName="Andhra Pradesh" />
        <PieChart chartData={{ ...chartData3, id: 3 }} chartName="Kerala" />
        <PieChart chartData={{ ...chartData4, id: 4 }} chartName="Maharashtra" />
      </div>
    </div>
  );
};

export default ProgrammingLanguagesChart;
