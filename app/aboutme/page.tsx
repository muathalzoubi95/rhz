"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Home, MapPin, Briefcase, Star, FolderOpen, Users } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Seo } from "@/components/seo"

const quickStats = [
  { value: "4+", label: "Years Exp.", color: "from-indigo-400 to-violet-400" },
  { value: "15+", label: "Projects", color: "from-sky-400 to-cyan-400" },
  { value: "100%", label: "Satisfaction", color: "from-emerald-400 to-teal-400" },
]

export default function AboutMePage() {
  return (
    <div className="relative min-h-screen">
      <Seo
        title="About Me"
        path="/aboutme"
        type="profile"
        description="Learn about Muath Alzoubi, a passionate Front-End Developer with more than 4 years of experience specializing in React.js, Next.js, and modern web technologies."
      />
      <div className="container mx-auto px-4 pb-20 pt-28 md:pt-32 md:px-6">

        {/* Page Header */}
        <header className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300">
              About me
            </div>
            <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Hello, I'm Muath
            </h1>
            <p className="mt-2 text-zinc-500">A passionate developer crafting modern web experiences.</p>
          </div>
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/25 transition-all"
            >
              <Home className="mr-2 size-4" />
              Back to Home
            </Button>
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

          {/* Profile Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-7 backdrop-blur lg:col-span-1">
            {/* Background glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 size-[250px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl" />
            {/* Top border accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

            <div className="relative flex flex-col items-center text-center">
              {/* Avatar with animated ring */}
              <div className="relative mb-6">
                <div className="absolute inset-0 -m-2 animate-spin-slow rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500 opacity-50 blur-sm" />
                <div className="relative rounded-full bg-zinc-950 p-[3px]">
                  <img
                    src="/22.png"
                    alt="Muath Alzoubi"
                    className="size-40 rounded-full object-cover"
                  />
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-1 right-1 size-4 rounded-full border-2 border-zinc-950 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </div>

              <h2 className="text-2xl font-bold text-white">Muath A. Alzoubi</h2>
              <p className="mt-1 text-sm text-zinc-400">Front-end Developer</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500">
                <MapPin className="size-3" />
                Amman, Jordan
              </div>
              <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </div>

              {/* Quick stats */}
              <div className="mt-6 grid w-full grid-cols-3 gap-2">
                {quickStats.map(({ value, label, color }) => (
                  <div key={label} className="rounded-xl border border-white/8 bg-white/[0.03] py-3 px-2">
                    <div className={`text-lg font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{value}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="mt-6 flex gap-2">
                {[
                  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
                  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: "mailto:moathaza@gmail.com", label: "Email" },
                  { icon: FileText, href: "/resume.pdf", label: "Resume" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-8 backdrop-blur lg:col-span-2">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
            <div className="pointer-events-none absolute -top-20 right-0 size-[200px] rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative mb-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
              <div className="inline-flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500">
                <Briefcase className="size-3.5 text-white" />
              </div>
              Biography
            </div>
            <div className="relative space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Hello! I'm Muath Alzoubi, a passionate Front-End Developer with{" "}
                <span className="font-semibold text-white bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-transparent">more than 4 years of experience</span>{" "}
                creating dynamic and user-friendly web applications. I specialize in JavaScript
                technologies, particularly React.js, to build responsive and scalable solutions.
              </p>
              <p>
                I have familiarity with back-end technologies, allowing me to work effectively
                across the full stack when needed. My experience includes integrating APIs,
                handling server-side logic, and managing databases.
              </p>
              <p>
                I'm always seeking to stay up-to-date with the latest technologies and tools that
                can enhance my productivity and efficiency, while ensuring the highest quality in
                my projects.
              </p>
            </div>

            <div className="relative mt-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300 transition-all hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-300 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-8 backdrop-blur lg:col-span-3">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 size-[300px] rounded-full bg-indigo-500/5 blur-3xl" />

            <div className="relative mb-7 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Skills &amp; Proficiency</h3>
                <p className="mt-0.5 text-xs text-zinc-500">Self-assessed proficiency levels</p>
              </div>
              <span className="text-xs text-zinc-600 font-mono">%</span>
            </div>
            <div className="relative grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
              {siteConfig.skills.map((skill, i) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-zinc-200">{skill.name}</span>
                    <span className="font-mono text-xs text-zinc-500">{skill.progress}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 transition-all duration-1000 shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                      style={{ width: `${skill.progress}%`, transitionDelay: `${i * 30}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
