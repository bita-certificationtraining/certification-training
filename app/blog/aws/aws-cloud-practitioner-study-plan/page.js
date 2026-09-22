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
  { value: "90-Day Average", label: "Career Switch Timeline" },
];

const keyTakeaways = [
  "The 2-week plan requires 2-3 hours of work per day and is appropriate for candidates who have some technical background.",
  "This 4-week plan is suitable for students of 1-1.5 hours a day (plus weekends) who are working professionals.",
  "This is the 8-week plan that is best suited for absolute beginners who can only attend classes on weekend days.",
  "Weekly mock tests need to be part of all plans; otherwise, candidates will fail the test on their first attempt #1.",
  "Even just 20 minutes per day of hands-on AWS Free Tier practice will increase retention over passively watching videos.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Understanding and answering scenario-based, multiple-response exam questions" },
  {  detail: "With confidence, navigating the AWS Management Console to core services." },
  { detail: "Knowing how AWS prices and utilizing the Pricing Calculator" },
  {  detail: "Real security scenarios in the shared responsibility model." },
  {  detail: "Strategies for time management during an actual exam with timed mock exams. " },
];

const popularCerts = [
  "Cloud Concepts — 3 hours",
  "AWS Global Infrastructure — 2 hours.",
  "Compute Services (EC2, Lambda) — 5 hours",
  "Storage in S3/EBS takes 4 hours.Storage (S3/EBS): 4 hours.",
  "Database Services (RDS, DynamoDB) — 3 hours",
  "Networking (VPC) — 4 hours",
  "Security and Compliance — 5 hours",
  "Identity and Access Management (IAM) — 4 hrs",
  "Monitoring and Logging (CloudWatch, CloudTrail) — 2 hours",
  "Billing and Pricing Models (3 hours)",
  "It's time to teach students about AWS Support Plans — 1 hour.",
  "2 hours AWS Well-Architected Framework.2 hours: AWS Well-Architected Framework.",
  "Cloud Economics — 2 hours",
  "Total: 42 hours of core content plus additional time for mock tests and revision (usually 10-15 hours for a total of 50-55 hours of prep, depending on how much you can do each day!",
];

const comparisonTable = [
  { cert: "Week 1", focus: "Cloud Concepts and the shared responsibility model", duration: "2-week: combined into one intensive session; 4-week: dedicated week; 8-week: two weeks with extra doubt-clearing" },
  { cert: "Middle weeks", focus: "Core services (EC2, S3, VPC, IAM, Lambda) plus Security/Compliance", duration: "2-week: compressed into a few intensive sessions; 4-week: 2 dedicated weeks; 8-week: 4 weeks with added hands-on labs" },
  { cert: "Final week", focus: "Mock exams, weak-area revision, and exam-day logistics", duration: "2-week: last 2-3 days; 4-week: final week; 8-week: final 1-2 weeks with more mock attempts" },
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
  "Complete a diagnostic exam to determine where you're starting out with cloud knowledge.",
  "Build a shared responsibility model and study cloud concepts first — the rest of it follows.",
  "Get hands-on experience running resources on the core services (EC2, S3, VPC, IAM, Lambda) offered on Free Tier.",
  "Cover the Security/Compliance and the Pricing/Billing domains as they share similarities with each other in exam contexts.",
  "Complete at least 3 full length, timed, mock exams, learning from all the incorrect responses.",
  "You can do a last run-through of weak domain and then follow AWS's exam-day checklist before scheduling your exam. ",
];

const faqs = [
  {
    q: "Which study plan is correct for me, 2, 4 or 8 weeks?",
    a: " If you have experience with IT, 2 weeks with 2-3 hours per day will be sufficient. Most working professionals want 4 weeks and those who are complete novices and can only engage in the weekend would want 8 weeks.",
  },
  {
    q: "Which institute is best for AWS Cloud Practitioner in chennai? ",
    a: " To find institutes that provide batches with proper structure, instruction, hands-on lab work, mock tests and placement assistance. One such institutes that provide AWS Cloud Practitioner Course in Chennai (near Porur) is Bita Academy.",
  },
  {
    q: "What is the best place to get trained to AWS certification training near me in Porur?",
    a: "Bita Academy offers AWS Cloud Practitioner batches for candidates from Porur and other areas of Chennai, both in the day and the night.",
  },
  {
    q: " What are the salary expectations of AWS Cloud Practitioner Course participants in Chennai? ",
    a: "Please check course fees for the different batches (weekday, weekend and fast-track) as well as current offers. For up to the minute and accurate pricing it is best to book a free counselling call.",
  },
  {
    q: "Does Bita Academy offer any certifications?",
    a: "If you are a beginner and prefer a structured way of training rather than self-study, then Bita Academy is a good option and provides you with mock tests, hands-on labs, and placement support for CLF-C02.",
  },
  {
    q: " Can I find AWS cloud training that includes job placement services near me in Chennai?",
    a: "Yes, there are a few institutes in Chennai that provide placement support along with AWS certification training programmes — check with them what are the institutes they have currently partnered with, and their success rates for placements.",
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
            AWS Cloud Practitioner Exam Guide (CLF-C02): Complete Overview 202AWS Cloud Practitioner Study Plan: 2-Week, 4-Week & 8-Week Roadmaps
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
            Are you unsure of how many weeks you need to pass CLF-C02? With just 14 days left before the deadline—or an easier 8 weekends—this guide will provide you a methodical approach so you can start studying and getting ready without having to wing it.
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
            You can prepare for the AWS Cloud Practitioner (CLF-C02) exam in 2 weeks (intensive, previous IT experience), 4 weeks (balanced, most working professionals) and 8 weeks (relaxed, complete beginners with weekend only availability). The three plans have the same four domains of study (Cloud Concepts, Security, Technology, and Billing), but vary in hours of daily study and hands-on practice. The plan you choose will vary based on your existing exposure to AWS, hours you have to study per day, and your exam date.
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
          <SectionHeading>Choosing the Right Plan for Your Schedule</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Choosing a study plan isn't about the ego — it's about truthfulness about the time and the background. For those with no previous exposure to cloud or coming from a non-IT career, the 8-week approach helps reduce the burnout by having each domain covered on one weekend only, with a chance to actually do something new in the AWS console, rather than just read slides. The 2-week intensive plan is feasible for IT professionals who already have some experience with networking or server concepts because they are using AWS's terms to consolidate existing concepts instead of building them up from the ground up. The middle course, the 4-week plan, is what most working professionals with 9 to 6s work around weekday-night evenings and weekend deep dives actually do, as it doesn't involve unpaid leave.
          </p>
        </div>

        <div>
          <SectionHeading>Best mock tests for AWS CLF-C02 </SectionHeading>
          <p className="leading-relaxed text-slate-700">
           The most reliable mock tests are AWS's official practice test directly from AWS Skill Builder, it contains the closest approach to the real question style, format and difficulty. Further, candidates widely use third party answer explanations, such as Tutorials Dojo (Jon Bonso) and Whizlabs, which offer detailed explanations of answers and domain-wise explanations, which allow candidates to see why the answer is the right one, not merely memorize it. You should steer clear of free, uncredited exam dumps or sites as AWS is constantly changing its question pool and the garbage ones can teach you outdated or deleted information. Ideally use AWS's official practice test for accuracy and a third-party simulator for volume and variety and keep track of your domain-wise performance on both to get a realistic picture of how ready you are for the exam.
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills You'll Build Through the Study Plan</SectionHeading>
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
        <SectionHeading>What topics are covered in AWS Cloud Practitioner?</SectionHeading>
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
            Still stuck deciding between 2, 4, or 8 weeks for your AWS journey?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            Get a personalized study plan mapped to your schedule, background, and career goals
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            Book Your Free Counselling Call Today
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and walk in with a clear timeline, not a guess.
          </p>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            If you're searching for AWS Cloud Practitioner training in Chennai — including near Porur — Bita Academy offers structured, instructor-led batches with hands-on labs, mock tests, and placement support, so you don't have to piece together a study plan on your own from scattered YouTube videos. 
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