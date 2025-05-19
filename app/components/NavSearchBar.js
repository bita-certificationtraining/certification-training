"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { IoSearch } from "react-icons/io5"

import { searchnavbar } from "../util/searchnavbar"

export default function NavSearchBar() {
  const [query, setQuery] = useState("")
  const [filtered, setFiltered] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (query.length > 0) {
      const suggestions = searchnavbar.filter(
        (course) =>
          course.title.toLowerCase().includes(query.toLowerCase()) ||
          course.code.toLowerCase().includes(query.toLowerCase())
      )
      setFiltered(suggestions)
    } else {
      setFiltered([])
    }
  }, [query])

  const handleClick = (slug) => {
    router.push(`/certifications/${slug}`)
    setQuery("") // Clear the input field
    setFiltered([]) // Clear the suggestion list
  }

  return (
    <div className="relative">
      <div className="flex items-center rounded border bg-white px-2">
        <IoSearch className="text-3xl text-themegray" />
        <input
          type="text"
          className="w-full px-1 py-2 outline-none"
          placeholder="Search certifications..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {filtered.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 mt-1 max-h-80 overflow-y-auto rounded border bg-themewhite shadow">
          {filtered.map((course) => (
            <li key={course.code}>
              <div className="flex items-center bg-themewhite px-2 hover:bg-themegray">
                <Image
                  src={course.c_image}
                  alt="LogoBadge"
                  width={40}
                  height={40}
                />
                <button
                  onClick={() => handleClick(course.slug)}
                  className="w-full py-2 ps-2 text-left text-[12px]"
                >
                  {course.title}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
