"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Palette, Zap, Users } from "lucide-react"
import RevealOnScroll from "./reveal-on-scroll"
import CounterAnimation from "./counter-animation"
import Link from "next/link"

const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Code Commits", value: 1000, suffix: "+" },
]

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every project I build.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to deliver exceptional results.",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-800 light:from-slate-100 light:to-slate-50 transition-colors duration-500"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-3xl mx-auto transition-colors duration-300">
              Passionate Laravel developer with a focus on building modern web solutions that matter.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <RevealOnScroll direction="left">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white dark:text-white light:text-slate-900 transition-colors duration-300">

              </h3>
              <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 leading-relaxed transition-colors duration-300">
                I am a full-stack web developer with a strong foundation in Laravel, React, Inertia.js, and Tailwind CSS.
                I enjoy turning ideas into functional, responsive, and user-friendly web applications - combining backend logic with clean, modern frontend interfaces.
                My journey started with a deep curiosity about how things work and evolved into a passion for crafting solutions that create real-world impact.
              </p>
              <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 mb-8 leading-relaxed transition-colors duration-300">
                I believe in continuous learning, thoughtful design, and writing clean, scalable code that drives meaningful results.
              </p>

              <Link href="/cv-amsal.pdf" target="_blank" download>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.button>
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div className="relative">
              <motion.div
                className="w-full h-96 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-300 transition-colors duration-300 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/amsal2.png"
                    alt="Amsal's Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>


        {/* Features */}
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/50 rounded-xl border border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white dark:text-white light:text-slate-900 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
