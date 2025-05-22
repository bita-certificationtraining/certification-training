import Image from "next/image"
import Link from "next/link"
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si"

export default function Footer() {
  return (
    <>
      <footer className="bg-themegray px-14 pb-6 pt-4 text-sm text-themeblue">
        <div className="grid grid-cols-1 gap-y-6 border-b-2 border-b-white py-8 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:gap-y-0">
          <div className="w-42">
            <Image
              src="/homepageimages/bitalogo.png"
              width={90}
              height={90}
              alt="BITA Logo"
              className="pb-4"
            />
            <ul className="flex flex-col gap-y-2">
              <li>5/44, Valluvar Salai, Ramapuram, Chennai 600089</li>
              <li>Phone : +91 9566004616</li>
            </ul>
          </div>
          <div className="w-42">
            <ul className="leading-7">
              {/* <li>Home</li> */}
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/aboutus">ABOUT US</Link>
              </li>
              <li>
                <Link href="/blog">BLOG</Link>
              </li>
              <li>
                <Link href="/contactus">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className="w-42">
            <ul className="leading-7">
              <li>Python Institute Certification</li>
              <li>Microsoft Certification</li>
              <li>Comptia Certification</li>
              <li>GIAC Certification</li>
              <li>ISACA Certification</li>
            </ul>
          </div>
          <div className="w-42">
            <ul className="flex gap-x-5">
              <li className="rounded-3xl bg-white p-2">
                <a
                  href="https://www.instagram.com/bitahelpdesk/"
                  target="_blank"
                  rel="bita-it-training-academy"
                >
                  <SiInstagram size={21} className="bg-white" />
                </a>
              </li>
              <li className="rounded-3xl bg-white p-2">
                <a
                  href="https://www.facebook.com/BitaAcademy/"
                  target="_blank"
                  rel="bita-it-training-academy"
                >
                  <SiFacebook size={21} />
                </a>
              </li>
              <li className="rounded-3xl bg-white p-2">
                <a
                  href="https://x.com/Bitaaacademy"
                  target="_blank"
                  rel="bita-it-training-academy"
                >
                  <SiX size={21} />
                </a>
              </li>
              <li className="rounded-3xl bg-white p-2">
                <a
                  href="https://www.linkedin.com/company/bita-it-training-academy/"
                  target="_blank"
                  rel="bita-it-training-academy"
                >
                  <SiLinkedin size={21} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-xs text-themeblack">
          Copyrights © 2025 Bit Park Private Limited ·{" "}
          <a
            href="https://bitaacademy.com/privacy-policy"
            target="_blank"
            rel="privacy-policy"
          >
            Privacy Policy
          </a>{" "}
          ·All Rights Reserved · Made in BIT Park Pvt Ltd
        </div>
      </footer>
    </>
  )
}
