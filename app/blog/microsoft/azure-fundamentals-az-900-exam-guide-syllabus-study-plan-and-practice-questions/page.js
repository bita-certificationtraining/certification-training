"use client";

import { useState } from "react";

/**
 * AWS Certification Comparison - single page
 * Next.js (App Router) page component. Tailwind CSS required in the project.
 * Drop this in app/page.tsx (or import as a component wherever you need it).
 */

// ---------- Data ----------

const stats = [
  { value: "12,000+", label: "Professionals Certified" },
  { value: "700/1000", label: "Passing Score" },
  { value: "Certification", label: "That Never Expires" },
];

const keyTakeaways = [
"There are no hands-on labs or portal configuration required for AZ-900; it only tests conceptual knowledge.",
"The following tables show the 2026 AZ-900 skills outline weights.The following tables display the weights for the 2026 AZ-900 skills outline.",
"The AZ-900 exam will not expire after it is passed and can be renewed at any time.The AZ-900 exam is not an expiring certificate like the other role-based exams, AZ-104, for example.",
"The majority of successful candidates study for between 1 and 3 weeks, 1-2 hours a day, but a 30 day study plan is good for the complete beginner.",
"Microsoft provide free exam vouchers periodically via their Virtual Training Days events which will reduce your cost to zero.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Recognizing models and types of cloud service (IaaS, PaaS, SaaS)" },
  { detail: "Basic knowledge of Azure key services such as Virtual Machines, App Service, Blob Storage." },
  { detail: "Familiarity with the concepts of Azure networking (Virtual Networks, VPN Gateway)" },
  { detail: "Explain Azure cost-management and cost tools concepts" },
  { detail: "Awareness of governance concepts like Azure Policy, Blueprints, and resource locks" },
];

const popularCerts = [
"The concepts of cloud computing and shared responsibility model.",
"All Azure compute services (VMs, App Service, Azure Functions)",
"The Blob Storage, Files, Queue Storage services in Azure.",
"Azure networking basics (VNets, VPN Gateway, ExpressRoute)",
"Azure identity and access basics (Microsoft Entra ID)",
"Cost management and governance tools (Pricing Calculator, Azure Policy)",
];

const comparisonTable = [
  { cert: "Level", focus: "Fundamentals", duration: "Associate" },
  { cert: "Format", focus: "Conceptual, no labs", duration: "Hands-on, scenario-based case studies" },
  { cert: "Validity", focus: "Never expires", duration: "1 year (free renewal)" },
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
  "Understand domain weightings by referring to the official AZ-900 skills outline.",
  "Complete Microsoft Learn's free AZ-900 learning path for structured foundational content.",
  "If you prefer guided explanations, reinforce ideas with a paid course or video series.",
  "After every domain, take domain wise quizzes to catch up the gap early.",
  "Try 2 - 3 full length timed mock exams in the last week.",
  "Read the explanation for each incorrect answer, then schedule an exam when you reach 80% + .Check each wrong answer explanation, then schedule an exam once 80% +.",
];

const faqs = [
  {
    q: "What is the AZ-900 exam about?",
    a: "The AZ-900 exam is designed to assess basic cloud computing concepts, core Azure services and Azure's pricing and governance tools, and does not involve any hands-on technical skills.",
  },
  {
    q: "What is the difference between AZ-900 and AZ-104?",
    a: "The AZ-104 exam is a scenario-based, hands-on Associate-level exam which assesses real Azure administration scenarios, while AZ-900 is a no-prerequisite conceptual exam.",
  },
  {
    q: "What is the time required to prepare for the AZ-900 Exam?",
    a: "Most successful candidates study for 1 - 3 weeks, 1 - 2 hours per day, but those who are complete beginners may choose to take a 30 day plan with a slower pace.",
  },
  {
    q: "How to pass AZ-900 in 30 days?",
    a: "Distribute the 3 domains over the first 3 weeks: devote the last week to full-length timed mock exams, review answers that were not correct, then schedule exam.",
  },
  {
    q: "Why is AZ-900 a great first course for cloud beginners?",
    a: "It does not need to be purchased, it is not time-bound and builds conceptual vocabulary to get to more complex, practical certifications such as AZ-104 with much more confidence.",
  },
  {
    q: "What is the minimum score needed to pass the AZ-900 exam?",
    a: "The exam fee in the United States for 2026 is $99 USD as of now and may be free on Microsoft Virtual Training Days events from time to time. ",
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
            Azure Fundamentals (AZ-900): Exam Guide, Syllabus, Study Plan & Practice Questions
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
            Thinking of starting your cloud journey with Microsoft Azure but unsure where AZ-900 fits in? This guide covers everything — exam format, syllabus, a realistic study plan, and how to actually pass in 30 days — so your first Azure certification becomes a confident first step, not a confusing one.
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
            Microsoft Azure Fundamentals (AZ-900) is Microsoft's lowest level, no prerequisites, introduction to cloud concepts, core Azure services, and Azure pricing and support basics. The exam is about 40–60 questions, of which about 60 minutes are allocated to the exam, and the passing score is 700 on a scaled 1000 (1–1000).As of 2026, AZ-900 is priced at $99 in the United States, and is never expiring after its completion, one of the most cost-effective and risk-free cloud certificates for newbies.
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
          <SectionHeading>What the AZ-900 Exam Actually Covers</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           The AZ-900 is based on three domains and focuses on the conceptual understanding of cloud computing rather than making any attempt to build anything. The first domain, Cloud Concepts, is 25-30% of the exam and is based on the basic concepts that form the foundation for all cloud computing (not only Azure). The third domain, Azure Management and Governance, is the heaviest on the exam, accounting for 30-35% of the total exam and is often ignored by candidates who are only focused on memorizing the Azure services. This domain covers aspects of cost management, governance concepts such as Azure Policy and Azure Blueprints, and service-level concepts which are simple to overlook but have a significant impact on the exam. There is a key difference from higher level Azure exams in that there is no lab or case study content in the exam, only multiple choice, drag and drop and hotspot questions.
          </p>
        </div>

        <div>
          <SectionHeading>AZ-900 vs. AZ-104: What's the Real Difference?</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Although both are Azure-certified, they are very different from one another, with number 900 and number 104 being quite distinct. It's a Fundamentals-level, conceptual exam in which there are no prerequisites and you're tested on cloud terms, service models, and basic governance — you will never access a live Azure portal in the test. The hands-on, scenario-based AZ-104 (Azure Administrator Associate) exam will require multi-screen case studies and involve real-world scenarios in which you have to configure resources, such as a virtual network, storage account, and identity settings. To put it simply, AZ-900 is meant to be viewed as an entry into the Azure world, not as a professional qualification.To sum up, AZ-900 shouldn't be seen as an end goal rather than a stepping stone to the Azure world.
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills You'll Build While Preparing for AZ-900</SectionHeading>
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
        <SectionHeading>Core Topics Covered in AZ-900</SectionHeading>
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
        <SectionHeading>AZ-900 Exam at a Glance</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Detail</th>
                {/* <th className="p-4 font-semibold">Level</th> */}
                <th className="p-4 font-semibold">AZ-900</th>
                <th className="p-4 font-semibold">AZ-104</th>
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
        <SectionHeading>Step-by-Step Study Roadmap for AZ-900</SectionHeading>
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
            Ready to start your Azure journey but not sure how to structure your AZ-900 prep?
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            Get a personalized AZ-900 study plan and career roadmap from a cloud mentor —
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and turn your first Azure certification into a confident first step.
          </p>
        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           How many full-length practice exams you do is the single best predictor of success in passing. Candidates who take 3+ timed practice exams and look at all the answers that they got wrong, pass at about double the rate of those who just read the study guide. This is a pattern that Mentors always observe for a basic exam such as AZ-900.
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