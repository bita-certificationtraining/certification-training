import ContactPageComponents from "@/app/components/ContactPageComponents";

export const metadata = {
    title: "Certification Training - Contact us",
    description: "Contact us and get information about certified training which helps to improve your IT skills and career with our experienced trainers.",
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    alternates: {
      canonical: "https://certificationtraining.in/contactus",
    },
    openGraph: {
      title: "Certification Training - Contact us",
    description: "Contact us and get information about certified training which helps to improve your IT skills and career with our experienced trainers.",
    url: "https://certificationtraining.in/contactus",
      siteName: "Certification Trainings",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: "Certification Training - Contact us",
    description: "Contact us and get information about certified training which helps to improve your IT skills and career with our experienced trainers.",
    images: ["https://certificationtraining.in/bitalogo.png"], 
    },
  };

export default function Page() {

  return(
    <>
       <ContactPageComponents/>
    </>
  )
 
  }