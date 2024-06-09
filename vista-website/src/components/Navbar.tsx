"use client";
import React, { useState, Fragment } from "react";
import Navigation from "./Navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <nav className="absolute top-0 z-[99] w-full bg-transparent px-5  sm:px-32">
        <div className="flex min-h-20 items-center justify-between ">
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
          <Transition appear show={isMobileNavVisible}>
            <Dialog
              open={isMobileNavVisible}
              onClose={() => setIsMobileNavVisible(false)}
              className="relative z-[9999]"
            >
              <TransitionChild
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full opacity-0"
              >
                <div className="fixed inset-0 right-0 top-0 ">
                  <DialogPanel className=" absolute right-0 h-screen w-1/2 space-y-4  border bg-white ">
                    <MobileNavigation
                      setOpen={setIsMobileNavVisible}
                      open={isMobileNavVisible}
                    />
                  </DialogPanel>
                </div>
              </TransitionChild>
            </Dialog>
          </Transition>
          {/* {isMobileNavVisible && (
              <MobileNavigation
                setOpen={setIsMobileNavVisible}
                open={isMobileNavVisible}
              />
            )} */}
        </div>
      </nav>

      <motion.div
        className="fixed right-5 top-5  z-[99] lg:hidden"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-200%" },
        }}
        animate={hidden ? "hidden" : "visible"}
      >
        <button
          onClick={() => {
            setIsMobileNavVisible((prev) => !prev);
          }}
          className="rounded-full border bg-white p-2 shadow-md"
        >
          <span>
            <Bars3Icon className="size-6 text-black " />
          </span>
        </button>
      </motion.div>
    </>
  );
}

export default Navbar;
