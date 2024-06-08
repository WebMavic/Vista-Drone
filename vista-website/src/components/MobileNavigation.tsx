import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

function MobileNavigation({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) {
  const pathname = usePathname();
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Market", path: "/market" },
  ];

  const navVariants = {
    hidden: { y: "-100vh" },
    visible: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        type: "tweet",
      },
    },
    exit: {
      y: '-100vh',
      transition: {
          type: 'tween',
          duration: 0.3,
          delay: 0.3,
      },
  },
  };


  const linkItemVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" // Add ease-out easing function

        },
    },
    exit: {
        opacity: 0,
        y: '50%',
        transition: {
            duration: 0.1,
            ease: "easeOut" // Add ease-out easing function
        }
    },
};


const navLinksVariants = {
  hidden: {},
  visible: {
      transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
      },
  },
  exit: {
      transition: {
          staggerChildren: 0.05,
          staggerDirection: -1,
      },
  },
};

  return (
    <motion.aside
      variants={navVariants}
      initial="hidden"
      exit="exit"
      animate={open ? "visible" : "hidden"}
      className="absolute left-0 top-0 inset-0 z-50 flex h-screen w-full items-center justify-center  bg-white shadow-md  dark:bg-neutral-900 "
    >
      <span>
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="absolute right-0 top-0 p-2"
        >
          <XMarkIcon className="size-10" />
        </button>
      </span>
      <AnimatePresence>
        <motion.ul variants={navLinksVariants} initial='hidden' animate="visible" exit="exit"  className="relative flex flex-col items-center justify-center  text-neutral-900 *:py-2 *:dark:text-white ">
          {navlinks.map((link, index) => (
            <motion.li key={index} variants={linkItemVariants} className="nav-item inline-block w-full text-2xl">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-center text-accent"
                    : "text-center dark:text-white"
                }`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

      </AnimatePresence>
    </motion.aside>
  );
}

export default MobileNavigation;
