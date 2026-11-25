import JsonLd from "@/app/components/JsonLd"
import { blogJsonLd, blogMetadata } from "@/app/util/blogseo"

const PATH = "/blog/microsoft/azure-solutions-architect-az-305"

export const metadata = blogMetadata(PATH)

export default function BlogPostLayout({ children }) {
  return (
    <>
      <JsonLd data={blogJsonLd(PATH)} />
      {children}
    </>
  )
}
