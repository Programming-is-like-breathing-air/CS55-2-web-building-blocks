import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Utils {
  months: (config: { count: number }) => string[];
  numbers: (config: { count: number, min: number, max: number }) => number[];
  transparentize: (color: string, opacity: number) => string;
}

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

// Assuming Utils and CHART_COLORS are available from your utilities or context
const utils: Utils = {
  months: ({ count }) => Array.from({ length: count }, (_, i) => `Month ${i + 1}`),
  numbers: ({ count, min, max }) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
  transparentize: (color, opacity) => `rgba(${color.match(/\d+/g)?.join(', ')}, ${opacity})`
};

const ChartLineChart = () => {
  const labels = utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: utils.numbers(NUMBER_CFG),
        borderColor: '#212121',
        tension: 0.4,
        borderWidth: 5,
      },
      {
        label: 'Dataset 2',
        data: utils.numbers(NUMBER_CFG),
        borderColor: "#616161",
        tension: 0.4,
        borderWidth: 5,
      }
    ]
  };

  const options:ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#000000', // Black color for legend text
          font: {
            weight: 'bold', // Bold font weight for legend text
          }
        }
      },
      title: {
        display: true,
        text: 'Line Chart',
        color: '#000000', // Black color for x-axis title
        font: {
          size: 18,
        },
      }
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

  return <Line data={data} options={options} />;
};

export default ChartLineChart;
