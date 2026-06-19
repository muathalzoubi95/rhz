import { useEffect } from "react"

import { siteConfig } from "@/config/site"

type SeoProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: "website" | "article" | "profile"
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  )
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
}: SeoProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.fullName}`
    : `${siteConfig.fullName} — ${siteConfig.jobTitle}`
  const desc = description ?? siteConfig.description
  const url = `${siteConfig.url}${path === "/" ? "/" : path}`
  const img = `${siteConfig.url}${image ?? siteConfig.ogImage}`

  useEffect(() => {
    document.title = fullTitle

    setMeta("name", "description", desc)
    setMeta("name", "keywords", siteConfig.keywords.join(", "))
    setMeta("name", "author", siteConfig.fullName)

    setMeta("property", "og:title", fullTitle)
    setMeta("property", "og:description", desc)
    setMeta("property", "og:type", type)
    setMeta("property", "og:url", url)
    setMeta("property", "og:image", img)
    setMeta("property", "og:site_name", siteConfig.fullName)
    setMeta("property", "og:locale", siteConfig.locale)

    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", fullTitle)
    setMeta("name", "twitter:description", desc)
    setMeta("name", "twitter:image", img)

    setLink("canonical", url)
  }, [fullTitle, desc, url, img, type])

  return null
}
