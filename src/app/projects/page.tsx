"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface Project {
  slug: string
  title: string
  type: string
  excerpt: string
  date: string
}

const projects: Project[] = [
  {
    slug: "security-audit-synoptic-project",
    title: "A Security Audit - Synoptic Project",
    type: "Cybersecurity Project",
    excerpt: "THIS IS A WORK IN PROGRESS",
    date: "March 2024"
  }
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] pt-32 px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#5CFFB1] mb-8">Projects</h1>
          <p className="text-gray-400 text-xl mb-16 max-w-2xl">
            Explore my technical projects and implementations.
          </p>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#ffffff08] backdrop-blur-sm rounded-xl p-8 border border-[#5CFFB1]/10 hover:border-[#5CFFB1]/30 transition-all"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-400 text-sm">{project.date}</span>
                      <span className="px-3 py-1 bg-[#00ff0010] text-[#5CFFB1] rounded-lg text-sm border border-[#5CFFB1]/20">
                        {project.type}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white hover:text-[#5CFFB1] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {project.excerpt}
                    </p>
                    <div className="pt-4">
                      <span className="text-[#5CFFB1] hover:underline">Read more →</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
} 