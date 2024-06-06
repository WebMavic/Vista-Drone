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
    <SectionLayout className="bg-white">
      <div className="space-y-4 mb-5">
        <Chips title="FAQs" />
        <h2 className="text-4xl font-bold capitalize dark:text-primary ">
          Frequently Asked Questions
        </h2>
      </div>

        <div className="flex justify-between items-start">
        <div className="border w-1/2"> 
        <ul className="divide-y divide-gray-200">
                    {faqs.map((ques,index) => (
                      
                        <FAQITEM
                          key={index}
                          question={ques.question}
                          ans={ques.answer}
                        />
                    ))}
                  </ul>
        </div>

        <img src="https://placehold.co/300x300" alt="img" className="rounded-full" />

        </div>

      </SectionLayout>
  )
}

export default SectionFaq