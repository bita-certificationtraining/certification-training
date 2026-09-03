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
  { value: "₹6-28 LPA", label: "Cloud Salary Range" },
  { value: "#1 Entry-Level", label: "Cloud Cert Worldwide" },
];

const keyTakeaways = [
  "CLF-C02 has 4 domains, weighted differently, with Cloud Concepts and Security/Compliance carrying the most marks.",
  "You don't need programming skills - this exam tests conceptual and business understanding of AWS.",
  "Passing score is 700/1000, and unused/incorrect answers aren't penalized (no negative marking).",
  "The certification is valid for 3 years and must be renewed through recertification.",
  "It's the single best ROI certification for IT professionals wanting a structured entry into cloud roles.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Basic understanding of cloud computing concepts (public/private/hybrid cloud)" },
  {  detail: "Familiarity with IT infrastructure basics (servers, networking, storage)" },
  { detail: "Understanding of business concepts like cost management and compliance" },
  {  detail: "Comfort navigating the AWS Management Console" },
  {  detail: "Analytical thinking to interpret scenario-based exam questions" },
];

const popularCerts = [
  "AWS Certified Cloud Practitioner (CLF-C02) - Foundational - 4-6 weeks",
  "AWS Certified Solutions Architect - Associate - Associate - 8-10 weeks",
  "AWS Certified Developer - Associate - Associate - 8-10 weeks",
  "AWS Certified SysOps Administrator - Associate - Associate - 8-10 weeks",
  "AWS Certified Solutions Architect - Professional - Professional - 12-16 weeks",
];

const comparisonTable = [
  { cert: "Cloud Support Associate", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
  { cert: "Junior Cloud Engineer", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
  { cert: "Cloud Operations Analyst", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
  { cert: "Associate Solutions Architect", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
  { cert: "Cloud Consultant", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
  "Understand the exam guide and four domains published by AWS.",
  "Build core concepts with a structured course covering Cloud Concepts, Security, Technology, and Billing.",
  "Get hands-on with the AWS Free Tier to practice services like EC2, S3, and IAM.",
  "Take timed mock exams weekly to build speed and identify weak domains.",
  "Join a doubt-clearing or mentor session for concepts you're unsure about.",
  "Schedule your exam once you consistently score 80%+ on practice tests, then review AWS's exam-day checklist.",
];

const faqs = [
  {
    q: "Is AWS Cloud Practitioner enough to get a job?",
    a: "It's a strong foundation and helps with entry-level cloud roles, but pairing it with a hands-on associate-level certification improves job prospects significantly.",
  },
  {
    q: "How difficult is the CLF-C02 exam?",
    a: " It's considered foundational-level and manageable for beginners, provided you follow a structured study plan rather than random self-study.",
  },
  {
    q: "Self-study or instructor-led training - which is better?",
    a: "Self-study works if you're highly disciplined; instructor-led training helps working professionals stay accountable and clears doubts faster, especially on weekends.",
  },
  {
    q: "How much does the exam cost?",
    a: "The exam fee is $100 (approximately ₹8,300), with practice exams available separately.",
  },
  {
    q: "How long is the certification valid?",
    a: "Three years, after which you need to recertify through AWS's recertification process.",
  },
  {
    q: " I only have weekends - is that enough time to prepare?",
    a: "Yes. Most working professionals complete preparation in 4-6 weekends when following a structured, domain-wise study plan.",
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

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            AWS Cloud Practitioner Exam Guide (CLF-C02): Complete Overview 2026
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
            Stuck in a non-cloud IT role while your peers move into higher-paying cloud jobs? The AWS Certified Cloud Practitioner (CLF-C02) is the fastest, most affordable way to break in - no coding background required, and most working professionals clear it in 4-6 weeks of weekend study.
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
            The AWS Cloud Practitioner exam (CLF-C02) is a 90-minute, 65-question, foundational-level exam testing your understanding of AWS Cloud concepts, security, technology, and billing. It costs $100 (~₹8,300), requires no prerequisites, and is scored out of 1,000, with 700 needed to pass. It is the recommended starting point before Solutions Architect, Developer, or SysOps certifications, and is widely accepted by recruiters as proof you understand cloud fundamentals.
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
          <SectionHeading>Exam Structure and Domains</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           The CLF-C02 exam consists of 65 questions (50 scored, 15 unscored for AWS research) delivered as multiple-choice and multiple-response formats, to be completed in 90 minutes. It is available online or at a testing center in multiple languages. The exam is divided into four domains: Cloud Concepts (24%), Security and Compliance (30%), Cloud Technology and Services (34%), and Billing, Pricing, and Support (12%). This weighting tells you exactly where to focus - Security and Technology together make up nearly two-thirds of the exam, so candidates worried about where do I even start studying should prioritize IAM, shared responsibility model, core services (EC2, S3, VPC, Lambda), and AWS pricing models before anything else.
          </p>
        </div>

        <div>
          <SectionHeading>Key Concepts Candidates Must Understand</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Beyond memorizing services, CLF-C02 tests whether you grasp how AWS actually works in the real world. This includes the shared responsibility model (what AWS secures vs. what you secure), core compute/storage/database services, the AWS Well-Architected Framework is six pillars, and pricing/billing tools like AWS Budgets and the Pricing Calculator. Many candidates fail not because the concepts are hard, but because they self-study without structure, jumping between random YouTube videos and outdated PDFs. A guided, instructor-led path with mock tests and doubt-clearing sessions consistently produces higher first-attempt pass rates than unstructured self-study, especially for working professionals with limited weekend hours.
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills Required for This Certification</SectionHeading>
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
        <SectionHeading>Related AWS Certifications and Duration</SectionHeading>
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
        <SectionHeading>Salary Data: Cloud Practitioner Certified Roles</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Role</th>
                {/* <th className="p-4 font-semibold">Level</th> */}
                <th className="p-4 font-semibold">Salary (USD)</th>
                <th className="p-4 font-semibold">Salary (INR)</th>
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

      <p className="px-6 sm:px-10 lg:px-20 pb-10 text-center text-md text-slate-700">
        Figures vary by region, employer, and experience; use as directional guidance, not a guarantee.
      </p>

      {/* ROADMAP */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Step-by-Step Roadmap to Choosing Your Certification Path</SectionHeading>
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
            Still guessing which cloud path fits your career instead of knowing it?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            Talk to a cloud career expert, get a personalized study plan, and find out if CLF-C02 is your right first step
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            Book Your Free Counselling Call Today
          </button>
        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Industry mentors consistently note that candidates who combine structured, instructor-led learning with hands-on AWS Free Tier practice pass on their first attempt far more often than those relying solely on self-study. The biggest differentiator is not intelligence - it's consistency and having someone to clarify doubts before they turn into exam-day panic.
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