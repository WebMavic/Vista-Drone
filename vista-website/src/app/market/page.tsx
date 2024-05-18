import DoughnutChart from '@/components/MarketInsight/DoughnutChart'
import MarketInNumbers from '@/components/MarketInsight/MarketInNumbers'
import SectionHeader from '@/components/SectionHeader'
import Chips from '@/components/ui/Chips';
import {  CubeTransparentIcon} from "@heroicons/react/24/outline";
import React from 'react'


function page() {
  return (
    <>
    <SectionHeader title='Market Trends'/>

    <section className="w-full relative p-5 sm:px-32 sm:py-16 bg-primary">
    <div className=' bg-white shadow-md rounded-lg p-5'>
        <MarketInNumbers/>
      </div>
        <div className="flex flex-col-reverse mt-10 sm:flex-row gap-10 w-full h-full">
            <div>
              <DoughnutChart/>
            </div>
         
          <div className="right space-y-3">
          <h1 className="text-4xl font-bold text-heading">Key Trends</h1>
     
            <ol className='text-subheading list-disc *:my-2 font-light sm:w-2/3 text-left leading-relaxed'>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!</li>
             
            </ol>
         
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row-reverse mt-20 gap-10 w-full h-full">
            <div>
              <DoughnutChart/>
            </div>
         
          <div className="right space-y-3">
          <h1 className="text-4xl font-bold text-heading">Key Challenges</h1>
     
            <ol className='text-[#555] list-disc *:my-2 font-light sm:w-2/3 text-left leading-relaxed'>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!</li>
             
            </ol>
         
          </div>
        </div>
      </section>

      <section className='w-full p-5 sm:px-32 sm:py-16 bg-secondary'>
      <div className="text-center space-y-2 ">
        <Chips title="Driving factors" />
        <h2 className="text-2xl text-primary capitalize ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit 
        </h2>
      </div>
          <div className="flex gap-3 my-5 flex-wrap sm:flex-nowrap">
            {factors.map((factor, index) => (
              <div className="flex flex-col items-center p-2 gap-3 " key={index}>
                  <CubeTransparentIcon height={100} className="text-accent" />
                  <h1 className="text-lg font-semibold text-white text-center">{factor.title}</h1>
                  <p className="text-[#c2c2c2] text-sm">{factor.description}</p>
              </div>
            
            ))}
          </div>
      </section>

   

    </>

  )
}

export default page;


const factors = [
  {
    title: 'Disaster Relief',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum',
    icon: <img
    src="https://placehold.co/20X20"
    className="h-20 rounded-full"
    alt="Logo"/> ,
  },
  {
    title: 'Research and Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum',
    icon: <img
    src="https://placehold.co/20X20"
    className="h-20 rounded-full text-accent"
    alt="Logo"/> 
  },
  {
    title: 'Remote Sensing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum',
    icon: <img
    src="https://placehold.co/20X20"
    className="h-20 rounded-full text-accent"
    alt="Logo"/> 
  },
  {
    title: 'Affordable Integrated Chips',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum',
    icon: <img
    src="https://placehold.co/20X20"
    className="h-20 rounded-full text-accent"
    alt="Logo"/> 
  },
]
