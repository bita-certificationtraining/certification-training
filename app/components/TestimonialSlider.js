"use client"

// import React, { useCallback } from 'react';
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    image: "/clientreviews/clientreview1.webp",
    name: "clientreview1",
  },
  {
    image: "/clientreviews/clientreview2.webp",
    name: "clientreview2",
  },
  {
    image: "/clientreviews/clientreview3.webp",
    name: "clientreview3",
  },
  {
    image: "/clientreviews/clientreview4.webp",
    name: "clientreview4",
  },
  {
    image: "/clientreviews/clientreview5.webp",
    name: "clientreview5",
  },
  {
    image: "/clientreviews/clientreview6.webp",
    name: "clientreview6",
  },
]

export default function TestimonialSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ])

  return (
    <div className="mb-16 overflow-hidden pb-6">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, index) => (
            <div
              className="flex min-w-full items-center justify-center px-4"
              key={index}
            >
              <div className="max-w-md rounded-xl bg-white p-2 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
