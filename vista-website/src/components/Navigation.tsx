
'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

function Navigation() {
  // const router = useRouter();
  const pathname  = usePathname();
  const navlinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Market', path: '/market' },
    { name: 'FAQs', path: '/faq' },
  ]

  return (

    <ul className="navbar hidden lg:flex lg:flex-wrap lg:space-x-1 relative justify-center items-center gap-5">
      {navlinks.map((link, index) => (
        <li key={index} className="nav-item">
          <Link href={link.path} className={`${pathname === link.path ? 'text-accent' : 'dark:text-white'}`}>
            {link.name}
          </Link>
        </li>
      ))}

    </ul>
  )
}

export default Navigation