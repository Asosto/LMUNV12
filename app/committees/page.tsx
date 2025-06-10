"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Users,
  Shield,
  Gavel,
  Building,
  Heart,
  Leaf,
  DollarSign,
  ArrowRight,
  User,
  MapPin,
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

export default function CommitteesPage() {
  const committees = [
    {
      name: "United Nations Security Council",
      acronym: "UNSC",
      topic: "Addressing Cybersecurity Threats in International Relations",
      difficulty: "Advanced",
      delegates: 15,
      icon: <Shield className="w-8 h-8" />,
      description:
        "The premier committee dealing with international peace and security, where delegates represent the world's most powerful nations.",
      chair: {
        name: "Alexandra Chen",
        school: "Harvard University",
        experience: "5+ years MUN experience",
        image: "/placeholder.svg?height=80&width=80",
      },
      featured: true,
    },
    {
      name: "General Assembly First Committee",
      acronym: "GA1",
      topic: "Nuclear Disarmament and Non-Proliferation in the 21st Century",
      difficulty: "Intermediate",
      delegates: 193,
      icon: <Globe className="w-8 h-8" />,
      description:
        "Focused on disarmament and international security matters, this committee addresses some of the world's most pressing security challenges.",
      chair: {
        name: "Marcus Rodriguez",
        school: "Stanford University",
        experience: "4+ years MUN experience",
        image: "/placeholder.svg?height=80&width=80",
      },
      featured: false,
    },
    {
      name: "Economic and Social Council",
      acronym: "ECOSOC",
      topic: "Sustainable Development Goals: Progress and Challenges",
      difficulty: "Intermediate",
      delegates: 54,
      icon: <DollarSign className="w-8 h-8" />,
      description:
        "Coordinates economic and social work of the UN and its specialized agencies, focusing on sustainable development.",
      chair: {
        name: "Priya Patel",
        school: "Oxford University",
        experience: "3+ years MUN experience",
        image: "/placeholder.svg?height=80&width=80",
      },
      featured: false,
    },
    {
      name: "World Health Organization",
      acronym: "WHO",
      topic: "Global Health Security and Pandemic Preparedness",
      difficulty: "Beginner",
      delegates: 194,
      icon: <Heart className="w-8 h-8" />,
      description:
        "Addresses global health matters, health emergencies, and coordinates international health responses.",
      chair: {
        name: "Dr. Sarah Johnson",
        school: "Johns Hopkins University",
        experience: "6+ years MUN experience",
        image: "/placeholder.svg?height=80&width=80",
      },
      featured: false,
    },
    {
      name: "International Court of Justice",
      acronym: "ICJ",
      topic: "Maritime Boundary Disputes in the South China Sea",
      difficulty: "Advanced",
      delegates: 24,
      icon: <Gavel className="w-8 h-8" />,
      description:
        "The principal judicial organ of the UN, settling legal disputes between states and giving advisory opinions.",
      chair: {
        name: "James Wilson",
        school: "Yale Law School",
        experience: "7+ years MUN experience",
        image: "/placeholder.svg?height=80&width=80",
      },
      featured: true,
    },
    {
      name: "UN Environment Programme",
      acronym: "UNEP",
      topic: "Climate Change Adaptation and Mitigation Strategies",
      difficulty: "Beginner",
      delegates: 193,
      icon: <Leaf className="w-8 h-8" />,
      description:
        "Coordinates environmental activities and assists developing countries in implementing environmentally sound policies.",
      chair: {
        name: "Emma Thompson",
        school: "Cambridge University",
        experience: "4+ years MUN experience",
        image: "/placeholder.svg?height=80&width=80",
      },
      featured: false,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-600/20 text-green-300 border-green-400/30"
      case "Intermediate":
        return "bg-yellow-600/20 text-yellow-300 border-yellow-400/30"
      case "Advanced":
        return "bg-red-600/20 text-red-300 border-red-400/30"
      default:
        return "bg-gray-600/20 text-gray-300 border-gray-400/30"
    }
  }

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
              <Link href="/committees" className="text-blue-400 font-medium">
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
              <Link href="/resources" className="text-white hover:text-blue-400 transition-colors">
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
              <Building className="w-4 h-4 mr-2" />
              Conference Committees
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              EXPLORE OUR
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DIVERSE COMMITTEES
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From the Security Council to specialized agencies, discover the committee that matches your interests and
              experience level. Each committee offers unique challenges and learning opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card
                  className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full ${committee.featured ? "ring-2 ring-blue-400" : ""}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                          <div className="text-blue-400">{committee.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{committee.acronym}</h3>
                          <Badge className={getDifficultyColor(committee.difficulty)}>{committee.difficulty}</Badge>
                        </div>
                      </div>
                      {committee.featured && <Badge className="bg-blue-600 text-white">Featured</Badge>}
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-2">{committee.name}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{committee.description}</p>

                    <div className="bg-blue-900/30 rounded-xl p-4 mb-6">
                      <h5 className="font-semibold text-blue-300 mb-2">Committee Topic:</h5>
                      <p className="text-white font-medium">{committee.topic}</p>
                    </div>

                    <div className="flex items-center space-x-6 mb-6 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{committee.delegates} delegates</span>
                      </div>
                    </div>

                    {/* Chair Information */}
                    <div className="border-t border-white/10 pt-6">
                      <h5 className="font-semibold text-white mb-4">Committee Chair</h5>
                      <div className="flex items-center space-x-4">
                        <Image
                          src={committee.chair.image || "/placeholder.svg"}
                          alt={committee.chair.name}
                          width={80}
                          height={80}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <div className="font-semibold text-white">{committee.chair.name}</div>
                          <div className="text-sm text-gray-400 flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{committee.chair.school}</span>
                          </div>
                          <div className="text-sm text-blue-400">{committee.chair.experience}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Apply for {committee.acronym}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                        <Download className="w-4 h-4 mr-2" />
                        Download Study Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Join Our Committees?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each committee offers unique learning opportunities and skill development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <User className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Expert Mentorship</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Learn from experienced chairs and advisors who provide personalized guidance throughout the
                    conference.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Global Perspective</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Engage with delegates from around the world and gain insights into different cultural and political
                    perspectives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Skill Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Develop critical thinking, public speaking, negotiation, and diplomatic skills that will serve you
                    throughout your career.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Building className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Make Your Mark?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Choose your committee and begin your journey toward becoming a global leader. Each committee offers unique
              challenges and growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Download Study Guides
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
                <Link href="/admin" className="block text-gray-400 hover:text-white transition-colors">
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
