"use client"


import React, { PropsWithChildren } from 'react'
import {motion} from 'framer-motion'

interface Props extends PropsWithChildren {
className ?: string,
}
const Anime = ({className,children}:Props) => {
  return (
    <motion.div 
       variants={{
        hidden : {x : 999,z:99,y:-450},
        visible : {x : 0, z: 0 , y:0}
       }}
       initial="hidden"
       animate = "visible"
       transition={{duration : 2,type:'spring'}}
       
    
    >{children}</motion.div>
  )
}

export default Anime