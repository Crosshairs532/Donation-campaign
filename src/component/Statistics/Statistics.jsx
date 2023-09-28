/* eslint-disable no-unused-vars */


import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { getLocal } from '../../utility/localS';
const Statistics = () => {

    const load = useLoaderData();
    const data = [
        { name: 'Total Donation', value: load.length - getLocal().length },
        { name: 'My Donation', value: getLocal().length }

    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };


    return (
        <div>
            <div className=' flex lg:flex-row flex-col gap-10 justify-center items-center my-10 lg:my-0'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div>
                    <div className=' flex gap-2 items-center'>Total Donation <div className=' w-[100px] h-[12px] bg-[#FF444A]'></div></div>
                    <div className=' flex gap-2 items-center'>Your Donation <div className=' w-[100px] h-[12px] bg-[#00C49F]'></div></div>

                </div>
            </div>

        </div>
    );
};

export default Statistics;
