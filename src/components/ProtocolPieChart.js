import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const ProtocolPieChart = ({ data, title }) => {
    const protocolCounts = data.reduce((acc, curr) => {
        const proto = curr.proto;
        if (!acc[proto]) acc[proto] = 0;
        acc[proto]++;
        return acc;
    }, {});

    const chartData = Object.keys(protocolCounts).map(proto => ({ name: proto, value: protocolCounts[proto] }));

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

export default ProtocolPieChart;
