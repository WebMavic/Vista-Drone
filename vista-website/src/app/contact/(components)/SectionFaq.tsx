import React from 'react'
import SectionLayout from '@/components/ui/SectionLayout'
import Chips from '@/components/ui/Chips'
import FAQ from '@/components/FAQs/FAQ'
function SectionFaq() {
  return (
    
    <SectionLayout className=" bg-white">
    <div className="flex flex-col justify-between sm:flex-row">
      <div className="content space-y-4  ">
        <Chips title="FAQ" />
        <h2 className="text-4xl font-bold text-heading ">
          Frequenty Asked Questions
        </h2>
        <p className="font-light text-subheading sm:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          numquam suscipit, aliquam provident quisquam hic corrupti
          laudantium debitis pariatur illum laboriosam nostrum veniam
          deserunt cupiditate ut fugiat commodi amet architecto.
        </p>
      </div>
      <FAQ />
    </div>
  </SectionLayout>
  )
}

export default SectionFaq