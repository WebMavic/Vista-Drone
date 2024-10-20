import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { certification } from '@/utils/images'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'

const Chips = dynamic(()=>import('@/components/ui/Chips')) 
const SectionLayout = dynamic(()=>import('@/components/ui/SectionLayout'))

const Certification = () => {
  return (
    <SectionLayout className='bg-white'>
        <div className="space-y-4">
          <Chips title="" />
          <h2 className="text-4xl font-bold capitalize text-heading ">
          Our Certification & Accreditation
          </h2>
        </div>

        <div className='mt-20' >
            <div className='lg:grid lg:grid-cols-3 gap-10 hidden '>
                {certification.map((cert, index) => (
                    <div key={index} className='cursor-pointer overflow-hidden  hover:border rounded-lg transition duration-300 hover:scale-105 hover:-translate-y-5 ease-in-out'>
                        <Image src={cert} alt="certification" className="object-contain lg:object-cover h-[35rem]" />
                    </div>
                ))}
            </div>
            
            <div className='block lg:hidden'>
              <Carousel opts={{
                align :"center",
                loop :true,
              }}>
                  <CarouselContent>
                  {certification.map((cert, index) => (
                    <CarouselItem key={index}>
                    <div className='cursor-pointer overflow-hidden rounded-lg '>
                        <Image src={cert} alt="certification" className="object-contain lg:object-cover " />
                    </div>
                    </CarouselItem>
                ))}
                  </CarouselContent>
              </Carousel>
                
            </div>
        </div>


    </SectionLayout>
  )
}

export default Certification