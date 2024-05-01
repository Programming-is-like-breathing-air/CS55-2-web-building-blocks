import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Utility functions (mocked here; replace with actual implementations)
const Utils = {
  months: ({ count }: { count: number }) => Array.from({ length: count }, (_, i) => `Month ${i + 1}`),
  rand: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
  CHART_COLORS: {
    red: 'rgba(255, 99, 132, 0.5)',
    blue: 'rgba(54, 162, 235, 0.5)'
  }
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Floating Bar Chart',
    },
  },
};

const ChartBarChart: React.FC = () => {
  const labels = Utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => [Utils.rand(-100, 100), Utils.rand(-100, 100)]),
        backgroundColor: '#212121',
        hoverBackgroundColor: '#616161'  // Darker shade for hover
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => [Utils.rand(-100, 100), Utils.rand(-100, 100)]),
        backgroundColor: '#616161',
        hoverBackgroundColor: '#9e9e9e'  // Darker shade for hover
      },
    ],
  };


  return <Bar options={options} data={data} />;
};

export default ChartBarChart;
