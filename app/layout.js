import { Poppins } from "next/font/google"

import Footer from "./components/Footer"
import JsonLd from "./components/JsonLd"
import Navbar from "./components/Navbar"
import {
  DEFAULT_OG_IMAGE,
  ORG_LOGO,
  ORG_NAME,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "./util/seo"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-popin",
  weight: ["400", "600", "700", "800", "900"], // Choose the font weights you need
})

// Site-wide defaults. Every page overrides title/description/canonical/OG
// itself (see app/util/seo.js -> buildMetadata). metadataBase lets Next turn
// relative URLs into absolute ones.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BITA Academy - IT Certification Training Online",
  description:
    "Start or grow your career in IT with an IT certification from us. Find everything you need to get certified - from exploring certifications to training.",
  applicationName: SITE_NAME,
  verification: {
    google: "ePP3JgpbaLW2x-0DgqEksztWLKS2YtypHcxaFKUncAI",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: ORG_NAME,
  url: SITE_URL,
  logo: absoluteUrl(ORG_LOGO),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${poppins.variable}`}>
      <body className="font-f_popin">
        <JsonLd data={organizationJsonLd} />
        <section className="mx-auto xl:max-w-[1300px]">
          <Navbar />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  )
}
