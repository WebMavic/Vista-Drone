import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import SwitchDarkMode from "./SwitchDarkMode";
import { usePathname } from "next/navigation";

function MobileNavigation() {
  const pathname = usePathname();
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Market", path: "/market" },
  ];

  return (
    <aside className="fixed right-0  w-full top-20  bg-white dark:bg-neutral-900 z-50 ">
      <ul className="flex flex-col p-5 divide-y items-center  *:text-xl *:dark:text-white text-neutral-900 *:py-2">
        {navlinks.map((link, index) => (
          <li key={index} className="nav-item">
            <Link
              href={link.path}
              className={`${
                pathname === link.path ? "text-accent" : "dark:text-white"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <SwitchDarkMode />
        </li>
      </ul>
    </aside>
  );
}

export default MobileNavigation;
