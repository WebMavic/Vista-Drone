import React from "react";
import {  CubeTransparentIcon} from "@heroicons/react/24/outline";
import Chips from '../ui/Chips';
import SectionLayout from '@/components/ui/SectionLayout';
import Link from 'next/link';
import FeauturedList from "./FeauturedList";


function ServiceCards() {
  return (
   
    <SectionLayout >
      <div className="text-center space-y-2 ">
        <Chips title="Our Service" />
        <h2 className="lg:text-4xl text-2xl lg:w-3/4 mx-auto font-bold text-heading capitalize ">
          Lorem ipsum dolor sit adipisicing elit Repellendus eos 
        </h2>
        <p className="lg:w-2/3 lg:mx-auto text-center text-xl font-light text-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet porro molestias, sapiente quam aliquam possimus necessitatibus voluptatibus, quo nesciunt laboriosam deserunt. Reiciendis, deserunt praesentium?</p>
      </div>

      <div className="service-cards my-10 w-full ">
        {/* <div className="flex flex-col sm:flex-row gap-5 items-center flex-wrap justify-center w-full">
          {services.map(({title,avatar,description,path}, index) => (
            <Link  href={`services/${path}` }  
              className="flex cursor-pointer flex-col transition p-5 w-80 sm:h-80 sm:w-96 sm:gap-3 text-center group justify-center items-center hover:bg-white hover:shadow-md rounded-lg "
              key={index}>
              
              <div className="image-container">
                {avatar}
              </div>
              <h2 className="text-2xl text-heading capitalize ">{title}</h2>
              <p className="text-heading text-sm  w-3/4">
                {description}
              </p>
              
            </Link>
          ))}
          </div> */}
          <FeauturedList/>
      </div>

    </SectionLayout>
  );
}

export default ServiceCards;

