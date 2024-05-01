import React, { useEffect } from 'react';
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

// Registering components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DataPoint {
  year: number;
  count: number;
}

const data: DataPoint[] = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Acquisitions by Year',
    },
  },
};

const AcquisitionsChart: React.FC = () => {
  const chartData = {
    labels: data.map(row => row.year.toString()),
    datasets: [
      {
        label: 'Acquisitions by year',
        data: data.map(row => row.count),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  };

  return (
    // <div className=" bg-white shadow-lg rounded-lg">
      <Bar options={options} data={chartData} />
    // </div>
  );
};

export default AcquisitionsChart;
