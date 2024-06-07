import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNavigation({ setOpen }: { setOpen: (value: boolean) => void }) {
  const pathname = usePathname();
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Market", path: "/market" },
  ];

  return (
    <aside className="fixed right-5  shadow-md top-24 z-50  w-1/2 rounded-md bg-white transition-all duration-300 dark:bg-neutral-900 ">
      <ul className="flex flex-col items-end justify-center  p-5  text-neutral-900 *:py-2 *:text-xl *:dark:text-white">
        {navlinks.map((link, index) => (
          <li key={index} className="nav-item">
            <Link
              onClick={() => {
                setOpen(false);
              }}
              href={link.path}
              className={`${
                pathname === link.path ? "text-accent" : "dark:text-white"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MobileNavigation;
