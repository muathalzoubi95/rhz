"use client"

import { useState } from "react"
import Link from "next/link"
import {
  CheckCircle2,
  Github,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Seo } from "@/components/seo"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputBase =
    "w-full rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white placeholder:text-zinc-600 backdrop-blur transition-all duration-200 focus:border-emerald-400/40 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-emerald-400/15 hover:border-white/15"

  return (
    <div className="relative min-h-screen">
      <Seo
        title="Contact"
        path="/contact"
        description="Get in touch with Muath Alzoubi for front-end development opportunities, collaborations, and freelance projects in React.js and Next.js."
      />
      <div className="container mx-auto px-4 pb-20 pt-28 md:pt-32 md:px-6">
        {/* Header */}
        <header className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Get in touch
            </div>
            <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Let's talk
            </h1>
            <p className="mt-2 text-zinc-500">
              Have an idea? I'd love to hear from you.
            </p>
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Form */}
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-8 backdrop-blur lg:col-span-3">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
            <div className="pointer-events-none absolute -top-20 right-0 size-[250px] rounded-full bg-emerald-500/8 blur-3xl" />

            {sent ? (
              <div className="relative flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/30">
                  <CheckCircle2 className="size-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="relative mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Send a message
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Fill out the form and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="relative grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      Name
                    </label>
                    <input
                      className={inputBase}
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      Email
                    </label>
                    <input
                      className={inputBase}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      Subject
                    </label>
                    <input
                      className={inputBase}
                      id="subject"
                      name="subject"
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wider text-zinc-500"
                    >
                      Message
                    </label>
                    <textarea
                      className={`${inputBase} min-h-[140px] resize-y`}
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="group rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white shadow-[0_8px_32px_rgba(56,189,248,0.3)] hover:shadow-[0_8px_48px_rgba(16,185,129,0.5)] hover:scale-[1.02] transition-all"
                    >
                      Send Message
                      <Send className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-5 lg:col-span-2">
            {/* Contact details */}
            <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-6 backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
              <div className="pointer-events-none absolute -top-16 right-0 size-[150px] rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative mb-5">
                <h2 className="text-base font-bold text-white">
                  Contact information
                </h2>
                <p className="mt-0.5 text-xs text-zinc-500">
                  Reach out through any of these channels.
                </p>
              </div>

              <div className="relative space-y-3">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "moathaza@gmail.com",
                    href: "mailto:moathaza@gmail.com",
                    gradient: "from-indigo-500 to-violet-500",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+962 795 957 348",
                    href: "tel:+962795957348",
                    gradient: "from-sky-500 to-cyan-500",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Amman, Jordan",
                    href: "#",
                    gradient: "from-emerald-500 to-teal-500",
                  },
                ].map(({ icon: Icon, label, value, href, gradient }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-3 rounded-xl border border-white/6 bg-white/[0.02] p-3 transition-all hover:border-white/15 hover:bg-white/[0.05] hover:-translate-y-0.5"
                  >
                    <div
                      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium text-white mt-0.5">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social follow */}
            <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-indigo-500/8 via-sky-500/8 to-emerald-500/8 p-6 backdrop-blur">
              <div className="pointer-events-none absolute -bottom-12 -right-12 size-36 rounded-full bg-emerald-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -top-12 -left-12 size-36 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <h3 className="relative text-sm font-bold text-white">
                Follow me
              </h3>
              <p className="relative mt-1 text-xs text-zinc-400">
                Find me on these platforms.
              </p>
              <div className="relative mt-4 flex gap-2">
                {[
                  {
                    Icon: Github,
                    label: "GitHub",
                    href: siteConfig.links.github,
                  },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    href: siteConfig.links.linkedin,
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    href: "mailto:moathaza@gmail.com",
                  },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-zinc-300 transition-all hover:-translate-y-1 hover:bg-white/18 hover:text-white hover:border-white/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-400/15 bg-emerald-500/5 p-5 backdrop-blur">
              <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="relative flex items-start gap-3">
                <div className="mt-0.5 size-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.6)] shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Available for work
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500 leading-relaxed">
                    Open to freelance projects, contract work, and full-time
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
