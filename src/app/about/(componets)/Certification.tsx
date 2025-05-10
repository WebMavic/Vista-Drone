'use client';  // This tells Next.js that this is a Client Component

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { certification } from '@/utils/images'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Chips = dynamic(() => import('@/components/ui/Chips'))
const SectionLayout = dynamic(() => import('@/components/ui/SectionLayout'))

const Certification = () => {
 const [activeSheet, setActiveSheet] = useState<null | any>();

  return (
    <SectionLayout className="bg-white relative">
      <div className="space-y-4">
        <Chips title="RCA" />
        <h2 className="text-3xl font-bold capitalize text-heading">
        Recognitions, Certifications & Accreditations
        </h2>
      </div>

      {activeSheet && (
         <div className="absolute inset-0 h-screen w-full">
         <div>
           <Image
             src={activeSheet}
             alt="Certification Image"
             className="h-96 w-full object-contain"
           />
           <Button onClick={() => setActiveSheet(null)} className="mt-4">Close</Button>
         </div>
       </div>
      )}


     

    
      
      <div className="mt-20">
        <Carousel className="mt-10" autoSlideMobile opts={{ loop: true ,align:"center"}}>
              <CarouselContent>
                {certification.map((cert, i) => (
                  <CarouselItem className="lg:basis-1/4" key={i} onClick={()=>setActiveSheet(cert)} >
                    <div className="relative lg:h-96 overflow-hidden rounded-2xl">
                      <Image
                        src={cert}
                        alt="cert"
                        className="h-full w-full object-contain"
                      />

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
      </div>

    </SectionLayout>
  )
}

export default Certification
