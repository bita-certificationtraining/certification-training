"use client";

import { useState } from "react";

/**
 * AWS Certification Comparison - single page
 * Next.js (App Router) page component. Tailwind CSS required in the project.
 * Drop this in app/page.tsx (or import as a component wherever you need it).
 */

// ---------- Data ----------

const stats = [
  { value: "10,000+", label: "Students Trained" },
  { value: "₹8-35 LPA", label: "Python Salary Range" },
  { value: "#1", label: "Most-Used Language 2026" },
];

const keyTakeaways = [
"PCAP is known worldwide and is a requirement for the more advanced PCPP certification.",
"The exam consists of four basic modules: basics, data structures, modules/packages, and OOP.",
"No prior professional experience is required - just basic Python skills.",
"Professionals with a certification have a higher shortlisting rate for Python developer, data analyst, and automation positions.",
"The certification is valid for life and there are no renew fees.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
    { detail: "Variables, data types, operators, and control statements (if/else loops) comprise the core syntax of Python." },
  { detail: "Functions and Modules: Using built-in libraries, importing modules, and creating reusable functions." },
  { detail: "Data Structures: Use lists, tuples, dictionaries, and sets with assurance." },
  { detail: "Exception Handling: Use try/except blocks to detect, raise, and handle issues." },
  { detail: "Classes, objects, inheritance, and encapsulation are introduced in Object-Oriented Programming (OOP)." },
  ];

const popularCerts = [
"Module 1: Basics - Literals, variables, operators, data types, and I/O operations.",
"Module 2: Control Flow - Conditional statements, loops, and boolean logic.",
"Module 3: Data Collections - Lists, tuples, dictionaries, sets, and string processing.",
"Module 4: Functions & Modules - Function parameters, scopes, recursion, and importing built-in modules.",
"Module 5: OOP Essentials - Classes, objects, inheritance, exceptions, and constructors/destructors.",
];

const comparisonTable = [
  { cert: "Exam Format", focus: "Multiple-choice, single/multiple answer", duration: "40 Questions" },
  { cert: "Duration", focus: "Timed online/offline test", duration: "65 Minutes" },
  { cert: "Passing Score", focus: "Minimum accuracy required", duration: "~70%" },
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
  "Get a grasp of Python basics - get started with syntax, variables, and control structures.",
  "Practice Data Structures - Create small programs with lists, dictionaries and tuples.",
  "Master Functions & Modules - Understand scope, recursion and standard libraries.",
  "Learn about Object Oriented Programming concepts and practice making classes and understanding inheritance.",
  "Take Mock Tests - Use PCAP specific practice tests to find areas of weakness.",
  "Book and Take the Exam - Register for and take the exam on the Python Institute site.",
];

const faqs = [
  {
    q: " Who ought to sit for the PCAP exam?",
    a: "Anyone with a basic understanding of Python who wants to formally confirm their abilities, including junior developers, students, and people changing careers.",
  },
  {
    q:"Is PCAP challenging for novices?",
    a:"If you have taken a basic Python course and have frequently practiced coding, it is suitable for beginners",
  },
  {
    q:"How much time does it take to get ready for PCAP?",
    a:"With regular daily practice, the majority of candidates get ready in 4-8 weeks.",
  },
  {
    q:"Does PCAP have an expiration date?",
    a:"No, once obtained, PCAP certification is good for life.",
  },
  {
    q:"After earning my PCAP certification, what jobs may I get?",
    a:"This qualification is frequently valued in positions such as Python Developer, Automation Engineer, Data Analyst, and QA Engineer.",
  },
  {
    q:"Does PCAP have international recognition?",
    a:"Yes, the Python Institute issues it, and employers all around the world accept it. ",
  },
];

// ---------- Small building blocks ----------

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{children}</h2>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-block rounded-full border border-white/40 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-white">
      {children}
    </span>
  );
}

// ---------- Page ----------

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 mt-20">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3a7ba5] to-[#3a7ba5] px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full border border-white/20" />
        <div className="pointer-events-none absolute -bottom-24 right-16 h-56 w-56 rounded-full bg-white/5" />

        <div className="relative max-w-4xl">
          <Eyebrow > <p className="text-yellow-300">PYTHON CERTIFICATIONS</p></Eyebrow>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tight text-white">
            PCAP - Certified Associate Python Programmer: Complete Exam Guide
          </h1>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-2xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-yellow-300">{s.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-white/90 leading-relaxed">
            Python still is the language of the programming world and the best way to show this to an employer is to be Certified Associate Python Programmer (CAP). This guide covers all you must know about the exam's format, skills you need to master, and a step-by-step plan to get certified.
          </p>
        </div>
      </section>

      {/* QUICK ANSWERS + KEY TAKEAWAYS */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <div className="rounded-2xl border-l-4 border-[#3a7ba5] bg-white p-6 sm:p-8 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-[#3a7ba5] mb-4">
            Quick Answers
          </h3>
          <p className="leading-relaxed text-slate-700">
            The PCAP (Certified Associate Python Programmer) certification is the quickest way to demonstrate your abilities to an employer and Python continues to be the most popular programming language in the world. This guide explains everything that you need to know about the exam, the skills you need to possess, and the step-by-step course to prepare for certification.
          </p>
        </div>

        <div className="mt-12">
          <SectionHeading>Key Takeaways</SectionHeading>
          <div className="divide-y divide-slate-200 rounded-2xl bg-white shadow-sm">
            {keyTakeaways.map((t, i) => (
              <div key={t} className="flex gap-4 p-5 sm:p-6">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3a7ba5] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-slate-700 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON PROSE */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto space-y-12">
        <div>
          <SectionHeading>Understanding the PCAP Exam</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Those who have completed a basic Python course and want to demonstrate their practical coding abilities should take the PCAP exam. PCAP is an exam that asks you to read, evaluate, and produce functional Python code in a set amount of time; it does not only demand theoretical knowledge. Control flow, functions, exception handling, string operations, and object-oriented programming are among the 40 questions on the test that must be completed in 65 minutes. Approximately 70% accuracy is required to pass. Students and working professionals can take the online proctored exam from any location.
          </p>
        </div>

        {/* <div>
          <SectionHeading>AZ-900 vs. AZ-104: What's the Real Difference?</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Although both are Azure-certified, they are very different from one another, with number 900 and number 104 being quite distinct. It's a Fundamentals-level, conceptual exam in which there are no prerequisites and you're tested on cloud terms, service models, and basic governance — you will never access a live Azure portal in the test. The hands-on, scenario-based AZ-104 (Azure Administrator Associate) exam will require multi-screen case studies and involve real-world scenarios in which you have to configure resources, such as a virtual network, storage account, and identity settings. To put it simply, AZ-900 is meant to be viewed as an entry into the Azure world, not as a professional qualification.To sum up, AZ-900 shouldn't be seen as an end goal rather than a stepping stone to the Azure world.
          </p>
        </div> */}
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills Required for PCAP</SectionHeading>
        <div className="space-y-3">
          {skillsCompared.map((s,i) => (
            <div
              // key={s.role}
              key={i}
              className="flex items-start gap-3 rounded-xl bg-white p-4 sm:p-5 shadow-sm"
            >
              <span className="mt-1 shrink-0 text-slate-400">→</span>
              <p className="text-slate-700">
                {/* <span className="font-bold text-slate-900">{s.role}:</span>{" "} */}
                {s.detail}
              </p>
              {/* <p className="text-slate-700">
                <span className="font-bold text-slate-900">{s.role}:</span>{" "}
                {s.detail}
              </p> */}
            </div>
          ))}
        </div>
      </section>

      {/* Related AWS Certifications */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>PCAP Exam Syllabus — Key Modules Covered</SectionHeading>
        <div className="divide-y divide-slate-200 rounded-2xl bg-white shadow-sm">
          {popularCerts.map((c) => (
            <div key={c} className="p-4 sm:p-5 text-slate-700">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Exam Overview at a Glance</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Exam Detail</th>
                {/* <th className="p-4 font-semibold">Level</th> */}
                <th className="p-4 font-semibold">Description</th>
                <th className="p-4 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr
                  key={row.cert}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="p-4 font-medium text-slate-900">{row.cert}</td>
                  {/* <td className="p-4 text-slate-600">{row.level}</td> */}
                  <td className="p-4 text-slate-600">{row.focus}</td>
                  <td className="p-4 text-slate-600">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* <p className="px-6 sm:px-10 lg:px-20 pb-10 text-center text-md text-slate-700">
        Figures vary by region, employer, and experience; use as directional guidance, not a guarantee.
      </p> */}

      {/* ROADMAP */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Step-by-Step Roadmap to PCAP Certification</SectionHeading>
        <div className="space-y-3">
          {roadmapSteps.map((step, i) => (
            <div
              key={step}
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-[#3a7ba5] text-sm font-bold text-[#3a7ba5]">
                {i + 1}
              </span>
              <p className="text-slate-700 leading-relaxed">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#3a7ba5] to-[#3a7ba5] px-6 sm:px-10 py-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Book Your Free Counselling Session
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-2xl text-yellow-200 font-bold  leading-relaxed">
            Confused about where to start your Python certification journey?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            Talk to our career experts and get a personalized roadmap — 100% free, no obligations.
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
             and Fast-Track Your Python Career!
          </p>
        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Early in the process, PCAP candidates demonstrate the coding discipline that will enable them to pass technical screens. For a job market that is so competitive for entry-level positions, the certification is viewed as a demonstration of the candidate's proficiency in moving beyond a tutorial to solving actual problems in an exam-driven fashion.
          </p>
        </blockquote>
      </section>

      {/* FAQ */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">
                    {i + 1}. {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-700 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* <footer className="px-6 sm:px-10 lg:px-20 py-10 text-center text-sm text-slate-400">
        Built with Next.js &amp; Tailwind CSS
      </footer> */}
    </main>
  );
}