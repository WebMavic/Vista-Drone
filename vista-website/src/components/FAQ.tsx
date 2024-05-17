'use client'
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function FAQ() {
  return (
    <div className="w-full divide-y divide-black/5 rounded-xl bg-primary">
        <Disclosure as="div" className="p-6" >
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-heading group-data-[hover]:text-heading/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-heading/60 group-data-[hover]:fill-heading/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-heading/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6" >
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-heading group-data-[hover]:text-heading/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-heading/60 group-data-[hover]:fill-heading/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-heading/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6" >
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-heading group-data-[hover]:text-heading/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-heading/60 group-data-[hover]:fill-heading/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-heading/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6" >
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-heading group-data-[hover]:text-heading/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-heading/60 group-data-[hover]:fill-heading/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-heading/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6" >
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-heading group-data-[hover]:text-heading/80">
              What is your refund policy?
            </span>
            <ChevronDownIcon className="size-5 fill-heading/60 group-data-[hover]:fill-heading/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-heading/50">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
      
      </div>
  )
}

export default FAQ