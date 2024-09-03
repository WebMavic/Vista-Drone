import Chips from '@/components/ui/Chips'
import SectionLayout from '@/components/ui/SectionLayout'
import { certification } from '@/utils/images'
import Image from 'next/image'
import React from 'react'

const Certification = () => {
  return (
    <SectionLayout className='bg-white'>
        <div className="space-y-4">
          <Chips title="Certification & Accreditation" />
          <h2 className="text-4xl font-bold capitalize text-heading ">
            Let our certification speak behalf of us
          </h2>
        </div>

        <div className='mt-20'>
            <div className='grid lg:grid-cols-3 gap-10'>
                {certification.map((cert, index) => (
                    <div key={index} className='cursor-pointer overflow-hidden  hover:border rounded-lg transition duration-300 hover:scale-105 hover:-translate-y-5 ease-in-out'>
                        <Image src={cert} alt="certification" className="object-cover h-[35rem]" />
                    </div>
                ))}
            </div>
        </div>


    </SectionLayout>
  )
}

export default Certification