import SectionLayout from '@/components/ui/SectionLayout'
import React from 'react'
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
  } from "@heroicons/react/24/outline";

function QuickTabs() {
  return (
    <SectionLayout className="w-full bg-primary p-5 sm:px-32 sm:py-5">
    <div className="mt-10 flex w-full justify-center gap-4">
      <div className="space-y-3 p-3  text-center">
        <div className="mx-auto w-min rounded-full border-[3px] border-accent p-3 shadow-md dark:text-white">
          <PhoneIcon height={50} />
        </div>
        <h2 className="text-xl uppercase">Call Us</h2>
        <p className="text-subheading">+123 456 7890</p>
      </div>
      <div className="space-y-3 p-3  text-center">
        <div className="mx-auto w-min rounded-full border-[3px] border-accent p-3 shadow-md dark:text-white">
          <EnvelopeIcon height={50} />
        </div>
        <h2 className="text-xl uppercase">Mail Us</h2>
        <p className="text-subheading">vista@uae.com</p>
      </div>
      <div className="space-y-3 p-3  text-center">
        <div className="mx-auto w-min rounded-full border-[3px] border-accent p-3 shadow-md dark:text-white">
          <MapPinIcon height={50} />
        </div>
        <h2 className="text-xl uppercase">Location</h2>
        <p className="text-subheading">UAE Street 2</p>
      </div>
    </div>
  </SectionLayout>
  )
}

export default QuickTabs