"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  FileText,
  Download,
  BookOpen,
  CheckSquare,
  Shield,
  ArrowRight,
  FileCheck,
  Lightbulb,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

export default function ResourcesPage() {
  const delegateResources = [
    {
      title: "Delegate Preparation Guide",
      description:
        "Comprehensive guide to help delegates prepare for the conference, including research tips, committee dynamics, and diplomatic strategies.",
      icon: <BookOpen className="w-10 h-10" />,
      image: "/placeholder.svg?height=300&width=400",
      fileSize: "2.4 MB",
      fileType: "PDF",
    },
    {
      title: "MUN Position Paper Template",
      description:
        "Standard template for writing effective position papers, with examples and formatting guidelines to help delegates articulate their country's stance.",
      icon: <FileText className="w-10 h-10" />,
      image: "/placeholder.svg?height=300&width=400",
      fileSize: "1.8 MB",
      fileType: "DOCX",
    },
    {
      title: "Delegate Participation Rubric",
      description:
        "Evaluation criteria used by chairs to assess delegate performance, including speaking, negotiation, resolution writing, and diplomatic conduct.",
      icon: <CheckSquare className="w-10 h-10" />,
      image: "/placeholder.svg?height=300&width=400",
      fileSize: "1.2 MB",
      fileType: "PDF",
    },
    {
      title: "Code of Conduct",
      description:
        "Guidelines for professional and ethical behavior during the conference, including dress code, diplomatic protocol, and respectful engagement.",
      icon: <Shield className="w-10 h-10" />,
      image: "/placeholder.svg?height=300&width=400",
      fileSize: "950 KB",
      fileType: "PDF",
    },
  ]

  const additionalResources = [
    {
      title: "Rules of Procedure",
      description: "Detailed explanation of parliamentary procedure and formal debate rules",
      icon: <FileCheck className="w-8 h-8" />,
    },
    {
      title: "Resolution Writing Guide",
      description: "Step-by-step instructions for drafting effective resolutions",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "Research Methodology",
      description: "Techniques for conducting thorough country and topic research",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Public Speaking Tips",
      description: "Strategies for delivering compelling speeches and interventions",
      icon: <GraduationCap className="w-8 h-8" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Global MUN</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/committees" className="text-white hover:text-blue-400 transition-colors">
                Committees
              </Link>
              <Link href="/schedule" className="text-white hover:text-blue-400 transition-colors">
                Schedule
              </Link>
              <Link href="/gallery" className="text-white hover:text-blue-400 transition-colors">
                Gallery
              </Link>
              <Link href="/conference-info" className="text-white hover:text-blue-400 transition-colors">
                Conference Info
              </Link>
              <Link href="/resources" className="text-blue-400 font-medium">
                Resources
              </Link>
              <Link href="/upload" className="text-white hover:text-blue-400 transition-colors">
                Upload Payment
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Delegate Materials
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              DELEGATE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RESOURCES
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access essential guides, templates, and materials to help you prepare for Global MUN 2025. These resources
              will enhance your conference experience and maximize your diplomatic impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Resources */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ESSENTIAL DOCUMENTS</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download these key resources to prepare effectively for your committee sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {delegateResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full overflow-hidden">
                  <div className="grid md:grid-cols-5 h-full">
                    <div className="md:col-span-2 relative">
                      <Image
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                        <div className="bg-blue-600/80 backdrop-blur-sm rounded-full p-3">{resource.icon}</div>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6 flex flex-col">
                      <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                      <p className="text-gray-300 mb-6 flex-grow">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-blue-600/20 text-blue-300 border-blue-400/30">{resource.fileType}</Badge>
                          <span className="text-sm text-gray-400">{resource.fileSize}</span>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ADDITIONAL RESOURCES</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Supplementary materials to enhance your Model UN skills and knowledge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                      <div className="text-blue-400">{resource.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-6 flex-grow">{resource.description}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resource
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">VIDEO TUTORIALS</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch these instructional videos to master essential Model UN skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mastering Parliamentary Procedure",
                duration: "12:45",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Effective Public Speaking",
                duration: "09:18",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Resolution Writing Workshop",
                duration: "15:32",
                thumbnail: "/placeholder.svg?height=200&width=350",
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={350}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-600/80 backdrop-blur-sm rounded-full p-4 cursor-pointer hover:bg-blue-500/80 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Additional Support?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team is available to answer questions and provide guidance as you prepare for Global MUN 2025. Don't
              hesitate to reach out for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Contact Faculty Advisors
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Join Preparation Webinar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-white">Global MUN</span>
              </div>
              <p className="text-gray-400">
                Empowering the next generation of global leaders through diplomatic education and international
                cooperation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/committees" className="block text-gray-400 hover:text-white transition-colors">
                  Committees
                </Link>
                <Link href="/schedule" className="block text-gray-400 hover:text-white transition-colors">
                  Schedule
                </Link>
                <Link href="/gallery" className="block text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
                <Link href="/conference-info" className="block text-gray-400 hover:text-white transition-colors">
                  Conference Info
                </Link>
                <Link href="/resources" className="block text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
                <Link href="/upload" className="block text-gray-400 hover:text-white transition-colors">
                  Upload Payment
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  FAQs
                </a>
                <Link href="/admin/dashboard" className="block text-gray-400 hover:text-white transition-colors">
                  Admin
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Global MUN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
