import SectionLayout from '@/components/ui/SectionLayout'
import React from 'react'
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
  } from "@heroicons/react/24/outline";

function QuickTabs() {
  return (
    
    <div className="lg:my-10 my-10 flex lg:flex-col   w-full justify-center gap-4 items-center lg:items-start">
      <div className="flex flex-col lg:flex-row items-center gap-3 justify-center">
        <div className="rounded-full border-[3px] border-accent p-3 shadow-md dark:text-white">
          <PhoneIcon height={50} />
        </div>
        <div>
        <h2 className="text-xl uppercase">Call Us</h2>
        <p className="text-subheading">+123 456 7890</p>

        </div>
      </div>
      <div className="flex gap-3 flex-col lg:flex-row items-center">
        <div className="rounded-full border-[3px] border-accent p-3 shadow-md dark:text-white">
          <EnvelopeIcon height={50} />
        </div>
        <div>
        <h2 className="text-xl uppercase">Mail Us</h2>
        <p className="text-subheading">vista@uae.com</p>

        </div>
      </div>
      <div className="flex gap-3 flex-col lg:flex-row items-center">
        <div className="rounded-full border-[3px] border-accent p-3 shadow-md dark:text-white">
          <MapPinIcon height={50} />
        </div>
        <div>
          <h2 className="text-xl uppercase">Location</h2>
          <p className="text-subheading">UAE Street 2</p>
        </div>
      </div>
    </div>
 
  )
}

export default QuickTabs