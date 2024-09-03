import React from 'react'
import SectionLayout from '@/components/ui/SectionLayout'
import { ShieldAlert } from 'lucide-react';
import { benefits } from '@/utils/data';


interface Benefit {
        content: benefits[];
  
    }

function Benifits({content}:Benefit) {
  return (
    <SectionLayout className="space-y-6 bg-white">
    <h3 className="text-2xl mb-10 text-center font-bold capitalize text-primary lg:text-4xl ">
          Benifits you get
        </h3>

      <div className="grid lg:grid-cols-3  gap-4 mt-20">
      {content.map(({content,icon : Icon,title}, index) => (
        <div key={index} className="flex flex-col cursor-pointer items-center space-y-2 text-center  p-5 ">
          <div className='bg-blue-400  flex justify-center items-center' id='modern' >
            <span className='p-4'>
            <Icon className="size-10 "  />
            </span>

          </div>

          <h3 className="text-lg font-bold text-heading group-hover:text-white ">{title}</h3>
          <p className="text-sm text-subheading group-hover:text-white">{content}</p>
        </div>
      ))}
      </div>
    </SectionLayout>
  )
}

export default Benifits