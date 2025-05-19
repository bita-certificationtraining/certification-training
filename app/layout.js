import { Poppins } from "next/font/google"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the font weights you need
})

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className={poppins.className}>
        <section className="mx-auto xl:max-w-[1300px]">
          <Navbar />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  )
}
