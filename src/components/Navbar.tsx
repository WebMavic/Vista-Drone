"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

function Navbar() {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true); // Track mobile menu visibility

  useEffect(() => {
    // Ensure the mobile menu is hidden on page load or reload
    setIsMobileMenuHidden(true);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between  md:px-32 md:py-4 py-5 px-5 ">
        <Link href="/" onClick={() => setIsMobileMenuHidden(true)}>
          <h1 className="text-xl font-medium lg:text-2xl">
            VISTA DRONE
          </h1>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className="ms-4 md:hidden block" >
        <Link href="/contact" className={buttonVariants()}>
            Contact
          </Link>
          </div> 
      
          
       
          {/* Button to toggle mobile menu */}
          <button
            data-collapse-toggle="navbar-sticky"
            onClick={() => setIsMobileMenuHidden((prev) => !prev)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu for desktop and mobile */}
        <div
          className={cn(
            "items-center justify-between w-full md:flex md:w-auto md:order-2", // Always visible on desktop (md:flex)
            isMobileMenuHidden ? "hidden" : "flex" // Conditionally hidden on mobile
          )}
        >
          <Navigation hideNavBar={setIsMobileMenuHidden} />
          <div className="ms-4 md:block hidden" >
          <Link href="/contact" className={buttonVariants()}>
            Contact
          </Link>
          </div>
         
        </div>
       
       
      </div>
    </nav>
  );
}

export default Navbar;