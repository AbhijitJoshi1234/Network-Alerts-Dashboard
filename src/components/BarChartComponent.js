import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data, title }) => {
    const ipCounts = data.reduce((acc, curr) => {
        const ip = curr.src_ip;
        if (!acc[ip]) acc[ip] = 0;
        acc[ip]++;
        return acc;
    }, {});

    const chartData = Object.keys(ipCounts).map(ip => ({ ip, count: ipCounts[ip] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10); // Top 10 IPs

    return (
        <>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="ip" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default BarChartComponent;
