import React from 'react'
import Image from "next/image";
import dummy from '@/assets/images/dummy.jpg'

import DoughnutChart from './DoughnutChart';
import MarketInNumbers from './MarketInNumbers';



function MarketOverView() {
  return (
    <section className="w-full bg-[#e9e9e9] dark:bg-[#222831]  sm:p-16 p-5">
    <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row gap-4 sm:gap-0">
          <div>
          <MarketInNumbers/>
          <button className="bg-accent text-white px-4 py-2 rounded-md mt-4">Learn More</button>
          </div>
        <div><DoughnutChart/></div>
     


    </div>
   
   </section>
  )
}

export default MarketOverView;


