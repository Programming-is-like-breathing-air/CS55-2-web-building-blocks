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
  ChartOptions,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// Utility functions
const Utils = {
  months: ({ count }: { count: number }) => Array.from({ length: count }, (_, i) => `Month ${i + 1}`),
  rand: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
  CHART_COLORS: {
    red: 'rgba(255, 99, 132, 0.5)',
    blue: 'rgba(54, 162, 235, 0.5)'
  }
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#000000', // Black color for legend text
        font: {
          weight: 'bold', // Bold font weight for legend text
        }
      }
    },
    title: {
      display: true,
      text: 'Floating Bar Chart',
      color: '#000000', // Black color for x-axis title
      font: {
        size: 18,
        family: 'Arial',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#000000', // Black color for x-axis ticks
        font: {
          weight: 'bold',
        }
      },
      title: {
        display: true,
        text: 'Month',
        color: '#000000', // Black color for x-axis title
        font: {
          size: 16,
          weight: 'bold', // Bold font weight for x-axis title
        },
      },
    },
    y: {
      ticks: {
        color: '#000000', // Black color for y-axis ticks
        font: {
          weight: 'bold',
        }
      },
      title: {
        display: true,
        text: 'Value',
        color: '#000000', // Black color for y-axis title
        font: {
          size: 16,
          weight: 'bold', // Bold font weight for y-axis title
        },
      },
    },
  }
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
        hoverBackgroundColor: '#616161'
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => [Utils.rand(-100, 100), Utils.rand(-100, 100)]),
        backgroundColor: '#616161',
        hoverBackgroundColor: '#9e9e9e'
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartBarChart;
