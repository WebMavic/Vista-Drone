import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import SectionLayout from '@/components/ui/SectionLayout'
import ServiceItem from "@/components/Services/ServiceItem";
import SectionInfo from "../(components)/SectionInfo";
import Benifits from "../(components)/Benifits";
import SectionFaq from "../(components)/SectionFaq";
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import  {services} from '../../../utils/data'
import { HorizontalScrollCarousel } from '@/components/ui/HorizontalScroll';


const content = services[1].service_description.map((item) => {
  return {
    title: item.title,
    description: item.content,
    content: <img src={item.image} alt={item.title} className="w-96 h-full object-cover rounded-md"/>,
  }
} )

const page = () => {
  return (
    <>
    <SectionHeader title="Planning and Survey" />
    <SectionInfo title="Planning and Survey" content={services[1]?.description} image={services[1]?.image}/>

     
        {/* <StickyScroll content={content} /> */}
    
      <HorizontalScrollCarousel content={services[1].service_description} className="bg-accent"  />
      <Benifits content={services[1].benefits} />

      <SectionFaq faqs={services[1].faq}/>
    </>
  )
}

export default page