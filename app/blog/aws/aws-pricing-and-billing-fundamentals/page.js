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
  { value: "12% Exam Weightage ", label: "on Billing & Pricing" },
  { value: " Pay-As-You-Go", label: "AWS's Core Pricing Principle" },
];

const keyTakeaways = [
 "AWS is pay-as-you-go (PAYG) — meaning you only pay what you use, and you have no upfront infrastructure cost.",
"On-Demand, Reserved, Savings Plans, and Spot Instances all are appropriate for different workload patterns and budgets.",
"The three billing tools most commonly tested are: AWS Budgets, AWS Cost Explorer, and the AWS Pricing Calculator.",
"There are four AWS support plans, each with varying access and response times: Basic, Developer, Business, and Enterprise.",
"But, pricing concepts can also be useful beyond the exam — it can actually be used to optimize cost on the job!",

];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Leveraging AWS pricing models (On-Demand, Reserved, Savings Plans, Spot) with workloads" },
  { detail: "Understanding the purpose of AWS Budgets, AWS Cost Explorer and the AWS Pricing Calculator" },
  { detail: "Understanding the differences among AWS's four support levels and when to use them." },
  { detail: "Using the pay-as-you-go principle to simple cost optimization cases" },
  { detail: "Understanding Free Tier limits and their usage on new AWS accounts " },
  
];

const popularCerts = [
 "Basic Support (Free service, provided with each account)",
"Business Hours email to Developer Support for Cloud Support Associates.",
"Business Support (24/7 support with faster response time, tailored for production workloads)",
"Enterprise Support (fastest response times, Technical Account Manager).",
];

const comparisonTable = [
  { cert: "On-Demand", level: "None", focus: "None", duration: "Unpredictable, short-term workloads" },
  { cert: "Reserved Instances", level: "1 or 3 years", focus: "Up to 72%", duration: "Steady, predictable workloads" },
  { cert: "Savings Plans", level: "1 or 3 years", focus: "Up to 66%", duration: "Flexible usage across instance types/regions" },
  { cert: "Spot Instances", level: "None", focus: "Up to 90%", duration: "Flexible, fault-tolerant, interruptible workloads" },
  ];


// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
"Learn how to set up pricing and billing services step-by-step.",
"Learn the pay-as-you-go principle and how it differs from traditional IT cost models.",
"Discuss each pricing model (On-Demand, Reserved, Savings Plans, Spot) with a single use case per pricing model.",
"Know the functions of AWS Budgets, AWS Cost Explorer and AWS Pricing Calculator.",
"Explain the differences among the four AWS support plans and remember them.",
"Practice answering questions with a scenario that requires you to select the appropriate pricing model or pricing tool.",
"Check the free tier limits and relook for problematic areas in AWS official price list.", 
];

const faqs = [
  {
    q: "What pricing models does AWS offer?",
    a: "There are several options available in AWS—On-Demand, Reserved Instances, Savings Plans and Spot Instances—all of which have a different level of predictability and cost sensitivity.",
  },
  {
    q: "What is the difference between Reserved Instances and Savings Plans?",
    a: "The difference between Reserved Instances and Savings Plans is what? Reserved Instances are committed instances that provide discounts on a specific instance type and region. Savings Plans provide flexibility in terms of discounts on instances across types and regions.",
  },
  {
    q: "What is AWS Cost Explorer used for?",
    a: "Cost Explorer makes it easier to visualize and analyze your AWS costs over time to easily identify which service(s) are driving costs.",
  },
  {
    q: "How many AWS support plans are there, and what's the difference?",
    a: "AWS has four support levels: Basic, Developer, Business and Enterprise, which vary primarily in terms of response time, support hours, and technical account management.",
  },
  {
    q: "Is Spot Instance pricing risky for production workloads?",
    a: "Yes, because AWS can release the Spot capacity at any time with little warning, it is best for flexible, fault tolerant workloads instead of workloads that are critical to production systems and require constant uptime.",
  },
  {
    q: "How much of the exam focuses on pricing and billing?",
    a: "Billing, Pricing and Support accounts for about 12% of the weightage or marks in the CLF-C02 exam and is one of the smallest domains but is quite important and easy to score.",
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
            AWS Pricing and Billing Fundamentals: Complete Guide for CLF-C02
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
           Still scratching your head about On-Demand vs. Reserved Instances, or don't know much about how AWS Budgets works? The most lightweight of the exams, but typically where candidates lose their most easy marks – Billing and Pricing. This guide does the work for you by explaining AWS's pricing models, billing options, and cost management ideas.
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
            AWS Pricing, Billing, and Support is a CLF-C02 domain that includes details about the cost of AWS services, the tools to use to track and manage cost, and the available types of AWS support. Key pricing models are On-Demand, Reserved Instances, Savings Plans, and Spot Instances; key pricing tools are AWS Budgets, Cost Explorer, and the AWS Pricing Calculator. This domain has the weightage of approximately 12% in the exams and the concepts are simple to learn and can be easily memorized and is one of the highest ROI domains to learn fast.
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
          <SectionHeading>AWS Pricing Models Explained</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           AWS pricing is designed to be flexible, so that you can select a model that is appropriate for your workload's predictable nature. On-Demand pricing lets you pay by the hour or by the second without any long-term commitment, making it a great option for workloads that are unpredictable or short-term. Reserved Instances provide substantial discounts (up to 72%) in return for a 1- or 3-year commitment, which is appropriate for workloads that are regular and predictable, such as a production database. Saving Plans operate the same way but have additional flexibility in terms of instance types and regions—along with a guaranteed amount of usage. Spot Instances are a great opportunity to get AWS capacity at a low price (up to 90% off), but capacity is subject to being cancelled by AWS at any moment, so they're well suited for flexible, fault-tolerant workloads, such as batch processing. You are often asked to match the correct pricing model to a particular business scenario in the exam.
          </p>
        </div>

        <div>
          <SectionHeading>Billing Tools and Cost Management Concepts</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           In addition to pricing models, AWS offers a variety of tools to help you keep track of, predict, and manage your spending. AWS Budgets allows you to establish custom cost or usage metrics and be alerted before you hit them, so you can avoid the surprise bills. AWS Cost Explorer represents your cost over time to help you understand what services are costing you. The AWS Pricing Calculator can be used prior to deployment to estimate the cost of a proposed architecture without committing to anything. Combined, these tools form the ‘before, during and after' of cost management: Budgeting with the Pricing Calculator, tracking costs in real-time with Cost Explorer, and controlling costs proactively with Budgets. The test is usually a business situation where they give you a $ problem and want you to name the tool that is most suitable to solve the problem.
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills Needed to Understand Core AWS Services</SectionHeading>
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
        <SectionHeading>Core AWS Services Covered in CLF-C02</SectionHeading>
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
        <SectionHeading>Services at a Glance</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Pricing Model</th>            
                <th className="p-4 font-semibold">Commitment</th>
                <th className="p-4 font-semibold">Discount Level</th>
                <th className="p-4 font-semibold">Best For</th>
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
        <SectionHeading>Step-by-Step Roadmap to Mastering Pricing and Billing</SectionHeading>
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
          
          <h3 className="text-2xl sm:text-xl font-semibold">
            Still mixing up Reserved Instances with Savings Plans on practice tests?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-2xl text-yellow-200 font-bold  leading-relaxed">
            Understand AWS pricing and billing concepts thoroughly with real-world scenarios that are similar to the exam questions
          </p>    
        
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and avoid losing easy marks on this high ROI domain.
          </p>          

        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           It is a domain that candidates often lose marks unnecessarily, mentors who follow candidate mock scores will find that's not because it is conceptually difficult, but because it is not given enough importance in the exam due to its lesser weightage. The ideas are easy to remember and there are lots of scenarios that come up a lot, so a concentrated effort here will often be one of those quickest ways to get marks up in the last week of revision.
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