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
    title: "Text Editor",
    description: "Text Editor ",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Raduax Ui", "CSS"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://editor-pad.vercel.app/"
  },
  {
    id: 2,
    title: "Simple Images App",
    description: "A Images application using React and OpenWeatherMap API.",
    image: "/img-viewer.png",
    tags: ["React", "API Integration", "Tailwind CSS"],
    githubUrl: "https://github.com/muathzoubi/simple-img-viewer",
    liveUrl: "https://simple-img-viewer.vercel.app/"
  },
  {
    id: 3,
    title: "Bookmarks Plus    ",
    description: "A task management application with drag-and-drop functionality.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "TypeScript", "UI", "Node"],
    githubUrl: "https://bookmarks-plus-eight.vercel.app/",
    liveUrl: "https://bookmarks-plus-eight.vercel.app/"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#"
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