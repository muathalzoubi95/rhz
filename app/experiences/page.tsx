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
    title: "Front-End Developer",
    company: "Freelance.",
    location: "Amman, Jo",
    period: "Jan 2021 - Present",
    description: [
      "Led a team of 5 developers in building a high-performance e-commerce platform",
    
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "Next.js"],
    type: "work"
  },
  {
    title: "Front-End Developer",
    company: "LEADTOOLS Inc.",
    location: "Amman, Jo",
    period: "Jun 2018 - Dec 2020",
    description: [
      "HTML/CSS/JavaScript: Solid foundation in creating interactive and user-friendly web interfaces.",
      "Collaborated with UX designers to implement responsive and accessible interfaces" , 
      "Version Control: Proficient in Git for version control and team collaboration.",
      "API Integration: Experience integrating front-end applications with RESTful APIs.",
      "Component Libraries: Familiarity with libraries like Material-UI, Ant Design, and Bootstrap for UI components."
    ],
    skills: ["JavaScript", "React", "Express.js", "MongoDB", "Git"],
    type: "work"
  },
  {
    title: "QA Engineer",
    company: "LEADTOOLS Inc.",
    location: "Amman, Jo",
    period: "Sep 2016 - May 2018",
    description: [
      "Assisted in the development of a social media management tool",
      "Implemented front-end features using Angular and integrated with RESTful APIs",
      "Participated in daily stand-ups and sprint planning meetings"
    ],
    skills: ["HTML", "CSS", "JavaScript", "Angular", "RESTful APIs"],
    type: "work"
  },
  {
    title: "Bachelor of Science in CIS",
    company: "JUST University",
    location: "Irbid, Jo",
    period: "Sep 2012 - May 2016",
    description: [
      "Graduated with honors (GPA: 3.8/4.0)",
      "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
      "Senior project: Developed a machine learning model for predicting stock market trends"
    ],
    skills: ["Java", "Python", "Data Structures", "Algorithms", "Machine Learning"],
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
                  <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                  <CardDescription>{exp.company} • {exp.location}</CardDescription>
                </div>
                <Badge variant="secondary">{exp.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <Badge key={i} variant="outline">{skill}</Badge>
                ))}
              </div>
              {exp.type === 'work' ? (
                <Briefcase className=" top-6 right-6 h-6 w-6 text-muted-foreground pt-2" />
              ) : (
                <GraduationCap className=" top-6 right-6 h-6 w-6 text-muted-foreground pt-2" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}