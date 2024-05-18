'use client'
import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

import Button from './ui/Button';
function SectionAbout() {
  
  // if (typeof window !== "undefined") {
  //   const locomotiveScroll = new LocomotiveScroll();
  // }
  return (
    <section className="w-full sm:px-32 px-5 sm:py-16 py-5 bg-primary">
      <div className="flex flex-col  sm:flex-row h-full w-full sm:justify-between sm:items-start justify-center items-center ">
        
        <div className='sm:w-1/2' >
        <img src='https://images.unsplash.com/photo-1555009306-9e3c5b6a66e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="image" className="object-cover w-2/3  rounded-2xl shadow-md"  />

        </div>
      
        <div className="content sm:w-1/2">
          <h1 className="sm:text-6xl text-4xl dark:text-white font-medium uppercase text-heading">About Us</h1>
          <p className="text-subheading sm:w-4/5 my-5 text-left font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatum unde commodi pariatur ab, tempore voluptate harum odio quaerat debitis ad quos dolores sint blanditiis. Veniam error maiores possimus repellat unde facilis, ipsum illum explicabo, nisi dolore soluta rem amet libero quibusdam eius nesciunt! Nisi doloremque ipsa pariatur blanditiis voluptas reprehenderit obcaecati eius labore qui.</p>
          <Button href='/about'  title="Learn more" className="hover:bg-accent border border-accent text-accent  hover:text-white "/>
        </div>
      </div>
   </section>
  )
}

export default SectionAbout