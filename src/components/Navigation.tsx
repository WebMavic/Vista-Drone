import React, { Dispatch, SetStateAction, useState } from "react";
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
import { ChevronDownIcon } from "lucide-react";

function Navigation({hideNavBar}:{hideNavBar : Dispatch<SetStateAction<boolean>>}) {
  const pathname = usePathname();
  const [hidden,setHidden] = useState(true);
  const navlinks = [
   // { name: "Home", path: "/" ,active : pathname === "/"},
   {
    name: "Applications",
    path: "/applications",
    active : pathname === "/applications",
    children: [
      { name: "Oil & Gas", path: "/applications/oil-and-gas",Icon: MdOilBarrel },
      { name: "Renewable Energy", path: "/applications/renewable-energy",Icon:MdOutlineWindPower },
      { name: "Mining", path: "/applications/mining",Icon:GiGoldMine },
      { name: "Construction & Real Estate",path: "/applications/construction",icon:serviceIcons[1]},
      { name: "Agriculture", path: "/applications/agriculture",icon:serviceIcons[0] },
      { name: "Marine Fisheries", path: "/applications/fisheries",Icon:GiFishingBoat },
      { name: "Steel", path: "/applications/steel",Icon:GiSteelClaws},
    ]
  },
    { name: "About", path: "/about" , active : pathname === '/about' },
    { name: "Projects", path: "/projects" , active : pathname === '/projects' },
    { name: "Careers", path: "/career" , active : pathname === '/career' },
    // { name: "Market", path: "/market" , active : pathname === '/market' },
  ];


  type LinkWithChildren = {
    name: string;
    path :string
    Icon? : IconType
    icon ?: StaticImport 
  }
  const linksWithChildren:LinkWithChildren[]   = [
    { name: "Oil & Gas", path: "/applications/oil-and-gas",Icon: MdOilBarrel },
    { name: "Renewable Energy", path: "/applications/renewable-energy",Icon:MdOutlineWindPower },
    { name: "Mining", path: "/applications/mining",Icon:GiGoldMine },
    { name: "Construction & Real Estate",path: "/applications/construction",icon:serviceIcons[1]},
    { name: "Agriculture", path: "/applications/agriculture",icon:serviceIcons[0] },
    { name: "Marine Fisheries", path: "/applications/fisheries",Icon:GiFishingBoat },
    { name: "Steel", path: "/applications/steel",Icon:GiSteelClaws},
  ];






  return (
    <NavigationMenu className="w-full" >
      
      
      <NavigationMenuList className="w-full flex flex-col items-start p-4 md:p-0 gap-0 font-medium  md:space-x-8 md:flex-row md:justify-end ">
      
      <NavigationMenuItem className="md:block hidden absolute right-64">
  <NavigationMenuTrigger className="hover:text-accent md:p-0 p-2 hover:bg-gray-100 md:hover:bg-transparent  ">Applications
    
  </NavigationMenuTrigger>
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
       
       
      { navlinks.map((link, index) => {
            
            return (
              <div key={index}>
                
              <li className={` ${link.path === "/applications" && "md:hidden inline-flex "}`} >
                <Link href={link.path} legacyBehavior passHref>
                  <NavigationMenuLink  onClick={()=>hideNavBar(true)} className={cn("block p-2 w-full text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-accent md:p-0 ",`${(link.active) && 'underline underline-offset-8 text-accent'}`)} >{link.name}</NavigationMenuLink>
                </Link>
                {link.children && (
              <button
                onClick={()=>setHidden(prev => !prev)}
              >
                <ChevronDownIcon
                  className={`size-6 transition-all duration-200 ${!hidden && "rotate-180"}`}
                />
              </button>
            )}
           
              </li>
              {link.children && (
              <div className={`transition-all duration-500 ${hidden ? "h-0 overflow-hidden opacity-0" : "h-56 opacity-100"} `}>
              <ul className="flex flex-col  items-start justify-between text-neutral-900 transition-all duration-500 ms-8  ease-in-out dark:text-white">
                {link.children.map((child, index) => (
                <div  className="inline-flex gap-2 items-center" key={index}>
                <span>
                {child.icon && <Image src={child.icon} alt={child.name} className="w-6 h-6" />}
                {child.Icon && <child.Icon className="w-6 h-6" />}  
                 </span>
                  <li
                    
                    className="nav-item inline-block h-auto w-full py-1"
                  >
                    <Link
                      onClick={() => {
                        hideNavBar(true);
                      }}
                      href={child.path}
                      className={` text-sm  ${
                        pathname === child.path
                          ? "font-bold text-accent"
                          : "text-neutral-900  dark:text-white"
                      }`}
                    >
                      {child.name}
                    </Link>
                  </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
              </div>
            )
          })
        }

          

          
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


{/* <ul key={index} className="md:hidden block">{
  link.children.map((child) =>(
    <li key={child.path}>
      <Link href={child.path} legacyBehavior passHref>
        <NavigationMenuLink className={cn("block p-2 w-full text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-accent md:p-0 ",`${false && 'underline underline-offset-8 text-accent'}`)} >{child.name}</NavigationMenuLink>
      </Link>
    </li>
  ))
}</ul> */}
