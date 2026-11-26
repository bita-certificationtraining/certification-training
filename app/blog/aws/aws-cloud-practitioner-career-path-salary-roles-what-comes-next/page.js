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
  { value: "₹6-28 LPA", label: "Cloud Salary Range in India" },
  { value: "90-Day", label: "Average Career Switch Timeline" },
];

const keyTakeaways = [
 "The salary range for CLF-C02 Certified professionals in India usually begins at ₹6 to ₹16 LPA, contingent on their roles and experience.",
"This certification is a great way for freshers to get entry level cloud support and operations positions without prior IT experience.",
"The exam does not require any coding skills, so it is most suitable for those who are not IT-related but are looking to make a career change.",
"It's important to mention the certification in your resume, and also to include any real-world Free Tier projects, rather than just the certification.",
"CLF-C02 is considered a stepping stone to Associate-level certifications for greater salary potential.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Basic practical experience in the AWS Free Tier (EC2, S3, IAM)" },
  { detail: "Follow-up resume and LinkedIn profiles that emphasize practical rather than theoretical experience." },
  { detail: "Basic knowledge of Linux commands and networking basics." },
  { detail: "Supporting cloud roles: Communication skills" },
  { detail: "Understanding of ticketing and monitoring tools often used in cloud operations teams" },
  ];

const popularCerts = [
"Cloud Support Associate",
"Junior Cloud Engineer",
"Cloud Operations Analyst",
"IT Support Specialist (Cloud-focused)",
"Technical Account Coordinator"

];

const comparisonTable = [
  { cert: "Cloud Support Associate", focus: "₹6-9 LPA", duration: "$55,000-$70,000" },
  { cert: "Junior Cloud Engineer", focus: "₹8-14 LPA", duration: "$65,000-$85,000" },
  { cert: "Cloud Operations Analyst", focus: "₹9-16 LPA", duration: "$70,000-$90,000" },
  { cert: "Associate Solutions Architect (next step)", focus: "₹14-22 LPA", duration: "$85,000-$110,000" },
  { cert: "Cloud Consultant (next step)", focus: "₹18-28 LPA", duration: "$95,000-$130,000" },
  
];

const roadmapSteps = [
  "Immediately update your resume and LinkedIn with certification and credential ID.",
"Show applied skill with 2-3 small hands-on projects done with AWS Free Tier.",
"Submit applications for support, operations, or junior engineer positions on cloud.",
"Start studying for Associate's level certification for technical positions at the same time.",
"Connect with other cloud folks in their communities and attend AWS user group meetups for referrals.",
"Re-evaluate in 6-12 months — consider becoming a Solutions Architect or Developer based on interest and market demand.",
];

const faqs = [
  {
    q: "What is the salary after AWS Cloud Practitioner certification in India? ",
    a: "Entry level jobs commence at around ₹6-9 LPA with the Junior Cloud Engineer and Cloud Operations Analyst roles going up to ₹9-16 LPA based on experience and geography. ",
  },
  {
    q: "What is the average AWS Cloud Practitioner salary in Chennai?",
    a: "These roles in the Chennai location are usually at the lower end of the national average of ₹6-16 LPA for entry-level cloud positions, but the actual range may vary based on the requirement of the hiring organization and the candidate's experience.",
  },
  {
    q: "How much do AWS certified professionals earn in India overall?",
    a: "Earnings scale significantly with certification level — Cloud Practitioner holders typically start at ₹6-16 LPA, while Associate and Professional-level certified professionals can earn ₹14-28 LPA or more.",
  },
  {
    q: "Can freshers get jobs with AWS Cloud Practitioner certification? ",
    a: "Absolutely, fresher can be eligible for entry-level positions such as Cloud Support Associate, IT Support Specialist, and so on, particularly when the certification comes with hands-on projects in the Free Tier.",
  },
  {
    q: "Which companies hire AWS Cloud Practitioner certified professionals in India? ",
    a: "Cloud consultants, Large Enterprises Technology divisions, IT Services providers across India are continuously looking for CLF-C02 certified professionals to work for cloud support and operations.",
  },
  {
    q: "Is AWS Cloud Practitioner useful for non-IT professionals switching to cloud?",
    a: "Yes, AWS Cloud Practitioner is a great resource for those who are not technical, but are looking to make the transition to the cloud. Yes, it's a certification for total beginners that doesn't require coding skills. It's one of the easiest ways for non-IT people to get into cloud jobs.",
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
            AWS Cloud Practitioner Career Path: Salary, Roles & What Comes Next
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
            You have decided to become certified — but what happens after? From realistic salary expectations to entry-level job roles to resume advice and which certifications you should go for after your CLF-C02 badge, this guide covers all of it, meaning that your CLF-C02 isn't just a LinkedIn update - it's a career move.
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
            AWS Cloud Practitioner is a cloud certification that gets jobs in cloud at entry level, such as Cloud Support Associate, Junior Cloud Engineer, and Cloud Operations Analyst, in India, the entry level salary ranges from ₹6 to ₹16 LPA, depending on experience and location. It is particularly useful for freshers and non-IT professionals as it doesn't need any coding skills; recruiters can get proof of the basic knowledge of cloud. Once certified, most professionals seek entry-level cloud positions or pursue other cloud certifications such as Associate-level—like Solutions Architect—for a quicker career trajectory.
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
          <SectionHeading>Job Roles You Can Target After Certification</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           AWS Cloud Practitioner is an entry point, and roles typically sought after right after certification are support and operations-oriented, not terribly technical. Usually you will be helping to monitor, support, and perform simple troubleshooting on cloud services, and follow documented processes when using cloud services, rather than designing them. These positions are important because they allow you to get real-world cloud experience for free with a technical Associate-level certification like Solutions Architect or Developer that can lead to a higher paying and more hands-on position when you're ready. 
          </p>
          {/* <p className="leading-relaxed text-slate-700">
           A key aspect of exam questions is whether you can accurately position a security task on this side of the equation.
          </p> */}
        </div>

        <div>
          <SectionHeading>Resume Tips and What to Do Next</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           One certification is not enough to secure a job; it is presentation that matters as much. On a resume, mention the certificate, and include its exact title (AWS Certified Cloud Practitioner), and if required, the credential ID; but include at least one actual project you have done using AWS tools on the Free Tier, like hosting a static website on S3 or launching an EC2 instance, as these demonstrate applied skills, not just a theoretical understanding of AWS. Once certified, most professionals fall into one of two tracks: apply for entry-level jobs in cloud to build up experience in the field or further study to obtain a second certification in the Associate range (Solutions Architect, Developer, or SysOps) to gain technical and higher-paid work opportunities quickly. Either one or the other will work it's up to you whether you want cash sooner or you're willing to invest a couple more months to get more technical first.
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills to Build Alongside Your Certification</SectionHeading>
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
        <SectionHeading>Entry-Level Cloud Roles to Target</SectionHeading>
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
        <SectionHeading>Salary Data by Role in India</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Role</th>            
                <th className="p-4 font-semibold">Salary (INR)</th>
                <th className="p-4 font-semibold">Salary (USD)</th>
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

      <p className="px-6 sm:px-10 lg:px-20 pb-10 text-center text-md text-slate-700">
        Figures vary by city, company size, and experience; Chennai-based roles typically fall within the national range shown above, with metro hubs like Bangalore sometimes trending slightly higher.
      </p>

      {/* ROADMAP */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Step-by-Step Roadmap After Certification</SectionHeading>
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
            Certified, but still unsure how to turn it into an actual job offer?
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
           and turn your CLF-C02 certification into your next job with a personalised resume feedback, role suggestions and a roadmap for your next certification from a cloud-based career mentor. 
          </p>
          
          
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