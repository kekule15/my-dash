'use client'
import React from 'react'
import styles from '../chart/chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    visit: 4000,
    click: 2400,
  },
  {
    name: 'Mon',
    visit: 3000,
    click: 1800,
  },
  {
    name: 'Tues',
    visit: 2000,
    click: 1900,
  },
  {
    name: 'Wed',
    visit: 5000,
    click: 2300,
  },
  {
    name: 'Thur',
    visit: 3400,
    click: 2800,
  },
  {
    name: 'Fri',
    visit: 2900,
    click: 1200,
  },
  {
    name: 'Sat',
    visit: 6000,
    click: 2900,
  },
];

const ChartWidget = () => {
  return (
    <div className={styles.container}>

      <h2 className={styles.title}>
        Weekly Recap
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "$151c2c", border: "none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default ChartWidget