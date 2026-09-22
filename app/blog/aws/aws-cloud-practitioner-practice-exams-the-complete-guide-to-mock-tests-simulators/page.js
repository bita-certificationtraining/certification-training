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
  "Practice tests reveal weak domains far more accurately than re-reading notes or watching videos.",
  "Always simulate real exam conditions — 90 minutes, no pauses, no notes — for at least your last 2-3 attempts.",
  "Reviewing wrong answers matters more than the score itself; understand why an option was correct.",
  "A consistent 80%+ across multiple full mocks is a reliable readiness signal for CLF-C02.",
  "Overusing dumps or memorized question banks backfires, since AWS regularly rotates its question pool.",
  
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Time management across 65 questions within a 90-minute window" },
  {  detail: "Identifying keywords in scenario-based, multiple-response questions" },
  { detail: "Domain-wise self-assessment to prioritize revision" },
  {  detail: "Eliminating incorrect options systematically under pressure" },
  {  detail: "Staying calm and pacing yourself during unfamiliar or tricky questions" },
];

const popularCerts = [
  "Cloud Concepts",
  "Security and Compliance",
  "Cloud Technology and Services",
  "Billing, Pricing, and Support",
];

const comparisonTable = [
  { cert: "Topic-wise quizzes (10-15 questions per domain)", focus: "Right after studying a specific domain like IAM or S3", duration: "Helps catch knowledge gaps early while the concept is still fresh" },
  { cert: "Full-length exam simulators (65 questions, 90 minutes)", focus: "Final 1-2 weeks of prep", duration: "Builds time management and stamina, not just knowledge" },
  { cert: "Relying on only one type", focus: "Skipping either topic quizzes or full simulators", duration: "Topic quizzes alone leave you unprepared for exam pacing; simulators alone (without domain practice first) often cause frustration and inflated anxiety about difficulty" },
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
   "Finish studying all four domains before attempting your first full-length mock.",
  "Take topic-wise quizzes immediately after each domain to catch gaps early.",
  "Attempt your first full simulator under real exam conditions (90 minutes, no notes).",
  "Log every wrong answer by domain and error type in a simple tracker.",
  "Revise weak domains, then retake full mocks until you consistently score 80%+.",
  "Do one final simulator 2–3 days before the real exam, then rest instead of cramming.",
];

const faqs = [
  {
    q: "How to prepare for the AWS Cloud Practitioner exam in 30 days?",
    a: "Split your 30 days into 3 weeks of domain-wise study (Cloud Concepts, Technology, Security, Billing) followed by a final week dedicated entirely to full-length mock exams and weak-area revision.",
  },
  {
    q: "Which How to pass AWS Cloud Practitioner on the first attempt?",
    a: "Combine structured domain-wise study with at least 3-5 full-length timed mock exams, and don't book your exam date until you're consistently scoring 80%+.",
  },
  {
    q: "How hard is the AWS Cloud Practitioner exam?",
    a: "It's a foundational-level exam and considered beginner-friendly, but candidates who skip hands-on practice and mock tests often underestimate its scenario-based question style.",
  },
  {
    q: "How many questions are in the AWS CLF-C02 exam?",
    a: "The exam has 65 questions (50 scored, 15 unscored) to be completed in 90 minutes, with a passing score of 700 out of 1000.",
  },
  {
    q: "What are the best study materials for the AWS Cloud Practitioner exam?",
    a: "If you are a beginner and prefer a structured way of training rather than self-study, then Bita Academy is a good opA mix of AWS's official exam guide, structured instructor-led content, AWS Free Tier hands-on labs, and full-length timed practice simulators works best — avoid relying solely on unofficial question dumps."
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
            Reading notes for weeks but still unsure if you're actually exam-ready? Practice tests are the single biggest predictor of a first-attempt pass — this guide shows you how to use mock exams, simulators, and result analysis to walk into your CLF-C02 exam with real confidence, not guesswork.
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
            Practice exams for AWS Cloud Practitioner (CLF-C02) are timed, scenario-based question sets that mimic the real exam's 65-question, 90-minute format. They matter because AWS exams test applied understanding, not memorization — a mock exam exposes exactly which of the four domains (Cloud Concepts, Security, Technology, Billing) you're weak in before it costs you the $100 exam fee. Most successful candidates take 3–5 full-length mocks in their final week, aiming to consistently score 80%+ before booking their actual exam slot.
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
           For freshers, AWS Cloud Practitioner is the ideal starting point because it builds foundational cloud understanding without requiring prior coding or infrastructure experience, making the learning curve manageable while still being a recognized, resume-worthy credential. It gives freshers working vocabulary and conceptual clarity around cloud computing, security, and pricing that every higher-level AWS role builds on, so instead of jumping straight into a harder Associate-level exam and feeling overwhelmed, they gain confidence and exam-taking experience first. It's also a strong signal to recruiters that a candidate is serious about a cloud career even without job experience, often helping freshers stand out for entry-level cloud support or operations roles that don't demand deep technical skills yet.
          </p>
        </div>

        <div>
          <SectionHeading>Analyzing Practice Results Effectively</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Scoring 65% on a mock exam isn't a failure — it's data. The candidates who improve fastest treat every wrong answer as a mini case study: they identify whether the mistake was a knowledge gap, a misread question, or a careless timing error, and tag each wrong answer by domain (Cloud Concepts, Security, Technology, Billing) to spot patterns. If Security and Compliance keeps showing up as your weakest domain across three consecutive mocks, that's a clear signal to revisit IAM and the shared responsibility model before touching another practice set. Tracking this in a simple spreadsheet — attempt number, score, weak domain, error type — turns random practice into a targeted revision plan.
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
        <SectionHeading>Structure Within Each Plan</SectionHeading>
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
        <SectionHeading>Step-by-Step Study Roadmap </SectionHeading>
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
            Not sure if your mock scores mean you're actually ready?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            Get your practice test results reviewed by a cloud mentor and find out exactly which domains need more work —
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            Book Your Free Counselling Call Today
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and stop guessing your exam readiness.
          </p>

        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Mentors who track candidate performance closely notice that first-attempt failures rarely come from lack of knowledge — they come from skipping full-length, timed mocks and walking in unprepared for the pacing. Candidates who treat practice exams as a diagnostic tool, not just a score to chase, consistently outperform those who simply repeat the same question bank hoping to memorize answers.
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