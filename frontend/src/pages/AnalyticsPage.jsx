// AnalyticsPage.jsx
import React, { useEffect, useState } from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

export const AnalyticsPage = () => {
  const [weightData, setWeightData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const res = await fetch('/api/biometrics');
        const data = await res.json();
        
        setWeightData(data.weightData);
        setActivityData(data.activityData);
        setExerciseData(data.exerciseData);
      } catch (error) {
        console.error("Error fetching biometrics data:", error);
      }
    };

    fetchData();
  }, []);

  // Line chart for weight progress
  const weightChartData = {
    labels: weightData.map(entry => entry.date),
    datasets: [
      {
        label: 'Weight (kg)',
        data: weightData.map(entry => entry.weight),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  // Pie chart for activity distribution
  const activityChartData = {
    labels: activityData.map(activity => activity.activity),
    datasets: [
      {
        label: 'Time spent (mins)',
        data: activityData.map(activity => activity.time),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // Bar chart for exercise reps
  const exerciseChartData = {
    labels: exerciseData.map(exercise => exercise.exercise),
    datasets: [
      {
        label: 'Reps',
        data: exerciseData.map(exercise => exercise.reps),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return (
    <div className="analytics-page">
      <h2>User Performance Analytics</h2>

      <div className="chart-container">
        <h3>Weight Progress</h3>
        <Line data={weightChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      <div className="chart-container">
        <h3>Activity Distribution</h3>
        <Pie data={activityChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      <div className="chart-container">
        <h3>Exercise Reps</h3>
        <Bar data={exerciseChartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

