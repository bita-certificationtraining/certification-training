import { blogposts } from "@/app/util/blogposts"
import { seometadatas } from "@/app/util/seometadatas"
import { SITE_URL } from "@/app/util/seo"

// Auto-generated at build time -> /sitemap.xml
// (delete public/sitemap.xml, otherwise the two files conflict)
export default function sitemap() {
  const staticPages = [
    { path: "/", priority: 1 },
    { path: "/aboutus", priority: 0.5 },
    { path: "/contactus", priority: 0.5 },
    { path: "/blog", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority,
  }))

  const posts = blogposts.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    ...(p.dateModified || p.datePublished
      ? { lastModified: new Date(p.dateModified || p.datePublished) }
      : {}),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const courseSlugs = [
    ...new Set(seometadatas.map((c) => c.slug.toLowerCase())),
  ]
  const courses = courseSlugs.map((slug) => ({
    url: `${SITE_URL}/certifications/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticPages, ...courses, ...posts]
}
