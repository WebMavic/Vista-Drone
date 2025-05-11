"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {motion} from "motion/react";

function Navbar() {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true); 
  const [isScrolled, setIsScrolled] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    setIsMobileMenuHidden(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(()=>{
    if(isMobile){
      setIsMobileMenuHidden(true);
    }
  },[isScrolled,isMobile]);

  
  

  return (
    <motion.nav 
    className={cn("absolute transition-all w-full z-20 top-0 start-0 ease-in-out duration-300",
      isScrolled  ?  'bg-white shadow-sm fixed' : 'bg-transparent',
      
    )}
   
    >
      <div className="flex flex-wrap items-center justify-between  md:px-32 md:py-4 py-5 px-5 ">
        <Link href="/" onClick={() => setIsMobileMenuHidden(true)}>
          <span className={cn("text-lg font-medium tracking-wide uppercase lg:text-xl",
            isScrolled ? "text-primary dark:text-white" : "text-white"
          )}>
            Vista Drone
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div className="ms-4 md:hidden block" >
        <Link href="/contact" className={buttonVariants()}>
            Contact
          </Link>
          </div> 
      
          
       
          {/* Button to toggle mobile menu */}
          {isScrolled && (
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
          )}
        </div>

        {/* Menu for desktop and mobile */}
        <div
          className={cn(
            "items-center justify-between w-full lg:flex lg:w-auto lg:order-2 ", 
            isMobileMenuHidden ? "hidden" : "flex" 
          )}
        >
          <Navigation hideNavBar={setIsMobileMenuHidden} isScrolled={isScrolled} />
          <div className="ms-4 md:block hidden" >
          <Link href="/contact" className={buttonVariants()}>
            Contact
          </Link>
          </div>
         
        </div>
        
       
       
       
      </div>
    </motion.nav>
  );
}

export default Navbar;