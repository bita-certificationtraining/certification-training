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
  { value: "30% Exam Weightage ", label: "on Security & Compliance" },
  { value: "2nd-Highest", label: "Weighted Domain" },
];

const keyTakeaways = [
 "The shared responsibility model is 'of the cloud' for AWS, 'in the cloud' for you.",
"IAM (Identity and Access Management) regulates access to what in your AWS account.",
"AWS provides both encryption at rest and in transit as protection for data.",
"AWS Artifact offers access to compliance reports and certifications on-demand.",
"Exam security questions are scenario based, requiring judgement rather than recall. ",


];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "A real security scenario using the shared responsibility model" },
  { detail: "Identifying IAM concepts: users, groups, roles, and policies, MFA" },
  { detail: "The difference between encryption at rest and encryption in transit" },
  { detail: "Understanding how to access AWS compliance documentation (AWS Artifact)" },
  { detail: "Understanding the concept of ‘least privilege' in access control situations. " },  
];

const popularCerts = [
 "IAM users, groups, roles, and policies",
"Multi-Factor Authentication (MFA)",
"Root account best practices",
"Encryption at rest and in transit",
"AWS Key Management Service (KMS)",
"AWS Artifact for compliance reports",
"AWS Shield and AWS WAF (basic awareness level)",
];

const comparisonTable = [
  { cert: "Physical data center security", focus: "AWS", duration: "Facility access controls, hardware security" },
  { cert: "Network infrastructure", focus: "AWS", duration: "Global network, edge locations" },
  { cert: "Data encryption configuration", focus: "Customer", duration: "Enabling encryption on S3 buckets" },
  { cert: "Identity and access management", focus: "Customer", duration: "Setting up IAM users, roles, and policies" },
  { cert: "Compliance documentation access", focus: "AWS (provides), Customer (uses)", duration: "AWS Artifact reports" },
  { cert: "Operating system patching (IaaS)", focus: "Customer", duration: "Patching an EC2 instance's OS" },
  ];


// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
"Start with the shared responsibility model, it is the basics of this domain.",
"Learn the concepts of IAM - Users, Groups, Roles, Policies and MFA with examples.",
"Know the difference between encryption at rest and encryption in transit, and the role of KMS.",
"Use AWS Artifact to learn how to access compliance documentation.",
"Practice questions with scenarios to determine if a task is AWS or customer driven.",
"Review areas of weakness from AWS's official security documentation prior to final mock exams.",
];

const faqs = [
  {
    q: "What is the shared responsibility model in AWS?",
    a: "It's a model based on the division of security responsibilities between AWS, which protects the underlying cloud infrastructure, and the customer whose data, access parameters and applications are secured.",
  },
  {
    q: "What is IAM in AWS, and why does it matter for the exam?",
    a: "IAM in AWS is the acronym for Identity and Access Management. IAM is relevant to the exam because it is a service that enables you to manage access to AWS resources. IAM (Identity and Access Management) defines who accesses AWS resources and what they can do is one of the most tested concepts in the Security and Compliance domain.",
  },
  {
    q: "What's the difference between encryption at rest and encryption in transit?",
    a: "Encryption at rest is applied to data, like the files stored in S3, that are stored. 'Encryption in transit' protects data while it is moving across networks, usually via SSL/TLS.",
  },
  {
    q: "What is AWS Artifact used for?",
    a: "AWS Artifact is a self-service portal providing on-demand access to AWS's compliance reports and certifications, such as ISO standards and SOC reports.",
  },
  {
    q: "Why does Security and Compliance carry such high exam weightage? ",
    a: "Security is an integral part of all AWS services and a key component of all cloud decisions, so AWS emphasizes understanding security concepts before interacting with real AWS resources.",
  },
  {
    q: "Is deep technical security knowledge required to pass this domain?",
    a: "No, the exam does not measure security engineering skills, but rather the conceptual understanding and scenario-based judgment, especially in regards to the shared responsibility model and IAM basics.",
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
            AWS Security and Compliance Basics: IAM, Encryption & Shared Responsibility
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
           The Security and Compliance section is the second-highest weightage, but is the least secure area for candidates in the CLF-C02 exam. IAM, encryption, compliance programs and the shared responsibility model are explained in a simple manner and this high value domain becomes one of your strongest, not weakest, assets.
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
            AWS Security and Compliance is a CLF-C02 domain that focuses on identity and access management (IAM), data protection and encryption, AWS's compliance program, and the shared responsibility model that outlines what AWS secures and what you secure. This is the second most important domain with exam weightage of approximately 30% after Cloud Technology and Services. The exam isn't about memorizing all the security services that AWS provides; instead, it's about understanding the concept of security as a shared responsibility and applying IAM and encryption concepts to real-life examples.
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
          <SectionHeading>IAM and the Shared Responsibility Model Explained</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Identity and Access Management (IAM) provides the foundation of AWS security, and is used to govern access to your AWS resources and the actions you can take. IAM is based on the principle of "least privilege" (giving users and services what they need, no more) and leverages users, groups, roles, and policies to grant permissions. Multi-Factor Authentication (MFA) is another layer of security beyond a username and password, and root account best practices state never to use the root user for day-to-day operations, using IAM users with just the right level of permissions instead. It's all about the shared responsibility model: AWS is responsible for the underlying infrastructure (data centers, hardware, networking, etc.), while you are responsible for getting IAM configured properly, managing your data and controlling access. This is one of the most frequent exam pitfalls as students tend to think that AWS takes on more responsibility for security than it actually does. 
          </p>
        </div>

        <div>
          <SectionHeading>Encryption and Compliance Programs</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Currently, there are two fundamental concepts of data protection on AWS: data at rest (when data resides on S3 or EBS volumes) and data in transit (when data is moving between networks, usually through SSL/TLS). AWS Key Management Service (KMS) is a service that lets you create and manage the encryption keys you use with these services. On the compliance side, AWS has many certifications and attestations, such as ISO standards, SOC reports, and industry-specific certifications like HIPAA and PCI DSS, available and accessible via a self-service portal on AWS called AWS Artifact. As with the other regions of this domain, compliance is a shared responsibility, and AWS makes its infrastructure compliant, but you must configure and use it properly.
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills Needed to Master Security and Compliance</SectionHeading>
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
        <SectionHeading>Key Security Concepts Covered in CLF-C02</SectionHeading>
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
        <SectionHeading>Security Responsibilities at a Glance</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Responsibility</th>            
                <th className="p-4 font-semibold">Owned By</th>
                <th className="p-4 font-semibold">Example</th>
                {/* <th className="p-4 font-semibold">Best For</th> */}
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
        <SectionHeading>Step-by-Step Roadmap to Mastering Security and Compliance</SectionHeading>
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
            Still unsure where AWS's responsibility ends and yours begins?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-2xl text-yellow-200 font-bold  leading-relaxed">
            Learn about the shared responsibility model and the fundamentals of IAM clearly and concisely from a cloud expert, through scenarios similar to actual exam questions
          </p>    
        
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            and strengthen your weakest domain! 
          </p>          

        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           For mentors who closely follow candidate performance, it becomes clear that Security and Compliance errors are rarely a result of not knowing a term; it's a result of incorrect application of the shared responsibility model in the scenario questions. Candidates who read the definitions only, do not usually do well in this domain, but those who practice sorting responsibilities into the AWS and Customer columns repeatedly come out good.
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