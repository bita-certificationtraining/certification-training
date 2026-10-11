import JsonLd from "@/app/components/JsonLd"
import { blogJsonLd, blogMetadata } from "@/app/util/blogseo"

const PATH = "/blog/microsoft/microsoft-azure-certifications-complete-guide-to-all-certifications-and-learning-paths"

export const metadata = blogMetadata(PATH)

export default function BlogPostLayout({ children }) {
  return (
    <>
      <JsonLd data={blogJsonLd(PATH)} />
      {children}
    </>
  )
}
