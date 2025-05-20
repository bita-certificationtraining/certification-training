"use client"

import { useCallback } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"

import work from "../../public/blogimages/bootcamp_2.png"

export default function BlogSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  const blog = [
    {
      title: "Unlocking Opportunities with SC-100 Certification",
      image: "/blogimages/SC_100.png",
      name: "SC_100",
      description: `As organizations embrace cloud and hybrid infrastructures, the SC-100: Microsoft Cybersecurity Architect certification is gaining traction. It opens doors to key roles like cybersecurity architect, cloud security consultant, and more. Stay ahead in your career. To know more, read our in-depth blog at BITA: www.bitaacademy.com <a href="https://bitaacademy.com/is-there-a-demand-for-sc-100-microsoft-cybersecurity-architect/" target="_blank" rel="noopener noreferrer" style="color: #FF6347; text-decoration: underline;">Read More...</a>`,
      date: "MAY 16 2025",
    },
    {
      title: "Power Up Your Data Skills with PCAD",
      image: "/blogimages/pcad.png",
      name: "pcad",
      description: `Data professionals are in high demand. The PCAD certification helps you establish a strong foundation in data analytics. Learn more about how it can impact your career. <a href="https://bitaacademy.com" target="_blank" rel="noopener noreferrer" style="color: #FF6347; text-decoration: underline;">Read More...</a>`,
      date: "MAY 10 2025",
    },
  ]

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="my-32 flex flex-col items-center justify-center px-4 md:px-8 lg:flex-row">
      {/* Slider */}
      <div className="relative w-full rounded border bg-white p-6 shadow-md lg:w-2/3 xl:w-[600px]">
        <h2 className="mb-4 text-center text-xl font-bold text-red-500">
          Tech Shorts
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {blog.map((frame, idx) => (
              <div
                className="flex min-w-full rounded bg-gray-100 p-4 shadow-inner"
                key={idx}
              >
                <div className="flex w-1/3 items-center justify-center">
                  <Image
                    src={frame.image}
                    alt={frame.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <div className="text-sm text-gray-500">{frame.date}</div>
                  <h3 className="mb-2 text-lg font-bold text-red-500">
                    {frame.title}
                  </h3>
                  <div
                    className="text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: frame.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {blog.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-200 p-2 shadow"
            >
              <GoChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-200 p-2 shadow"
            >
              <GoChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Right-side Image */}
      <div className="mt-8 w-full lg:ml-8 lg:mt-0 lg:w-1/3">
        <Image
          src={work}
          alt="Bootcamp Offer"
          width={500}
          height={500}
          className="h-auto w-full rounded-md object-contain shadow-lg"
        />
      </div>
    </div>
  )
}
