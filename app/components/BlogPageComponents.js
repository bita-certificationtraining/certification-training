"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Clock, Search, Star, Wallet } from "lucide-react"

// ---- Static data (Next.js la ithha oru separate data.js file ku move pannalam) ----
const CATEGORIES = [
  "Python Institute Certification",
  "AWS Certification",
  "Microsoft Certification",
  "CompTIA Certification",
  "GIAC Certification",
  "ISACA Certification",
]

const COURSES = [
  {
    id: 1,
    title: "aws cloud practitioner exam guide",
    category: "AWS Certification",
    link: "/blog/aws/aws-cloud-practitioner-exam-guide",
    icon: "/allblogpage/AWS/aws_blog.png",
    // rating: 5,
    // hours: 30,
    // salary: "11 LPA",
  },
]

export default function CoursesPage() {
  // Single category mattum select aagum - oru puthu category click pannina
  // pazhaya selection automatic ah release aagum
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [search, setSearch] = useState("")

  const toggleCategory = (cat) => {
    setSelectedCategory((prev) => (prev === cat ? null : cat))
  }

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory =
        !selectedCategory || course.category === selectedCategory
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, search])

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 pt-20 md:flex-row">
      {/* ---------- Sidebar ---------- */}
      <aside className="w-full shrink-0 bg-[#3a7ba5] p-6 md:w-72">
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg bg-white py-3 pl-10 pr-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#3a7ba5]"
          />
        </div>

        <div className="flex flex-col gap-3">
          {CATEGORIES.map((cat) => {
            const checked = selectedCategory === cat
            return (
              <label
                key={cat}
                className={`flex cursor-pointer select-none items-center gap-3 rounded-lg bg-white px-4 py-3 ring-2 transition ${
                  checked ? "ring-[#3a7ba5]" : "ring-transparent"
                }`}
                onClick={() => toggleCategory(cat)}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                    checked
                      ? "border-[#3a7ba5] bg-[#3a7ba5]"
                      : "border-slate-400"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-white">
                      <path d="M4.7 8.4 2.3 6l-.9.9L4.7 10.2l6-6-.9-.9z" />
                    </svg>
                  )}
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {cat}
                </span>
              </label>
            )
          })}
        </div>
      </aside>

      {/* ---------- Main content ---------- */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-[#3a7ba5]">All Blog</h1>

        {/* Selected category name here */}
        {selectedCategory && (
          <p className="mt-1 text-lg font-semibold text-slate-600">
            {selectedCategory}
          </p>
        )}
        <div className="mb-8 mt-2 h-1 w-16 rounded-full bg-[#3a7ba5]" />

        {filteredCourses.length === 0 ? (
          <p className="text-sm text-slate-500">
            working on...
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <Link href={course.link} key={course.id}>
                <div
                  key={course.id}
                  className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[4px_4px_0_0_#e2b877]"
                >
                  <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[#3a7ba5]">
                    <img
                      src={course.icon}
                      alt={course.title}
                      className="h-30 w-30 object-contain"
                    />
                  </div>

                  <div className="mb-4 w-full rounded-lg bg-[#3a7ba5] px-2 py-3 text-sm font-semibold text-white">
                    {course.title}
                  </div>

                  {/* <div className="flex items-center gap-1 text-sm font-semibold text-[#3a7ba5] mb-3">
                  Rating:
                  <span className="flex text-[#3a7ba5]">
                    {Array.from({ length: course.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </span>
                </div> */}

                  {/* <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-[#3a7ba5]" />
                    <span>{course.hours} hrs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wallet size={16} className="text-[#3a7ba5]" />
                    <span>Earn upto {course.salary}</span>
                  </div>
                </div> */}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
