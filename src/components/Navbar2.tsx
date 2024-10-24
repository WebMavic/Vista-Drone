'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdOilBarrel, MdOutlineWindPower } from 'react-icons/md'
import { GiGoldMine, GiFishingBoat, GiSteelClaws } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Assuming you have these icons defined somewhere
const serviceIcons = [
  () => <span className="text-xl">🌾</span>, // Agriculture icon
  () => <span className="text-xl">🏗️</span>, // Construction icon
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navlinks = [
    { name: "About", path: "/about", active: pathname === '/about' },
    {
      name: "Applications",
      path: "/applications",
      active: pathname === "/applications" || pathname.startsWith("/applications/"),
      children: [
        { name: "Oil & Gas", path: "/applications/oil-and-gas", Icon: MdOilBarrel },
        { name: "Renewable Energy", path: "/applications/renewable-energy", Icon: MdOutlineWindPower },
        { name: "Mining", path: "/applications/mining", Icon: GiGoldMine },
        { name: "Construction & Real Estate", path: "/applications/construction", Icon: serviceIcons[1] },
        { name: "Agriculture", path: "/applications/agriculture", Icon: serviceIcons[0] },
        { name: "Marine Fisheries", path: "/applications/fisheries", Icon: GiFishingBoat },
        { name: "Steel", path: "/applications/steel", Icon: GiSteelClaws },
      ]
    },
    { name: "Projects", path: "/projects", active: pathname === '/projects' },
    { name: "Careers", path: "/career", active: pathname === '/career' },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Replace with your actual logo */}
              <Link href="/" className="text-2xl font-bold text-blue-600">Logo</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navlinks.map((link) => 
              link.children ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    link.active
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}>
                    {link.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name}>
                        <Link href={child.path} className="flex items-center">
                          {child.Icon && <child.Icon className="mr-2" />}
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    link.active
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
          <div className="flex items-center">
            <div className="hidden sm:flex sm:items-center">
              <Button>Contact Us</Button>
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navlinks.map((link) => 
            link.children ? (
              <div key={link.name} className="space-y-1">
                <button
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    link.active
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
                <div className="pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.active
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="px-2">
            <Button className="w-full justify-center">Contact Us</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}