import { Poppins } from "next/font/google"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-popin",
  weight: ["400", "600", "700", "800", "900"], // Choose the font weights you need
})

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${poppins.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="ePP3JgpbaLW2x-0DgqEksztWLKS2YtypHcxaFKUncAI"
        />
      </head>

      <body className="font-f_popin">
        <section className="mx-auto xl:max-w-[1300px]">
          <Navbar />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  )
}
