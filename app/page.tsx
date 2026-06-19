"use client"

import Link from "next/link"
import {
  ArrowRight,
  Code2,
  FolderOpen,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  Palette,
  Smartphone,
  Star,
  Users,
  Zap,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import GoogleAdsConversion from "@/components/gtag"
import { Seo } from "@/components/seo"

const skills = [
  {
    icon: Globe,
    title: "Responsive Layout",
    desc: "Designing web pages that adapt to every screen using CSS media queries, Flexbox, and Grid.",
    gradient: "from-indigo-500 to-violet-500",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    icon: Layers,
    title: "Cross-Browser Compatibility",
    desc: "Ensuring websites look and work perfectly on Chrome, Firefox, Safari, and Edge.",
    gradient: "from-sky-500 to-cyan-500",
    glow: "rgba(56,189,248,0.3)",
  },
  {
    icon: Palette,
    title: "CSS Preprocessors",
    desc: "Writing maintainable, DRY stylesheets using variables, mixins, and nesting for scalable systems.",
    gradient: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Minimizing load times, reducing asset sizes, lazy loading, and leveraging CDNs.",
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: Code2,
    title: "API Integration",
    desc: "Fetching and displaying data from REST and GraphQL APIs with modern state patterns.",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    desc: "Building web apps that function like native apps with offline access and push notifications.",
    gradient: "from-fuchsia-500 to-purple-500",
    glow: "rgba(217,70,239,0.3)",
  },
]

const techIcons = [
  { src: "/icons/html.png", label: "HTML5", size: 50 },
  { src: "/icons/next.png", label: "Next.js", size: 70 },
  { src: "/icons/react.png", label: "React", size: 70 },
  { src: "/icons/node.png", label: "Node.js", size: 70 },
  { src: "/icons/tw.png", label: "Tailwind", size: 70 },
]

const stats = [
  {
    icon: Star,
    value: "4+",
    label: "Years Experience",
    color: "text-amber-400",
  },
  {
    icon: FolderOpen,
    value: "15+",
    label: "Projects Shipped",
    color: "text-sky-400",
  },
  {
    icon: Users,
    value: "100%",
    label: "Client Satisfaction",
    color: "text-emerald-400",
  },
]

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Seo
        path="/"
        type="profile"
        description="Muath Alzoubi — Front-End Developer with more than 4 years of experience building responsive, high-performance web applications with React.js, Next.js, and TypeScript."
      />
      <img className="app " src="./bg.svg" alt="bg" />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative w-full pt-36 pb-20 md:pt-48 md:pb-28 lg:pt-60 lg:pb-36">
          {/* Hero glow orb */}
          <div className="pointer-events-none absolute left-1/2 top-24 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-[80px]" />

          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              {/* Badge */}
              <div className="anim inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
                <Layers className="size-3.5 text-emerald-400" />
              </div>

              {/* Headline */}
              <div className="anim space-y-5">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="block bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                    Hi, I'm{" "}
                    <span className="relative inline-block bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                      Muath Alzoubi
                      <svg
                        className="absolute md:-bottom-5 left-0 w-full"
                        viewBox="0 0 300 16"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 9C40 2 60 2 98 9C136 16 156 16 194 9C232 2 252 2 298 9"
                          stroke="url(#nameWave)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          className="wave-draw"
                        />
                        <defs>
                          <linearGradient
                            id="nameWave"
                            x1="0"
                            y1="0"
                            x2="300"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#818cf8" />
                            <stop offset="0.5" stopColor="#38bdf8" />
                            <stop offset="1" stopColor="#34d399" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </span>
                  <span className="relative mt-2 block">
                    <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                      Front-End Developer
                    </span>
                    <span className="absolute -inset-x-6 -inset-y-3 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-emerald-500/10 blur-2xl" />
                  </span>
                </h1>
                <p className="mx-auto max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl leading-relaxed">
                  I build responsive, dynamic, and beautiful web experiences
                  with React, Next.js, and modern tooling — from concept to
                  deployment.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="anim flex flex-wrap items-center justify-center gap-3">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 px-8 text-white shadow-[0_8px_32px_rgba(56,189,248,0.35)] transition-all hover:shadow-[0_8px_48px_rgba(16,185,129,0.55)] hover:scale-[1.03]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      View My Work
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:border-white/25 transition-all hover:scale-[1.03]"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Social icons */}
              <div className="anim flex items-center gap-3 pt-2">
                {[
                  {
                    href: siteConfig.links.github,
                    Icon: Github,
                    label: "GitHub",
                  },
                  {
                    href: siteConfig.links.linkedin,
                    Icon: Linkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:moathaza@gmail.com",
                    Icon: Mail,
                    label: "Email",
                  },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="w-full py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/8 bg-white/[0.025] py-6 px-4 text-center backdrop-blur transition-all hover:bg-white/[0.05] hover:border-white/15"
                >
                  <Icon className={`size-5 ${color} mb-1`} />
                  <span className={`text-2xl font-bold ${color}`}>{value}</span>
                  <span className="text-xs text-zinc-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="w-full py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                What I do
              </div>
              <h2 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                Skills & Expertise
              </h2>
              <p className="mt-4 text-zinc-500">
                Modern technologies and proven practices to deliver exceptional
                web experiences.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div
                    key={skill.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15"
                    style={{ "--glow": skill.glow } as React.CSSProperties}
                  >
                    {/* Hover glow */}
                    <div
                      className={`absolute inset-0 -z-10 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07]`}
                    />
                    {/* Top edge accent on hover */}
                    <div
                      className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${skill.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-60`}
                    />
                    <div
                      className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${skill.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="size-5 text-white" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-white">
                      {skill.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {skill.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="w-full py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                My stack
              </div>
              <h2 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
                Technologies
              </h2>
              <p className="mt-4 text-zinc-500">
                The tools I use every day to build great things.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {techIcons.map((tech) => (
                <div
                  key={tech.label}
                  className="group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/25 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/0 to-sky-500/0 opacity-0 transition-opacity duration-300 group-hover:from-emerald-500/5 group-hover:to-sky-500/5 group-hover:opacity-100" />
                  <img
                    src={tech.src}
                    alt={tech.label}
                    width={tech.size}
                    className="transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                  />
                  <span className="text-xs font-medium text-zinc-500 transition-colors group-hover:text-white">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/8 via-sky-500/8 to-emerald-500/8 p-10 text-center backdrop-blur md:p-16">
              {/* Background glows */}
              <div className="pointer-events-none absolute -top-24 left-1/2 size-[400px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-20 right-0 size-[300px] rounded-full bg-emerald-500/15 blur-[70px]" />
              {/* Top border gradient */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />

              <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400 mb-6">
                <Layers className="size-3 text-sky-400" />
                Let's work together
              </div>
              <h2 className="relative bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                Let's build something great together
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-zinc-400">
                Have a project in mind? I'd love to hear about it and help bring
                it to life.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white shadow-[0_8px_32px_rgba(56,189,248,0.35)] hover:shadow-[0_8px_48px_rgba(16,185,129,0.55)] hover:scale-[1.03] transition-all"
                  >
                    Start a project
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
                <Link href="/aboutme">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:border-white/25 transition-all"
                  >
                    Learn more about me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-zinc-950/40 py-8 backdrop-blur">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:px-6">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Muath Alzoubi. All rights reserved.
          </p>
          <nav className="flex gap-6 sm:ml-auto">
            <a
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs text-zinc-600 transition-colors hover:text-zinc-400"
              href="#"
            >
              Privacy
            </a>
          </nav>
        </div>
      </footer>
      <GoogleAdsConversion />
    </div>
  )
}
