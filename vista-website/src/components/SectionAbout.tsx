"use client";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";

import Button from "./ui/Button";
import SectionLayout from "./ui/SectionLayout";
function SectionAbout() {
  // if (typeof window !== "undefined") {
  //   const locomotiveScroll = new LocomotiveScroll();
  // }
  return (
    <SectionLayout className="bg-primary">
      <div className="flex h-full  w-full flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-between ">
        <div className="sm:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1555009306-9e3c5b6a66e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            className="w-2/3 rounded-2xl  object-cover shadow-md"
          />
        </div>

        <div className="content sm:w-1/2">
          <h1 className="text-4xl font-medium uppercase text-heading dark:text-white sm:text-6xl">
            About Us
          </h1>
          <p className="my-5 text-left font-light text-subheading sm:w-4/5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            voluptatum unde commodi pariatur ab, tempore voluptate harum odio
            quaerat debitis ad quos dolores sint blanditiis. Veniam error
            maiores possimus repellat unde facilis, ipsum illum explicabo, nisi
            dolore soluta rem amet libero quibusdam eius nesciunt! Nisi
            doloremque ipsa pariatur blanditiis voluptas reprehenderit obcaecati
            eius labore qui.
          </p>
          <Button
            href="/about"
            title="Learn more"
            className="border border-accent text-accent hover:bg-accent  hover:text-white "
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionAbout;
