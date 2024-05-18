import React from 'react'
import SectionLayout from './ui/SectionLayout'

function SectionClient() {
  return (
    
   <SectionLayout className="bg-white ">
   <div className="text-center space-y-2">
           <h2 className="text-4xl font-bold text-heading">Our Clients</h2>
           <p className="text-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit Minus dolor </p>
   </div>
   <div className="clients my-10 grid  grid-cols-2 gap-2  place-items-center sm:grid-cols-8 sm:gap-5">
         <div className="h-32 w-32 bg-gray-300 "></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
        
         
   </div>
  </SectionLayout>
  )
}

export default SectionClient