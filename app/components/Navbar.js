"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import NavSearchBar from "@/app/components/NavSearchBar"

const navLinks = [
  { href: "/", label: "HOME", mobileLabel: "HOME" },
  { href: "/aboutus", label: "ABOUT US", mobileLabel: "ABOUT" },
  { href: "/blog", label: "BLOG", mobileLabel: "BLOG" },
  { href: "/contactus", label: "CONTACT US", mobileLabel: "CONTACT US" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // "/" ku exact match, mathi pages-ku startsWith (e.g. /blog/post-1 la um BLOG active-a irukum)
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const linkClass = (href) =>
    `rounded-xl px-3 py-1 transition duration-75 ease-linear hover:bg-themeblue hover:text-white ${
      isActive(href) ? "bg-themeblue text-white" : ""
    }`

  return (
    <nav
      className={`fixed left-0 top-0 z-[99] w-full p-2 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-white md:bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Left - Logo */}
        <div>
          <Link href="/">
            <Image
              src="/homepageimages/bitalogo.png"
              width={120}
              height={120}
              alt="BITA Logo"
            />
          </Link>
        </div>

        {/* Right - Desktop Menu */}
        <ul className="hidden items-center space-x-6 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block ${linkClass(link.href)}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.mobileLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}