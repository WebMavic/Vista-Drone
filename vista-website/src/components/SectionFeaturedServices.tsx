import React from 'react'
import dummy from '@/assets/images/dummy.jpg'
import Image from "next/image";
import Chips from './ui/Chips';
import Button from './ui/Button';

function SectionFeaturedServices() {
  return (
    <section className="w-full sm:px-32 px-5 py-16  bg-primary">
    <div className="flex w-full h-full sm:flex-row sm:items-start sm:justify-between flex-col-reverse " >
      <div className="service-cards mt-5 sm:mt-0 ">
        <div className="flex flex-wrap gap-5 items-center justify-center">
        {services.map((service,index) => (
          <div className="flex flex-col p-5 w-[274px] h-[300px] rounded-md shadow-md gap-2 bg-white justify-center items-center " key={index}>
            <div className="image-container">
              <Image src={service.avatar} alt="image" className="object-cover rounded-full"  height={100}  />
            </div>
            <h3 className="text-2xl">{service.title}</h3>
            <p className="text-subheading  text-sm text-center">{service.description}</p>
          </div>
        ))}

        </div>
      </div>
      <div className="content space-y-4 sm:w-1/2 ">
          <Chips title='Feautured Services' />
          <h2 className="text-4xl font-bold text-heading ">Elevating Industries with Next Gen UAV Solutions</h2>
          <p className="text-subheading font-light w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam minus assumenda corrupti dignissimos doloremque perspiciatis voluptas! Debitis nisi maiores earum quas voluptatum necessitatibus exercitationem ut velit aut odio harum, ex nesciunt assumenda, iure hic ea voluptas commodi saepe quia repudiandae! Tempore similique, facere vero omnis officiis ipsam architecto quo.</p>
          <div className='my-5'>
          <Button href='/about' icon title="Explore services" className="hover:bg-accent border border-accent text-accent  hover:text-white "/>

          </div>
      </div>
    </div>
 </section>
  )
}

export default SectionFeaturedServices


const services = [
    {
      title : 'Construction',
      avatar : dummy,
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
    {
      title : 'AgriTech',
      avatar : dummy,
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
    {
      title : 'Mining',
      avatar : dummy,
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
    {
      title : 'Oil & Gas',
      avatar : dummy,
      description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.'
    },
  ]