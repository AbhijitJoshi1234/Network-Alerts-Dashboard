import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = ({ data, title }) => {
    const categoryCounts = data.reduce((acc, curr) => {
        const category = curr.alert?.category;
        if (!acc[category]) acc[category] = 0;
        acc[category]++;
        return acc;
    }, {});

    const chartData = Object.keys(categoryCounts).map(category => ({ name: category, value: categoryCounts[category] }));

    return (
        <>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
                        {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}

export default PieChartComponent;
