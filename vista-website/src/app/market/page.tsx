import DoughnutChart from '@/components/MarketInsight/DoughnutChart'
import MarketInNumbers from '@/components/MarketInsight/MarketInNumbers'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

function page() {
  return (
    <>
    <SectionHeader title='Market Trends'/>

    <section className="w-full relative p-5 sm:px-32 sm:py-16 sm:bg-white bg-base">
    <div className='absolute hidden bg-white shadow-md rounded-lg -top-20  w-4/5 '>
        <MarketInNumbers/>
      </div>
        <div className="flex flex-col-reverse sm:flex-row mt-20 gap-10 w-full h-full">
            <div>
              <DoughnutChart/>
            </div>
         
          <div className="right space-y-3">
          <h1 className="text-4xl font-bold text-heading">Key Trends</h1>
     
            <ol className='text-[#555] list-disc *:my-2 font-light sm:w-2/3 text-left leading-relaxed'>
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

      <section className='w-full p-5 sm:px-32 sm:py-16  bg-base'>
        <h1 className="text-4xl font-bold text-center text-heading">Driving Factors</h1>

          <div className="flex gap-3 my-5 flex-wrap sm:flex-nowrap">
            {factors.map((factor, index) => (
              <div className="flex flex-col items-center p-2 gap-3 rounded-md shadow-sm bg-white" key={index}>
                  {factor.icon}
                  <h1 className="text-lg font-bold text-heading text-center">{factor.title}</h1>
                  <p className="text-[#555] text-sm">{factor.description}</p>
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!',
    icon: <img
    src="https://placehold.co/20X20"
    className="h-20 rounded-full"
    alt="Logo"/> ,
  },
  {
    title: 'Research and Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!',
    icon: <img
    src="https://placehold.co/20X20"
    className="h-20 rounded-full"
    alt="Logo"/> 
  },
  {
    title: 'Remote Sensing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!',
    icon: <img
    src="https://placehold.co/20X20"
    className="h-20 rounded-full"
    alt="Logo"/> 
  },
  {
    title: 'Affordable Integrated Chips',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta facilis delectus ab natus praesentium qui voluptatem quos saepe hic nemo nihil, ratione in laborum beatae!',
    icon: <img
    src="https://placehold.co/20X20"
    className="h-20 rounded-full"
    alt="Logo"/> 
  },
]
