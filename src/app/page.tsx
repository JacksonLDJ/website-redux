"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Skill tags data
const skillTags = [
  "Network Security",
  "System Administration",
  "Cybersecurity",
  "IT Infrastructure"
]

// Education data
const education = [
  {
    title: "BSc Digital and Technology Solutions: Cybersecurity",
    institution: "University of Greater Manchester",
    period: "2022 - Present"
  }
]

// Certification data
const certifications = [
  {
    title: "CompTIA Sec+",
    issuer: "CompTIA",
    year: "In Progress"
  }
]

// Featured projects data
const featuredProjects = [
  {
    title: "A Security Audit - Synoptic Project",
    type: "Cybersecurity Project",
    description: "An in-depth look at my synoptic project focusing on a comprehensive security audit.",
    tags: ["Security Audit", "Cybersecurity"],
    slug: "security-audit-synoptic-project"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeInUp}>
            <h1 className="text-7xl md:text-8xl font-bold mb-8">
              <span className="text-white">Hi, I'm </span>
              <span className="text-[#5CFFB1]">Liam Jackson</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-12">
              Senior ICT Technician and Cybersecurity University Student
            </p>
            <div className="flex gap-4">
              <Link 
                href="/blog" 
                className="px-8 py-4 bg-[#5CFFB1] text-black font-medium rounded-lg hover:bg-[#4ce0a0] transition-colors"
              >
                Read My Blog
              </Link>
              <a 
                href="#about"
                className="px-8 py-4 border border-[#5CFFB1] text-[#5CFFB1] font-medium rounded-lg hover:bg-[#5CFFB1]/10 transition-colors"
              >
                About Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            {/* Left Column - About Text and Skills */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#5CFFB1] mb-6">About Me</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Hi there! My name is Liam Jackson and I'm currently employed as a Senior ICT Technician whilst studying for a Digital and Technology Solutions: Cybersecurity Degree! I'm also studying for CISCO's CyberOps Associate and COMP TIA's Sec+ qualifications which I aim to complete before I finish my final year of University.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I've been working in IT for over 10 years with experience in SysAdmin and CyberOps. I'm currently working on my Synoptic Project (dissertation) where I'm planning to conduct a full security audit and analysis of my current employers security. I'm using this website to document my final year of studying at the University of Greater Manchester where I hope to attain a First Class Honours Degree in my Cybersecurity Degree Apprenticeship and as a portfolio website. Thanks for checking my website out!
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skillTags.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-[#5CFFB1]/10 text-[#5CFFB1] rounded-lg text-sm border border-[#5CFFB1]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Education and Certifications */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                <div className="bg-[#ffffff08] backdrop-blur-sm rounded-xl p-6 border border-[#5CFFB1]/10">
                  {education.map((item, index) => (
                    <div key={index} className={`flex justify-between items-start ${index !== education.length - 1 ? 'mb-4' : ''}`}>
                      <div>
                        <h4 className="text-[#5CFFB1] font-bold">{item.title}</h4>
                        <p className="text-gray-400">{item.institution}</p>
                      </div>
                      <span className="text-gray-400">{item.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
                <div className="bg-[#ffffff08] backdrop-blur-sm rounded-xl p-6 border border-[#5CFFB1]/10">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div>
                          <h4 className="text-[#5CFFB1] font-bold">{cert.title}</h4>
                          <p className="text-gray-400">{cert.issuer}</p>
                        </div>
                        <span className="text-gray-400">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-bold text-[#5CFFB1]">Featured Projects</h2>
              <Link 
                href="/projects" 
                className="text-[#5CFFB1] hover:underline flex items-center gap-2"
              >
                View all projects →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Link key={index} href={`/projects/${project.slug}`} className="block group h-full">
                  <div className="bg-[#ffffff08] backdrop-blur-sm rounded-xl overflow-hidden border border-[#5CFFB1]/10 transition-all duration-300 hover:border-[#5CFFB1]/30 h-full">
                    <div className="p-8 flex flex-col h-full">
                      <div>
                        <p className="text-gray-400 mb-4">{project.type}</p>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#5CFFB1] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400">{project.description}</p>
                      </div>
                      <div className="mt-auto pt-8">
                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-4 py-2 bg-[#00ff0010] text-[#5CFFB1] rounded-lg text-sm border border-[#5CFFB1]/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4">
                          <span className="text-[#5CFFB1] group-hover:underline inline-block">Read More →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-[#5CFFB1] mb-8">Get in Touch</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              Interested in discussing IT infrastructure, cybersecurity, or potential collaborations?
            </p>
            <Link 
              href="mailto:contact@liamjackson.co.uk" 
              className="px-8 py-4 bg-[#5CFFB1] text-black font-medium rounded-lg hover:bg-[#4ce0a0] transition-colors inline-block"
            >
              Send me an email
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
