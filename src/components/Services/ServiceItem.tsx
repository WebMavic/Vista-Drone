import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { services } from '../../utils/data';

type description = {
  title: string;
content: string;
image?: string;
};

interface ServiceItemProps {
  description: description[];
}

const content = services[0].service_description.map((item) => {
  return {
    title: item.title,
    description: item.content,
    content: <img src={item.image} alt={item.title} className="w-96 h-full object-cover rounded-md"/>,
  }
} )

const ServiceItem = ({description}:ServiceItemProps) => {
  return (
    <div className="flex gap-5 items-start w-full max-w-6xl mx-auto">
    {/* <StickyScroll content={description} /> */}
   
  </div>

  )
}

export default ServiceItem;




 {/* <ul className='w-3/4 space-y-6 list-disc ml-5'>
           <li className=''>
             <h3 className='text-xl'>High-Resolution Imaging</h3>
             <p> Capture detailed site imagery with advanced sensor-equipped drones.</p>
           </li>
           <li className=''>
             <h3 className='text-xl'>3D Mapping</h3>
           <p>Create accurate 3D maps for precise site analysis and planning</p>
           </li>
           
           <li className=''> 
             <h3 className='text-xl'>Mineral Deposit Identification</h3>
             <p>Efficiently identify and evaluate mineral deposits.</p>
             </li>
           <li className=''>
             <h3 className='text-xl'>Terrain Evaluation </h3>
             <p>Assess terrain conditions for optimal extraction processes</p>
           </li>
         </ul> */}