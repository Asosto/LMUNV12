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
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/Footer"

export default function ResourcesPage() {
  const delegateResources = [
    {
      title: "Delegate Preparation Guide",
      description:
        "Comprehensive guide to help delegates prepare for the conference, including research tips, committee dynamics, and diplomatic strategies.",
      icon: <BookOpen className="w-10 h-10" />,
      image: "/LMUN Delegate Preparation Guide Preview.png",
      fileType: "PDF",
      filePath: "/LMUN Delegate Preparation Guide.pdf",
    },
    {
      title: "MUN Position Paper Template",
      description:
        "Standard template for writing effective position papers, with examples and formatting guidelines to help delegates articulate their country's stance.",
      icon: <FileText className="w-10 h-10" />,
      image: "/HowToMakeAPositionPaper LMUN Preview.png",
      fileType: "PDF",
      filePath: "/HowToMakeAPositionPaper LMUN.pdf",
    },
    {
      title: "Delegate Participation Rubric",
      description:
        "Evaluation criteria used by chairs to assess delegate performance, including speaking, negotiation, resolution writing, and diplomatic conduct.",
      icon: <CheckSquare className="w-10 h-10" />,
      image: "/Delegate Rubric LMUN Preview.png",
      fileType: "PDF",
      filePath: "/Delegate Rubric LMUN.pdf",
    },
    {
      title: "Code of Conduct",
      description:
        "Guidelines for professional and ethical behavior during the conference, including dress code, diplomatic protocol, and respectful engagement.",
      icon: <Shield className="w-10 h-10" />,
      image: "/Code of Conduct LMUN Preview.png",
      fileType: "PDF",
      filePath: "/Code of Conduct LMUN.pdf",
    },
    {
      title: "Consensus Rubric",
      description:
        "Evaluation framework for assessing consensus-building skills, collaboration effectiveness, and diplomatic negotiation outcomes in committee sessions.",
      icon: <CheckSquare className="w-10 h-10" />,
      image: "/Consensus Rubric LMUN Preview.png",
      fileType: "PDF",
      filePath: "/Consensus Rubric LMUN.pdf",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="LMUN Logo" width={60} height={20} />
              <span className="text-3xl font-bold text-white">LMUN</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/committees" className="text-white hover:text-blue-400 transition-colors">
                Committees
              </Link>
              <Link href="/gallery" className="text-white hover:text-blue-400 transition-colors">
                Gallery
              </Link>
              <Link href="/conference-info" className="text-white hover:text-blue-400 transition-colors">
                Conference Information
              </Link>
              <Link href="/resources" className="text-blue-400 font-medium">
                Resources
              </Link>
              <Link href="/upload" className="text-white hover:text-blue-400 transition-colors">
                Upload Payment
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSedNwUoCCEAvbmzqY21JoNnDv9I5rdT0GOlxxfcjAFi-wv6DA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Delegate Resources Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Badge className="mb-5 py-2 px-4 text-base bg-blue-600/20 text-blue-300 border-blue-400/30">
              <BookOpen className="w-5 h-5 mr-2" />
              Delegate Materials
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              DELEGATE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RESOURCES
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access essential guides, templates, and materials to help you prepare for LMUN 2026. Download these key resources to prepare effectively for your committee sessions.
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
                        <Badge className="bg-blue-600/20 text-blue-300 border-blue-400/30">{resource.fileType}</Badge>
                        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                          <a href={resource.filePath} download target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
