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
  { value: "24% Exam Weightage", label: "on Cloud Concepts" },
  { value: "700/1000", label: "Passing Score" },
];

const keyTakeaways = [
  "IaaS, PaaS, and SaaS differ mainly in how much infrastructure management AWS handles versus you.",
  "The shared responsibility model splits security duties between AWS ('security of the cloud') and you ('security in the cloud').",
  "Regions are geographic locations, while Availability Zones are isolated data centers within a Region.",
  "Understanding global infrastructure helps you answer scenario questions about latency, redundancy, and compliance.",
  "These concepts carry roughly 24% of exam weightage, making them too important to skip or rush.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Distinguishing between IaaS, PaaS, and SaaS through real AWS service examples" },
  {  detail: "Correctly applying the shared responsibility model to security scenarios" },
  { detail: "Understanding the relationship between Regions, Availability Zones, and Edge Locations" },
  {  detail: "Evaluating deployment models (public, private, hybrid) for different business needs" },
  {  detail: "Connecting cloud concepts to the AWS Well-Architected Framework's reliability pillar" },
];

// const popularCerts = [
//   "AWS Certified Cloud Practitioner (CLF-C02) - Foundational - 4-6 weeks",
//   "AWS Certified Solutions Architect - Associate - Associate - 8-10 weeks",
//   "AWS Certified Developer -  Associate - Associate - 8-10 weeks",
//   "AWS Certified SysOps Administrator - Associate - Associate - 8-10 weeks",
//   "AWS Certified Solutions Architect - Professional - Professional - 12-16 weeks",
// ];

const comparisonTable = [
  { cert: "IaaS", focus: "You manage OS, apps, and data; AWS manages hardware", duration: "Amazon EC2" },
  { cert: "PaaS", focus: "AWS manages infrastructure and runtime; you manage code", duration: "AWS Elastic Beanstalk" },
  { cert: "SaaS", focus: "AWS manages almost everything except your data/settings", duration: "Amazon Chime" },
  { cert: "Region", focus: "A physical geographic area with multiple Availability Zones", duration: "Asia Pacific (Mumbai)" },
  { cert: "Availability Zone", focus: "An isolated data center within a Region", duration: "ap-south-1a" },
  { cert: "Shared Responsibility", focus: "Security split between AWS and the customer", duration: "IAM policies (customer-managed)" },
];

const roadmapSteps = [
  "Learn the definitions of IaaS, PaaS, and SaaS with one AWS service example for each.",
  "Study the shared responsibility model and practice sorting tasks into 'AWS' vs. 'customer' columns.",
  "Understand the hierarchy of Regions, Availability Zones, and Edge Locations.",
  "Connect these concepts to real scenarios like disaster recovery and latency reduction.",
  "Test your understanding with topic-wise quizzes focused only on Cloud Concepts.",
  "Revisit weak areas using AWS's official documentation before moving to the next domain.",
];

const faqs = [
  {
    q: "What does the AWS Cloud Practitioner exam test you on?",
    a: "It tests foundational understanding across four domains: Cloud Concepts, Security and Compliance, Cloud Technology and Services, and Billing, Pricing, and Support — focusing on applied understanding rather than memorization.",
  },
  {
    q: "What are the top AWS Cloud Practitioner practice exam platforms?",
    a: "AWS's official practice exam through Skill Builder is the most accurate, while third-party platforms like Tutorials Dojo and Whizlabs are widely used for detailed explanations and additional question variety.",
  },
  {
    q: "Can I take the AWS Cloud Practitioner exam online from India?",
    a: "Yes, AWS offers online proctored exams that can be taken from home in India, in addition to in-person testing centers, provided you meet the technical and ID verification requirements.",
  },
  {
    q: "How many attempts are allowed for AWS Cloud Practitioner?",
    a: "You can retake the exam, but you must wait 14 days between attempts, and after your third failed attempt in a 12-month period, you must wait 180 days before trying again.",
  },
  {
    q: "Does AWS Cloud Practitioner expire? How do I renew it?",
    a: "Yes, the certification is valid for 3 years. You can renew it by retaking the current version of the exam before your certification expires.",
  },
  {
    q: "Is AWS Cloud Practitioner enough to understand cloud computing basics for other roles?",
    a: "Yes, the concepts covered — service models, shared responsibility, and global infrastructure — form a strong foundation applicable to cloud roles across AWS, Azure, and GCP alike.",
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
            AWS Cloud Concepts Explained: IaaS, PaaS, SaaS, Shared Responsibility & Regions
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
            Confused about the difference between IaaS, PaaS, and SaaS, or what "shared responsibility" actually means on exam day? This blog breaks down the core cloud concepts tested in AWS Cloud Practitioner (CLF-C02) in plain language, so you understand the why behind each term instead of just memorizing definitions.
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
            Cloud Concepts is the foundational domain of the CLF-C02 exam, covering service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), the shared responsibility model, and AWS's global infrastructure (Regions, Availability Zones, Edge Locations). These concepts matter because every other exam domain — Security, Technology, Billing — builds on this vocabulary. Getting comfortable with these basics early makes the rest of your CLF-C02 preparation significantly easier to absorb.
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
          <SectionHeading>Understanding Service Models and the Shared Responsibility Model</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Cloud service models exist on a spectrum of control versus convenience. With IaaS (Infrastructure as a Service), like Amazon EC2, you manage the operating system, applications, and data while AWS handles physical hardware and networking. PaaS (Platform as a Service), like AWS Elastic Beanstalk, goes a step further by managing the runtime and infrastructure for you, letting you focus purely on your application code. SaaS (Software as a Service), like Amazon Chime, hands over almost everything except your own data and user settings. This same logic extends into the shared responsibility model: AWS is always responsible for the "security of the cloud" — physical data centers, hardware, and global infrastructure — while you're responsible for "security in the cloud," meaning your data, access management, and configuration choices. Exam questions often test whether you can correctly place a security task on the right side of this line.
          </p>
        </div>

        <div>
          <SectionHeading>Regions, Availability Zones, and Global Infrastructure</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           AWS's global infrastructure is built around Regions, Availability Zones (AZs), and Edge Locations, and understanding how they relate is essential for scenario-based questions. A Region is a physical geographic area (like Mumbai or Singapore) containing multiple, isolated Availability Zones, each with independent power, cooling, and networking to protect against localized failures. Edge Locations, used by services like Amazon CloudFront, sit even closer to end users to reduce latency for content delivery. Exam scenarios often ask you to choose the right combination of Regions and AZs for high availability, disaster recovery, or compliance reasons — for example, deploying across multiple AZs within a Region protects against a single data center failure, while replicating across Regions protects against a Region-wide outage.
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills Needed to Master These Concepts</SectionHeading>
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
      {/* <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Related AWS Certifications and Duration</SectionHeading>
        <div className="divide-y divide-slate-200 rounded-2xl bg-white shadow-sm">
          {popularCerts.map((c) => (
            <div key={c} className="p-4 sm:p-5 text-slate-700">
              {c}
            </div>
          ))}
        </div>
      </section> */}

      {/* COMPARISON TABLE */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Cloud Concepts at a Glance</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Concept</th>            
                <th className="p-4 font-semibold">Definition</th>
                <th className="p-4 font-semibold">Example AWS Service</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr
                  key={row.cert}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="p-4 font-medium text-slate-900">{row.cert}</td>
                  
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
        <SectionHeading>Step-by-Step Roadmap to Mastering Cloud Concepts</SectionHeading>
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
            Still mixing up IaaS, PaaS, and SaaS on every practice question?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
           Get these foundational concepts explained clearly by a cloud mentor, with real examples that actually stick —
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            Book Your Free Counselling Call Today
          </button>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
           and build a foundation strong enough for every AWS exam after this one too.
          </p>
        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Mentors consistently find that candidates who skip a deep understanding of Cloud Concepts struggle later with Security and Technology domains too, since those build directly on this vocabulary. Spending extra time here — even if it feels "too basic" — pays off across the entire exam, not just one domain.
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