import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LineChartComponent = ({ data, title }) => {
    const transformedData = data.reduce((acc, curr) => {
        const date = new Date(curr.timestamp).toLocaleDateString();
        if (!acc[date]) acc[date] = 0;
        acc[date]++;
        return acc;
    }, {});

    const chartData = Object.keys(transformedData).map(date => ({ date, count: transformedData[date] }));

    return (
        <>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default LineChartComponent;
