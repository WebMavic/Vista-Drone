import React from 'react'
import SectionLayout from '@/components/ui/SectionLayout'
function OfficeLocation() {
  return (
    <SectionLayout >
    <div className="mt-10 flex flex-col gap-10 sm:flex-row">
      <div className="w-1/2 space-y-3">
        <h2 className="text-4xl font-bold text-heading">Our Office</h2>
        <p className="text-left font-light leading-relaxed text-[#555]">
          1234 Street Name, City Name, United States
        </p>
        <p className="text-left font-light leading-relaxed text-[#555]">
          +123 456 7890
        </p>
        <p className="text-left font-light leading-relaxed text-[#555]"></p>
      </div>
    </div>
  </SectionLayout>
  )
}

export default OfficeLocation