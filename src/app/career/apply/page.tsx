import SectionLayout from '@/components/ui/SectionLayout'
import React from 'react'
import Form from '../(components)/Form'
import { Toaster } from '@/components/ui/sonner'

const page = () => {
  return (
    <SectionLayout className='bg-[#202020]'>
    
            <Form/>
      <Toaster/>
    </SectionLayout>
  )
}

export default page