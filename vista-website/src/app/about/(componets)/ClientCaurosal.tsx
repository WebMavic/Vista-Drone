'use client'
import React from 'react'
import Chips from '@/components/ui/Chips'
import SectionLayout from '@/components/ui/SectionLayout'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {clientsLogos} from "@/utils/images";
import Image from 'next/image'

function ClientCaurosal() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:['start end','end end']
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);


5
  return (
    <SectionLayout className="bg-secondary relative" ref = {ref} >
        <div className="space-y-4">
          <Chips title="Who we have worked with"/>
          <h2 className="text-4xl font-bold text-primary capitalize ">Our Clients</h2>
        </div>
        <div className="sticky hidden sm:block top-0 flex-col space-y-5 overflow-hidden mt-10">
        <div className="grid grid-cols-7 gap-10">
            {clients.slice(0,7).map((client, index) => (
              <motion.div
                key={index}
                className="client h-32 w-32 overflow-hidden "
                style={{ x:x1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                
              >
                <Image src={client.logo} alt={client.name} className='h-full object-contain opacity-80'/>
              </motion.div>
            ))}
         </div>
         
        <div className="grid grid-cols-7 gap-10">
            {clients.slice(7,clients.length).map((client, index) => (
              <motion.div
                key={index}
                className="client h-32 w-32 overflow-hidden "
                style={{x:x2}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                
              >
                <Image src={client.logo} alt={client.name} className='h-full object-contain opacity-80'/>
              </motion.div>
            ))}
         </div>

        </div>

        <div className="flex flex-wrap gap-5 justify-center  items-center sm:hidden">
          {clients.slice(8,clients.length).map((client, index) => (
            <div key={index} className="client h-32 w-32">
              <Image src={client.logo} alt={client.name} className='h-full object-contain'/>
            </div>
          ))}
        </div>
    
      </SectionLayout>
  )
}

export default ClientCaurosal;


const clients = [
  {
    name: "client1",
    logo: clientsLogos.client1,
  },
  {
    name: "client2",
    logo: clientsLogos.client2,
  },
  {
    name: "client3",
    logo: clientsLogos.client3,
  },
  {
    name: "client4",
    logo: clientsLogos.client4,
  },
  {
    name: "client5",
    logo: clientsLogos.client5,
  },
  {
    name: "client6",
    logo: clientsLogos.client6,
  },
  {
    name: "client7",
    logo: clientsLogos.client7,
  },
  {
    name: "client8",
    logo: clientsLogos.client8,
  },
  {
    name: "client9",
    logo: clientsLogos.client9,
  },
  {
    name: "client10",
    logo: clientsLogos.client10,
  },
  {
    name: "client11",
    logo: clientsLogos.client11,
  },
  {
    name: "client12",
    logo: clientsLogos.client12,
  },
  {
    name: "client13",
    logo: clientsLogos.client13,
  },
  {
    name: "client14",
    logo: clientsLogos.client14,
  },
  

]