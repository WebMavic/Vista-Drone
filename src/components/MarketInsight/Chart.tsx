'use client'
import { ApexOptions } from 'apexcharts'
import React from 'react'
import Chart  from 'react-apexcharts'


interface Props {
  options?:ApexOptions
  series:ApexAxisChartSeries | ApexNonAxisChartSeries
  type : 'donut' | 'line' | 'area' | 'pie'
  height ? : string | number
  width ?: string | number
}

function ApexChart({options={},series,type,width = 500,height}:Props) {
  return (
    <Chart
    options={{
      ...options,
      tooltip : {
        enabled: false,
      },
      plotOptions : {
        pie:{
          donut : {
            labels: {
              show : true
            }
          }
        }
      }
      
    }}
    series={series}
     
    type = {type}
    // width={width}
    height={height}/>
  )
}

export default ApexChart




