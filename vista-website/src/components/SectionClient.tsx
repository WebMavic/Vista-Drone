import React from 'react'

function SectionClient() {
  return (
    
   <section className="w-full h-full sm:px-32 px-5 py-16 sm:bg-base bg-white ">
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
  </section>
  )
}

export default SectionClient