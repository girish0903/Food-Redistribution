import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import './Analytics.css'; // Import the CSS file

// Chart.js imports for chart configuration
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

// Styled components for enhanced styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0; /* Light gray background */
  min-height: 100vh; /* Full viewport height */
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
`;

const ChartSection = styled.div`
  width: 100%;
  max-width: 1200px; /* Increased maximum width */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid layout */
  gap: 20px;
  margin-top: 20px;
`;

const ChartContainer = styled.div`
  background-color: #ffffff; /* White background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
  padding: 20px;
`;

const AnalyticsPage = () => {
  // Sample data for charts
  const data = {
    users: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Number of Users',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    },
    roles: {
      labels: ['NGOs', 'Restaurants'],
      datasets: [
        {
          label: 'Role Distribution',
          data: [300, 200],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        },
      ],
    },
  };

  // Options for chart customization
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <Container className='bodyy'>
      <Title>Food Redistribution Analytics</Title>
      <ChartSection>
        <ChartContainer>
          <h2>User Growth Over Time</h2>
          <Line data={data.users} options={options} />
        </ChartContainer>
        <ChartContainer>
          <h2>Role Distribution</h2>
          <Pie data={data.roles} options={options} />
        </ChartContainer>
        <ChartContainer>
          <h2>Monthly Donations</h2>
          <Bar data={data.users} options={options} />
        </ChartContainer>
      </ChartSection>
    </Container>
  );
};

export default AnalyticsPage;