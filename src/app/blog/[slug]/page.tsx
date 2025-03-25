"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface BlogPost {
  title: string
  date: string
  category: string
  content: string
}

type BlogPosts = {
  [key: string]: BlogPost
}

// This would typically come from a CMS or database
const blogPosts: BlogPosts = {
  "getting-started-with-network-security": {
    title: "Getting Started with Network Security",
    date: "March 15, 2024",
    category: "Security",
    content: `Network security is fundamental to protecting modern IT infrastructure. In this post, we'll explore the basic concepts and best practices that every IT professional should know.

## Key Concepts

1. **Firewall Configuration**
   - Understanding firewall rules
   - Implementing security policies
   - Monitoring and logging

2. **Intrusion Detection**
   - Types of IDS/IPS systems
   - Deployment strategies
   - Alert management

3. **Network Monitoring**
   - Traffic analysis
   - Performance metrics
   - Security auditing

## Best Practices

- Regular security audits
- Updated documentation
- Employee training
- Incident response planning

Stay tuned for more detailed posts about each of these topics!`
  },
  "essential-system-administration-tools": {
    title: "Essential System Administration Tools",
    date: "March 10, 2024",
    category: "System Admin",
    content: `Every system administrator needs a reliable set of tools. Here's my curated list of essential utilities that make daily tasks more efficient.

## Monitoring Tools

1. **System Performance**
   - Top tools for resource monitoring
   - Log analysis utilities
   - Automation scripts

2. **Network Tools**
   - Connectivity testing
   - Bandwidth monitoring
   - Protocol analysis

3. **Security Tools**
   - Vulnerability scanners
   - Access control management
   - Encryption utilities

## Automation

- Shell scripting
- Configuration management
- Backup solutions

More detailed tutorials for each tool coming soon!`
  },
  "digital-forensics-and-ethical-hacking": {
    title: "Digital Forensics and Ethical Hacking - Module Overview",
    date: "March 25, 2024",
    category: "Cybersecurity",
    content: `The Digital Forensics and Ethical Hacking module covered the importance of preserving data for digital forensics purposes and the process of ethically hacking a system where-in we attacked a vulnerable host using the Metasploit Framework tool in Kali. In addition to this there was an examination which covered the following topics:

• CIA and DAD Triads and how the other topics we had been studying could impact both.

• Security and Risk Management - ISO 27002:2013, ISO 27002:2022 as well as Quantitative Risk Management.

• Information Management Security Systems - ISO 27001, ITIL & COBIT

• Software Fuzzing - using SPIKE

• Understanding different types of attacks such as TCP Syn Flood Attacks and ways to mitigate the risk.

Overall, this was an incredibly interesting module, it not only reinforced the fundamentals of Cybersecurity but also taught me how to exploit tools such as the Metasploit Framework but how to perform the attacks manually myself. I was also able to look into IDS and IPS' and implement Fail2Ban on a Ubuntu virtual machine and block IP addresses that were attempting to brute force the SSH Service.`
  }
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] px-8">
        <div className="max-w-7xl mx-auto pt-32">
          <h1 className="text-4xl font-bold text-[#5CFFB1] mb-8">Post Not Found</h1>
          <Link href="/blog" className="text-[#5CFFB1] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 sm:px-8 pb-16">
      <div className="max-w-2xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] -z-10" />
          
          <Link href="/blog" className="text-[#5CFFB1] hover:underline mb-6 block">
            ← Back to Blog
          </Link>

          <article>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 text-sm">{post.date}</span>
              <span className="px-3 py-1 bg-[#00ff0010] text-[#5CFFB1] rounded-lg text-sm border border-[#5CFFB1]/20">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white mb-6">{post.title}</h1>

            <div className="text-gray-400">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({node, ...props}) => <h2 className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
                  p: ({node, ...props}) => <p className="text-gray-400 mb-4 leading-relaxed" {...props} />,
                  strong: ({node, ...props}) => <strong className="text-white font-semibold" {...props} />,
                  li: ({node, ...props}) => <li className="text-gray-400 ml-4 mb-1" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-4 space-y-1" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-4 space-y-1" {...props} />
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </main>
  )
} 