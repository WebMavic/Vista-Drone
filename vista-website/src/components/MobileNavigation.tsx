import React from 'react'
import Navigation from './Navigation'
import Link from 'next/link'
import SwitchDarkMode from './SwitchDarkMode'


function MobileNavigation() {
  return (
    <aside className="fixed right-0 h-96 w-1/2 top-20  bg-white dark:bg-neutral-900 ">
        <div className='divide-y-2 divide-neutral-100 dark:divide-neutral-800 flex flex-col p-5 '>
            <div className='inline-flex gap-2 items-center justify-between'>
                <span className="text-2xl font-bold dark:text-white ">Vista</span>
                <SwitchDarkMode/>    
            </div> 
        <ul className="flex flex-col justify-center items-center gap-5 *:text-xl *:dark:text-white ">
            <li><Link href="/" >Home</Link></li>
            <li><Link href="/services" >Services</Link></li>
            <li> <Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li> <Link href="/market">Market</Link></li>
        </ul>
        
        </div>
        
  </aside>
  )
}

export default MobileNavigation