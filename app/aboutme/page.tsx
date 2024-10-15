import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Home } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export default function AboutMePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">About Me</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">John Doe</h2>
              <p className="text-muted-foreground mb-4">Full Stack Developer</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:john@example.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="/john-doe-resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                    <span className="sr-only">Resume</span>
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Hello! I'm John Doe, a passionate Full Stack Developer with over 5 years of experience in creating
              web applications. I specialize in JavaScript technologies across the stack and have a strong
              foundation in computer science principles.
            </p>
            <p className="mb-4">
              My journey in tech started when I built my first website at the age of 15. Since then, I've been
              constantly learning and adapting to new technologies. I'm particularly interested in creating
              scalable backend systems and intuitive user interfaces.
            </p>
            <p>
              When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or
              experimenting with new cooking recipes. I'm always open to new opportunities and collaborations,
              so feel free to reach out!
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>JavaScript/TypeScript</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="w-full" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>React</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="w-full" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span>80%</span>
                </div>
                <Progress value={80} className="w-full" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>SQL/NoSQL Databases</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="w-full" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <code>JavaScript</code>
              <code>TypeScript</code>
              <code>React</code>
              <code>Next.js</code>
              <code>Node.js</code>
              <code>Express</code>
              <code>MongoDB</code>
              <code>PostgreSQL</code>
              <code>GraphQL</code>
              <code>Docker</code>
              <code>AWS</code>
              <code>Git</code>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}