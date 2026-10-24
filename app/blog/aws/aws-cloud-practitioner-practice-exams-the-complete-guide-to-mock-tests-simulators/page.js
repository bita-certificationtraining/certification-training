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
  { value: "700/1000", label: "Passing Score" },
  { value: "3+ Mock Exams", label: "Recommended Before Test Day" },
];

const keyTakeaways = [
  "Weak areas are identified much more clearly with practice tests than by re-reading notes or watching videos.",
  "For your final 2-3 attempts, always practice as if it were an actual exam (90 minutes, no breaks, no notes).",
  "It is more important to look at wrong answers than the score itself; know why an answer was right.",
  "If a student gets 80%+ on several full mocks, then they are likely to be ready for CLF-C02.",
  "An overuse of dumps or memorized question banks is counterproductive as AWS rotates its question pool.",
  
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "65 questions in 90 minutes" },
  {  detail: "Identifying keywords in scenario-based, multiple response questions" },
  { detail: "Self-assessment to prioritize revision, domain-wise" },
  {  detail: "Taking out false alternatives under pressure one by one" },
  {  detail: "Being relaxed and calm during difficult or unfamiliar questions" },
];

const popularCerts = [
  "Cloud Concepts",
  "Security and Compliance",
  "Cloud Technology and Services",
  "Billing, Pricing, and Support",
];

const comparisonTable = [
  { cert: "Topic-wise quizzes (10-15 questions per topic)", focus: "Immediately following learning a particular domain such as IAM or S3", duration: "Helps identify gaps in knowledge at an early stage when the concept is still fresh." },
  { cert: "Full-length exam simulators (65 questions, 90 minutes)", focus: "Final 1-2 weeks of prep", duration: "Develops time management and stamina as well as knowledge" },
  { cert: "Using just one type", focus: "Avoiding topic quizzes or entire simulators", duration: "Topic quizzes without domain practice, simulators without topic quizzes, or both are not sufficient for exam pacing, and can lead to frustration and false sense of difficulty level." },
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
   "Complete your studies of all four domains before taking your first full-length mock.",
   "Immediately after each domain, take topic-wise quizzes to find gaps early.",
   "Do your first full simulator with no notes and under real exam conditions (90 minutes).",
   "Make a basic tracker for all the incorrect responses for each domain and error type.",
   "Rather than rewriting weak domains, take full mocks until you get 80%+ every time.",
   "Test one last time on the simulator 2-3 days prior to actual test; relax rather than cramming.",
];

const faqs = [
  {
    q: "How to prepare for the AWS Cloud Practitioner exam in 30 days?",
    a: "Divide your 30 days into 3 weeks of domain-wise study (Cloud Concepts, Technology, Security, Billing) and the last week to be spent fully on mock exams and weak area revision.",
  },
  {
    q: "How to pass AWS Cloud Practitioner on the first attempt?",
    a: "Use a structured domain-wise study plan in conjunction with a minimum of 3-5 full-length timed mock exams and do not schedule your exam date until you are consistently getting 80% or above.",
  },
  {
    q: "How hard is the AWS Cloud Practitioner exam?",
    a: "The test is at a basic level and beginner friendly, however, many candidates tend to underestimate the scenario-based questions because they haven't practiced hands-on or taken mock tests.",
  },
  {
    q: "How many questions are in the AWS CLF-C02 exam?",
    a: "There are 65 questions (50 scored, 15 unscored) to be answered in 90 minutes and a passing score is 700 out of 1000.",
  },

  {
    q: "What are the best study materials for the AWS Cloud Practitioner exam?",
    a: "The best way to prepare is to use a combination of AWS's official exam guide, instructor-led content, AWS Free Tier hands-on labs, and full-length timed practice simulators, rather than relying exclusively on unofficial question dumps.",
  },
  {
    q: "How many practice exams should I take before the real test?",
    a: "Most successful candidates attempt 3-5 full-length mocks, working out which areas they are weak at in the early attempts and which areas they are ready for in the later attempts, under timed conditions.",
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
            AWS Cloud Practitioner Practice Exams: The Complete Guide to Mock Tests & Simulators
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
            This is a recommended date prior to Test Day. Weeks of reading notes and still not sure if you're exam ready or not? The single most important thing to know about passing a first attempt at CLF-C02 is that practice tests are the best indicator — this guide teaches you how to use practice tests, simulators and result analysis to enter your CLF-C02 exam with real confidence, not guesswork. 
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
            AWS Cloud Practitioner (CLF-C02) practice exams are timed, scenario-based question sets which simulate the actual exam format of 65 questions in 90 minutes. They are important because AWS exams are not about memorizing facts but about applying your knowledge, so a mock exam can tell you which of the four areas of the exam (Cloud Concepts, Security, Technology, Billing) you are weak in, before you pay the $100 exam fee! The majority of successful candidates sit 3-5 full-length mocks in the final week in order to achieve a score of 80%+ each time and therefore secure their actual exam slot.
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
          <SectionHeading>Why should freshers start with AWS Cloud Practitioner? </SectionHeading>
          <p className="leading-relaxed text-slate-700">
           AWS Cloud Practitioner is the perfect course for beginners as it is a recognized and desired credential that doesn't require any coding or infrastructure skills, and provides a basic understanding of cloud. It provides freshers with a working vocabulary and conceptual understanding that will be used throughout all of the higher level AWS roles, and can help them feel more confident and comfortable with taking exams, rather than plunging straight into a more challenging Associate-level exam. It's also a positive indicator to recruiters that the candidate is interested in a cloud career without having any experience, and often it can get a fresher notice for entry-level cloud support or operations positions that don't require a lot of technical expertise yet.
          </p>
        </div>

        <div>
          <SectionHeading>Analyzing Practice Results Effectively</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           65% on a mock exam is not a failure, it's data. The candidates that get the best results view each incorrect response as a mini case study, asking themselves if it was a lack of knowledge, a misread question, or a careless timing mistake, and then tagging each incorrect answer by domain to look for patterns (Cloud Concepts, Security, Technology, Billing). If Security and Compliance is your lowest domain score on three consecutive practice sets, it's a strong indicator that you need to revisit IAM and the shared responsibility model before moving onto the next domain. This is tracked in a simple spreadsheet (attempt number, score, weak domain, error type) and converts random practise into a focused revision plan.
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills You Build Through Practice Testing</SectionHeading>
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
        <SectionHeading>How many domains are in AWS Cloud Practitioner CLF-C02? </SectionHeading>
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
        <SectionHeading>Types of Practice Resources and How to Use Them</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Practice Type</th>
                {/* <th className="p-4 font-semibold">Level</th> */}
                <th className="p-4 font-semibold">Best Used When</th>
                <th className="p-4 font-semibold">Why It Matters</th>
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
        <SectionHeading>Step-by-Step Roadmap to Using Practice Exams</SectionHeading>
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
            Book your Free Counselling Session and get the answers to your questions.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-2xl text-yellow-200 font-bold  leading-relaxed">
            Not certain whether your mock scores imply you are prepared for the real test?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            Have your practice test results analyzed by a cloud mentor and know exactly where to focus your efforts for more practice
          </p>
         
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and end the guessing game about exam readiness. 
          </p>

        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Mentors who keep a close eye on candidates' performance realize that a first attempt error is not a lack of knowledge error, but rather an error caused by not taking timed, full-length practice tests and being unprepared for the pacing. The candidates who use the practice tests as a diagnostic tool rather than a score to chase, always outperform those candidates who just repeat the same question bank, hoping to memorize the answers.
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