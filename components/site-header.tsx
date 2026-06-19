"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/projects", label: "Projects", color: "from-sky-400 to-cyan-400" },
  { href: "/experiences", label: "Experiences", color: "from-indigo-400 to-violet-400" },
  { href: "/aboutme", label: "About me", color: "from-pink-400 to-rose-400" },
  { href: "/contact", label: "Contact", color: "from-emerald-400 to-teal-400" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-zinc-950/80 backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 opacity-40 blur-md transition-all duration-300 group-hover:opacity-80 group-hover:blur-lg" />
              <img
                src="/thirteen.svg"
                className="relative size-9"
                alt="logo"
              />
            </div>

            <span className="hidden bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-sm font-bold tracking-tight text-transparent sm:block transition-all duration-300 group-hover:from-indigo-300 group-hover:to-emerald-300">
              Muath Alzoubi
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span
                        className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-r ${item.color} opacity-[0.15]`}
                      />
                    )}

                    {item.label}

                    {isActive && (
                      <span
                        className={`absolute inset-x-3 -bottom-px h-[1.5px] rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur transition-all hover:border-white/20 hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-30 w-72 transform border-l border-white/[0.07] bg-zinc-950/98 backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="pointer-events-none absolute -top-20 left-1/2 size-[200px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

        <nav className="mt-20 flex flex-col gap-1 px-4">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group relative overflow-hidden rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                  isActive ? "text-white" : "text-zinc-300 hover:text-white"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span
                  className={`absolute inset-0 -z-10 bg-gradient-to-r ${item.color} transition-opacity duration-200 ${
                    isActive
                      ? "opacity-20"
                      : "opacity-0 group-hover:opacity-10"
                  }`}
                />
                <span className="relative">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  )
}