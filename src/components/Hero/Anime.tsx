"use client"


import React, { PropsWithChildren } from 'react'
import {motion} from 'framer-motion'
import { cn } from '@/lib/utils'

interface Props extends PropsWithChildren {
className ?: string,
slide ?: 'left' | 'right' | 'top' | 'bottom'
}
const Anime = ({className,children,slide = 'left'}:Props) => {
  return (
    <motion.div 
       variants={{
        hidden : {x : -999,opacity:0},
        visible : {x : 0,opacity : 1 },
        
       }}
       className={cn('w-full',className)}
       initial="hidden"
       animate="visible"
      //  whileInView="visible"
       viewport={{once: true}}
       transition= {{duration : 0.5}}
       
       
    
    >{children}</motion.div>
  )
}

export default Anime