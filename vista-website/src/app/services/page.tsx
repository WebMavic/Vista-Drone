import React from "react";
import dummy from "@/assets/images/dummy.jpg";
import Image from "next/image";
import SectionProjects from "@/components/SectionProjects";

import SectionHeader from "@/components/SectionHeader";

function page() {
  return (
    <>
      <SectionHeader title="Discover our services" />
      <section className="p-5 sm:px-32 sm:py-16 bg-white sm:bg-base  ">
        <div className="flex flex-col items-center">
          <div className="text-center space-y-2 ">
            <span className="text-accent uppercase tracking-wider ">
              services
            </span>
            <h2 className="text-4xl font-bold text-heading capitalize ">
              What we offer
            </h2>
          </div>

          <div className="service-cards mt-5 w-full ">
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
              {services.map((service, index) => (
                <div
                  className="flex flex-col p-5 w-80 sm:w-full  rounded-md shadow-md gap-2 bg-base sm:bg-white justify-center items-center "
                  key={index}
                >
                  <div className="image-container">
                    <Image
                      src={service.avatar}
                      alt="image"
                      className="object-cover rounded-full"
                      height={100}
                    />
                  </div>
                  <h3 className="text-2xl">{service.title}</h3>
                  <p className="text-[#555] text-sm text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 sm:px-32 sm:py-16">
        <div className="content space-y-4 sm:w-1/2 ">
          <span className="text-[#ED7D31] uppercase tracking-wider ">
            Experience
          </span>
          <h2 className="text-4xl font-bold text-heading ">
            Experience in Industrial Applications of UAV
          </h2>
        </div>
        
        <div className="service-cards mt-5 w-full ">
            <div className="grid grid-cols-1  sm:full gap-3 place-items-center sm:grid-cols-3">
              {applications.map((service, index) => (
                <div
                  className="flex flex-col p-5 sm:w-full w-4/5 rounded-md shadow-md gap-4 bg-white justify-center   "
                  key={index}
                >
                  <div className="inline-flex gap-2 items-center">
                    <Image
                      src={service.avatar}
                      alt="image"
                      className="object-cover rounded-full"
                      height={80}
                    />
                    <h3 className="text-lg text-left">{service.title}</h3>


                  </div>
                  <p className="text-[#555] text-sm text-left">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section className="w-full bg-accent/50  p-5 sm:px-32 sm:py-16">
        <div className="flex flex-col sm:flex-row gap-10 w-full h-full">
          
            <img src='https://placehold.co/300x400' alt="image" />
         
          <div className="right space-y-3">
          <h1 className="text-4xl font-bold text-heading">Some Heading</h1>
          <p className="text-[#555] font-light w-2/3 text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga officiis eos ab doloremque nobis nam? Maxime vero sunt aperiam sapiente, ea a. Hic consectetur ex nam voluptas at, asperiores fuga eos incidunt, facere minima mollitia! Nihil ratione magnam commodi delectus optio quis perferendis nulla repellat architecto perspiciatis labore voluptatibus iste sed rem, mollitia accusantium rerum.
          </p>
          </div>
        </div>
      </section>

      <section className="w-full p-5 sm:px-32 sm:py-16 bg-white">
      <div className="content space-y-4  ">
          <span className="text-[#ED7D31] uppercase tracking-wider ">
            Technology
          </span>
          <h2 className="text-4xl font-bold text-heading ">
          Innovative Tools & Devices which we use
          </h2>
        </div>
        <div className="container py-10 w-4/5 h-full mx-auto">
            <div className="flex justify-between w-full ">
                <div className="f1 text-right flex flex-col justify-between">
                    <div className="f1 w-52">
                        <h4 className="text-xl font-semibold">Thermal Camera</h4>
                        <p className="text-sm font-light my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum!</p>
                    </div>
                    <div className="f1 w-52">
                        <h4 className="text-xl font-semibold">Photography</h4>
                        <p className="text-sm font-light my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum!</p>
                    </div>
                </div>

               
            <img src="https://placehold.co/300x300" alt="ico" className="bg-cover rounded-3xl "  />

           

                <div className="f2 text-left flex flex-col justify-between">
                    <div className="f1 w-52">
                        <h4 className="text-xl font-semibold">UV Camera</h4>
                        <p className="text-sm font-light my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum!</p>
                    </div>
                    <div className="f1 w-52">
                        <h4 className="text-xl font-semibold">LiDAR Sensor</h4>
                        <p className="text-sm font-light my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum!</p>
                    </div>
                </div>
            </div>
           
            <div className="f1 w-52 mx-auto mt-10 text-center">
                        <h4 className="text-xl font-semibold">LiDAR Sensor</h4>
                        <p className="text-sm font-light my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum!</p>
                    </div>
        </div>
      </section>

              <SectionProjects/>

    </>
  );
}

export default page;

const services = [
  {
    title: "Construction",
    avatar: dummy,
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "AgriTech",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Mining",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
];


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
