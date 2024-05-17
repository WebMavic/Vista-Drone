import React from 'react'
import dummy from "@/assets/images/dummy.jpg";
import Image from "next/image";
import Chips from '../ui/Chips';
function DroneApplication() {
  return (
    
    <section className="p-5 sm:px-32 sm:py-16 bg-primary">
    <div className="content space-y-4 sm:w-1/2 ">
      <Chips title='Applications' />
      <h2 className="text-4xl font-bold text-heading ">
        Experience in Industrial Applications of UAV
      </h2>
    </div>
    
    <div className="service-cards mt-16 w-full ">
        <div className="grid grid-cols-1  sm:full sm:gap-16 gap-12 place-items-center sm:grid-cols-3">
          {applications.map((service, index) => (
            <div
            key={index}
              className="p-5 w-4/5 relative rounded-xl shadow-sm bg-white"
              >
              <Image
                src={service.avatar}
                alt="image"
                className="object-cover rounded-full absolute -top-10 left-2 border-2 border-accent p-1"
                height={80}
              />
              <div className='text-center pt-5 space-y-2'>
                <h3 className="text-2xl ">{service.title}</h3>
                <p className="text-[#555] text-sm ">
                  {service.description}
                </p>
              </div>


              </div>
            
          ))}
        </div>
      </div>
  </section>

  )
}

export default DroneApplication;


const applications = [
    {
      title: "Infrastructure and Civil  Construction ",
      avatar: dummy,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
    },
    {
      title: "Oil and Gas",
      avatar: dummy,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
    },
    {
      title: "Mining & Geology",
      avatar: dummy,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
    },
    {
      title: "Green Renewable Energy ",
      avatar: dummy,
      description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
    },
    {
      title: "Agriculture and Crop  Management",
      avatar: dummy,
      description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
    },
    {
      title: "Surveying and Mapping",
      avatar: dummy,
      description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
    },
  ];