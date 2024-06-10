import React from 'react'
import SectionLayout from '@/components/ui/SectionLayout'

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
    <SectionLayout className="space-y-6 relative bg-white">
    <h3 className="text-2xl font-bold capitalize text-heading sm:text-4xl ">
          Benifits you get
        </h3>

      <div className="flex sm:justify-between flex-col sm:flex-row gap-4">
      {content.map((benefit, index) => (
        <div key={index} className="flex flex-col cursor-pointer items-center space-y-2 text-center bg-white shadow-md overflow-hidden hover:bg-accent/80 group transition rounded-xl p-5 max-w-96">
          <img src={benefit.icon} alt="icon" className="size-20 rounded-full" />
          <h3 className="text-lg font-bold text-heading group-hover:text-white ">{benefit.title}</h3>
          <p className="text-sm text-subheading group-hover:text-white">{benefit.content}</p>
        </div>
      ))}
      </div>
    </SectionLayout>
  )
}

export default Benifits