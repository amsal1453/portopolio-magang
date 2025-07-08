"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin } from "lucide-react"
import RevealOnScroll from "./reveal-on-scroll"

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location: string
  description: string
  skills: string[]
  logo: string
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    position: "Senior Frontend Developer",
    duration: "2023 - Present",
    location: "San Francisco, CA",
    description:
      "Led development of user interfaces for enterprise applications, mentored junior developers, and implemented modern React patterns that improved performance by 40%.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    company: "Digital Solutions Co.",
    position: "Full Stack Developer",
    duration: "2021 - 2023",
    location: "New York, NY",
    description:
      "Developed and maintained full-stack web applications, collaborated with cross-functional teams, and delivered high-quality solutions for clients across various industries.",
    skills: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2020 - 2021",
    location: "Austin, TX",
    description:
      "Built responsive web applications from scratch, optimized performance, and worked closely with designers to implement pixel-perfect UI components.",
    skills: ["Vue.js", "JavaScript", "SCSS", "Webpack", "Firebase"],
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    company: "Freelance",
    position: "Web Developer",
    duration: "2019 - 2020",
    location: "Remote",
    description:
      "Provided web development services to small businesses and startups, creating custom websites and web applications tailored to client needs.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    logo: "/placeholder.svg?height=60&width=60",
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-20 bg-slate-900/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My professional journey and the experiences that shaped my career
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full border-4 border-slate-950" />

              {/* Content */}
              <div className="ml-20 w-full">
                <motion.div
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={experience.logo || "/placeholder.svg"}
                        alt={`${experience.company} logo`}
                        className="w-12 h-12 rounded-lg bg-slate-700 p-2"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                        <p className="text-indigo-400 font-semibold">{experience.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{experience.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + skillIndex * 0.1, duration: 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
