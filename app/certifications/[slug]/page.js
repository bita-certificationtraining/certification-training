import { notFound } from "next/navigation"

import CertificationPage from "@/app/components/CertificationPage"
import JsonLd from "@/app/components/JsonLd"
import { allCertifications } from "@/app/util/constants"
import { seometadatas } from "@/app/util/seometadatas"
import { ORG_NAME, SITE_URL, absoluteUrl, buildMetadata } from "@/app/util/seo"

// URLs are matched case-insensitively (old links like /compTIA-... still work),
// but the canonical URL is always the lowercase slug.
const findSeo = (slug) =>
  seometadatas.find((item) => item.slug.toLowerCase() === slug.toLowerCase())

const findContent = (slug) => {
  const key = Object.keys(allCertifications).find(
    (k) => k.toLowerCase() === slug.toLowerCase()
  )
  return key ? allCertifications[key] : null
}

// Pre-render every course page at build time (unknown slugs still hit notFound())
export function generateStaticParams() {
  return seometadatas.map((item) => ({ slug: item.slug.toLowerCase() }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const seo = findSeo(slug)

  if (!seo) {
    return {
      title: "Page not found",
      robots: { index: false, follow: false },
    }
  }

  return buildMetadata({
    title: seo.metatitle,
    description: seo.metadescription,
    path: `/certifications/${seo.slug.toLowerCase()}`,
    image: seo.metaimage, // course logo
    imageAlt: seo.metatitle,
    square: true,
  })
}

export default async function Certification({ params }) {
  const { slug } = await params
  const seo = findSeo(slug)
  const content = findContent(slug)

  // unknown slug -> real 404 (not a soft-404 "Certification Not Found" page)
  if (!seo || !content) notFound()

  const url = `${SITE_URL}/certifications/${seo.slug.toLowerCase()}`
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: content.cheading || seo.metatitle,
        description: seo.metadescription,
        url,
        image: absoluteUrl(seo.metaimage),
        provider: { "@type": "Organization", name: ORG_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: seo.metatitle, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={courseJsonLd} />
      <CertificationPage />
    </>
  )
}
