"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import RevealOnScroll from "./reveal-on-scroll"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  liveUrl: string
  githubUrl: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "Full-stack Netflix clone built with MERN stack and TMDB API",
    longDescription:
      "A comprehensive Netflix clone application built with MongoDB, Express, React, and Node.js. Features include user authentication, content browsing, video streaming, and personalized recommendations using data from The Movie Database (TMDB) API.",
    tech: ["React", "Node.js", "MongoDB", "Express", "TMDB API", "Tailwind CSS"],
    image: "/gambar.png",
    liveUrl: "https://netflix-clone-example.com",
    githubUrl: "https://github.com/user/netflix-clone",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Lab Reservation System",
    description: "Real-time lab reservation and scheduling system with notifications",
    longDescription:
      "A sophisticated laboratory reservation and scheduling system built with Laravel 12 and React. Features real-time notifications, resource management, automated scheduling, and comprehensive reporting. Implemented with TypeScript and Tailwind CSS for a modern, responsive interface.",
    tech: ["Laravel 12", "React", "Inertia.js", "TypeScript", "Tailwind CSS", "MySQL"],
    image: "/gambar1.jpg",
    liveUrl: "https://lab-reservation-example.com",
    githubUrl: "https://github.com/amsal1453/reservasi-labs-apps",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Geographic Information System",
    description: "GIS application with interactive maps and spatial data analysis",
    longDescription:
      "A comprehensive Geographic Information System built with Laravel 11 and React. Features include interactive maps powered by Leaflet.js, spatial data analysis, location-based services, and customizable data visualization. Designed for efficient geographic data management and analysis.",
    tech: ["Laravel 11", "React", "Inertia.js", "Leaflet.js", "Tailwind CSS", "PostgreSQL"],
    image: "/gambar2.jpg",
    liveUrl: "https://gis-example.com",
    githubUrl: "https://github.com/amsal1453/gis-nagan-raya",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Property Promotion System",
    description: "Real estate property management and promotion platform",
    longDescription:
      "A modern property promotion and management system built with Laravel and Filament. Features include property listings, advanced search functionality, image galleries, agent management, and inquiry handling. Implemented with Blade templates for a fast, responsive user experience.",
    tech: ["Laravel", "Filament", "Blade", "MySQL", "Tailwind CSS"],
    image: "/gambar3.jpg",
    liveUrl: "https://property-promo-example.com",
    githubUrl: "https://github.com/amsal1453/properti-apps",
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio with scroll animations and dark mode",
    longDescription:
      "A stunning portfolio website featuring smooth scroll animations, dark/light mode toggle, responsive design, and optimized performance. Built with Next.js and Framer Motion for exceptional user experience.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "/gambar4.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/amsal1453/portopolio-magang",
    category: "Frontend",
  }
]

const categories = ["All", "Frontend", "Backend", "Full Stack"]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 border-b border-slate-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>
        </RevealOnScroll>

        {/* Category Filter */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              layout
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-indigo-500 text-white text-sm rounded-full">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  <span className="px-3 py-1 bg-indigo-500 text-white text-sm rounded-full">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-slate-300 text-lg mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
