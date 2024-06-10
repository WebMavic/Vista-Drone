import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel,Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface FAQITEMProps {
    question: string;
    id:number;
    ans?: string;
    answer?: { content: string 
      list?: string[]} 
    }

function FAQITEM({ question, answer,ans,id}: FAQITEMProps) {
  return (


    <Accordion type="single" collapsible>
  <AccordionItem value={"item"+id}>
    <AccordionTrigger >{question}</AccordionTrigger>
    <AccordionContent>
     {ans && <p>{ans}</p>}
    {answer?.content}
     {answer?.list && (
      <ul className="mt-2 list-disc list-inside">
        {answer.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
    </AccordionContent>
  </AccordionItem>
</Accordion>
  )
}

export default FAQITEM