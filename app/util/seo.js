export const SITE_URL = "https://certificationtraining.in"
export const SITE_NAME = "Certification Training"
export const ORG_NAME = "BITA Academy"
export const ORG_LOGO = "/homepageimages/bitalogo.png"

// 1200x630 default share image (public/og-default.png)
export const DEFAULT_OG_IMAGE = "/bitalogo.png"

export function absoluteUrl(path = "") {
  if (!path) return SITE_URL
  if (/^https?:\/\//i.test(path)) return path
  // encodeURI leaves "+" as-is, but a literal "+" in a file path 404s -> %2B
  return `${SITE_URL}${encodeURI(path.startsWith("/") ? path : `/${path}`).replace(/\+/g, "%2B")}`
}

/**
 * One place that builds title / description / canonical / robots /
 * openGraph / twitter, so every page stays consistent.
 *
 * image  -> omit to use the default 1200x630 share image
 * square -> true when `image` is a square-ish logo (uses the small
 *           "summary" twitter card instead of the large one)
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  imageAlt,
  type = "website",
  square = false,
  noindex = false,
  publishedTime,
  modifiedTime,
}) {
  const url = absoluteUrl(path)
  const isDefault = !image
  const imageUrl = absoluteUrl(image || DEFAULT_OG_IMAGE)
  const alt = imageAlt || title

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: imageUrl,
          ...(isDefault ? { width: 1200, height: 630 } : {}),
          alt,
        },
      ],
    },
    twitter: {
      card: isDefault || !square ? "summary_large_image" : "summary",
      title,
      description,
      images: [imageUrl],
    },
  }
}
