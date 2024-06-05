import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


interface FAQITEMProps {
    question: string;
    answer: {
        content: string;
        list?: string[];
      };
    }

function FAQITEM({ question, answer}: FAQITEMProps) {
  return (
    <Disclosure as="div" className= "p-4" >
    <DisclosureButton className="group flex w-full items-center justify-between">
      <span className="text-sm/6 font-medium text-heading group-data-[hover]:text-heading/80">
        {question}
      </span>
      <ChevronDownIcon className="size-5 fill-heading/60 group-data-[hover]:fill-heading/50 group-data-[open]:rotate-180" />
    </DisclosureButton>
    <DisclosurePanel className="mt-2 text-sm text-heading/50">
      {answer.content}
      {answer.list && (
        <ul className="mt-2 list-disc list-inside">
          {answer.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      
      )}
    </DisclosurePanel>
  </Disclosure>
  )
}

export default FAQITEM