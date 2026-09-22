"use client";

import { useState } from "react";

/**
 * AWS Certification Comparison - single page
 * Next.js (App Router) page component. Tailwind CSS required in the project.
 * Drop this in app/page.tsx (or import as a component wherever you need it).
 */

// ---------- Data ----------

const stats = [
  { value: "15,000+", label: "Professionals Certified" },
  { value: "50+ Hours", label: "of Curated Prep Content" },
  { value: "#1 Entry-Level", label: "Cloud Cert 2026" },
];

const keyTakeaways = [
  "AWS's own Skill Builder platform is the most reliable source for accurate, up-to-date exam content.",
  "Hands-on labs matter as much as video lectures — passive watching alone rarely builds real confidence.",
  "Books work best as reference material for revision, not as a primary learning method for beginners.",
  "Free YouTube channels are excellent for reinforcing concepts but shouldn't replace structured, sequential learning.",
  "Combining official AWS resources with instructor-led guidance reduces confusion caused by outdated or conflicting third-party content.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Navigating AWS documentation independently for accurate answers" },
  {  detail: "Practical, hands-on comfort with the AWS Free Tier console" },
  { detail: "Ability to cross-verify information across multiple sources for accuracy" },
  {  detail: "Structured self-study discipline when using free or book-based resources" },
  {  detail: "Applying theoretical concepts to scenario-based practice questions" },
];

const popularCerts = [
  "AWS Certified Cloud Practitioner Study Guide - Ben Piper & David Clinton (Sybex)",
  "AWS Certified Cloud Practitioner All-in-One Exam Guide - Anthony Sequeira (McGraw Hill)",
  "AWS Certified Cloud Practitioner (CLF-C02) Certification Guide - Sunil Gupta",
  "AWS Certified Cloud Practitioner Exam Prep - Neal Davis",
  "AWS Certified Cloud Practitioner Practice Tests - Ben Piper & David Clinton (Sybex)",
];

const comparisonTable = [
  { cert: "Official AWS Resources", focus: "AWS Skill Builder, AWS Exam Guide, AWS Whitepapers", duration: "Accurate, exam-aligned foundational content" },
  { cert: "Structured Courses", focus: "Instructor-led live or recorded batches", duration: "Guided sequence, accountability, doubt-clearing" },
  { cert: "Hands-on Labs", focus: "AWS Free Tier, AWS Skill Builder labs", duration: "Practical console experience with core services" },
  { cert: "Books", focus: "AWS Certified Cloud Practitioner Study Guide (Sybex)", duration: "Revision and reference after initial learning" },
  { cert: "YouTube Channels", focus: "AWS official channel, freeCodeCamp, Tutorials Dojo", duration: "Free conceptual reinforcement and quick revisions" },
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
  "Start with AWS's official exam guide to understand domain weightage and scope.",
  "Take a structured course (free or paid) to build a sequential, domain-wise foundation.",
  "Reinforce each domain with 20-30 minutes of hands-on Free Tier practice.",
  "Use YouTube channels to clarify specific confusing topics as they come up.",
  "Switch to a book or PDF reference during your revision phase, not your first pass.",
  "Finish with AWS's official practice exam plus a reputable third-party simulator before booking your test.",
];

const faqs = [
  {
    q: "How to study for AWS Cloud Practitioner with no prior cloud experience?",
    a: "Start with AWS's official exam guide for scope, follow a structured beginner-friendly course for sequence, and reinforce each domain with hands-on Free Tier practice rather than passive video watching alone.",
  },
  {
    q: "How does AWS Cloud Practitioner help in career growth?",
    a: "It builds foundational cloud credibility that helps freshers and non-cloud professionals qualify for entry-level cloud support and operations roles, and serves as a stepping stone toward higher-paying Associate-level certifications.",
  },
  {
    q: "Why is AWS Cloud Practitioner the best entry-level cloud certification?",
    a: "It requires no coding background, covers foundational concepts applicable across all AWS roles, and is widely recognized by recruiters as proof of genuine cloud fundamentals.",
  },
  {
    q: "What's the best way to prepare for AWS Cloud Practitioner in 2026?",
    a: "Combine AWS's official Skill Builder content for accuracy, a structured instructor-led course for pacing, hands-on Free Tier labs for practical exposure, and full-length mock exams in your final weeks.",
  },
  {
    q: "What is the best AWS Cloud Practitioner training institute in Chennai?",
    a: "Look for institutes offering structured batches with hands-on labs, mock tests, and mentor support rather than pure video content. Bita Academy is one option in Chennai offering this kind of guided AWS Cloud Practitioner training.",
  },
  {
    q: " Are free resources enough to clear the AWS Cloud Practitioner exam?",
    a: "Free resources can work if you're highly disciplined and combine documentation, hands-on labs, and mock tests consistently, but many beginners find structured, instructor-led guidance helps maintain pace and clarity, especially with limited weekend hours.",
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
          <Eyebrow > <p className="text-yellow-300">AWS CLOUD CERTIFICATIONS</p></Eyebrow>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tight text-white">
            AWS Cloud Practitioner Training Resources: Best Courses, Books, Labs & Channels
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
           Overwhelmed by hundreds of scattered AWS tutorials and unsure which ones are actually worth your time? This guide curates the best courses, books, hands-on labs, YouTube channels, and official AWS resources into one clear list, so you stop wasting weekends on the wrong material.
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
            The best AWS Cloud Practitioner (CLF-C02) prep combines four resource types: a structured course for guided learning, AWS's official documentation and Skill Builder content for accuracy, hands-on labs using the AWS Free Tier for practical exposure, and curated YouTube channels for free conceptual reinforcement. No single resource covers everything well — courses give structure, official resources give accuracy, labs give confidence, and free content fills gaps between paid options. Combining 2–3 of these, rather than relying on just one, consistently produces stronger exam readiness.
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
          <SectionHeading>Choosing Between Free and Paid Resources</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Free resources like AWS's official documentation, Skill Builder digital courses, and reputable YouTube channels are excellent for building conceptual understanding at zero cost, but they place the entire burden of structure and consistency on the learner — something that's difficult for beginners juggling full-time jobs. Paid, instructor-led courses solve this by providing a fixed sequence, doubt-clearing support, and accountability, which matters most for candidates with no prior cloud exposure or limited self-study discipline. Books, meanwhile, occupy a different role entirely: they're best used for revision and reference after you've already been introduced to a topic, since reading about IAM policies cold, without hands-on context, rarely sticks the way a guided lab or video walkthrough does.
          </p>
        </div>

        {/* <div>
          <SectionHeading>Best mock tests for AWS CLF-C02 </SectionHeading>
          <p className="leading-relaxed text-slate-700">
           The most reliable mock tests are AWS's official practice test directly from AWS Skill Builder, it contains the closest approach to the real question style, format and difficulty. Further, candidates widely use third party answer explanations, such as Tutorials Dojo (Jon Bonso) and Whizlabs, which offer detailed explanations of answers and domain-wise explanations, which allow candidates to see why the answer is the right one, not merely memorize it. You should steer clear of free, uncredited exam dumps or sites as AWS is constantly changing its question pool and the garbage ones can teach you outdated or deleted information. Ideally use AWS's official practice test for accuracy and a third-party simulator for volume and variety and keep track of your domain-wise performance on both to get a realistic picture of how ready you are for the exam.
          </p>
        </div> */}
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills You Build Using These Resources</SectionHeading>
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
        <SectionHeading>Commonly used books for AWS Cloud Practitioner (CLF-C02) prep:</SectionHeading>
        <div className="divide-y divide-slate-200 rounded-2xl bg-white shadow-sm">
          {popularCerts.map((c) => (
            <div key={c} className="p-4 sm:p-5 text-slate-700">
              {c}
              {/* Total: 42 hours of core content plus additional time for mock tests and revision (usually 10-15 hours for a total of 50-55 hours of prep, depending on how much you can do each day! */}
            </div>
          ))}
           
        </div>
        {/* <p className=" pt-10 pl-5 text-md text-slate-700">
        Total: 42 hours of core content plus additional time for mock tests and revision (usually 10-15 hours for a total of 50-55 hours of prep, depending on how much you can do each day! 
      </p> */}
      </section>

      {/* COMPARISON TABLE */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Resource Comparison Table</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Resource Type</th>            
                <th className="p-4 font-semibold">Examples</th>
                <th className="p-4 font-semibold">Best Used For</th>
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
        <SectionHeading>Step-by-Step Roadmap to Using These Resources</SectionHeading>
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
            Get a curated, step-by-step resource list mapped to your background and timeline —
          </p>
        
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            Book Your Free Counselling Call Today
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and start learning with a plan, not a pile of bookmarks.
          </p>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
           If you're in Chennai and want structured, instructor-led AWS Cloud Practitioner training instead of piecing together free resources on your own, Bita Academy offers guided batches with hands-on labs, mock tests, and doubt-clearing sessions, so you get the accountability that self-study often lacks.
          </p>

        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Mentors who've guided hundreds of candidates through CLF-C02 consistently see the same pattern: candidates who follow a fixed weekly structure — rather than "studying when they feel like it" — finish faster and retain more. The 8-week plan isn't slower because the content is harder; it's paced deliberately so beginners build genuine hands-on confidence instead of memorizing answers.
          </p>
        </blockquote>
      </section>

      {/* FAQ */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">FAQs</h2>
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