'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
function DoughnutChart() {
  return (
    <Doughnut data={data} className='h-48 text-white'/>
  )
}

export default DoughnutChart




ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Saudi Arab', 'UAE', 'Qatar', 'Kuwait', 'Oman', 'Orange'],
  
  datasets: [
    {
      label: 'Done revenue by Country in 2024',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['#543310','#73512C','#B08F70','#8A704B','#AE926C','#D0BA98'],
      borderWidth: 0,
    },
  ],
};