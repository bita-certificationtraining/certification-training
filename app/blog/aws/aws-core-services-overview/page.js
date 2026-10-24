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
  { value: "34% Exam Weightage ", label: "on Core Services" },
  { value: " 200+ AWS Services", label: "15 You Actually Need" },
];

const keyTakeaways = [
 "EC2 and Lambda are two different compute options: server based and serverless.",
 "Object storage versus block storage attached to an instance are different storage problems, solved by S3 and EBS, respectively.",
 "RDS and DynamoDB are two kinds of database services: relational and NoSQL, respectively.",
 "VPC is the backbone of networking that separates and protects AWS resources.",
 "The exam is based on conceptual questions and 'use-cases' matching, not on hands-on configuration.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Matching compute options (EC2 vs. Lambda) to appropriate business use cases" },
  { detail: "Distinguishing between different types of data storage (S3 vs. EBS) by data access patterns" },
  { detail: "Relational (RDS) vs NoSQL (DynamoDB) databases" },
  { detail: "Knowing the fundamental concepts of VPC such as subnets, security groups, and isolation" },
  { detail: "Relating individual services together in a coherent, simple cloud architecture " },
];

const popularCerts = [
  "Amazon EC2 (Elastic Compute Cloud)",
  "AWS Lambda",
  "Amazon S3 (Simple Storage Service)",
  "Amazon EBS (Elastic Block Store)",
  "Amazon RDS (Relational Database Service)",
  "Amazon DynamoDB",
  "Amazon VPC (Virtual Private Cloud)",
  "AWS IAM (Identity and Access Management)",
  "Amazon CloudWatch and AWS CloudTrail",
];

const comparisonTable = [
  { cert: "Amazon EC2", focus: "Compute", duration: "Virtual servers for long-running applications" },
  { cert: "AWS Lambda", focus: "Compute (Serverless)", duration: "Event-driven code execution without managing servers" },
  { cert: "Amazon S3", focus: "Storage", duration: "Object storage for files, backups, and static content" },
  { cert: "Amazon EBS", focus: "Storage", duration: "Persistent block storage attached to EC2 instances" },
  { cert: "Amazon RDS", focus: "Database", duration: "Managed relational (SQL) databases" },
  { cert: "Amazon DynamoDB", focus: "Database", duration: "Managed NoSQL database for flexible, high-speed data" },
  { cert: "Amazon VPC", focus: "Networking", duration: "Isolated, customizable network environment" },
  
];
// const comparisonTable = [
//   { cert: "Cloud Support Associate", level: "", focus: "$55,000-$70,000", duration: "₹6-9 LPA" },
//   { cert: "Junior Cloud Engineer", level: "", focus: "$65,000-$85,000", duration: "₹8-14 LPA" },
//   { cert: "Cloud Operations Analyst", level: "", focus: "$70,000-$90,000", duration: "₹9-16 LPA" },
//   { cert: "Associate Solutions Architect", level: "", focus: "$85,000-$110,000", duration: "₹14-22 LPA" },
//   { cert: "Cloud Consultant", level: "", focus: "$95,000-$130,000", duration: "₹18-28 LPA" },
// ];

const roadmapSteps = [
 "Begin with compute services: Get to know EC2 first and compare with Lambda.",
 "Switch to storage - know about S3 for objects, EBS for block storage for instances.",
 "Understand that Relational Data Service (RDS) allows for study databases, while DynamoDB is based on a NoSQL paradigm.",
 "Customize and understand VPC basics such as subnets, security groups, and resource communication.",
 "Try hands-on with AWS Free Tier by launching an EC2 instance and creating an S3 bucket.",
 "Assess and test your knowledge with topic-wise quizzes just on Cloud Technology and Services.",
];

const faqs = [
  {
    q: "Which AWS services are most important for the Cloud Practitioner exam?",
    a: "The highest exam weightage is given to the Cloud Technology and Services domain, which includes all the following services: EC2, S3, RDS, DynamoDB, Lambda, and VPC.",
  },
  {
    q: "Do I need hands-on experience with these services to pass the exam?",
    a: "The exam is conceptual, but the more you practice hands-on with the AWS Free Tier, the better you'll retain the concepts and be able to answer the scenario questions with confidence.",
  },
  {
    q: "What's the difference between EC2 and Lambda?",
    a: "For short, event-driven tasks, Lambda is an option, since it runs code only when it's called and you don't manage any servers. For continuous workloads, you can use EC2, which gives you complete control over your virtual servers.",
  },
  {
    q: "Is DynamoDB better than RDS?",
    a: "One is not necessarily better than the other: RDS is good for structured, relational data with strict, well-defined relationships, while DynamoDB is better for flexible, high-speed, non-relational data usage. The exam assesses your skill of selecting the appropriate one for each scenario.",
  },
  {
    q: "Why is VPC important for the Cloud Practitioner exam?",
    a: "VPC is important for the Cloud Practitioner exam because it helps improve the security of the applications it supports. Conceptually, having knowledge about VPC is the networking underpinning of AWS security and isolation and will help you answer questions about securing and organizing cloud resources.",
  },
  {
    q: "How much time should I spend learning AWS core services for CLF-C02?",
    a: "For most candidates, the practice sessions are 15-20 hours using compute services, storage services, database and networking services, followed by 10-12 hours of hands on practice in the Free Tier before full length mock exams.",
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
            AWS Core Services Overview: EC2, S3, RDS, Lambda, VPC & More
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
           Have too many AWS services in your head and not sure which of them you need for your exam? The bright side is that CLF-C02 is geared towards a manageable core set. This guide explains the fundamentals of the core services (EC2, S3, RDS, Lambda, VPC, and more) in simple terms — what they do and why they're tested.
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
            AWS Cloud Technology and Services is the most heavily weighted section of the CLF-C02 exam (approx. 34%) – Compute (EC2, Lambda), Storage (S3, EBS), Databases (RDS, DynamoDB), Networking (VPC). Don't worry about being an expert in each service, the exam will check your knowledge of what each service does, when to use each service and how it can be used in a simple cloud setup. In this way, it's best to start with these core services and get them working before looking through AWS's wider service catalog.
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
          <SectionHeading>Compute and Storage Services Explained.</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Compute services are what your applications run on. Amazon EC2 (Elastic Compute Cloud) provides you with virtual servers that you can fully control, perfect for applications that require long running compute power. With AWS Lambda, the code is uploaded and AWS only runs it when triggered, charging you only for time spent running, which is well suited for short, event-driven tasks. Storage services are split in a similar fashion, with Amazon S3 (Simple Storage Service), delivering object storage for storing files, backups and storing the contents of static websites on a massive scale, whereas Amazon EBS (Elastic Block Storage) delivers persistent block storage directly attached to an EC2 instance, akin to a virtual hard drive. One of the most common conceptual areas that is tested in CLF-C02 is understanding the compute-and-storage pairing, when to use a server and when to use serverless, and object storage versus block storage.
          </p>
        </div>

        <div>
          <SectionHeading>This course introduces students to the concepts and principles of databases and networking.</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           AWS databases can be divided into relational and non-relational databases. Amazon RDS (Relational Database Service) is used to run traditional SQL databases such as MySQL or PostgreSQL; it will back up, patch, and scale your database for you, and is suited for structured data that has well defined relationships. Amazon DynamoDB, which is a fully managed NoSQL database, however, was designed for high throughput applications that require flexibility in their schema, such as gaming leaderboards, or IoT data where schema is not required. Networking connects everything together with Amazon VPC (Virtual Private Cloud), which enables you to build an isolated and customisable network in AWS to manage resource communication with the internet and resources. The exam questions often involve determining whether a database type is appropriate for a specific use case or why a VPC is important for security and resource isolation.
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
                <th className="p-4 font-semibold">Service</th>            
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Primary Use Case</th>
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
        <SectionHeading>Step-by-Step Roadmap to Learning Core Services</SectionHeading>
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
            Learn, in real life terms, how these core AWS services work and how they fit into your own hands-on AWS journey with a cloud mentor and
          </p>    
        
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
           <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
            make service names into concepts that make sense to you.
          </p>          

        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           The mentors, observing candidate performance on a regular basis, state that they find that candidates get the Cloud Technology and Services domain wrong not because of its complexity, but because candidates can just regurgitate the names of services without understanding their purpose. Even 20–30 minutes per service of hands-on experience in the AWS Free Tier gives you intuition that you can't get from pure reading!
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