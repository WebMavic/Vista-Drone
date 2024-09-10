
import Image from "next/image";
import React from 'react'
import solar1 from "@/assets/images/greenenergy/solar3.jpeg";







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
              <p className="text-base font-semibold leading-7 text-primary">Innovative Aerial Solutions for the Real Estate Industry
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-heading lg:text-4xl">Drone Services for Real Estate: Enhancing Marketing, Sales, and Site Management
              </h1>
              
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
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Statement of fact and the solution we offer</strong> Aerial photography and video-making through Drone has a lot of benefits for real estate marketing. Before the advent of drone technology, these images were captured by using traditional expensive methods. This presentation will highlights this advantages.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                    Creating Dramatic & Compelling Images
                    </strong> With the use of drone technology, we create more effective and attractive photographs. A well-captured drone shot looks incredibly professional and can easily attract customer interests in the blink of an eye.</span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                    Highlighting Property Features in Precise Detail

                    </strong> 
                    By using aerial photographs and videos, marketers can highlight the important features of a property including backyards, walking paths, pool, landscaping, etc. These key elements are important to many buyers.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                    Being a Standout in the Competitive Market

                    </strong> 
                    When your property listing has detailed aerial images providing more information than others, it will help you to be a standout among the crowd bringing in more revenue in the long run.

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


