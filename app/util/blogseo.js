import { getBlogPost } from "@/app/util/blogposts"
import { ORG_LOGO, ORG_NAME, SITE_URL, absoluteUrl, buildMetadata } from "@/app/util/seo"

export function blogMetadata(path) {
  const post = getBlogPost(path)
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: post.path,
    image: post.image,
    square: true,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified || post.datePublished,
  })
}

export function blogJsonLd(path) {
  const post = getBlogPost(path)
  const url = absoluteUrl(post.path)
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.heading,
        description: post.description,
        image: absoluteUrl(post.image),
        mainEntityOfPage: url,
        ...(post.datePublished ? { datePublished: post.datePublished } : {}),
        ...(post.dateModified || post.datePublished
          ? { dateModified: post.dateModified || post.datePublished }
          : {}),
        author: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: ORG_NAME,
          logo: { "@type": "ImageObject", url: absoluteUrl(ORG_LOGO) },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  }
}

