"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import NavSearchBar from "@/app/components/NavSearchBar"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // className="fixed top-0 left-0 w-full p-4 z-50"
    <nav
      className={`fixed left-0 top-0 z-[99] w-full p-4 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-white md:bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Left - Logo */}
        <div>
          <Image
            src="/homepageimages/bitalogo.png"
            width={120}
            height={120}
            alt="BITA Logo"
          />
          {/* <img src="/homepageimages/bitalogo.png" alt="BITA Logo" className="w-full h-full"/> */}
        </div>

        {/* Right - Desktop Menu */}
        <ul className="hidden items-center space-x-6 text-sm md:flex">
          <li>
            <Link
              href="/"
              className="rounded-xl px-3 py-1 transition duration-75 ease-linear hover:bg-themeblue hover:text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="rounded-xl px-3 py-1 transition duration-75 ease-linear hover:bg-themeblue hover:text-white"
            >
              AboutUs
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="rounded-xl px-3 py-1 transition duration-75 ease-linear hover:bg-themeblue hover:text-white"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contactus"
              className="rounded-xl px-3 py-1 transition duration-75 ease-linear hover:bg-themeblue hover:text-white"
            >
              ContactUs
            </Link>
          </li>
          <li>
            <NavSearchBar />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`fixed left-0 top-16 z-50 w-full overflow-hidden bg-white shadow-md transition-all duration-300 md:hidden ${
          menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        <ul className="text-md flex flex-col space-y-4 p-4">
          <li>
            <Link
              href="/"
              className="block rounded-xl px-3 py-1 transition duration-75 ease-linear hover:bg-themeblue hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="block rounded-xl px-3 py-1 transition duration-75 ease-linear hover:bg-themeblue hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contactus"
              className="block rounded-xl px-3 py-1 transition duration-75 ease-linear hover:bg-themeblue hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
