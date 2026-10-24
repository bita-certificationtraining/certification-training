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
 "The most trusted and up-to-date exam content is found on AWS's own Skill Builder platform.",
 "Hands-on labs are just as important as video lectures — nothing can replace hands-on practice.",
 "Books are not a great tool for learning, as they are primarily used for reference when revising.",
 "Free channels on YouTube are great for reinforcing concepts but should not be used in place of structured, sequential learning.",
 "Official AWS resources and instructor-led guidance will minimize confusion from outdated or conflicting third-party content.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Self-learning AWS documentation for correct answers" },
  { detail: "Hands-on experience and comfort using the AWS Free Tier console." },
  { detail: "Interpretation skills of checking facts from different sources to make sure they are correct" },
  { detail: "Self-study discipline with the use of free or book-based resources" },
  { detail: "Using theory to answer scenario based practice questions." },
];

const popularCerts = [
  "AWS Certified Cloud Practitioner Study Guide - Ben Piper & David Clinton (Sybex)",
  "AWS Certified Cloud Practitioner All-in-One Exam Guide - Anthony Sequeira (McGraw Hill)",
  "AWS Certified Cloud Practitioner (CLF-C02) Certification Guide - Sunil Gupta",
  "AWS Certified Cloud Practitioner Exam Prep - Neal Davis",
  "AWS Certified Cloud Practitioner Practice Tests - Ben Piper & David Clinton (Sybex)",
  "As a quick note: any copy you choose is specifically for the CLF-C02 exam (as the CLF-C01 exam was retired by AWS, so older versions may not have the same domains and weightings)."
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
  " Use AWS's official exam guide to get to know domain weightage and scope.",
  "Enroll in an organized course (paid or free) for a sequential, domain by domain foundation.",
  "Complete 20-30 minutes of hands-on Free Tier practice for each domain.",
  "Take advantage of YouTube channels to explain particular topics that you are unsure of when they arise.",
  "Use a book or PDF reference when revising, not during your initial reading.",
  "Complete AWS's official practice test and a trusted third party simulator before taking the test. ",
];

const faqs = [
  {
    q: "How to study for AWS Cloud Practitioner with no prior cloud experience?",
    a: "Use the AWS official exam guide to set the scope, a step-by-step, beginner-friendly course for sequence, and hands-on practice in AWS's Free Tier for each domain, not just watching videos.",
  },
  {
    q: "How does AWS Cloud Practitioner help in career growth?",
    a: "It establishes ground-level credibility in the cloud space to enable freshers and even non-cloud professionals to pursue entry-level cloud support and operations jobs, and is a pathway to higher-paid Associate-level credentials.",
  },
  {
    q: "Why is AWS Cloud Practitioner the best entry-level cloud certification?",
    a: "It does not require any coding skills, provides basic concepts that can be used by all AWS roles and is a known benchmark by recruiters for real cloud knowledge. ",
  },
  {
    q: "What's the best way to prepare for AWS Cloud Practitioner in 2026?",
    a: "Use AWS's official Skill Builder content for accuracy, a structured instructor-led course for pacing, hands on Free Tier labs for hands-on experience, and full length mock exams in your final weeks.",
  },
  {
    q: "What is the best AWS Cloud Practitioner training institute in Chennai?",
    a: "Seek institutes that provide well-organized batches, practical sessions, mock tests, and mentorship instead of just videos. One of the training institutes that provide this kind of AWS Cloud Practitioner training in Chennai is Bita Academy.",
  },
  {
    q: " Are free resources enough to clear the AWS Cloud Practitioner exam?",
    a: "Free resources can be effective when you're extremely disciplined and use them in conjunction with documentation and hands-on labs, but many students find that they're more effective when they're provided with consistent, structured and instructor-led guidance, particularly if they have limited weekend hours.",
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
            The top AWS Cloud Practitioner (CLF-C02) prep includes four types of resources: guided learning in a structured course, accurate information in AWS's official documentation and Skill Builder content, hands-on practice in the AWS Free Tier, and free conceptual reinforcement from curated YouTube channels. There are no perfect resources that do everything well, courses provide structure, official resources provide accuracy, labs provide confidence, and free resources provide gaps between paid resources. Using 2-3 of these, as opposed to one, consistently leads to better exam readiness. 
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
           Free resources, such as AWS's official documentation, AWS Skill Builder digital courses, and trusted YouTube channels, are great for conceptual understanding, but they leave it up to the learner to provide structure and consistency, which is challenging for those with full-time jobs. This is where paid, instructor-led courses come in handy: They offer a set sequence, support to clear up doubts, and accountability, which is crucial for candidates who have little or no prior cloud experience, or lack the discipline to study on their own. Books, however, have a different purpose: they are intended for revision and reference after you have been introduced to the topic, and reading about IAM policies cold, without any context or hands-on experience, doesn't stick in the mind like a guided lab or walk-through video does.
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
            Click to book a free counselling session.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-2xl text-yellow-200 font-bold  leading-relaxed">
            Frustrated by having to switch between 15 tabs to determine what to study first?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-2xl text-yellow-200 font-bold  leading-relaxed">
            Frustrated by using 15 browser tabs to determine what to study first? Find a curated list of resources, step-by-step, according to your background and timeline —
          </p>
        
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and start learning with a plan — not a pile of bookmarks.
          </p>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
           If you are in Chennai and looking for a structured AWS Cloud Practitioner training with instructor-led classes and hands-on labs, mock tests, and doubt clearing sessions, then you are lucky to find Bita Academy as they provide it. 
          </p>

        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Mentors who have seen hundreds of study plans frequently see candidates who only use one type of resource (typically only YouTube videos) get stuck at 60-65% on mock exams, because they don't have a way to apply what they've learned to a scenario. Candidates with structured courses (with lab and AWS documentation) always cross the 80%+ mock score threshold fast. 
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