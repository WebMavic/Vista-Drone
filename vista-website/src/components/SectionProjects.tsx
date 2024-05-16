import React from 'react'
import Image from "next/image";
import dummy from '@/assets/images/dummy.jpg'
function SectionProjects() {
  return (
    
   <section className="w-full sm:px-32 px-5 h-full py-16  bg-[#F6F1EE] ">
   <span className="text-[#ED7D31] uppercase tracking-wider ">Vista Projects</span>
    <h2 className="text-4xl font-bold sm:w-2/3 text-heading">Project Delivered in Market</h2>
    <div className="w-full my-5">
      <div className="grid grid-cols-12 gap-2 h-[500px] ">
      <div className="col-span-4  bg-slate-300 rounded-md overflow-hidden relative  ">
        <div className="absolute opacity-0  hover:opacity-100 h-full w-full bg-black/50 transition-all duration-150 ease-in-out grid place-items-center">
          <div className="text-center">
          <h3 className="text-lg text-white">Overseas Surveying</h3>
          <span className="text-sm text-white">Abu Dhabi,UAE</span> 
          </div>
      </div>
        <Image src={dummy} alt="image" className="object-cover h-full w-full"  />
      </div>
      <div className="col-span-4  bg-slate-300 rounded-md overflow-hidden">
      <Image src={dummy} alt="image" className="object-cover h-full w-fulll"   />
      </div>
      <div className="col-span-4  bg-slate-300 row-span-2 rounded-md overflow-hidden">
      <Image src={dummy} alt="image" className="object-cover h-full w-full "   />
      </div>
      <div className="col-span-8  bg-slate-300 rounded-md overflow-hidden">
      <Image src={dummy} alt="image" className="h-full w-full object-cover"   />
      </div>
      </div>
    </div>
   </section>
  )
}

export default SectionProjects