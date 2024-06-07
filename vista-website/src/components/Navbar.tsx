"use client";
import React, { use, useEffect, useState } from "react";
import Navigation from "./Navigation";
import SwitchDarkMode from "./SwitchDarkMode";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";
function Navbar() {
  const [isTop, setIsTop] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY < 100) {
      setIsTop(true);
      setIsMobileNavVisible(false);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }
  }, []);

  return (
    <nav
      className={
        !isTop ? "fixed  left-0 top-0  z-50 w-full bg-heading/50 px-5 shadow-sm backdrop-blur-md transition-all duration-300 ease-in-out sm:px-32" : "fixed left-0 top-0 z-[9999] w-full px-5 sm:px-32"
      }
    >
      <div className="flex min-h-20 items-center justify-between lg:container">
        <Link href="/">
          <span
            className={`text-2xl font-bold uppercase tracking-[5px] text-current text-white`}
          >
            Vista
          </span>
        </Link>

        <div className="hidden flex-1 flex-shrink-0 items-center justify-end gap-3 md:flex lg:flex-none">
          <Navigation isTop={isTop} />
        </div>

        <div className="lg:hidden ">
          <button
            onClick={() => {
              setIsMobileNavVisible((prev) => !prev);
            }}
            className="rounded-full bg-black p-2 shadow-md"
          >
            <Bars3Icon className="h-6 w-6 text-white " />
          </button>
        </div>
        {isMobileNavVisible && (
          <MobileNavigation setOpen={setIsMobileNavVisible} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
