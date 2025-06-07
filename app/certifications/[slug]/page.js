import CertificationPage from "@/app/components/CertificationPage"
import { seometadatas } from "@/app/util/seometadatas"

export async function generateMetadata({ params }) {
  const { slug } =await params
  

  const seodata = seometadatas.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  ) 

  return {
    title: `${seodata.metatitle || "BITA Academy - Best Software Training Institute in Chennai | IT Courses with Certification"}`,
    description: `${seodata.metadescription || "Join BITA Academy, the top-rated software training institute in Chennai. We offer expert-led IT courses in Python, Java, Full Stack, AWS, and More."}`,
    alternates: {
      canonical: `https://certificationtraining.in/certifications/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title: `${seodata.metatitle || "BITA Academy - Best Software Training Institute in Chennai | IT Courses with Certification"}`,
    description: `${seodata.metadescription || "Join BITA Academy, the top-rated software training institute in Chennai. We offer expert-led IT courses in Python, Java, Full Stack, AWS, and More."}`,
    url: `https://certificationtraining.in/certifications/${slug}`,
      images: [
        {
          url:`${seodata.metaimage || "BITA Academy"}`,
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seodata.metatitle || "BITA Academy - Best Software Training Institute in Chennai | IT Courses with Certification"}`,
    description: `${seodata.metadescription || "Join BITA Academy, the top-rated software training institute in Chennai. We offer expert-led IT courses in Python, Java, Full Stack, AWS, and More."}`,
    images: `${[seodata.metaimage] || "BITA Academy"}`,
    },
  }
}

export default function Certification() {
  return (
    <>
      <CertificationPage />
    </>
  )
}
