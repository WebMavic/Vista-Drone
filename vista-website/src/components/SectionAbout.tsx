import React from 'react'
import Image from "next/image";
import dummy from '@/assets/images/dummy.jpg'
function SectionAbout() {
  return (
    <section className="w-full sm:px-32 px-5 sm:py-16 py-5 sm:bg-base dark:bg-[#202020]">
      <div className="flex flex-col  sm:flex-row h-full w-full sm:justify-between sm:items-start justify-center items-center ">
        
        <img src='https://www.dronitech.com/wp-content/uploads/2019/05/drones-aerial-photography-equipment_24883-1392.jpg' alt="image" className="object-cover sm:w-2/5 hidden lg:block"   />
      
        <div className="content sm:w-1/2 ">
          <h1 className="sm:text-6xl text-4xl dark:text-white font-medium uppercase text-heading">About Us</h1>
          <p className="text-[#aaa] sm:w-2/3 my-5 text-left font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatum unde commodi pariatur ab, tempore voluptate harum odio quaerat debitis ad quos dolores sint blanditiis. Veniam error maiores possimus repellat unde facilis, ipsum illum explicabo, nisi dolore soluta rem amet libero quibusdam eius nesciunt! Nisi doloremque ipsa pariatur blanditiis voluptas reprehenderit obcaecati eius labore qui.</p>
          <button className="bg-[#ED7D31] text-white  px-4 py-2 rounded-md ">Discover More</button>
        </div>
      </div>
   </section>
  )
}

export default SectionAbout