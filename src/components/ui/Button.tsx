import Link from 'next/link'
import { title } from 'process'
import React from 'react'
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface ButtonProps {
  
    type?: 'button' | 'submit' | 'reset',
    className?: string
    title : string
    href?: string
    icon?: boolean
    }
function Button({title,className,href,icon}: ButtonProps) {
  return (
    <div className={`${className} lg:px-4 lg:py-3  px-3 py-2 inline-flex  rounded-md cursor-pointer transition-all duration-200 ease-in-out `}>
   <Link href={href || '/'}  >
        {icon ? <div className='inline-flex items-center justify-center' >
            {title}
            <span><ChevronRightIcon className='h-5'/></span>
        </div> :title}
        
   </Link>
    </div>
  )
}

export default Button