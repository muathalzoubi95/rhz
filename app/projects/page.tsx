"use client"
import  Link  from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Home, Layers } from "lucide-react"
import { Seo } from "@/components/seo"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

const projects: Project[] = [
  { id: 1, title: "Design Wave", description: "A modern web design landing page with interactive elements.", image: "/wave.avif", tags: ["React", "Node.js", "UI", "CSS"], githubUrl: "https://designwaveapp.netlify.app/", liveUrl: "https://designwaveapp.netlify.app/" },
  { id: 2, title: "Point of Sales", description: "A complete Point of Sales system for retail businesses.", image: "/pos.png", tags: ["React", "Node.js", "Redux", "CSS"], githubUrl: "https://possys-app.netlify.app/", liveUrl: "https://possys-app.netlify.app/" },
  { id: 3, title: "Web Design App", description: "A web design application built with Next.js and modern tooling.", image: "/web.png", tags: ["React", "API Integration", "Tailwind CSS"], githubUrl: "https://web-desgin-app.netlify.app/", liveUrl: "https://web-desgin-app.netlify.app/" },
  { id: 4, title: "RED Neon Page", description: "A stunning neon-themed page with bold visual effects.", image: "/red.jpeg", tags: ["Next.js", "Node.js", "UI", "CSS"], githubUrl: "https://redappport.netlify.app/", liveUrl: "https://redappport.netlify.app/" },
  { id: 5, title: "Invest Plus", description: "An investment tracking and management web app.", image: "/inv.avif", tags: ["React", "TypeScript", "UI", "Node"], githubUrl: "https://app-investment.netlify.app/", liveUrl: "https://app-investment.netlify.app/" },
  { id: 6, title: "Merva AI", description: "AI-powered customer support system with smart responses.", image: "/ai.png", tags: ["Next.js", "Tailwind CSS", "Framer Motion"], githubUrl: "https://merva-ai.netlify.app/", liveUrl: "https://merva-ai.netlify.app/" },
  { id: 7, title: "Editor App", description: "A rich text editor application with modern UI.", image: "/edito.webp", tags: ["Next.js", "Tailwind CSS", "Framer Motion"], githubUrl: "https://recteditor.netlify.app/", liveUrl: "https://recteditor.netlify.app/" },
  { id: 8, title: "Short Link App", description: "A URL shortener with analytics and custom links.", image: "/short.png", tags: ["React.js", "CSS", "Firebase"], githubUrl: "https://github.com/s", liveUrl: "https://shortlinks-app.netlify.app/" },
  { id: 9, title: "Basca Short Links", description: "Another take on URL shortening with a clean interface.", image: "/short2.jpeg", tags: ["React.js", "CSS", "Firebase"], githubUrl: "https://bascashortlinks.netlify.app/", liveUrl: "https://bascashortlinks.netlify.app/" },
  { id: 10, title: "My Portfolio", description: "My personal portfolio website showcasing my work.", image: "/me.avif", tags: ["React.js", "CSS", "Next"], githubUrl: "https://muathalzoubi.netlify.app", liveUrl: "https://muathalzoubi.netlify.app" },
  { id: 11, title: "REEZ App", description: "A toolset for managing daily productivity.", image: "/reez.jpeg", tags: ["React.js", "CSS", "Next"], githubUrl: "https://reezapp.netlify.app", liveUrl: "https://reezapp.netlify.app" },
  { id: 12, title: "Normar Dental Lab", description: "Professional website for a dental laboratory.", image: "/normar.avif", tags: ["React.js", "Next.js", "Tailwind CSS"], githubUrl: "https://normar.netlify.app/", liveUrl: "https://normar.netlify.app/" },
  { id: 13, title: "Babalous Site", description: "A modern business website with engaging visuals.", image: "/bab.avif", tags: ["Next.js", "CSS", "Tailwind CSS"], githubUrl: "https://babalous.netlify.app", liveUrl: "https://babalous.netlify.app/" },
  { id: 14, title: "Flow Designer", description: "An interactive flow and diagram designer for building visual workflows.", image: "/flow-designer.png", tags: ["React", "TypeScript", "Tailwind CSS", "UI"], githubUrl: "https://github.com/muathalzoubi95/Flow-Designer", liveUrl: "https://flow-designer.pages.dev/" },
  { id: 15, title: "Business Hub Pro", description: "A premium business setup platform for launching and managing companies globally.", image: "/business-hub-pro.png", tags: ["React", "Next.js", "Tailwind CSS"], githubUrl: "https://github.com/muathalzoubi95/Business-Hub-Pro", liveUrl: "https://business-hub-pro.pages.dev/" },
]

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <Seo
        title="Projects"
        path="/projects"
        description="Explore web development projects by Muath Alzoubi — responsive, performant applications built with React.js, Next.js, TypeScript, and Tailwind CSS."
      />
      <div className="container mx-auto px-4 pb-20 pt-28 md:pt-32 md:px-6">

        {/* Header */}
        <header className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
              <Layers className="size-3 text-sky-400" />
              {projects.length} projects shipped
            </div>
            <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              My Projects
            </h1>
            <p className="mt-2 text-zinc-500">A selection of work I've built and shipped.</p>
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

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const gradients = [
    "from-indigo-500/20 to-violet-500/20",
    "from-sky-500/20 to-cyan-500/20",
    "from-emerald-500/20 to-teal-500/20",
    "from-pink-500/20 to-rose-500/20",
    "from-amber-500/20 to-orange-500/20",
    "from-fuchsia-500/20 to-purple-500/20",
  ]
  const shadowColors = [
    "hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)]",
    "hover:shadow-[0_20px_60px_-15px_rgba(56,189,248,0.3)]",
    "hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)]",
    "hover:shadow-[0_20px_60px_-15px_rgba(236,72,153,0.3)]",
    "hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.3)]",
    "hover:shadow-[0_20px_60px_-15px_rgba(217,70,239,0.3)]",
  ]
  const gradient = gradients[index % gradients.length]
  const shadow = shadowColors[index % shadowColors.length]

  return (
    <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15 ${shadow}`}>
      {/* Top gradient shimmer line */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Hover action buttons */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full gap-2 p-4 transition-transform duration-300 group-hover:translate-y-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <ExternalLink className="size-3.5" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-zinc-900/90 p-2.5 text-white backdrop-blur transition-all hover:bg-zinc-800 hover:scale-[1.05]"
            aria-label="View source"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-emerald-300">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-zinc-400 leading-relaxed">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
