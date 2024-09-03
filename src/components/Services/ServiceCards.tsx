import React from "react";
import {  CubeTransparentIcon} from "@heroicons/react/24/outline";
import Chips from '../ui/Chips';
import SectionLayout from '@/components/ui/SectionLayout';
import Link from 'next/link';
import FeauturedList from "./FeauturedList";


function ServiceCards() {
  return (
   
    <SectionLayout className="bg-white">
      <div className="text-center space-y-2 ">
        <Chips title="Industries" />
        <h2 className="lg:text-4xl text-2xl lg:w-3/4 mx-auto font-bold text-heading capitalize ">
          Lorem ipsum dolor sit adipisicing
        </h2>
        <p className="lg:w-2/3 lg:mx-auto text-center text-lg font-light text-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet porro molestias</p>
      </div>

      <div className="service-cards my-10 w-full ">     
          <FeauturedList/>
      </div>

    </SectionLayout>
  );
}

export default ServiceCards;

