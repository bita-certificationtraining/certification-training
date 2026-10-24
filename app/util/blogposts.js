// Single source of truth for blog SEO + sitemap.
// `title` is the <title> (keep <= 60 chars). The on-page <h1> can stay longer.
// Add `datePublished` / `dateModified` ("YYYY-MM-DD") once you know them:
// they are used for Article schema and sitemap <lastmod> only when set.
export const blogposts = [
  {
    path: "/blog/aws/aws-cloud-practitioner-exam-guide",
    title: "AWS Cloud Practitioner Exam Guide (CLF-C02) 2026",
    heading:
      "AWS Cloud Practitioner Exam Guide (CLF-C02): Complete Overview 2026",
    description:
      "Complete AWS Cloud Practitioner (CLF-C02) exam guide: domains, 700/1000 passing score, 3-year validity and who should take it in 2026.",
    image: "/allblogpage/AWS/aws_blog.png",
  },
  {
    path: "/blog/aws/aws-cloud-practitioner-study-plan",
    title: "AWS Cloud Practitioner Study Plan: 2, 4 & 8-Week Roadmaps",
    heading:
      "AWS Cloud Practitioner Study Plan: 2-Week, 4-Week & 8-Week Roadmaps",
    description:
      "Prepare for AWS Cloud Practitioner with a 2-week, 4-week or 8-week study plan. Pick the roadmap that fits your schedule and follow it step by step.",
    image: "/allblogpage/AWS/aws_blog.png",
  },
  {
    path: "/blog/aws/aws-cloud-practitioner-practice-exams-the-complete-guide-to-mock-tests-simulators",
    title: "AWS Cloud Practitioner Practice Exams & Mock Tests Guide",
    heading:
      "AWS Cloud Practitioner Practice Exams: The Complete Guide to Mock Tests & Simulators",
    description:
      "Explore the AWS Cloud Practitioner exam guide with key topics, exam format, preparation tips, and strategies to pass the certification exam.",
    image: "/allblogpage/AWS/aws_blog.png",
  },
  {
    path: "/blog/aws/aws-cloud-practitioner-training-resources-best-courses-books-labs-and-channels",
    title: "AWS Cloud Practitioner Training: Best Courses, Books & Labs",
    heading:
      "AWS Cloud Practitioner Training Resources: Best Courses, Books, Labs & Channels",
    description:
      "Best AWS Cloud Practitioner training resources: top courses, books, hands-on labs and learning channels to prepare for the CLF-C02 exam.",
    image: "/allblogpage/AWS/aws_blog.png",
  },
  {
    path: "/blog/aws/aws-cloud-concepts-explained-laas-paas-saas-shared-responsibility-regions",
    title: "AWS Cloud Concepts: IaaS, PaaS, SaaS & Shared Responsibility",
    heading:
      "AWS Cloud Concepts Explained: IaaS, PaaS, SaaS, Shared Responsibility & Regions",
    description:
      "AWS cloud concepts made simple: IaaS vs PaaS vs SaaS, the shared responsibility model and AWS Regions explained for Cloud Practitioner prep.",
    image: "/allblogpage/AWS/aws_blog.png",
  },
  {
    path: "/blog/aws/aws-core-services-overview",
    title: "AWS Core Services Overview: EC2, S3, RDS, Lambda, VPC & More",
    heading:
      "AWS Core Services Overview: EC2, S3, RDS, Lambda, VPC & More",
    description:
      "Explore essential AWS services, including EC2, S3, RDS, Lambda, and VPC, with key features and practical cloud use cases.",
    image: "/allblogpage/AWS/aws_blog.png",
  },
  {
    path: "/blog/microsoft/microsoft-azure-certifications-complete-guide-to-all-certifications-and-learning-paths",
    title: "Microsoft Azure Certifications: Complete Guide & Learning Paths",
    heading:
      "Microsoft Azure Certifications: Complete Guide to All Certifications & Learning Paths",
    description:
      "Complete guide to Microsoft Azure certifications and learning paths. Compare the exams and choose the right Azure certification for your career.",
    image: "/allblogpage/microsoft/microsoft.png",
  },
]

export function getBlogPost(path) {
  return blogposts.find((p) => p.path === path)
}
