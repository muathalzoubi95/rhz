import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Home } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import Badge from '@/components/ui/badge'
import { siteConfig } from '@/config/site'

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
                src="/22.png"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Muath A. Alzoubi</h2>
              <p className="text-muted-foreground mb-4">Front-end Developer</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:moathaza@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
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
            <p className="mb-8">
              Hello! I'm Muath Alzoubi, a passionate Front-end Developer with over 3 years of experience in creating dynamic and user-friendly web applications. I specialize in JavaScript technologies, particularly React.js, to build responsive and scalable solutions. With a strong foundation in web development, system workflow, and system analysis, I'm driven by the desire to continually improve user experiences and bring innovative ideas to life.
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
              {siteConfig.skills.map((i, index) =>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{i.name}</span>
                    <span>{`${i.progress}%`}</span>
                  </div>
                  <Progress value={i.progress} className="w-full" />
                </div>)}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {
                siteConfig.technologies.map((i, index) =>
                  <Badge key={index}>
                    {i}
                  </Badge>
                )
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}