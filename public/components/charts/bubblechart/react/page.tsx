import React from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, Title, BubbleController } from 'chart.js';

// Registering the necessary chart components
ChartJS.register(
  Tooltip, Legend, Title, BubbleController
);

// Utility for colors and transparency
const CHART_COLORS = {
  grey: 'rgb(201, 203, 207)',  // #212121
  black: 'rgb(225,225,233)'  // #0d47a1
};

const transparentize = (color: string, opacity: number) => {
  const alpha = opacity * 255;
  const start = color.lastIndexOf(',');
  return `${color.substring(0, start)}, ${alpha})`;
};

// Generating random bubbles
const generateBubbles = (config: {count: number, rmin: number, rmax: number, min: number, max: number}) => {
  const bubbles = [];
  for (let i = 0; i < config.count; i++) {
    const value = Math.random() * (config.max - config.min) + config.min;
    bubbles.push({
      x: value,
      y: value,
      r: Math.random() * (config.rmax - config.rmin) + config.rmin
    });
  }
  return bubbles;
};

// Data for the bubble chart
const data = {
  datasets: [
    {
      label: 'Dataset 1',
      data: generateBubbles({ count: 7, rmin: 5, rmax: 15, min: 0, max: 100 }),
      borderColor: "#bdbdbd",
      backgroundColor: "#bdbdbd",
    },
    {
      label: 'Dataset 2',
      data: generateBubbles({ count: 7, rmin: 5, rmax: 15, min: 0, max: 100 }),
      borderColor:  "#212121",
      backgroundColor:  "#212121",
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Bubble Chart'
    }
  }
};

const ChartBubbleChart: React.FC = () => {
  return <Bubble data={data} options={options} />;
}

export default ChartBubbleChart;
