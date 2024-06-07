import React from 'react'
import SectionLayout from '@/components/ui/SectionLayout'
import Chips from '@/components/ui/Chips'
import { services } from '@/utils/data'
import FAQITEM from '@/components/FAQs/FAQITEM'


type faq = {
    question: string;
    answer: string;
    }; 

function SectionFaq({faqs}: {faqs: faq[]}) {
  return (
    <SectionLayout className="bg-white relative">
      <div className="space-y-4 mb-5">
        <Chips title="FAQs" />
        <h2 className="text-4xl font-bold capitalize dark:text-primary ">
          Frequently Asked Questions
        </h2>
      </div>

        <div className="flex justify-between gap-10 items-center">
        <div className="flex-1 "> 
       
                    {faqs.map((ques,index) => (
                      
                        <FAQITEM
                          id={index}
                          key={index}
                          question={ques.question}
                          ans={ques.answer}
                        />
                    ))}
                  
        </div>
                      <div className='w-3/12 hidden lg:block '>
        <img src="https://www.clutterflyapp.com/img/faq.png" alt="img" className="size-full p-2 object-cover" />

                      </div>

        </div>

      </SectionLayout>
  )
}

export default SectionFaq