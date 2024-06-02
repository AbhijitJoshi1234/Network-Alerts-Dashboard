import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SeverityBarChart = ({ data, title }) => {
    const severityCounts = data.reduce((acc, curr) => {
        const severity = curr.alert?.severity;
        if (!acc[severity]) acc[severity] = 0;
        acc[severity]++;
        return acc;
    }, {});

    const chartData = Object.keys(severityCounts).map(severity => ({ severity, count: severityCounts[severity] }));

    return (
        <>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="severity" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default SeverityBarChart;
