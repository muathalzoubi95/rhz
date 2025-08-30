import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Home } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Badge from "@/components/ui/badge"

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
  {
    id: 1,
    title: "Design wave page ",
    description: "Design wave page   ",
    image: "/wave.avif",
    tags: ["React", "Node.js", " Ui", "CSS"],
    githubUrl: "https://designwaveapp.netlify.app/",
    liveUrl: "https://designwaveapp.netlify.app/"
  },
  {
    id: 2,
    title: "Point of Sales app",
    description: "Point of Sales System ",
    image: "/pos.png",
    tags: ["React", "Node.js", "Raduax Ui", "CSS"],
    githubUrl: "https://possys-app.netlify.app/",
    liveUrl: "https://possys-app.netlify.app/"
  },
  {
    id: 3,
    title: "Web desgin app",
    description: "A Web desgin app application using Next.j ",
    image: "/web.png",
    tags: ["React", "API Integration", "Tailwind CSS"],
    githubUrl: "https://web-desgin-app.netlify.app/",
    liveUrl: "https://web-desgin-app.netlify.app/"
  },  {
    id: 1,
    title: "RED Neon page ",
    description: "RED Neon page     ",
    image: "/red.jpeg",
    tags: ["Next.js", "Node.js", " Ui", "CSS"],
    githubUrl: "https://redappport.netlify.app/",
    liveUrl: "https://redappport.netlify.app/"
  },
  {
    id: 4,
    title: "Invest Plus App    ",
    description: "nvest Plus web App .",
    image: "/inv.avif",
    tags: ["React", "TypeScript", "UI", "Node"],
    githubUrl: "https://app-investment.netlify.app/",
    liveUrl: "https://app-investment.netlify.app/"
  },
  {
    id:5,
    title: "Merva AI",
    description: "Merva AI Customer support system",
    image: "/ai.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://merva-ai.netlify.app/",
    liveUrl: "https://merva-ai.netlify.app/"
  },
  {
    id: 7,
    title: "Editor App",
    description: "MeEditornu App",
    image: "/edito.webp",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://recteditor.netlify.app/",
    liveUrl: "https://recteditor.netlify.app/"
  },
  {
    id: 18,
    title: "Short Link App 1",
    description: "Short Link App",
    image: "/short.png",
    tags: ["React.js", "CSS", "Firebase"],
    githubUrl: "https://github.com/s",
    liveUrl: "https://shortlinks-app.netlify.app/"
  }, {
    id: 8,
    title: "Short Link App 2",
    description: "Short Link App",
    image: "/short2.jpeg",
    tags: ["React.js", "CSS", "Firebase"],
    githubUrl: "https://bascashortlinks.netlify.app/",
    liveUrl: "https://bascashortlinks.netlify.app/"
  },
  {
    id: 9,
    title: "My Portfolio  App",
    description: "My Portfolio App",
    image: "/me.avif",
    tags: ["React.js", "CSS", "Next"],
    githubUrl: "https://muathalzoubi.netlify.app",
    liveUrl: "https://muathalzoubi.netlify.app"
  },   
  {
    id: 19,
    title: "REEZ  App",
    description: "REEZ tools app",
    image: "/reez.jpeg",
    tags: ["React.js", "CSS", "Next"],
    githubUrl: "https://reezapp.netlify.app",
    liveUrl: "https://reezapp.netlify.app"
  },
  {
    id: 10,
    title: "Normar Dental Lab",
    tags: ["React.js", "Next.js", "Tailwind CSS"],
    image: "/normar.avif",
    description: "Normar Dental Lab",
    githubUrl: "https://normar.netlify.app/",

    liveUrl: "https://normar.netlify.app/"
}, {
    id: 11,
    title: "BAbalous Site",
    tags: ["Next.js", "CSS", "Tailwind CSS"],
    description: "BAbalous App",
    image: "/bab.avif",
    githubUrl: "https://babalous.netlify.app",
    liveUrl: "https://babalous.netlify.app/"
}
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 size-4" />
            Back to Home
          </Button>
        </Link>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <img src={project.image} alt={project.title} className="h-64 w-full rounded-t-lg object-cover" />
        <CardTitle className="mt-4">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 size-4" />
            GitHub
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild className=" bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-600 to-90% text-neutral-200">
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 size-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}