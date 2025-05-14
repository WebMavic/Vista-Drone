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
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

function Navigation({ hideNavBar,isScrolled }: { hideNavBar: Dispatch<SetStateAction<boolean>>, isScrolled: boolean }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(true);

  const linksWithChildren = [
    { name: "Oil & Gas", path: "/applications/oil-and-gas", Icon: MdOilBarrel },
    { name: "Renewable Energy", path: "/applications/renewable-energy", Icon: MdOutlineWindPower },
    { name: "Mining", path: "/applications/mining", Icon: GiGoldMine },
    { name: "Civil Infrastructure", path: "/applications/construction", icon: serviceIcons[1] },
    { name: "Agriculture & Livestock", path: "/applications/agriculture", icon: serviceIcons[0] },
    { name: "Marine & Coastal Ecosystem", path: "/applications/marine&coastalecosystem", Icon: GiFishingBoat },
    { name: "Steel", path: "/applications/steel", Icon: GiSteelClaws },
  ];

  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className={cn("w-full flex flex-col items-start font-medium md:flex-row md:justify-end",
        isScrolled ? "text-gray-900" : "text-white"
      )}>
        
        {/* About Link */}
        <NavigationMenuItem onClick={()=>hideNavBar(true)}>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle(), 
                "hover:text-accent font-normal",
                pathname == "/about" && "text-accent underline underline-offset-8 font-semibold transition-colors" // Hover effect
              )}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Applications Dropdown */}
        <NavigationMenuItem className="md:block hidden" onClick={()=>hideNavBar(true)} >
          <NavigationMenuTrigger className={cn("hover:text-accent font-normal",pathname == '/applications' && 'text-accent font-semibold underline underline-offset-8')}>
          <Link href={"/applications"}>Applications</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px]">
              {linksWithChildren.map(({ name, path, Icon, icon }, index) => (
                <ListItem
                  key={index}
                  title={name}
                  href={path}
                  className={cn(pathname === path && "bg-accent/40" , "hover:bg-primary/50")}
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
          <div className="inline-flex items-center justify-center py-2 px-3 h-10">
            <Link href="/applications" legacyBehavior passHref>
              <NavigationMenuLink
                onClick={() => hideNavBar(true)}
                className={cn(
                  "block text-lg font-medium w-max text-gray-900 rounded hover:bg-gray-100 hover:text-accent md:p-0",
                  pathname == '/applications' && 'text-accent', // Active state for mobile
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
                      className={cn("text-sm",pathname === child.path && 'text-accent')}
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
        <NavigationMenuItem onClick={()=>hideNavBar(true)}>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn( // Active state
                navigationMenuTriggerStyle(),
                "hover:text-accent font-normal",
                pathname === '/projects' && 'text-accent underline underline-offset-8 font-semibold transition-colors',
                // Hover effect
              )}
            >
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Careers Link */}
        <NavigationMenuItem onClick={()=>hideNavBar(true)}>
          <Link href="/career" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-accent font-normal",
                pathname === '/career' && 'text-accent underline underline-offset-8 font-semibold transition-colors',
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
