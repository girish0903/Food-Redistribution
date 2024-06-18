// src/components/AnalyticsPage.js

import React from 'react';
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell } from 'recharts';
import './AnalyticsPage.css';

const AnalyticsPage = () => {
    const sampleData = {
        totalUsers: 150,
        activeUsers: 120,
        inactiveUsers: 30,
        userGrowth: [
            { date: '2024-01-01', count: 50 },
            { date: '2024-02-01', count: 75 },
            { date: '2024-03-01', count: 100 },
            { date: '2024-04-01', count: 125 },
            { date: '2024-05-01', count: 150 },
        ],
        roleDistribution: [
            { role: 'NGO', count: 90 },
            { role: 'Restaurant', count: 60 },
        ],
    };

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="analytics-page">
            <h2>Analytics Dashboard</h2>
            <div className="chart-container">
                <h3>Total Users</h3>
                <div className="metrics">
                    <div className="metric">
                        <span className="metric-value">{sampleData.totalUsers}</span>
                        <span className="metric-label">Total Users</span>
                    </div>
                    <div className="metric">
                        <span className="metric-value">{sampleData.activeUsers}</span>
                        <span className="metric-label">Active Users</span>
                    </div>
                    <div className="metric">
                        <span className="metric-value">{sampleData.inactiveUsers}</span>
                        <span className="metric-label">Inactive Users</span>
                    </div>
                </div>
            </div>
            <div className="chart-container">
                <h3>User Growth Over Time</h3>
                <LineChart width={600} height={300} data={sampleData.userGrowth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className="chart-container">
                <h3>Role Distribution</h3>
                <PieChart width={600} height={300}>
                    <Pie
                        data={sampleData.roleDistribution}
                        cx={300}
                        cy={150}
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="count"
                    >
                        {sampleData.roleDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default AnalyticsPage;
