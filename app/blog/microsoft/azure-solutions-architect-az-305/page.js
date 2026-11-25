"use client";

import { useState } from "react";

/**
 * AWS Certification Comparison - single page
 * Next.js (App Router) page component. Tailwind CSS required in the project.
 * Drop this in app/page.tsx (or import as a component wherever you need it).
 */

// ---------- Data ----------

const stats = [
    { value: "8,000+", label: "Architects Certified" },
  { value: "₹15-45 LPA", label: "Azure Architect Salary Range" },
  { value: "#1 Expert-Level", label: "Cloud Credential in India 2026" },
];

const keyTakeaways = [
"A difference between AZ-305 and other courses is that it isn't about implementation, it's about designing solutions.",
"It is considered 'expert-level' because it requires some operational knowledge (AZ-104) and evaluates architectural judgment.",
"Cost, security, scalability and compliance considerations must be considered in exam scenarios.",
"It is easy to book the exam online via the Microsoft certification portal from India.",
"The Azure-305 opens the doors to the positions of Solutions Architect, Cloud Architect and Technical Lead. ",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Architectural design thinking — weighing cost, performance and security in all decisions." },
  { detail: "Identity and governance strategy - writing identity and governance policies, roles and structures at scale with Microsoft Entra ID." },
  { detail: "Business continuity planning (BCP) is the design of backup, disaster recovery and high availability solutions." },
  { detail: "Data and storage architecture—selecting the appropriate storage, database and migration approach to a scenario." },
  { detail: "Networking and security design - designing hybrid connectivity, hub-spoke and Zero Trust architectures. " },
  
];

const popularCerts = [
"Designing for identity, governance, and monitoring",
"Designing data storage solutions (relational and non-relational)",
"Designing business continuity solutions",
"Designing infrastructure solutions (compute, networking, migration)",
"Cost optimization and Azure Well-Architected Framework principles",
];

const comparisonTable = [
  { cert: "Prerequisite", level: "AZ-104 knowledge recommended", focus: "Not mandatory, but strongly advised" },
  { cert: "Exam Format", level: "Case studies, scenario-based questions", focus: "Tests design reasoning, not syntax" },
  { cert: "Career Path", level: "Solutions Architect, Cloud Architect, Technical Lead", focus: "Senior-level infrastructure roles" },
  ];


// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
"Have most recently gained 1+ years of hands-on Azure experience, preferably post AZ-104.",
"Learn all the domains of Microsoft's official AZ-305 learning path.",
"Develop designs on paper for identity, storage, networking and BCDR scenarios.",
"Discuss cost and reliability principles with the Azure Well-Architected Framework.",
"Try to do some of the scenarios in timed practice exams for the purpose of developing case study reasoning speed.",

];

const faqs = [
  {
    q: "How to book a Microsoft certification exam online in India? ",
    a: "To book a Microsoft Certification Exam Online in India, you need to follow a few steps.To book a Microsoft Certification Exam Online in India, you should follow a few steps. Sign up for an account on the Microsoft Certification/Pearson VUE site, then book a test-center or online proctored exam session for the exam AZ-305, and pay the exam fee. For online proctoring, a government issued ID and an appropriate quiet space with a functioning web camera must be provided.",
  },
  {
    q: "Why is Azure certification better than AWS for India?",
    a: "This is based on the industry you are targeting; however, it is not necessarily the 'best' platform. Azure has a huge presence in Indian enterprises with Microsoft 365, Dynamic and hybrid on-premises, and hence Azure certifications are preferred for enterprise and government roles. AWS, on the other hand, has a bigger overall share of the cloud market globally, and is used by startups and product companies. It will depend on the industry and companies that you plan to target.",
  },
  {
    q: "What is the AZ-305 Azure Solutions Architect Expert exam?",
    a: "It is the Microsoft's industry-leading and advanced certification that demonstrates your proficiency in designing Azure solutions that address business requirements for compute, networking, storage, identity, security, and governance.",
  },
  {
    q: "Which industries in India use Microsoft Azure most? ",
    a: "The top five industries are banking and financial services, IT services and consulting, healthcare, manufacturing, and government/public sector organizations, which are the heaviest Azure adopters in India, mainly because of their existing integration with the Microsoft ecosystem and compliance can be met through Azure.",
  },
  {
    q: "Do I need AZ-104 before attempting AZ-305? ",
    a: "Not required, but strongly recommended by Microsoft. The scenarios in AZ-305 are predominantly design-based, which makes it much more difficult to reason through without first having some experience with Azure.",
  },
  {
    q: "How long should I prepare for AZ-305?",
    a: "The majority of Azure candidates who have some experience in Azure will require 8-12 weeks, with lots of scenario-based practice and minimal amount of reading.",
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
            Azure Solutions Architect (AZ-305): Exam Guide and Career Path
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
           It's time to take infrastructure knowledge to design judgment with AZ-305: Microsoft Certified: Azure Solutions Architect Expert. It's designed for those who deploy resources rather than those who architect, secure and scale an entire cloud environment for them. This guide provides an overview of the concepts in architecture, the exam preparation approach, and career path for the AZ-305 exam.
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
            Designed to assess design skills in Compute, Storage, Networking, Identity, Security, and Business Continuity in Azure, the AZ-305 exam is an Azure certification. It is an expert level exam, so it is expected that the candidate has already gained experience in AZ-104 or equivalent practical experience. You will have to learn to think through the scenarios, it takes anywhere from 8-12 weeks, and it's not about memorizing syntax, it's about making trade-off decisions.
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
          <SectionHeading>What Is the AZ-305 Azure Solutions Architect Expert Exam?</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           In the course, you will have the opportunity to demonstrate your skills in converting business requirements into a working Azure architecture, as assessed by the assessment item, AZ-305. In contrast to AZ-104, which focuses on management of current resources, AZ-305 will require you to design identity and governance strategies, plan data storage solutions, architect business continuity and disaster recovery, and design infrastructure that balances performance, cost, and security. Questions are usually given as a case description with several constraints and the interviewer expects you to select the right design that meets all of the constraints – thinking over recalling.
          </p>
        </div>

        <div>
          <SectionHeading>Why Is AZ-305 Considered Expert-Level?</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           One of the strongest aspects of AZ-305 is that it doesn't test isolated skills but how well you integrate them, and as such, it's at the top of the Azure infrastructure track. A candidate is responsible for thinking about networking, identity, cost management, compliance and resiliency at the same time for one design decision. The exam has a prerequisite of familiarity with the operation of various services, as that is covered in AZ-104 or equivalent experience, and only concentrates on how they interrelate at scale. That's why most of the successful candidates will be working with Azure projects for 1-2 years prior to taking the test.
          </p>
        </div>
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
        <SectionHeading>Related Topics Covered in AZ-305</SectionHeading>
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
        <SectionHeading>AZ-305 at a Glance</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Aspect</th>            
                
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
                  <td className="p-4 text-slate-600">{row.level}</td>
                  <td className="p-4 text-slate-600">{row.focus}</td>
                  {/* <td className="p-4 text-slate-600">{row.duration}</td> */}
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
        <SectionHeading>Step-by-Step Roadmap to AZ-305</SectionHeading>
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
          
          {/* <h3 className="text-2xl sm:text-xl font-semibold">
            Interested in taking a step from "managing Azure" to "designing Azure"? Talk to a qualified architecture advisor and receive a customized AZ-305 study plan. Make the next career move by booking your free counselling call today!
          </h3> */}
          <p className="mx-auto mt-4 max-w-2xl text-2xl text-yellow-200 font-bold  leading-relaxed">
            Interested in taking a step from "managing Azure" to "designing Azure"? Talk to a qualified architecture advisor and receive a customized AZ-305 study plan. Make the next career move by 
          </p>    
        
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">booking your free counselling call today!</a>
          </button>
           {/* <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and strengthen your weakest domain! 
          </p>           */}

        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Professionals who clear AZ-305 on their first attempt often describe the same shift in mindset: they stop thinking "which service do I use" and start thinking "what trade-off am I making." Mentors recommend spending as much time sketching architecture diagrams by hand as reading documentation — the exam rewards structured reasoning about constraints far more than factual recall.
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