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
  { value: "4 Career Paths ", label: "1 Starting Point" },
  { value: "₹6-28 LPA", label: "Across AWS Cert Levels" },
];

const keyTakeaways = [
 "CP is conceptual and foundational, SA and DA are technical and role specific.",
"Cloud Practitioner is ideal for all Cloud beginners without any prior background in Cloud.",
"Individuals who have previous experience with IT or coding may be able to bypass directly to Associate-level certifications.",
"The salary growth is quite a bit higher for Associate than for Cloud Practitioner alone.",
"It should not be based on popularity, but rather on your career objective, whether you're looking at a job in architecture, development, or operations.",
];

// const skillsCompared = [
//   { role: "Cloud Practitioner", detail: "conceptual understanding, no coding required" },
//   { role: "Solutions Architect", detail: "hands-on architecture design, networking, and cost optimization" },
//   { role: "Developer", detail: "coding proficiency, SDK usage, and CI/CD deployment skills" },
//   { role: "SysOps Administrator", detail: "operational monitoring, automation, and troubleshooting" },
//   { role: "All Associate-level certs", detail: "require genuine AWS console hands-on practice, unlike Cloud Practitioner" },
// ];

const skillsCompared = [
  { detail: "Cloud Practitioner: only a conceptual understanding, no coding required." },
  { detail: "Solutions Architect: Hands-on Architecture Design, Networking and Cost Optimisation" },
  { detail: "The developer millstone will be assessed for their coding skills, SDK usage, and CI/CD deployment skills." },
  { detail: "SysOps Administrator: maintenance of Operations, Automation, and Troubleshooting." },
  { detail: "Unlike Cloud Practitioner, all three Associate-level certs will involve hands-on practice using the AWS console" },
  ];

const popularCerts = [
"AWS Certified Cloud Practitioner (CLF-C02)",
"AWS Certified Solutions Architect - Associate",
"AWS Certified Developer - Associate",
"AWS Certified SysOps Administrator - Associate",
"Google Cloud Digital Leader",
];

const comparisonTable = [
  { cert: "AWS Cloud Practitioner (CLF-C02)",level: "Foundational", focus: "Conceptual cloud understanding", duration: "4–6 weeks" },
  { cert: "AWS Solutions Architect – Associate",level: "Associate", focus: "Architecture design and cost optimization", duration: "8–10 weeks" },
  { cert: "AWS Developer – Associate",level: "Associate", focus: "Application development and deployment", duration: "8–10 weeks" },
  { cert: "AWS SysOps Administrator – Associate",level: "Associate", focus: "Operations, monitoring, automation", duration: "8–10 weeks" },
  { cert: "Google Cloud Digital Leader",level: "Foundational", focus: "Conceptual, vendor-neutral cloud business understanding", duration: "3–5 weeks" },
  
  
];

const roadmapSteps = [
"Evaluate current background (no cloud experience, no IT background, no developer background).",
"To get started, consider taking Cloud Practitioner to develop some basic vocabulary and confidence.",
"Decide on your career trajectory (architecture, development or operations).",
"Select the next Associate level certification, but not only for popularity.",
"Take advantage of AWS Free Tier to get hands-on experience before taking any Associate-level exam.",
"Review your course as you progress and change interests every 6-12 months.",
"Make an appointment for free counselling.",
"Not sure between becoming a Cloud Practitioner or a Solutions Architect or Developer?",
"Get a custom roadmap to certification that matches your experience and career objectives from a cloud mentor — Book Your Free Counselling Call Today and put the guesswork out of certification.",
];

const faqs = [
  {
    q: "AWS Cloud Practitioner vs Solutions Architect Associate — which to do first?",
    a: "For those new to cloud, begin with Cloud Practitioner to develop an understanding of the basics; for those with IT or networking experience, you can opt for Solutions Architect Associate.",
  },
  {
    q: "AWS Cloud Practitioner vs Google Cloud Digital Leader — which has more value?",
    a: "Both are essential vendor credentials: one will be preferable based on what cloud ecosystem (AWS or Google Cloud) is more popular in the industry or geographic area you want to pursue.",
  },
  {
    q: "AWS Cloud Practitioner self-study vs instructor-led training — what works better?",
    a: "The self-study method is suitable for the disciplined student and the working professional will be suited by the instructor-led method as they need structure, accountability and quicker resolution of doubts within a limited timeframe during weekends.",
  },
  {
    q: "AWS CLF-C02 vs CLF-C01 — what changed?",
    a: "The new version of the exam (CLF-C02) introduced new AWS services, revised scenario questions and updated domain weightings, superseding the old exam (CLF-C01).",
  },
  {
    q: "AWS Cloud Practitioner vs DevOps certification — which to prioritize?",
    a: "Cloud Practitioner is the base certification, and DevOps-oriented certifications assume some know-how of core AWS ideas and deployment methods.",
  },
  {
    q: "Can I skip Cloud Practitioner and go straight to an Associate-level certification?",
    a: "Yes, if you already have relevant experience in IT, networking, or development you can skip Cloud Practitioner certification and move directly into an Associate-level certification.",
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
            AWS Certification Comparison: Cloud Practitioner vs Solutions Architect vs Developer
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
            So, is there a particular sequence to take the AWS certifications? Is Cloud Practitioner worth taking before getting to the Solutions Architect?But is there a specific order you need to take the AWS certifications or should you even take the Cloud Practitioner first? It's a guide to compare Cloud Practitioner against all of the most popular AWS certifications and cloud certifications so you can make your choice instead of playing the guess game.
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
            AWS Cloud Practitioner (CLF-C02) is a foundational, no-code certification that is ideal for beginners or as a starting point, while the Solutions Architect Associate or Developer Associate certifications are technical, role-specific, and require more experience and hands-on ability, and come with a higher level of compensation. If you have no cloud experience, most career experts recommend that you begin with Cloud Practitioner and then proceed to Solutions Architect or Developer depending on your career path. Alternatively, if you have a strong background in IT or coding, it's also a good option to proceed directly to an Associate-level certification.
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
          <SectionHeading>Cloud Practitioner vs Solutions Architect and Developer</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           Cloud Practitioner (CLF-C02) is a conceptual test that does not involve designing or building anything in the real world: cloud concepts, cloud security fundamentals, core cloud services, and cloud billing. By contrast, Solutions Architect Associate assesses the capacity to design scalable, economical, and secure architectures on AWS, and will need to be hands-on with VPCs, load balancers, and multi-tiered applications. Developer Associate takes it a step further into code, testing your skills in building and deploying applications with AWS SDKs, Lambda and DevOps-style CI/CD practices. To put it simply, Cloud Practitioner is the question "what are these services used for?," while Solutions Architect and Developer is the question "can you actually use these services to solve a problem?". This is why the latter two roles generally have more importance when it comes to a technical hiring manager and higher salary.
          </p>
          {/* <p className="leading-relaxed text-slate-700">
           A key aspect of exam questions is whether you can accurately position a security task on this side of the equation.
          </p> */}
        </div>

        <div>
          <SectionHeading>Choosing the Right Certification for Your Background</SectionHeading>
          <p className="leading-relaxed text-slate-700">
           This ultimately depends on your prior experience. For complete beginners, who have no prior experience in cloud or IT, the best starting point is Cloud Practitioner, which offers the vocabulary and confidence needed before moving on to the more difficult and hands-on exams. People who have networking, systems administration or basic coding experience can often dive right in and become Solutions Architect Associate, as they will already have familiarity with much of the terminology. Developers with some programming experience might find Developer Associate a more realistic choice to start with than Solutions Architect because it's closer to their previous experience. There is no "right" or "wrong" route to take; the idea is to match the certification with your existing skill level and desired career trajectory (architecture, development or operations). (architecture, development, or operations).
          </p>
        </div>
      </section>


      {/* SKILLS Required */}
      <section className="px-6 sm:px-10 lg:px-20 py-12 max-w-5xl mx-auto">
        <SectionHeading>Skills Compared Across Certifications</SectionHeading>
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
        <SectionHeading>Popular Cloud Certifications to Compare</SectionHeading>
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
        <SectionHeading>Certification Comparison Table</SectionHeading>
        <div className="overflow-x-auto rounded-2xl shadow-sm">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#3a7ba5] text-white">
                <th className="p-4 font-semibold">Certification</th>            
                <th className="p-4 font-semibold">Level</th>            
                <th className="p-4 font-semibold">Focus Area</th>
                <th className="p-4 font-semibold">Typical Prep Duration</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr
                  key={row.cert}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="p-4 font-medium text-slate-900">{row.cert}</td>
                  <td className="p-4 font-medium text-slate-900">{row.level}</td>                  
                  <td className="p-4 text-slate-600">{row.focus}</td>
                  <td className="p-4 text-slate-600">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* <p className="px-6 sm:px-10 lg:px-20 pb-10 text-center text-md text-slate-700">
        Figures vary by city, company size, and experience; Chennai-based roles typically fall within the national range shown above, with metro hubs like Bangalore sometimes trending slightly higher.
      </p> */}

      {/* ROADMAP */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Step-by-Step Roadmap to Choosing Your Certification Path</SectionHeading>
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
            Torn between Cloud Practitioner, Solutions Architect, or Developer as your next step?
          </p>
          
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
           Get a personalized certification roadmap based on your background and career goals from a cloud mentor
          </p>
          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-[#3a7ba5] transition hover:bg-slate-100">
            <a href="/contactus">Book Your Free Counselling Call Today</a>
          </button>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 leading-relaxed">
           and stop second-guessing which cert is right for you.
          </p>

          
          
        </div>
      </section>

      {/* EXPERT INSIGHTS */}
      <section className="px-6 sm:px-10 lg:px-20 py-4 max-w-5xl mx-auto">
        <SectionHeading>Expert Insights</SectionHeading>
        <blockquote className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm">
          <span className="text-3xl text-yellow-400">&ldquo;</span>
          <p className="-mt-4 italic leading-relaxed text-slate-700">
           Researchers also note that job results and job satisfaction are directly correlated with candidates selecting certifications in a direction, as opposed to the "trending" certifications, to their career. Cloud Practitioner is meant to be a starting point, not the end, for anyone with an interest in a career in the Cloud.
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