import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { serviceIcons } from "@/utils/images";
import { usePathname } from "next/navigation";
import { MdOilBarrel, MdOutlineWindPower } from "react-icons/md";
import { GiGoldMine, GiSteelClaws, GiFishingBoat } from "react-icons/gi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

function Navigation({ hideNavBar }: { hideNavBar: Dispatch<SetStateAction<boolean>> }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(true);

  const navlinks = [
    { name: "About", path: "/about", active: pathname === "/about" },
    {
      name: "Applications",
      path: "/applications",
      active: pathname.startsWith("/applications"), // Active for any application page
      children: [
        { name: "Oil & Gas", path: "/applications/oil-and-gas", Icon: MdOilBarrel },
        { name: "Renewable Energy", path: "/applications/renewable-energy", Icon: MdOutlineWindPower },
        { name: "Mining", path: "/applications/mining", Icon: GiGoldMine },
        { name: "Construction & Real Estate", path: "/applications/construction", icon: serviceIcons[1] },
        { name: "Agriculture", path: "/applications/agriculture", icon: serviceIcons[0] },
        { name: "Marine Fisheries", path: "/applications/fisheries", Icon: GiFishingBoat },
        { name: "Steel", path: "/applications/steel", Icon: GiSteelClaws },
      ],
    },
    { name: "Projects", path: "/projects", active: pathname === "/projects" },
    { name: "Careers", path: "/career", active: pathname === "/career" },
  ];

  const linksWithChildren = [
    { name: "Oil & Gas", path: "/applications/oil-and-gas", Icon: MdOilBarrel },
    { name: "Renewable Energy", path: "/applications/renewable-energy", Icon: MdOutlineWindPower },
    { name: "Mining", path: "/applications/mining", Icon: GiGoldMine },
    { name: "Construction & Real Estate", path: "/applications/construction", icon: serviceIcons[1] },
    { name: "Agriculture", path: "/applications/agriculture", icon: serviceIcons[0] },
    { name: "Marine Fisheries", path: "/applications/fisheries", Icon: GiFishingBoat },
    { name: "Steel", path: "/applications/steel", Icon: GiSteelClaws },
  ];

  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className="w-full flex flex-col items-start text-gray-900 font-medium md:flex-row md:justify-end">
        
        {/* About Link */}
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                `${pathname === '/about' ? 'text-accent' : ''}`, // Active state
                navigationMenuTriggerStyle(),
                "hover:text-accent" // Hover effect
              )}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Applications Dropdown */}
        <NavigationMenuItem className="md:block hidden">
          <NavigationMenuTrigger className="hover:text-accent">
          Applications
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px]">
              {linksWithChildren.map(({ name, path, Icon, icon }, index) => (
                <ListItem
                  key={index}
                  title={name}
                  href={path}
                  className={cn(pathname === path ? "bg-accent/50" : "", "hover:bg-accent/60")}
                >
                  {icon && <Image src={icon} alt={"logo"} className="w-6 h-6" />}
                  {Icon && <Icon className="w-6 h-6" />}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Mobile Applications Dropdown */}
        <NavigationMenuItem className="md:hidden block">
          <div className="inline-flex items-center justify-center py-2 px-3">
            <Link href="/applications" legacyBehavior passHref>
              <NavigationMenuLink
                onClick={() => hideNavBar(true)}
                className={cn(
                  `${pathname.startsWith('/applications') ? 'text-accent' : ''}`, // Active state for mobile
                  "block text-sm font-medium w-max text-gray-900 rounded hover:bg-gray-100 hover:text-accent md:p-0"
                )}
              >
                 Applications
              </NavigationMenuLink>
            </Link>
            <button onClick={() => setHidden((prev) => !prev)}>
              <ChevronDownIcon className={`size-6 transition-all duration-200 ${!hidden && 'rotate-180'}`} />
            </button>
          </div>
          <div className={`transition-all duration-500 ${hidden ? 'h-0 overflow-hidden opacity-0' : 'h-56 opacity-100'}`}>
            <ul className="flex flex-col items-start justify-between text-neutral-900 ms-8">
              {linksWithChildren.map((child, index) => (
                <div className="inline-flex gap-2 items-center" key={index}>
                  {child.icon && <Image src={child.icon} alt={child.name} className="w-6 h-6" />}
                  {child.Icon && <child.Icon className="w-6 h-6" />}
                  <li className="nav-item inline-block py-1">
                    <Link
                      onClick={() => hideNavBar(true)}
                      href={child.path}
                      className={`text-sm ${pathname === child.path ? 'text-accent' : ''}`}
                    >
                      {child.name}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </NavigationMenuItem>

        {/* Projects Link */}
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                `${pathname === '/projects' ? 'text-accent' : ''}`, // Active state
                navigationMenuTriggerStyle(),
                "hover:text-accent" // Hover effect
              )}
            >
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Careers Link */}
        <NavigationMenuItem>
          <Link href="/career" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                `${pathname === '/career' ? 'text-accent' : ''}`, // Active state
                navigationMenuTriggerStyle(),
                "hover:text-accent" // Hover effect
              )}
            >
              Careers
            </NavigationMenuLink>
          </Link>
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
            "hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="inline-flex items-center">
            <span className="mr-3">{children}</span>
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
