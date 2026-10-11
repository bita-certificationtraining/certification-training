import ContactPage from "@/app/components/ContactPage"
import { buildMetadata } from "@/app/util/seo"

export const metadata = buildMetadata({
  title: "Certification Training - Contact us",
  description:
    "Contact us and get information about certified training which helps to improve your IT skills and career with our experienced trainers.",
  path: "/contactus",
})

export default function Page() {

  return(
    <>
    <ContactPage/>
    </>
  )
 
  }