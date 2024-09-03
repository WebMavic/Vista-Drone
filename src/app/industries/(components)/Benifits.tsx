import React from 'react'
import SectionLayout from '@/components/ui/SectionLayout'
import safety from '@/assets/icons/safety.png'
import Image from 'next/image';
import { ShieldAlert } from 'lucide-react';
type ben = {
    title: string;
    content: string;
    icon: string;

}

interface Benefit {
        content: ben[];
  
    }

function Benifits({content}:Benefit) {
  return (
    <SectionLayout className="space-y-6 bg-white">
    <h3 className="text-2xl mb-10 text-center font-bold capitalize text-primary lg:text-4xl ">
          Benifits you get
        </h3>

      <div className="grid lg:grid-cols-3 gap-4 mt-20">
      {content.map((benefit, index) => (
        <div key={index} className="flex flex-col cursor-pointer items-center space-y-2 text-center  p-5 ">
          <div className='bg-blue-400 flex justify-center items-center' id='modern' >
          {/* <Image src={safety} alt="icon" className="size-20 p-1.5"  /> */}
          <ShieldAlert className='size-16 p-2.5 text-white' />
          </div>

          <h3 className="text-lg font-bold text-heading group-hover:text-white ">{benefit.title}</h3>
          <p className="text-sm text-subheading group-hover:text-white">{benefit.content}</p>
        </div>
      ))}
      </div>
    </SectionLayout>
  )
}

export default Benifits