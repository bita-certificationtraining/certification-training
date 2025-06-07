import BlogPageComponents from "@/app/components/BlogPageComponents";

export const metadata = {
    title: "Certification Training - Blog",
    description: "Here is our blog which helps to know and get knowledge about latest IT certification programs.",
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    alternates: {
      canonical: "https://certificationtraining.in/aboutus",
    },
    openGraph: {
    title: "Certification Training - Blog",
    description: "Here is our blog which helps to know and get knowledge about latest IT certification programs.",
    url: "https://certificationtraining.in/aboutus",
      siteName: "Certification Training",
      type: "website",
    },
    twitter: {
      card: "summary",
    title: "Certification Training - Blog",
    description: "Here is our blog which helps to know and get knowledge about latest IT certification programs.",
    images: ["https://certificationtraining.in/bitalogo.png"],
    },
  };

export default function Page() {
  return (
    <div>
      <BlogPageComponents/>
    </div>
  );
}