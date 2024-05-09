import React from 'react';
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  Title,
  LinearScale,
  CategoryScale,
  PointElement,
  BubbleController,
  ChartOptions
} from 'chart.js';

// Register all necessary components for the bubble chart
ChartJS.register(
    Tooltip, Legend, Title, LinearScale, CategoryScale, PointElement, BubbleController
);

// Utility for generating random bubbles
const generateBubbles = (count: number, rmin: number, rmax: number, min: number, max: number) => {
  const bubbles = [];
  for (let i = 0; i < count; i++) {
    const value = Math.random() * (max - min) + min;
    bubbles.push({
      x: value,
      y: value,
      r: Math.random() * (rmax - rmin) + rmin
    });
  }
  return bubbles;
};

// Data for the bubble chart
const data = {
  datasets: [
    {
      label: 'Dataset 1',
      data: generateBubbles(7, 5, 15, 0, 100),
      borderColor: "rgba(201, 203, 207, 0.8)",  // Using the RGBA format
      backgroundColor: "rgba(201, 203, 207, 0.5)",
    },
    {
      label: 'Dataset 2',
      data: generateBubbles(7, 5, 15, 0, 100),
      borderColor: "rgba(33, 33, 33, 0.8)",   // Using the RGBA format
      backgroundColor: "rgba(33, 33, 33, 0.5)",
    }
  ]
};

// Chart options with styling
const options: ChartOptions<'bubble'> = {
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
      text: 'Bubble Chart',
      color: '#000000', // Black color for x-axis title
      font: {
        size: 18,
        weight: 'bold',
        family: 'Arial',
      }
    }
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: '#000000',  // Ensure black color
        font: {
          weight: 'bold',
        }
      },
      title: {
        display: true,
        text: 'X-Axis',
        color: '#000000',
        font: {
          size: 16,
          weight: 'bold',
        }
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: '#000000',  // Ensure black color
        font: {
          weight: 'bold',
        }
      },
      title: {
        display: true,
        text: 'Y-Axis',
        color: '#000000',
        font: {
          size: 16,
          weight: 'bold',
        }
      }
    }
  }
};

const ChartBubbleChart: React.FC = () => {
  return <Bubble data={data} options={options} />;
}

export default ChartBubbleChart;
