import React from 'react'
import Image from "next/image";
import dummy from '@/assets/images/dummy.jpg'
import { CurrencyDollarIcon,SpeakerWaveIcon,SignalIcon } from "@heroicons/react/24/outline";
import DoughnutChart from './DoughnutChart';



function MarketOverView() {
  return (
    <section className="w-full bg-[#202020] sm:p-16 p-5">
    <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row gap-4 sm:gap-0">
        <div>
        <DoughnutChart/>

        </div>
     
      <div className="flex flex-col pointer-events-none ">
        <div className="text-white flex items-center gap-5">
          <CurrencyDollarIcon className="h-24 text-white"/>
          <div className="inline-flex flex-col">
          <h3 className="text-2xl">23.7 million</h3>
          <span className="font-light text-sm text-[#fef] sm:w-2/3 ">In 2024, the projected revenue in the Drones market in GCC</span>
          </div>
        </div>
        <div className="text-white flex items-center  gap-5">
          <SignalIcon className="h-24 text-white"/>
          <div className="inline-flex flex-col">
          <h3 className="text-2xl">4.49% growth</h3>
          <span className="font-light text-sm text-[#fef] sm:w-2/3 ">Increased focus in oil and gas, construction, and security (GCC)</span>
          </div>
        </div>
        <div className="text-white flex items-center gap-5 ">
          <SpeakerWaveIcon className="sm:h-24 h-[75px] text-white"/>
          <div className="inline-flex flex-col">
          <h3 className="text-2xl">3 sectors</h3>
          <span className="font-light text-sm text-[#fef] sm:w-2/3">Annual growth rate from 2024 to 2028 (GCC)</span>
          </div>
      </div>
      <button className="bg-accent text-white px-4 py-2 rounded-md mt-4">Learn More</button>

    </div>

    </div>
   
   </section>
  )
}

export default MarketOverView;


