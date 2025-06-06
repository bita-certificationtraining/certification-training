"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

import DynamicPage from "@/app//components/DynamicPage"
import AboutExam from "@/app/components/AboutExam"
import { CertificationList } from "@/app/util/certificationList"

export default function CertificationPage() {
  const { slug } = useParams()
  const [certification, setCertification] = useState(null)
  const [relatedCerts, setRelatedCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Find the certification based on slug
        const foundCertification = CertificationList.flatMap(
          (category) => category.subcategories
        )
          .flatMap((subcategory) => subcategory.items)
          .find((item) => item.slug.toLowerCase() === slug.toLowerCase())
        // const foundCertification = allCertifications[slug];

        //  related course
        const coursedata = CertificationList
        let selectedCert = null
        let relatedCertsList = []

        coursedata.forEach((category) => {
          category.subcategories.forEach((subcategory) => {
            const foundCert = subcategory.items.find(
              (cert) => cert.slug === slug
            )
            if (foundCert) {
              selectedCert = foundCert
              relatedCertsList = subcategory.items.filter(
                (cert) => cert.slug !== slug
              ) // Exclude current cert
            }
          })
        })

        if (!foundCertification) throw new Error("Certification Not Found")
        setCertification(foundCertification)
        if (!selectedCert) throw new Error("No Related Certification")
        setRelatedCerts(relatedCertsList)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [slug])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  // const structuredData = {
  //   "@context": "https://schema.org",
  //   "@type": "Course",
  //   name: data.title,
  //   description: data.description,
  //   provider: {
  //     "@type": "Organization",
  //     name: "BITA Academy",
  //     url: "https://certificationtraining.in",
  //   },
  // };

  return (
    <>
      <div className="pb-20">
        {/* certification banner start */}
        <section className="relative bg-[url(/certification_img/certification_banner/cf_banner.png)] bg-cover max-md:h-[490px] md:h-96">
          <div className="relative flex h-full items-center justify-around max-md:pt-2">
            {certification.c_image && (
              <Image
                className="absolute bottom-5 right-11 max-md:h-[100px] max-md:w-[100px] md:static"
                src={certification.c_image}
                width={250}
                height={90}
                alt={certification.title}
              />
            )}
            <AboutExam />
          </div>
        </section>
        {/* certification banner end */}

        {/* certification content start */}
        <DynamicPage />
        {/* certification content end */}

        {/* related course start */}
        <section className="px-10">
          <h2 className="text-xl text-themeblue">
            Related Certification Courses
          </h2>
          <div className="mx-auto lg:w-[95%]">
            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCerts.length > 0 ? (
                relatedCerts.map((item, index) => (
                  <div key={index}>
                    <Link href={`/certifications/${item.slug}`}>
                      <div
                        key={item.code}
                        className="my-3 flex items-center space-x-3 rounded-lg border bg-themewhite p-1 shadow-md"
                      >
                        {/* <img src={item.c_image} alt="Badge" className="w-28 h-28 object-contain" /> */}
                        <Image
                          src={item.c_image}
                          width={112}
                          height={112}
                          alt="Badge"
                          className="object-contain"
                        />
                        <div>
                          <h3 className="font-bold">{item.code}</h3>
                          <p className="text-sm text-gray-600">{item.title}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No Related Certification Course</p>
              )}
            </div>
          </div>
        </section>
        {/* related course end  */}
      </div>

      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      /> */}
    </>
  )
}
