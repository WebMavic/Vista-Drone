// "use client";
import React from "react";
import Link from "next/link";
import { serviceIcons } from "@/utils/images";
import { usePathname } from "next/navigation";
import { MdOilBarrel,MdOutlineWindPower } from "react-icons/md";
import { GiGoldMine,GiSteelClaws,GiFishingBoat } from "react-icons/gi";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";



import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

function Navigation() {
  const pathname = usePathname();
  const navlinks = [
    { name: "Home", path: "/" ,active : pathname === "/"},
    { name: "About", path: "/about" , active : pathname === '/about' },
    { name: "Market", path: "/market" , active : pathname === '/market' },
  ];


  type LinkWithChildren = {
    name: string;
    path :string
    Icon? : IconType
    icon ?: StaticImport 
  }
  const linksWithChildren:LinkWithChildren[]   = [
    { name: "Oil & Gas", path: "/industries/oil-and-gas",Icon: MdOilBarrel },
    { name: "Green Energy", path: "/industries/green-energy",Icon:MdOutlineWindPower },
    { name: "Mining", path: "/industries/mining",Icon:GiGoldMine },
    { name: "Construction & Real Estate",path: "/industries/construction",icon:serviceIcons[1]},
    { name: "Agriculture", path: "/industries/agriculture",icon:serviceIcons[0] },
    { name: "Marine Fisheries", path: "/industries/fisheries",Icon:GiFishingBoat },
    { name: "Steel", path: "/industries/steel",Icon:GiSteelClaws},
  ];

  return (
    <NavigationMenu className="text-white">
      <NavigationMenuList>
      
        {navlinks.map((link, index) => (
          <NavigationMenuItem key={"list" + index}>
            <Link href={link.path} legacyBehavior passHref>
              <NavigationMenuLink className={`hover:text-neutral-300 ${link.active && 'underline underline-offset-8'}`} >{link.name}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={()=>alert("fuck")} className="hover:text-neutral-300">Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
              {linksWithChildren.map(({icon,path,name,Icon},index) => (
               
                <ListItem
                  key={path}
                  title={name}
                  href={path}
                  className={pathname === path ? "bg-accent/50" : ""}
                >
                  {icon && <Image src={icon} alt={name} className="w-6 h-6" />}
                  {Icon && <Icon className="w-6 h-6" />}                 
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
            "hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/60 focus:bg-accent ",
            className,
          )}
          {...props}
        >
          <div className="inline-flex items-center">
          <span className="mr-3">
            {children}
          </span>
          <div className="text-sm font-medium leading-none">{title}</div>

          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


