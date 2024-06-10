import FAQ from '@/components/FAQs/FAQ'
import SectionHeader from '@/components/SectionHeader'
import SectionLayout from '@/components/ui/SectionLayout'
import React from 'react'
import faqBg from '@/assets/images/faqbg.jpg'


function page() {
  return (
    <>
    <SectionHeader title="Frequently Asked Questions"  image={faqBg} />
    <div className="text-center space-y-2 my-10 ">
        <h1 className='text-2xl font-bold text-heading'>Frequently Asked Questions</h1>
        <p className=" w-3/4 mx-auto dark:text-primary text-subheading capitalize ">
        We constantly work on building a close relationship with our clients. And in this endeavor we ensure that we answer all your questions for you to build a trustworthy relationship in using our services.
        </p>
      </div>
    <SectionLayout className='bg-white'>
        <FAQ/>
    </SectionLayout>

    
    </>
  )
}

export default page