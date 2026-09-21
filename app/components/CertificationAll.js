"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import ContactForm from "@/app/components/ContactForm";
import Image from "next/image";
import { CertificationList } from "../util/certificationList";

export default function CertificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || null
  );
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Ovvoru subcategory section-kum ref vachi vachurukom, scroll pannuradhukku
  const sectionRefs = useRef({});

  // URL query param maarumbothu state sync pannum (reload/back/forward)
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || null);
  }, [searchParams]);

  // 🔹 Category select pannina, page top-ku jump aagama andha section-ku smooth scroll pannum
  const scrollToSection = (name) => {
    setTimeout(() => {
      const el = sectionRefs.current[name];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50); // filter apply aana appuram scroll pannuradhukku chinna delay
  };

  // Subcategory click handler
  const handleCategoryClick = (name) => {
    const newCategory = selectedCategory === name ? null : name;
    setSelectedCategory(newCategory);

    if (newCategory) {
      router.push(`?category=${encodeURIComponent(newCategory)}`, { scroll: false });
      scrollToSection(newCategory);
    } else {
      router.push(`?`, { scroll: false });
    }
  };

  // 🔹 Parent category (h4) click pannina, adhula irukura first subcategory-a select pannum
  const handleParentCategoryClick = (category) => {
    if (category.subcategories.length > 0) {
      const firstSub = category.subcategories[0].name;
      handleCategoryClick(firstSub);
    }
  };

  const handleShowAll = () => {
    setSelectedCategory(null);
    router.push(`?`, { scroll: false });
  };

  const filteredCertifications = CertificationList.map((category) => ({
    ...category,
    subcategories: category.subcategories
      .map((subcategory) => ({
        ...subcategory,
        items: subcategory.items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.code.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((subcategory) => subcategory.items.length > 0),
  })).filter((category) => category.subcategories.length > 0);

  return (
    <div className="flex h-auto">
      {/* aside content */}
      <aside className="bg-gray-50 shadow-md border-r w-72 border-gray-200 py-6 ps-3 pe-2">
        <h2 className="text-xl text-themeblue font-bold mb-4">
          Certification Courses
        </h2>

        <input
          type="text"
          placeholder="Search course or code"
          className="border p-2 w-full mb-4 rounded-md"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <h3 className="text-lg text-themeblue font-bold mb-2">Categories</h3>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer text-sm font-bold ${
              !selectedCategory ? "text-yellow-500 underline" : "text-themeblack"
            }`}
            onClick={handleShowAll}
          >
            Show All Certifications
          </li>
          {CertificationList.map((category) => (
            <li key={category.category}>
              <h4
                className="text-md text-themeblue mb-1 cursor-pointer hover:underline"
                onClick={() => handleParentCategoryClick(category)}
              >
                {category.category}
              </h4>
              <ul className="ml-4 space-y-1">
                {category.subcategories.map((subcategory) => (
                  <li
                    key={subcategory.name}
                    className={`text-sm cursor-pointer font-medium transition-colors ${
                      selectedCategory === subcategory.name
                        ? "text-yellow-500 font-bold underline"
                        : "text-themelightblack hover:text-themeblue"
                    }`}
                    onClick={() => handleCategoryClick(subcategory.name)}
                  >
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="my-10 max-md:hidden">
          <ContactForm />
        </div>

        <div>
          <h4 className="text-md text-themeblue mb-1">Testimonials</h4>
          <div>
            <Image className="mt-6 mb-20" src="/clientreviews/clientreview1.webp" alt="clientreviewimage1" sizes="(max-width: 768px) 100vw, 300px" width={300} height={90} />
            <Image src="/clientreviews/clientreview2.webp" className="my-20" alt="clientreviewimage2" sizes="(max-width: 768px) 100vw, 300px" width={300} height={90} />
            <Image src="/clientreviews/clientreview3.webp" className="my-20" alt="clientreviewimage3" sizes="(max-width: 768px) 100vw, 300px" width={300} height={90} />
            <Image src="/clientreviews/clientreview4.webp" className="my-20" alt="clientreviewimage4" sizes="(max-width: 768px) 100vw, 300px" width={300} height={90} />
            <Image src="/clientreviews/clientreview5.webp" className="my-20" alt="clientreviewimage5" sizes="(max-width: 768px) 100vw, 300px" width={300} height={90} />
            <Image src="/clientreviews/clientreview6.webp" className="my-20" alt="clientreviewimage6" sizes="(max-width: 768px) 100vw, 300px" width={300} height={90} />
          </div>
        </div>
      </aside>

      {/* main content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((category) =>
            category.subcategories.map(
              (subcategory) =>
                (!selectedCategory ||
                  selectedCategory === subcategory.name) && (
                  <div
                    key={subcategory.name}
                    // 🔹 ref add pannirukom, scrollIntoView use pannuradhukku
                    ref={(el) => (sectionRefs.current[subcategory.name] = el)}
                    className="mb-6"
                  >
                    <h2 className="text-lg font-bold text-themeblue my-5">
                      {subcategory.name}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                      {subcategory.items.map((item) => (
                        <div key={item.code}>
                          <Link href={`/certifications/${item.slug}`}>
                            <div className="border p-1 rounded-lg flex items-center space-x-3 my-3 shadow-md bg-themewhite">
                              <Image
                                src={item.c_image}
                                alt="LogoBadge"
                                width={100}
                                height={90}
                              />
                              <div>
                                <h3 className="font-bold">{item.code}</h3>
                                <p className="text-sm text-gray-600">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )
          )
        ) : (
          <p className="text-themegray text-3xl h-full text-center pt-24">
            No certifications found.
          </p>
        )}
      </main>
    </div>
  );
}