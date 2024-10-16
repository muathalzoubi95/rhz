import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Home } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import Badge from '@/components/ui/badge'

export default function AboutMePage() {
  return (
    <div className="container mx-auto px-4 py-8 ">
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
          <CardContent className="pt-3">
            <div className="flex flex-col items-center">
              <img
                src="/22.png"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Muath A. Alzoubi</h2>
              <p className="text-muted-foreground mb-4">Front-End Developer</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/muathzoubi/" target="_blank" rel="noopener noreferrer">
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
          <CardHeader className='mb-9'>
            <CardTitle>Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-12">
            I'm Muath Alzoubi, a front-end developer with 3 years of experience. 
            I have strong expertise in React.js, along with proficiency in HTML, CSS, and JavaScript.  
            </p>
            <p className="mb-12">
            Currently, I'm working on a complex document viewer project that integrates Optical Character Recognition (OCR) for extracting text from images and scanned documents, as well as conversion features that allow documents to be transformed into different formats.
            This project aims to streamline document management and enhance accessibility.
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
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>MongoDB</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>GraphQL</Badge>
              <Badge>Docker</Badge>
              <Badge>AWS</Badge>
              <Badge>Git</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}