"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Home } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import Badge from '@/components/ui/badge'
import { siteConfig } from '@/config/site'
import { useState } from 'react'

const For=(props:any)=>{
  return (
  <svg width="300" height="170" xmlns="http://www.w3.org/2000/svg">
    <rect width="150" height="150" x="10" y="10" style={{fill:'red',stroke:'pink'}} />
  </svg>)
}

export default function AboutMePage() {
  const [x,setX]=useState(0)
  const [y,setY]=useState(0)
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">About Me</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 size-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <Image
                src="/22.png"
                alt="Profile Picture"
                width={200}
                height={200}
                className="mb-4 rounded-full"
              />
              <h2 className="mb-2 text-2xl font-bold">Muath A. Alzoubi</h2>
              <p className="mb-4 text-muted-foreground">Front-end Developer</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="size-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="size-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:moathaza@gmail.com">
                    <Mail className="size-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="size-4" />
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
              Hello! I'm Muath Alzoubi, a passionate Front-End Developer with over 3 years of experience in creating dynamic and user-friendly web applications. I specialize in JavaScript technologies, particularly React.js, to build responsive and scalable solutions. With a strong foundation in web development, system workflow, and system analysis, I'm driven by the desire to continually improve user experiences and bring innovative ideas to life.

            </p>
            <p className='mb-4'>
              I have familiarity with back-end technologies, allowing you to work effectively across the full stack when needed. My back-end experience includes integrating APIs, handling server-side logic, and managing databases, giving me a well-rounded understanding of how front-end and back-end systems.
            </p>
            <p>
              I'm always seeking to stay up-to-date with the latest technologies and tools that can enhance my productivity and efficiency, while ensuring the highest quality in my projects.
            </p>
            <div className="flex flex-wrap gap-2 pt-16">
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

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
      </div>
    </div>
  )
}
