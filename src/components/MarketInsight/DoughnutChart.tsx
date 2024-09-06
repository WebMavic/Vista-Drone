'use client'
import { ApexOptions } from 'apexcharts'
import React from 'react'
import Chart from 'react-apexcharts'


interface Props {
  options:ApexOptions
  series:ApexAxisChartSeries
  type : 'donut' | 'line' | 'area' | 'pie'
  height ? : string | number
  width ?: string | number
}

function DoughnutChart({options,series,type,width = 500,height}:Props) {
  return (
    <Chart
    options={options}
    series={series} 
    type = {type}
    width={width}
    height={height}/>
  )
}

export default DoughnutChart


const options:ApexOptions =  {
  chart : {
    id: "basic-bar"
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
} 
const series:ApexAxisChartSeries = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
]




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