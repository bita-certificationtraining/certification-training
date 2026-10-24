"use client";

import { useState } from "react";

/**
 * AWS Certification Comparison - single page
 * Next.js (App Router) page component. Tailwind CSS required in the project.
 * Drop this in app/page.tsx (or import as a component wherever you need it).
 */

// ---------- Data ----------

const stats = [
  { value: "12,000+", label: "Learners Certified" },
  { value: "₹6-28 LPA ", label: "Azure Admin Salary Range" },
  { value: " #1 Cloud Certification", label: "Demand 2026" },
];

const keyTakeaways = [
"The most basic starting point for Azure infrastructure and administration is the standard AZ-104.",
"It consists of the following domains: identity, storage, compute, networking, monitoring.",
"If you are new to cloud concepts, you're recommended to take AZ-900 (not required) prior to AZ-104.",
"After taking AZ-104 you might choose to specialize even more into either architecture (AZ-305) or DevOps (AZ-400).",
"Laboratory techniques are more valuable than studying dumps and paper.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Identity & access management — using Microsoft Entra ID, users, groups, and RBAC roles." },
  { detail: "The basics of networking — VNets, subnets, NSGs and the concepts behind hybrid connectivity." },
  { detail: "Storage management - creating storage accounts, storage tier, storage redundancy." },
  { detail: "Compute administration - scale sets, containers and VMs." },
  { detail: "Monitoring & troubleshooting — Azure Monitor, Log Analytics and alerts, to ensure uptime." },
];

const popularCerts = [
"Azure Administrators / Cloud Administrators roles",
"Infrastructure Support and Operations (SaO) positions.",
"This course provides the foundation you need to become an Azure Solutions Architect (AZ-305).",
"A foundation for DevOps Engineer (AZ-400)",
"Projects involving hybrid cloud and on-premises-to-cloud migrations.Projects migrating to and from on-premises resources to the cloud.",
];

const comparisonTable = [
  { cert: "Prerequisite", focus: "None (AZ-900 recommended)", duration: "Beginners should start with fundamentals" },
  { cert: "Exam Domains", focus: "Identity, Governance, Storage, Compute, Networking, Monitoring", duration: "5 core skill areas" },
  { cert: "Career Path", focus: "Azure Admin → AZ-305 or AZ-400", duration: "Choose based on interest: architecture vs. automation" },
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
  "If you don't know anything about Azure concepts, start with Azure Fundamentals (AZ-900).",
  "Each day, experiment with new features in Azure portal while setting up a free Azure account.",
  "Examine each of the domains of AZ-104 in a systematic manner: identity, storage, compute, networking, monitoring.",
  "Set up hands-on labs: Deploy VMs, create VNets, create storage accounts.",
  "Take practice tests to identify areas of weakness and corrections.",
  "Take and retake the AZ-104 exam and then, plan for the next exam (AZ-305 or AZ-400).",
];

const faqs = [
  {
    q: "After AZ-104, should I go for AZ-305 or AZ-400?",
    a: "If you are interested in cloud architecture and cloud design decisions, select AZ-305. If you want to dig more into CI/CD pipelines, automation and DevOps practices, then opt for AZ-400.",
  },
  {
    q: "Which coaching institute in Chennai offers AZ-104 training?",
    a: "There are few IT training institutes in Chennai that provide AZ-104 classes with lab facility. Before signing up, look at the certified trainers, hands-on lab hours, placement support and recent student reviews of the chosen school.",
  },
  {
    q: "AZ-900 vs AZ-104: Which should I take first?",
    a: "For beginners, begin with the AZ-900 course to establish the basics of cloud computing. If you are already familiar with IT infrastructure, you may be able to skip to AZ-104.",
  },
  {
    q: "AZ-104 vs AZ-204: Developer vs Administrator — which to choose?",
    a: "For those interested in infrastructure, networking and operations, AZ-104 is the course. One of the most popular choices for developers building and deploying applications on Azure, the AZ-204 suits developers. Choose according to your special interests: Operations or Coding.",
  },
  {
    q: "AZ-305 vs AZ-104: What's the difference?",
    a: "Operational: Manage day-to-day resources in Azure, such as with AZ-104. Designing overall cloud architecture and overall migration plan and overall governance structures is strategic – this is AZ-305. AZ-305 is usually taken after the completion of AZ-104.",
  },
  {
    q: "How long does it take to prepare for AZ-104?",
    a: "Candidates with a basic IT background will require 6–10 weeks of regular study followed by hands-on experience in the lab.",
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
          <Eyebrow > <p className="text-yellow-300">MICROSOFT AZURE CERTIFICATIONS</p></Eyebrow>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tight text-white">
            Azure Administrator (AZ-104): Complete Certification Guide
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
            The platform that is growing at the fastest rate is Azure, and the most sought-after credential for those seeking a career in cloud administration is the AZ-104. This guide will take you through everything — Exam topics, Roadmap, Career paths and comparison of AZ-104 with AZ-900, AZ-204, AZ-305 and AZ-400.
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
            Azure Certified: Azure Administrator Associate (AZ-104) demonstrates your skills in managing Azure identities, storage, virtual networks, and compute resources. It is suitable for IT professionals who have 6+ months' hands-on experience in Azure. Azure administration is a hands-on, practical skill – most candidates prepare over 6-10 weeks and do both self-study and a structured training program that includes labs.
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
          <SectionHeading>What Are the Topics in the AZ-104 Exam?</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           The AZ-104 exam measures your skills to implement, manage, and monitor an Azure environment. They also cover Azure Active Directory (Microsoft Entrance ID) objects management, virtual machines and scale sets configuration, virtual networks, load balancer, VPN gateway, DNS configuration, and subscription and governance configuration (RBAC, policies, resource groups). The exam also includes the following topics: Monitoring resources with Azure Monitor, backup and recovery configuration, and cost management. Please be prepared for a variety of quiz questions, including multiple choice, drag and drop, and case studies.
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
        <SectionHeading>Skills Required</SectionHeading>
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
        <SectionHeading>What This Certification Prepares You Fo</SectionHeading>
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
        <SectionHeading>AZ-104 at a Glance</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Aspect</th>
                {/* <th className="p-4 font-semibold">Level</th> */}
                <th className="p-4 font-semibold">Details</th>
                <th className="p-4 font-semibold">Notes</th>
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
        <SectionHeading>Step-by-Step Certification Roadmap</SectionHeading>
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
            Confused about where to start your Azure journey? 
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-2xl text-yellow-200 font-bold  leading-relaxed">
            Talk to a certified Azure mentor and get a personalized roadmap — no cost, no obligation. 
          </p>
          
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and take the first step toward your cloud career!
          </p>
        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           The consistently shared advice from industry mentors is that the candidates who do the best job of passing AZ-104 are often the ones who learn by doing in Azure rather than reading the videos along. Exposing students to real-world scenarios of resource groups and networking, as well as RBAC scenarios, adds a layer of intuition that can't be applied by the multiple-choice practice test and can be seen in an interview by an employer.
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