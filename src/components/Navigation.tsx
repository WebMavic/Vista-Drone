"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


import { cn } from "@/lib/utils";

function Navigation() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState<boolean>(true);
  const navlinks = [
    { name: "Home", path: "/" },

    { name: "About", path: "/about" },

    { name: "Market", path: "/market" },
    // { name: "FAQs", path: "/faq" },
  ];

  const linksWithChildren = [
    { name: "Oil", path: "/industries/oil-and-gas" },
    { name: "Mining", path: "/industries/mining" },
    { name: "Construction",path: "/industries/construction"},
    { name: "Steel", path: "/industries/steel"},
    { name: "Green", path: "/industries/green-energy" },
    { name: "Agriculture", path: "/industries/agriculture" },
  ];

  return (
    // <ul className="navbar relative hidden items-center justify-center gap-5 lg:flex lg:flex-wrap lg:space-x-1">
    //   {navlinks.map((link, index) => (
    //     <li className="nav-item" key={index}>
    //       <div className="inline-flex items-center">
    //         <Link
    //           href={link.path}
    //           className={`text-[16px] ${pathname === link.path ? "text-white font-semibold" : "text-neutral-50"}`}
    //         >
    //           {link.name}
    //         </Link>
    //         {link.children && (
    //           <button
    //             onClick={() => {
    //               setHidden((prev) => !prev);
    //             }}
    //           >
    //             <span>
    //               <ChevronDownIcon
    //                 className={`ml-2 size-4 text-white transition-all duration-200 ${!hidden && "rotate-180"}`}
    //               />
    //             </span>
    //           </button>
    //         )}
    //       </div>
    //       {link.children && (
    //         <ul
    //           className={`navbar-dropdown absolute left-0 top-full space-y-4  rounded-md bg-white/80 p-5 opacity-0 transition-all duration-300 ${!hidden && "block opacity-100"} `}
    //         >
    //           {link.children.map((child, index) => (
    //             <li className="nav-item block" key={index}>
    //               <Link
    //                 href={child.path} onClick={() => setHidden(true)}
    //                 className={`${pathname === child.path ? "text-black" : "text-neutral-900"}`}
    //               >
    //                 {child.name}
    //               </Link>
    //             </li>
    //           ))}
    //         </ul>
    //       )}
    //     </li>
    //   ))}
    // </ul>
    <NavigationMenu className="text-white">
      <NavigationMenuList>
      
        {navlinks.map((link, index) => (
          <NavigationMenuItem key={"list" + index}>
            <Link href={link.path} legacyBehavior passHref>
              <NavigationMenuLink>{link.name}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
              {linksWithChildren.map((component) => (
                <ListItem
                  key={component.path}
                  title={component.name}
                  href={component.path}
                >
                  {component.name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
