"use client"
import  Link  from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"
import { Seo } from "@/components/seo"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
  type: "work" | "education"
}

const experiences: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    company: "Freelance",
    location: "Amman, Jordan",
    period: "Dec 2023 - Present",
    description: [
      "Custom Web Solutions: Developed customized, responsive websites for clients using React.js, HTML, CSS, and JavaScript.",
      "API Integration: Integrated front-end applications with third-party APIs and RESTful services.",
      "UI/UX Enhancement: Collaborated with clients to design and implement user-friendly interfaces.",
      "Responsive Design: Optimized for mobile, tablet, and desktop, providing a seamless experience.",
      "Performance Optimization: Implemented best practices for code optimization and fast load times.",
      "Component Reusability: Created modular and reusable components for development efficiency.",
      "Client Communication: Worked closely with clients to gather requirements and deliver on time.",
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "Next.js"],
    type: "work",
  },
  {
    title: "Front-End Developer",
    company: "LEADTOOLS Inc.",
    location: "Amman, Jordan",
    period: "Jun 2020 - Dec 2023",
    description: [
      "HTML/CSS/JavaScript: Solid foundation in creating interactive and user-friendly web interfaces.",
      "Collaborated with UX designers to implement responsive and accessible interfaces.",
      "Version Control: Proficient in Git for version control and team collaboration.",
      "API Integration: Experience integrating front-end applications with RESTful APIs.",
      "Component Libraries: Familiarity with Material-UI, Ant Design, and Bootstrap.",
    ],
    skills: ["JavaScript", "React", "Express.js", "MongoDB", "Git"],
    type: "work",
  },
  {
    title: "QA Engineer",
    company: "LEADTOOLS Inc.",
    location: "Amman, Jordan",
    period: "Jun 2019 - Jun 2020",
    description: [
      "Assisted in the development of a social media management tool.",
      "Implemented front-end features using Angular and integrated with RESTful APIs.",
      "Participated in daily stand-ups and sprint planning meetings.",
    ],
    skills: ["Windows", "Linux", "macOS", "iOS", "Android", "Testing"],
    type: "work",
  },
  {
    title: "Bachelor of Science in CIS",
    company: "JUST University",
    location: "Irbid, Jordan",
    period: "Jun 2013 - May 2018",
    description: [
      "Information Management: Gained expertise in managing data as a valuable resource.",
      "Systems Analysis and Design: Developed skills in analyzing and designing information systems.",
      "Automation and Process Efficiency: Studied ways to streamline processes.",
      "Data-Driven Decision Making: Acquired knowledge of using information systems for business decisions.",
      "Collaboration and Communication Systems: Learned how systems facilitate collaboration.",
      "Ethical Technology Use: Understood the importance of privacy and data protection.",
    ],
    skills: ["Java", "C#", "Data Structures", "Algorithms", "Machine Learning"],
    type: "education",
  },
]

const cardColors = [
  { line: "from-indigo-500/60 to-violet-500/60", glow: "from-indigo-500/5 to-violet-500/5", border: "border-indigo-400/15", dot: "from-indigo-500 to-violet-500" },
  { line: "from-sky-500/60 to-cyan-500/60", glow: "from-sky-500/5 to-cyan-500/5", border: "border-sky-400/15", dot: "from-sky-500 to-cyan-500" },
  { line: "from-emerald-500/60 to-teal-500/60", glow: "from-emerald-500/5 to-teal-500/5", border: "border-emerald-400/15", dot: "from-emerald-500 to-teal-500" },
  { line: "from-amber-500/60 to-orange-500/60", glow: "from-amber-500/5 to-orange-500/5", border: "border-amber-400/15", dot: "from-amber-500 to-orange-500" },
]

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen">
      <Seo
        title="Experience"
        path="/experiences"
        description="The professional journey and work experience of Muath Alzoubi, a Front-End Developer with more than 4 years building modern web applications."
      />
      <div className="container mx-auto px-4 pb-20 pt-28 md:pt-32 md:px-6">

        {/* Header */}
        <header className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              Career timeline
            </div>
            <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              My Experience
            </h1>
            <p className="mt-2 text-zinc-500">A journey through my professional and academic life.</p>
          </div>
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/25 transition-all"
            >
              <Home className="mr-2 size-4" />
              Back to Home
            </Button>
          </Link>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-indigo-500/50 via-sky-500/30 to-emerald-500/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const Icon = exp.type === "work" ? Briefcase : GraduationCap
              const colors = cardColors[index % cardColors.length]

              return (
                <div key={index} className="relative md:grid md:grid-cols-2 md:gap-10">

                  {/* Timeline dot */}
                  <div className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute size-14 rounded-full bg-gradient-to-br ${colors.dot} opacity-20 blur-md`} />
                      <div className={`absolute size-8 animate-pulse-ring rounded-full bg-gradient-to-br ${colors.dot} opacity-30`} />
                      <div className={`relative inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-zinc-950 text-white bg-gradient-to-br ${colors.glow}`}>
                        <Icon className="size-4 text-zinc-200" />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft ? "md:pr-14" : "md:col-start-2 md:pl-14"
                    }`}
                  >
                    <article className={`group relative overflow-hidden rounded-2xl border ${colors.border} bg-white/[0.025] p-6 backdrop-blur transition-all duration-300 hover:bg-white/[0.04] hover:border-white/15 hover:-translate-y-0.5`}>
                      {/* Left accent bar */}
                      <div className={`absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b ${colors.dot} rounded-l-2xl opacity-60`} />
                      {/* Top shimmer on hover */}
                      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors.line} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                      {/* Period badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 rounded-full border ${colors.border} bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300`}>
                          <Calendar className="size-3 text-zinc-500" />
                          {exp.period}
                        </span>
                        {exp.type === "work" && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {index === 0 ? "Current" : "Past"}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <p className="mt-0.5 text-sm font-medium text-zinc-300">{exp.company}</p>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                        <MapPin className="size-3" />
                        {exp.location}
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                        {exp.description.map((item, i) => (
                          <li key={i} className="relative pl-4">
                            <span className={`absolute left-0 top-[7px] size-1.5 rounded-full bg-gradient-to-r ${colors.dot}`} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-zinc-400"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
