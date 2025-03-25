"use client"

import { motion } from "framer-motion"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Digital Forensics and Ethical Hacking - Module Overview",
    excerpt: "An overview of the Digital Forensics and Ethical Hacking module, covering key topics and practical exercises.",
    date: "March 25, 2024",
    category: "Cybersecurity",
    slug: "digital-forensics-and-ethical-hacking"
  }
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] pt-32 px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#5CFFB1] mb-8">Blog</h1>
          <p className="text-gray-400 text-xl mb-16 max-w-2xl">
            Thoughts and insights about cybersecurity, system administration, and IT infrastructure.
          </p>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#ffffff08] backdrop-blur-sm rounded-xl p-8 border border-[#5CFFB1]/10 hover:border-[#5CFFB1]/30 transition-all"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <span className="px-3 py-1 bg-[#00ff0010] text-[#5CFFB1] rounded-lg text-sm border border-[#5CFFB1]/20">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white hover:text-[#5CFFB1] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {post.excerpt}
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