import Chips from '@/components/ui/Chips'
import SectionLayout from '@/components/ui/SectionLayout'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from '@/types/steps';
import Image from 'next/image';


interface Props {
  projects : Project[]
}


const Deliveries = ({projects}:Props) => {
  return (
    <SectionLayout>
    <div className="space-y-4">
      <Chips title="Vista Projects" />
      <h2 className="text-4xl font-bold text-heading">
        Our Deliverables in the Asset Inspection
      </h2>
    </div>
    <Carousel className="mt-10">
      <CarouselContent>
        {projects.map((project, i) => (
          <CarouselItem className="lg:basis-1/4" key={i}>
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
  </SectionLayout>
  )
}

export default Deliveries