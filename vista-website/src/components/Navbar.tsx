"use client";
import React, {useState } from "react";
import Navigation from "./Navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";

function Navbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  // const [hidden, setHidden] = useState<boolean>(false);

  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious();
  //   if (latest > previous! && latest > 150) {
  //     setHidden(true);
  //   } else {
  //     setHidden(false);
  //   }
  // });

  return (
    <nav className="absolute top-0 z-[9999] w-full bg-transparent px-5  sm:px-32">
      <div className="flex min-h-20 items-center justify-between lg:container">
        <Link href="/" className="inline-flex items-center gap-2">
          <img
            src="https://placehold.co/10X10"
            alt="Logo"
            className="size-10 cursor-pointer rounded-full"
          />
          <span
            className={`text-2xl font-bold uppercase tracking-[5px] text-current text-white`}
          >
            Vista
          </span>
        </Link>

        <div className="hidden flex-1 flex-shrink-0 items-center justify-end gap-3 md:flex lg:flex-none">
          <Navigation />
        </div>

        <div className="inline-block lg:hidden">
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
          <MobileNavigation
            setOpen={setIsMobileNavVisible}
            open={isMobileNavVisible}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
