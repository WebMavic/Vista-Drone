import { cn } from "@/lib/utils"
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { ArrowRightIcon, LucideProps} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] lg:grid-cols-4 grid-cols-1 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  title,
  icon,
  Icon,
  description,
  className,
  background,
  href,
  cta
}: {
  title: string;
  icon?: string | StaticImport ;
  Icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  description?: string;
  className?: string;
  background?: string;
  href?: string;
  cta?: string;

 
}) => (
  <Link href={href ? href : "/"}
    key={title}
    className={cn(
      "group relative  flex flex-col justify-between overflow-hidden mb-10 rounded-xl ",
      // light styles
      "bg-neutral-50 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>
    <img className="filter  group-hover:blur-sm h-full w-full object-cover absolute top-0  [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" src={background}  />,
    </div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* {icon && typeof icon !== "string" && <icon /> } */}
    {icon && <Image src={icon} alt="logo" height={48} width={48}  className="origin-left transform-gpu text-black transition-all duration-300 ease-in-out group-hover:scale-75"  />}
    {Icon  && <Icon size={40} className="origin-left transform-gpu  transition-all duration-300 ease-in-out text-black group-hover:scale-75" />}
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {title}
      </h3>
      <p className="max-w-lg text-neutral-500">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center py-4 px-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <button className="pointer-events-auto group hover:bg-neutral-100  rounded-md px-2 py-1 ">
        <div className="inline-flex text-sm items-center text-heading">
          {cta? cta : "Learn more"}
          <ArrowRightIcon className="ml-2 h-4 w-4 text-heading" />
        </div>
      </button>
    </div>
    
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </Link>
);

export { BentoCard, BentoGrid };
