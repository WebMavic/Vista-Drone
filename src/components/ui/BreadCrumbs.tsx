"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'




const BreadCrumbs = () => {
    const cuurentPath = usePathname()
  return (
    <div className='w-full '>
        <div className='inline-flex gap-2  text-xl'>
        <span className='text-white capitalize'>{cuurentPath.split('/')[1]+" "}/</span>
        <div> <Link className='text-primary font-medium' href={'/'}>Home</Link></div>
        </div>
        
    </div>
  )
}

export default BreadCrumbs