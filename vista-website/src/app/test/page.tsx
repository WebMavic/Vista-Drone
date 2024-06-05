import ServiceItem from "@/components/Services/ServiceItem";
import React from "react";
// import bgVid from '@/assets/videos/bgvideo1.mp4'
import { services } from "../../utils/data";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

function page() {

  const content = services[0].service_description.map((item) => {
    return {
      title: item.title,
      description: item.content,
      content: <img src={item.image} alt={item.title} className="w-96 h-full object-cover rounded-md"/>,
    }
  } )



    
  

  return (
    <div className="h-screen w-full">
      <div className="mt-20">
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam non, dolore neque rem excepturi.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, fugiat delectus assumenda veritatis natus explicabo nam ex doloremque officia odio sed quibusdam ad numquam enim quas in, illum molestiae voluptatum excepturi repellendus saepe ea nesciunt eius? Cupiditate dolorem error ex omnis doloremque quidem non, fugiat voluptas in sapiente tempora accusamus debitis a veniam ipsum maxime?</p>
      </div>
        <StickyScroll content={content} />
    </div>
  );
}




export default page;
