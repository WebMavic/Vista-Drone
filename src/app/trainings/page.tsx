import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const ImpactSection = dynamic(()=>import("./(components)/ImpactSection"))
const SectionHeader = dynamic(()=>import("@/components/SectionHeader"))
const Lenscard = dynamic(()=>import("./(components)/Lenscard"))
import SectionLayout from "@/components/ui/SectionLayout";
import Chips from "@/components/ui/Chips";
import Contact from "@/app/trainings/(components)/Contact";
import FAQ from "@/app/trainings/(components)/FAQ"



import hero from "@/assets/images/trainings/trainingsbg.png";
import about from "@/assets/images/trainings/heroimg.png";
import Expertise from "@/app/trainings/(components)/Expertise"
import Eligibility from "@/app/trainings/(components)/Eligibility"

export const metadata: Metadata = {
  title: "Trainings | Drone Pilot Training in Abu Dhabi – Vista Drone",
  description: "Learn to fly drones safely and smartly at an ACTVET Licensed Training Centre of Vista Drone. ",
};

function page() {
  return (
    <>
      <SectionHeader title="Fly with vista drone" image={hero} />
     
     <div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pt-4 lg:pr-8">
        <div className="lg:max-w-lg">
          {/* <h2 className="text-base/7 font-semibold text-accent">Lorem </h2> */}
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Learn to Fly with Confidence</p>
          <p className="mt-6 text-lg/8 text-gray-700">Vista Drone offers GCAA-certified drone pilot training programs (Online/Offline).
Whether you’re flying for fun or shaping a professional career, our expert-led
training equips you with the skills and certifications to operate drones safely,
smartly and with confidence.</p>
          {/* <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="absolute top-1 left-1 size-5 text-accent">
                  <path d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
                Lorem.
              </dt>
              <dd className="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="absolute top-1 left-1 size-5 text-accent">
                  <path d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
               Lorem.
              </dt>
              <dd className="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="absolute top-1 left-1 size-5 text-accent">
                  <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                  <path d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
               Lorem.
              </dt>
              <dd className="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
            </div>
          </dl> */}
        </div>
       <div className="mt-12 flex justify-left">
        <Link href="/enroll">
          <Button  className="w-48">
            Register Now
          </Button>
        </Link>
      </div> 
      </div>

     <Image
  src={about}
  width={540}
  height={775}
  alt="Product screenshot"
//   className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
className="hover:animate-wobble"
/>
    </div>
  </div>
      </div>



  <SectionLayout className="w-full min-h-screen text-center bg-primary2">
      <div className="space-y-3">
          <Chips title="  Special Offers – Enroll Now & Save" />
          <h2 className="text-4xl font-bold text-heading ">Vista Drone Offers RPSA Training</h2>
      </div>
      <Lenscard/>
 </SectionLayout>


         
      <Eligibility/>
    


   
      <Contact/>
 

<SectionLayout className="w-full min-h-screen text-center bg-primary2">
      <div className="space-y-3">
          {/* <Chips title="  Lorem" /> */}
          <h2 className="text-4xl font-bold text-heading ">Drone Training Designed for All Learners</h2>
      </div>
      <ImpactSection/>
    </SectionLayout>
<Expertise/>


 
<SectionLayout className="relative bg-white">
      <div className="mb-5 space-y-4">
        <Chips title="FAQs" />
        <h2 className="text-4xl font-bold capitalize dark:text-primary ">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="">
        
          <FAQ/>
        
      </div>
    </SectionLayout>
 

    </>
  );
}

export default page;
