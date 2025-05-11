"use client";
import Chips from '@/components/ui/Chips'
import SectionLayout from '@/components/ui/SectionLayout'
import React, { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from '@/types/steps';
import Image from 'next/image';
import { PreviewModal } from '@/app/about/(components)/Certification';


interface Props {
  projects : Project[]
  heading?: string
  chipHeading?: string
}


const Deliveries = ({projects,heading,chipHeading}:Props) => {
   const [previewImage, setPreviewImage] = useState<any | null>(null);
  return (
    <SectionLayout className='bg-white'>
    <div className="space-y-4">
      <Chips title={chipHeading || "Vista Projects"} />
      <h2 className="text-4xl font-bold text-heading">{heading || "Default Heading"}</h2>
    </div>
    <Carousel className="mt-10" autoSlideMobile opts={{ loop: true ,align:"center"}} >
      <CarouselContent>
        {projects.map((project, i) => (
          <CarouselItem className="lg:basis-1/4 cursor-pointer" key={i} onClick={() => setPreviewImage(project.avatar)} >
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <div className="absolute h-full w-full  bg-black/60 opacity-0 transition-all duration-150 ease-in-out hover:opacity-100">
                <div className="p-5 text-left">
                  <h3 className="text-xl font-medium capitalize text-white">
                    {project.title}
                  </h3>
                  <span className="mt-3 block text-sm text-white">
                    {project.description}
                  </span>
                </div>
              </div>
              <Image
                src={project.avatar}
                alt="avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>

    {previewImage && <PreviewModal onClose={() => setPreviewImage(null)} image={previewImage} isOpen={!!previewImage} />}
  </SectionLayout>
  )
}

export default Deliveries