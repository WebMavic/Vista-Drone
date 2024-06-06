import FAQ from '@/components/FAQs/FAQ'
import SectionContact from '@/components/SectionContact'
import SectionHeader from '@/components/SectionHeader'
import SectionLayout from '@/components/ui/SectionLayout'
import React from 'react'



function page() {
  return (
    <>
    <SectionHeader title="FAQ" />
    <div className="text-center space-y-2 my-10 ">
        <h1 className='text-2xl font-bold text-accent'>Frequently Asked Questions</h1>
        <p className=" w-3/4 mx-auto dark:text-primary text-heading capitalize ">
        We constantly work on building a close relationship with our clients. And in this endeavor we ensure that we answer all your questions for you to build a trustworthy relationship in using our services.
        </p>
      </div>
    <SectionLayout className='bg-white'>
        <FAQ/>
    </SectionLayout>

    <SectionContact/>
    </>
  )
}

export default page