import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';

// Register the necessary components for the chart
ChartJS.register(ArcElement, Tooltip, Legend);

// Utils to generate random numbers and colors (mocked here; implement as needed)
const Utils = {
  numbers: (config: { count: number; min: number; max: number }) => {
    return Array.from({ length: config.count }, () => Math.floor(Math.random() * (config.max - config.min + 1) + config.min));
  },
  CHART_COLORS: {
    black:'#263238',
    red: '#d81b60',
    blue: '#1976d2',
    green: '#00796b',
    orange: '#ffa000',

    
    
  }
};

// Data generation for the chart
const data: ChartData<'pie', number[], string> = {
  labels: ['Black', 'Red', 'Blue', 'Green', 'Orange'],
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers({ count: 5, min: 0, max: 100 }),
      backgroundColor: Object.values(Utils.CHART_COLORS),
    },
  ]
};

// Component for the Pie Chart
const ChartPieChart: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Pie Chart'
      }
    }
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartPieChart;
