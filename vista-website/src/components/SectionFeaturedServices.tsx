import React from "react";
import Chips from "./ui/Chips";
import Button from "./ui/Button";
import FeauturedServiceCardItem from "./Services/FeauturedServiceCardItem";
import FeauturedList from "./Services/FeauturedList";
import SectionLayout from "./ui/SectionLayout";

function SectionFeaturedServices() {
  return (
    <SectionLayout className="bg-primary">
      <div className="flex h-full w-full relative ">
        
        
        <FeauturedList />
        <div className="content space-y-4 sticky top-0 ">
          <Chips title='Feautured Services' />
          <h2 className="text-4xl font-bold text-heading ">Elevating Industries with Next Gen UAV Solutions</h2>
          <p className="text-subheading font-light w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam minus assumenda corrupti dignissimos doloremque perspiciatis voluptas! Debitis nisi maiores earum quas voluptatum necessitatibus exercitationem ut velit aut odio harum, ex nesciunt assumenda, iure hic ea voluptas commodi saepe quia repudiandae! Tempore similique, facere vero omnis officiis ipsam architecto quo.</p>
          <div className='my-5'>
          <Button href='/services' icon title="Explore services" className="hover:bg-accent border border-accent text-accent  hover:text-white "/>

          </div>
      </div>
      </div>
    </SectionLayout>
  );
}

export default SectionFeaturedServices;
