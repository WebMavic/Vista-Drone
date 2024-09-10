
import Image from "next/image";
import React from 'react'
import solar1 from "@/assets/images/greenenergy/solar3.jpeg";
import { FaTableCellsLarge } from "react-icons/fa6";
import { GiCrackedGlass } from "react-icons/gi";
import { IoColorFilter } from "react-icons/io5";
import { BsLayersHalf } from "react-icons/bs";
import { RiHotspotFill } from "react-icons/ri";






export default function SectionContent() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-100">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary2-600">Green Energy</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Solar Panel Inspection & Monitoring</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              A few common defects observed during inspection of the solar farm as under :

              </p>
            </div>
          </div>
        </div>
        <div className="lg:-ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          
          <Image
          className="size-full object-cover rounded-xl lg:h-[80vh]"
          src={solar1}
          alt="header-image"
          placeholder="blur"
        />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FaTableCellsLarge  aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cell Mismatch Defect.</strong> Cell mismatches in photovoltaic (PV) cells can significantly impact system output and yield, potentially leading to hotspots causing browning, burns, or fire.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GiCrackedGlass aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cracks .</strong> Defects in photovoltaic systems, resulting from manufacturing processes, handling, packaging, transport, and reloading, and harsh climates like strong winds, snow, and hail, are common throughout their lifetime.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <IoColorFilter aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>
                    <strong className="font-semibold text-gray-900">Discolorations .</strong> PV systems can suffer from discoloration due to internal components like low-quality polymers or external factors like high temperatures and humidity, reducing sunlight entry and causing significant losses.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BsLayersHalf aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>
                    <strong className="font-semibold text-gray-900">Delamination  .</strong> Through a PV modules’ lifetime, adhesive bonds between solar cells’ materials can begin to hold moisture, causing severe delamination. These defects can also occur due to improper lamination methods and harsh weather conditions.


                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RiHotspotFill aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>
                    <strong className="font-semibold text-gray-900">Hotspots  .</strong> Overloaded regions on solar panels can cause warm spots due to poorly soldered cell connections or structural flaws, resulting in increased resistance and short-circuits, depreciating the productivity and goodwill of the PV system.


                  </span>
                </li>
              </ul>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


