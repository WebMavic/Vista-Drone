import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <ul className="hidden lg:flex lg:flex-wrap lg:space-x-1 relative justify-center items-center gap-5 text-white ">
      <li>
        <Link href="/" >Home</Link>
      </li>
      <li>
        <Link href="/services" >Services</Link>
      </li>

      <li>
        <Link href="/about">About</Link>

      </li>
     
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/market">Market</Link>
      </li>

    </ul>
  )
}

export default Navigation