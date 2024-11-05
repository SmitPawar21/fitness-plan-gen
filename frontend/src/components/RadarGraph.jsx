import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, RadialLinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, RadialLinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);

export const RadarGraph = () => {
  const [userData, setUserData] = useState([80, 70, 90, 85, 75]);

  const data = {
    labels: ['body fat %', 'hydration level', 'metabolism rate', 'blood pressure', 'steps/day'],
    datasets: [
      {
        label: 'User Fitness',
        data: userData,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  const handleChangeData = () => {
    // Update data dynamically (example)
    setUserData([90, 85, 80, 75, 88]); // New values for user fitness
  };

  return (
    <div style={{width:'130%', height:'120%', boxSizing:'border-box', padding:'2vh', margin:'auto'
    }}>
      <Radar data={data} options={options}  />
    </div>
  );
};
