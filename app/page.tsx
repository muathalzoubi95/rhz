import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <><div className="app"></div>
    <section className="container w-full grid items-center gap-6 pb-8 py-40   text-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-3xl">
        Welcome to My Portfolio

        </h1>
       
        <p className="max-w-[700px] text-lg text-muted-foreground">
        Focus on delivering intuitive, efficient, and high-performing web solutions tailored to meet the needs of businesses and users alike. Let’s collaborate to bring your vision to life!
        </p>
      </div>
      <div className="flex gap-4  m-auto">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Contact me
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section></>
  )
}
