import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, GraduationCap } from 'lucide-react'
import Badge from '@/components/ui/badge'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
  type: 'work' | 'education'
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    period: "Jan 2021 - Present",
    description: [
      "Led a team of 5 developers in building a high-performance e-commerce platform",
      "Implemented microservices architecture, resulting in 40% improved scalability",
      "Mentored junior developers and conducted code reviews to ensure best practices"
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
    type: "work"
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions Co.",
    location: "New York, NY",
    period: "Jun 2018 - Dec 2020",
    description: [
      "Analyzing and formulating requirements for web-based applications.",

      "Collaborating closely with team members to understand web development needs,      resolve technical issues, and ensure customer satisfaction.",
      
      "Developing and optimizing web modules using React.js, ensuring alignment with      agreed-upon requirements.",
      
      "Designing, reviewing, and updating technical documentation specific to web modules,      including React.js components.",
      
      "Conducting unit tests and extensive testing of web modules to ensure robustness and      efficiency.",
    ],
    skills: ["JavaScript", "React", "Express.js", "MongoDB", "Git"],
    type: "work"
  },
  {
    title: "Call Center Agent  ",
    company: "EXTENSYA Company",
    location: "Irbid, JO",
    period: "Oct 2018 - Dec 2018",
    description: [
      "Handle incoming and outgoing calls in a professional manner",
      "Provide excellent customer service and support      ","Address customer inquiries, complaints, and requests     ",
      "Document and maintain records of customer interactions"
    ],
    skills: ["HTML", "CSS", "JavaScript", "Angular", "RESTful APIs"],
    type: "work"
  },
  {
    title: "Bachelor of CIS",
    company: "JUST University",
    location: "Irbid, JO",
    period: "Jun 2013 - Jun 2018",
    description: [
      "Web development, Algorithms, Web Development, Database Systems",
      "Simple mobile app creation, and system workflow understanding      "
    ],
    skills: ["Systems", "Python", "Data Structures", "Algorithms", "Machine Learning"],
    type: "education"
  }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Experience</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-md font-bold">{exp.title}</CardTitle>
                  <CardDescription>{exp.company} • {exp.location}</CardDescription>
                </div>
                <Badge className="text-sm" variant="secondary">{exp.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pb-4">
                {exp.skills.map((skill, i) => (
                  <Badge key={i} variant="outline">{skill}</Badge>
                ))}
              </div>
            
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}