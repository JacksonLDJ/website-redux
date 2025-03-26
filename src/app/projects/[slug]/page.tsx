"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Project {
  slug: string
  title: string
  type: string
  date: string
  content: string
}


const projects: { [key: string]: Project } = {
  "network-security-implementation": {
    slug: "network-security-implementation",
    title: "Network Security Implementation",
    type: "Security Project",
    date: "March 2024",
    content: `
## Project Overview

This comprehensive network security implementation project was designed to enhance the security posture of a medium-sized business. The project focused on implementing robust security measures while maintaining system performance and user accessibility.

### Key Achievements

- Reduced security incidents by 75%
- Improved network performance by 30%
- Implemented 24/7 monitoring system
- Established automated incident response protocols

## Technical Implementation

### 1. Firewall Configuration

- Implemented advanced firewall rules using pfSense
- Set up DMZ for public-facing services
- Configured VPN access for remote workers
- Established intrusion prevention rules

### 2. IDS/IPS Deployment

- Deployed Suricata for network intrusion detection
- Implemented custom rule sets for specific threats
- Set up automated alerting system
- Created incident response playbooks

### 3. Security Monitoring

- Deployed ELK Stack for log aggregation
- Implemented Grafana dashboards for visualization
- Created custom alerts for suspicious activities
- Set up automated reporting system

## Technologies Used

- **Firewall**: pfSense
- **IDS/IPS**: Suricata
- **Monitoring**: ELK Stack, Grafana
- **Automation**: Ansible
- **VPN**: OpenVPN

## Results and Impact

The implementation significantly improved the organization's security posture:

1. **Incident Reduction**: 75% decrease in security incidents
2. **Response Time**: Reduced incident response time from hours to minutes
3. **Compliance**: Achieved compliance with industry security standards
4. **Automation**: 80% of security responses automated

## Lessons Learned

- Importance of proper planning and documentation
- Value of automated responses in incident management
- Need for continuous monitoring and adjustment
- Benefits of user training in security implementation

## Future Improvements

- Implementation of AI-based threat detection
- Enhanced automation of security responses
- Extended monitoring capabilities
- Advanced user behavior analytics
`
  },
  "it-infrastructure-optimization": {
    slug: "it-infrastructure-optimization",
    title: "IT Infrastructure Optimization",
    type: "Infrastructure Project",
    date: "February 2024",
    content: `
## Project Overview

A complete infrastructure optimization project focused on modernizing legacy systems, implementing automation, and improving overall system efficiency.

### Key Achievements

- 40% improvement in system efficiency
- 60% reduction in deployment time
- 99.9% system uptime achieved
- 70% reduction in manual operations

## Technical Details

### 1. Automated Deployment

- Implemented CI/CD pipelines
- Containerized applications using Docker
- Orchestration with Kubernetes
- Infrastructure as Code using Terraform

### 2. Backup Solutions

- Implemented automated backup system
- Established disaster recovery protocols
- Created backup verification procedures
- Set up off-site backup storage

### 3. System Monitoring

- Deployed Prometheus and Grafana
- Implemented alerting system
- Created custom dashboards
- Set up automated reporting

## Technologies Used

- **Containerization**: Docker, Kubernetes
- **IaC**: Terraform
- **Monitoring**: Prometheus, Grafana
- **Automation**: Ansible, Jenkins
- **Cloud**: AWS

## Impact and Results

The optimization resulted in significant improvements:

1. **Efficiency**: 40% improvement in resource utilization
2. **Deployment**: 60% faster deployment cycles
3. **Reliability**: 99.9% uptime achieved
4. **Cost**: 30% reduction in operational costs

## Lessons Learned

- Importance of thorough testing
- Value of documentation
- Need for user training
- Benefits of automation

## Future Plans

- Implementation of AI-ops
- Enhanced automation
- Extended monitoring
- Advanced analytics
`
  },
  "security-audit-synoptic-project": {
    slug: "security-audit-synoptic-project",
    title: "A Security Audit - Synoptic Project",
    type: "Cybersecurity Project",
    date: "March 2024",
    content: `THIS IS A WORK IN PROGRESS`
  }
  // Add more projects here...
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projects[slug]

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] px-4 sm:px-8">
        <div className="max-w-4xl mx-auto pt-32">
          <h1 className="text-4xl font-bold text-[#5CFFB1] mb-8">Project Not Found</h1>
          <Link href="/projects" className="text-[#5CFFB1] hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 sm:px-8 pb-16">
      <div className="max-w-4xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] -z-10" />
          
          <Link href="/projects" className="text-[#5CFFB1] hover:underline mb-6 block">
            ← Back to Projects
          </Link>

          <article>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 text-sm">{project.date}</span>
              <span className="px-3 py-1 bg-[#00ff0010] text-[#5CFFB1] rounded-lg text-sm border border-[#5CFFB1]/20">
                {project.type}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white mb-8">{project.title}</h1>

            <div className="prose prose-invert prose-lg prose-headings:text-white prose-headings:font-bold prose-p:text-gray-400 prose-strong:text-white prose-ul:text-gray-400 prose-li:text-gray-400 max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.content}
              </ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </main>
  )
} 