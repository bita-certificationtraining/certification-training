import BlogPageComponents from "@/app/components/BlogPageComponents";
import { buildMetadata } from "@/app/util/seo"

export const metadata = buildMetadata({
  title: "Certification Training - Blog",
  description:
    "Here is our blog which helps to know and get knowledge about latest IT certification programs.",
  path: "/blog",
})

export default function Page() {
  return (
    <div>
      <BlogPageComponents/>
    </div>
  );
}