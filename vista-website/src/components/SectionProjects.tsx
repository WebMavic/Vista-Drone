import React from 'react'
import Image from "next/image";
import dummy from '@/assets/images/dummy.jpg'
import Chips from './ui/Chips';
import SectionLayout from './ui/SectionLayout';
function SectionProjects() {
  return (
    
   <SectionLayout>
    <div className="space-y-4">
    <Chips title='Vista Projects'/>
    <h2 className="text-4xl font-bold w-2/3 text-heading">Project Delivered in Market</h2>
    </div>
    <div className="w-full my-5">
      <div className="grid grid-cols-12 gap-2 h-[500px] ">
      <div className="col-span-4 rounded-md overflow-hidden relative  ">
        <div className="absolute opacity-0  hover:opacity-100 h-full w-full bg-black/50 transition-all duration-150 ease-in-out grid place-items-center">
          <div className="text-center">
          <h3 className="text-lg text-white">Overseas Surveying</h3>
          <span className="text-sm text-white">Abu Dhabi,UAE</span> 
          </div>
      </div>
        <Image src={dummy} alt="image" className="object-cover h-full w-full"  />
      </div>
      <div className="col-span-4 rounded-md overflow-hidden">
      <Image src={dummy} alt="image" className="object-cover h-full w-fulll"   />
      </div>
      <div className="col-span-4 row-span-2 rounded-md overflow-hidden">
      <Image src={dummy} alt="image" className="object-cover h-full w-full "   />
      </div>
      <div className="col-span-8 rounded-md overflow-hidden">
      <Image src={dummy} alt="image" className="h-full w-full object-cover"   />
      </div>
      </div>
    </div>
   </SectionLayout>
  )
}

export default SectionProjects