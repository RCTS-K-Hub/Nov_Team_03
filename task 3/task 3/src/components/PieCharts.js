// PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './PieCharts.css';

const PieChart = ({ data, title }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: data.colors,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: title,
          },
        },
        rotation: -0.5 * Math.PI,
      },
    });
  }, [data, title]);

  return (
    <div className="pie-chart" id ="Charts">
      <canvas ref={chartRef} width="100" height="100"></canvas>
    </div>
  );
};

export default PieChart;
