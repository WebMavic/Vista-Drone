"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import SwitchDarkMode from "./SwitchDarkMode";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
function Navbar() {
  const [isTop, setIsTop] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const onClose = () => {
    setIsMobileNavVisible(false);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight) {
      setIsTop(true);
      setIsMobileNavVisible(false);
    } else {
      setIsTop(false);
    }
  });

  return (
    <nav
      className={
        isTop
          ? "w-full sm:px-32 px-5 bg-transparent absolute"
          : "bg-white/50  sm:px-32 z-50 dark:bg-[#202020]/90 px-5 backdrop-blur-2xl sticky top-0 left-0 transition-all duration-300 ease-in-out w-full shadow-sm"
      }
    >
      <div className="lg:container min-h-20 relative flex justify-between items-center">
        <span className="text-xl font-bold text-white">Vista</span>

        <div className="hidden md:flex flex-shrink-0 justify-end items-center flex-1 lg:flex-none gap-3 text-neutral-700 dark:text-neutral-100">
          <Navigation />
          <SwitchDarkMode />
        </div>

        <div className="lg:hidden ">
          <button
            onClick={() => {
              setIsMobileNavVisible((prev) => !prev);
            }}
            className="rounded-full bg-black p-2 shadow-md"
          >
          <Bars3Icon className="w-6 h-6 text-white " />
      </button>
     
        </div>
        {isMobileNavVisible && <MobileNavigation />}
      </div>
    </nav>
  );
}

export default Navbar;
