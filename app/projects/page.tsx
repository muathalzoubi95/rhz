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
    image: "/next.svg",
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
    image: "/next.svg",
    tags: ["React", "API Integration", "Tailwind CSS"],
    githubUrl: "https://web-desgin-app.netlify.app/",
    liveUrl: "https://web-desgin-app.netlify.app/"
  },
  {
    id: 4,
    title: "Invest Plus App    ",
    description: "nvest Plus web App .",
    image: "/bk.png",
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
    title: "Menu App",
    description: "Menu App",
    image: "/menu.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://menu-me-theta.vercel.app/"
  },
  {
    id: 8,
    title: "Short Link App",
    description: "Short Link App",
    image: "/short.png",
    tags: ["React.js", "CSS", "Firebase"],
    githubUrl: "https://github.com/s",
    liveUrl: "https://shortlinks-app.netlify.app/"
  },
  {
    id: 9,
    title: "My Portfolio  App",
    description: "My Portfolio App",
    image: "/next.svg",
    tags: ["React.js", "CSS", "Firebase"],
    githubUrl: "https://muathalzoubi.netlify.app",
    liveUrl: "https://muathalzoubi.netlify.app"
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
        <CardTitle className="mt-4">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
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
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild className=" text-neutral-200 bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-600 to-90%">
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}