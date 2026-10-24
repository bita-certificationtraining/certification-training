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
 "The difference between IaaS, PaaS and SaaS is the extent to which AWS manages your infrastructure.",
 "The shared responsibility model divides security responsibilities between AWS ('security of the cloud') and you ('security in the cloud').",
 "Regions are geographic areas and Availability Zones are independent data centers in a Region.",
 "Global infrastructure is a key component to understanding the answers to scenario questions relating to latency, redundancy and compliance.",
 "These concepts have about 24% of the weightage in the exam and are not to be neglected or hurried.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Understanding the difference between IaaS, PaaS, and SaaS with actual AWS services." },
  { detail: "Applying the shared responsibility model to security scenarios in the right way" },
  { detail: "Knowing the correlation between Regions, Availability Zones and Edge Locations" },
  { detail: "Assessing and comparing deployment models (public, private, hybrid) in relation to various business requirements." },
  { detail: "Connecting cloud concepts to the AWS Well-Architected Framework's reliability pillar" },
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
  "Understand the difference between IaaS, PaaS, and SaaS, and give an example of one AWS service that fits each of the three categories.",
  "Learn about the shared responsibility model and get used to doing the sorting into the 'AWS' and “customer” columns.",
  "Know the order of Regions, Availability Zones, and Edge Locations.",
  "Relate these ideas to practical situations such as disaster recovery and latency.",
  "Test your knowledge using topic-wise quizzes that only test the Cloud Concepts.",
  "Review weak points from AWS official documentation prior to progressing to next domain.", 
];

const faqs = [
  {
    q: "What does the AWS Cloud Practitioner exam test you on?",
    a: "It assesses basic concepts in four areas: Cloud Concepts, Security and Compliance, Cloud Technology and Services, and Billing, Pricing, and Support — applied knowledge and not memorization.",
  },
  {
    q: "What are the top AWS Cloud Practitioner practice exam platforms?",
    a: "The official AWS practice exam from Skill Builder is the most accurate, and third-party sites like Tutorials Dojo and Whizlabs are popular for providing explanations and more questions.",
  },
  {
    q: "Can I take the AWS Cloud Practitioner exam online from India?",
    a: "Yes, AWS offers online proctored exams that can be taken from home in India, in addition to in-person testing centers, provided you meet the technical and ID verification requirements.",
  },
  {
    q: "How many attempts are allowed for AWS Cloud Practitioner?",
    a: "Yes, AWS provides online proctored exams which you can take from the comfort of your home and in India as well, as long as you have the technical and ID verification requirements.",
  },
  {
    q: "Does AWS Cloud Practitioner expire? How do I renew it?",
    a: "Exams may be retaken, but with a 14 day interval between exam sessions and a 180 day interval between the third and subsequent failed exams in the past 12 months.",
  },
  {
    q: "Is AWS Cloud Practitioner enough to understand cloud computing basics for other roles?",
    a: "Yes, there are some concepts that are introduced such as service models, shared responsibility, and global infrastructure that are solid and can be used in all cloud roles, no matter whether you are using AWS, Azure, or GCP.",
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
            Cloud Concepts is the first domain of the CLF-C02 exam, which includes the concepts of service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), the shared responsibility model, and the AWS global infrastructure (Regions, Availability Zones, Edge Locations). These concepts are important because they are the foundation for all other exam domains: Security, Technology, Billing. Once you get comfortable with these basics, the rest of your CLF-C02 preparation will be much easier to absorb.
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
           Cloud service models lie on a continuum of control to convenience. In IaaS (Infrastructure as a Service), such as Amazon EC2, you're responsible for the operating system, applications, and data, while AWS is responsible for the physical hardware and networking. PaaS (Platform as a Service), such as AWS Elastic Beanstalk, takes another layer of abstraction and provides you with the runtime and infrastructure so you can only concentrate on your application code. With SaaS (Software as a Service), such as Amazon Chime, ownership of practically everything else is transferred except for your data and user settings. This also applies to the shared responsibility model: AWS is always on the hook for the security of the cloud (physical data centers, hardware, global infrastructure), and you are responsible for the security in the cloud (your data, access management, configuration).
          </p>
          <p className="leading-relaxed text-slate-700">
           A key aspect of exam questions is whether you can accurately position a security task on this side of the equation.
          </p>
        </div>

        <div>
          <SectionHeading>Regions, Availability Zones, and Global Infrastructure</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           The AWS global infrastructure consists of Regions, Availability Zones (AZs), and Edge Locations, and it is important to understand the relationships among them for scenario-based questions. A Region is a physical geographic area (such as Mumbai or Singapore) that may have multiple isolated Availability Zones, each with independent power, cooling, and networking resources in case of localized failures. Edge Locations are even closer to end users, providing services such as Amazon CloudFront with lower latency to deliver content. Often exam scenarios will require you to select a combination of Regions and AZs for high availability, disaster recovery or compliance requirements such as: Deploying across multiple AZs within a Region protects against a single data center failure, and deploying across Regions protects against a Region-wide outage.
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
           Understand these basic concepts simply with a cloud mentor, using real examples that stick - Book Your Free Counselling Call Today and build a foundation for all the AWS exams that follow
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
          
        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Consistently, candidates that fail to master the Cloud Concepts domain find the Security and Technology domain difficult as well, as both of these domains are based on the vocabulary of the Cloud Concepts domain. It can be helpful to spend more time on this even if it seems "too basic" — it will be useful throughout the exam, not just in this domain.
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