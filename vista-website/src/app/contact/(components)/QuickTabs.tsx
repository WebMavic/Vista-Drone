import SectionLayout from '@/components/ui/SectionLayout'
import React from 'react'
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
  } from "@heroicons/react/24/outline";

function QuickTabs() {
  return (
    
    <div className="lg:my-10 my-10 flex lg:flex-col   w-full justify-between gap-4 items-center lg:items-start">
      <div className="flex flex-col lg:flex-row items-center gap-3 justify-center group transition-all duration-300 ">
        <div className="rounded-full border-[2px] border-accent p-3 shadow-md dark:text-white ">
          <PhoneIcon className='size-5 lg:size-8 group-hover:animate-rotateLeftandRight transition ' />
        </div>
        <div>
        <h2 className="text-xl uppercase text-center lg:text-left">Phone</h2>
        <p className="text-subheading text-center lg:text-left">+123 456 7890</p>

        </div>
      </div>
      <div className="flex gap-3 flex-col lg:flex-row items-center group">
        <div className="rounded-full border-[2px] border-accent p-3 shadow-md dark:text-white">
          <EnvelopeIcon className='size-5 lg:size-8  group-hover:animate-rotateLeftandRight' />
        </div>
        <div>
        <h2 className="text-xl uppercase text-center lg:text-left">E-mail</h2>
        <p className="text-subheading text-center lg:text-left">vista@uae.com</p>

        </div>
      </div>
      <div className="flex gap-3 flex-col lg:flex-row items-center group">
        <div className="rounded-full border-[2px] border-accent p-3 shadow-md dark:text-white">
          <MapPinIcon className='size-5 lg:size-8 group-hover:animate-rotateLeftandRight' />
        </div>
        <div>
          <h2 className="text-xl uppercase text-center lg:text-left">Location</h2>
          <p className="text-subheading text-center lg:text-left">UAE Street 2</p>
        </div>
      </div>
    </div>
 
  )
}

export default QuickTabs