import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <ul className="hidden lg:flex lg:flex-wrap lg:space-x-1 relative justify-center items-center gap-5 text-white ">
      <li>
        <Link href="/" >Home</Link>
      </li>

      <li>
        <Link href="/">About</Link>

      </li>
     
      <li>
        <Link href="/">Contact</Link>
      </li>
      <li>
        <Link href="/">Market</Link>
      </li>

    </ul>
  )
}

export default Navigation