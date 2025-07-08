"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Palette, Server, Smartphone, Globe } from "lucide-react"
import RevealOnScroll from "./reveal-on-scroll"
import ProgressBar from "./progress-bar"

interface Skill {
  name: string
  level: number
  icon?: React.ReactNode
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code size={24} />,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={24} />,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 82 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: <Database size={24} />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 78 },
      { name: "Firebase", level: 88 },
      { name: "Supabase", level: 85 },
    ],
  },
  {
    title: "Design",
    icon: <Palette size={24} />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 88 },
      { name: "Adobe XD", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "Design Systems", level: 87 },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone size={24} />,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React Native", level: 82 },
      { name: "Flutter", level: 75 },
      { name: "PWA", level: 88 },
      { name: "Mobile UI", level: 85 },
      { name: "App Store", level: 80 },
    ],
  },
  {
    title: "DevOps",
    icon: <Globe size={24} />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 82 },
      { name: "Vercel", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "Monitoring", level: 78 },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <ProgressBar
                      progress={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                      color={category.color}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <RevealOnScroll>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Git",
                "Webpack",
                "Vite",
                "Jest",
                "Cypress",
                "Storybook",
                "Prisma",
                "Stripe",
                "Auth0",
                "Cloudinary",
                "Algolia",
                "Socket.io",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
