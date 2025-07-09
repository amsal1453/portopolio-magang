"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import AnimatedText from "./animated-text"
import FloatingShapes from "./floating-shapes"

export default function HeroSection() {
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-12">
      <FloatingShapes />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-slate-950 dark:via-slate-950 light:via-slate-50 to-blue-900/20 dark:to-blue-900/20 light:to-indigo-100/50 transition-colors duration-500" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >

        <motion.div variants={itemVariants}>
          <AnimatedText text="Amsal" className="text-5xl md:text-7xl font-bold mb-6" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <AnimatedText
            text="Full Stack Laravel Developer & React & Inertia Specialist"
            className="text-xl md:text-2xl text-slate-300 dark:text-slate-300 light:text-slate-600 mb-8 transition-colors duration-300"
            delay={1}
          />
        </motion.div>

        <motion.p
          className="text-lg text-slate-400 dark:text-slate-400 light:text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300"
          variants={itemVariants}
        >
          I build high-performance full-stack web applications using Laravel, React Inertia.js.
          Passionate about solving real problems with elegant code and scalable architecture.
        </motion.p>

        <motion.div className="flex justify-center space-x-6 mb-16" variants={itemVariants}>
          {[
            { icon: Github, href: "https://github.com/amsal1453", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/amsal-amsal-402825293/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:kunamsaldasilva@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="p-3 rounded-full bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={24} className="text-white dark:text-white light:text-slate-700" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          

          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 text-white"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </motion.button>

          <motion.button
            className="px-8 py-4 border border-slate-600 dark:border-slate-600 light:border-slate-300 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 transition-all duration-300 text-white dark:text-white light:text-slate-700"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-slate-400 dark:text-slate-400 light:text-slate-500 cursor-pointer transition-colors duration-300"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
