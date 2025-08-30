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
    period: "Dec 2023 - Present",
    description: [
      "Custom Web Solutions: Developed customized, responsive websites for clients using React.js, HTML, CSS, and JavaScript",
      "API Integration: Integrated front-end applications with third-party APIs and RESTful services, ensuring smooth data flow between client and server",
      "UI/UX Enhancement: Collaborated with clients to design and implement user-friendly interfaces, focusing on improving user experience and engagement",
      "Responsive Design: Ensured that websites were optimized for mobile, tablet, and desktop, providing a seamless experience across all devices",
      "Performance Optimization: Implemented best practices for code optimization, ensuring fast load times and efficient resource management",
      "Component Reusability: Created modular and reusable components, increasing development efficiency and maintaining code consistency",
      "Client Communication: Worked closely with clients to gather requirements, provide progress updates, and deliver projects on time and within budget"    
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "Next.js"],
    type: "work"
  },
  {
    title: "Front-End Developer",
    company: "LEADTOOLS Inc.",
    location: "Amman, Jo",
    period: "Jun 2020 - Dec 2023",
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
    period: "Jun 2019 - Jun 2020",
    description: [
      "Assisted in the development of a social media management tool",
      "Implemented front-end features using Angular and integrated with RESTful APIs",
      "Participated in daily stand-ups and sprint planning meetings"
    ],
    skills: ["Windows","Linux", "macOS", "iOS", "Android", "Testing"],
    type: "work"
  },
  {
    title: "Bachelor of Science in CIS",
    company: "JUST University",
    location: "Irbid, Jo",
    period: "Jun 13 - May 2018",
    description: [
      "Information Management: Gained expertise in managing data as a valuable resource, ensuring its accuracy, security, and ntegrity",

      "Systems Analysis and Design: Developed skills in analyzing and designing information systems, focusing on user-centric and scalable solutions",
      "Automation and Process Efficiency: Studied ways to streamline processes and automate routine tasks to enhance organizational efficiency",
      
      "Data-Driven Decision Making: Acquired knowledge of using information systems for informed business decision-making through data analysis and business intelligence tools",
      "Collaboration and Communication Systems: Learned how information systems facilitate collaboration, communication, and efficient information sharing across departments",
      "Ethical Technology Use: Understand the importance of ethical considerations in information management, such as privacy, data protection, and intellectual property rights"
    ],
    skills: ["Java", "C#", "Data Structures", "Algorithms", "Machine Learning"],
    type: "education"
  }
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Experience</h1>
        <Link href="/" passHref>
          <Button variant="outline" size="sm">
            <Home className="mr-2 size-4" />
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
              <ul className="mb-4 list-disc space-y-2 pl-5">
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
                <Briefcase className=" right-6 top-6 size-6 pt-2 text-muted-foreground" />
              ) : (
                <GraduationCap className=" right-6 top-6 size-6 pt-2 text-muted-foreground" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}