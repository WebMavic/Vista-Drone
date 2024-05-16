import React from 'react'
import dummy from '@/assets/images/dummy.jpg'
import Image from "next/image";
function SectionExpertise() {
  return (
    
   <section className="w-full sm:px-32 px-5 sm:py-16 py-5 sm:bg-base bg-white ">
   <div className="text-center space-y-3">
         <span className="text-accent uppercase tracking-wider ">Our EXPERTISE</span>
         <h2 className="text-4xl font-bold text-heading ">Why Choose Us</h2>
         <p className="text-[#555] sm:w-2/6 mx-auto ">Lorem ipsum dolor sit amet consectetur adipisicing elit Minus dolor </p>
   </div>
  
     <div className="flex gap-5 justify-center items-center my-10 flex-col sm:flex-row ">
       {expertises.map((expertise,index) => (
         <div className="flex flex-col p-5 h-[415px] w-[300px] rounded-md shadow-sm sm:bg-white bg-base  items-center justify-around text-center hover:bg-accent hover:text-white sm:hover:-translate-y-6 transition-all duration-200 ease-in-out cursor-pointer " key={index}>
           <div className="image-container">
             <Image src={expertise.avatar} alt="image" className="object-cover rounded-full"  height={100}  />
           </div>
           <div className="space-y-2">
           <h3 className="text-lg">{expertise.title}</h3>
           <p className="text-sm text-center font-light">{expertise.description}</p>
           </div>

         </div>
       ))}
     </div>
 
</section>
  )
}

export default SectionExpertise


const expertises = [
    {
      title : 'Extensive experience in  successfully delivering projects',
      avatar : dummy,
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
    {
      title : 'Sound technical expertise in  UAV and understanding of the market',
      avatar : dummy,
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
      
    },
    {
      title : 'Outstanding team of  professionals with a proven track record',
      avatar : dummy,
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
     
    },
  
  ]