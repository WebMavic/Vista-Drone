import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel,Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


interface FAQITEMProps {
    question: string;
    ans?: string;
    answer?: { content: string 
      list?: string[]} 
    }

function FAQITEM({ question, answer,ans}: FAQITEMProps) {
  return (
    <Disclosure as="li" className= "p-6" >
    <DisclosureButton className="group flex w-full items-center justify-between">
      <span className="text-xl font-medium text-heading group-data-[hover]:text-heading/80 group-data-[open]:text-accent">
        {question}
      </span>
      <ChevronDownIcon className="size-5 fill-heading group-data-[hover]:fill-heading/50 group-data-[open]:rotate-180" />
    </DisclosureButton>
    <div className="overflow-hidden mt-2 ">

    <Transition
          enter="duration-100 ease-out"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
          leave="duration-100 ease-out"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-6"
        >

    <DisclosurePanel className=" text-heading origin-top transition">
      {ans && <p>{ans}</p>}
      {answer?.content}
      {answer?.list && (
        <ul className="mt-2 list-disc list-inside">
          {answer.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      
    )}
    </DisclosurePanel>
    </Transition>
    </div>
  </Disclosure>
  )
}

export default FAQITEM