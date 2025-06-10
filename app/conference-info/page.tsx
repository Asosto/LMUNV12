"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Download, Award, ArrowRight, Calendar, Info, Mic, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"

export default function ConferenceInfoPage() {
  const feeStructure = [
    {
      type: "Early Bird Registration",
      fee: "$150",
      deadline: "Until December 15, 2024",
      includes: ["All committee sessions", "Conference materials", "Opening & closing ceremonies", "Cultural night"],
    },
    {
      type: "Regular Registration",
      fee: "$200",
      deadline: "December 16, 2024 - February 15, 2025",
      includes: ["All committee sessions", "Conference materials", "Opening & closing ceremonies", "Cultural night"],
    },
    {
      type: "Late Registration",
      fee: "$250",
      deadline: "February 16, 2025 - March 1, 2025",
      includes: ["All committee sessions", "Conference materials", "Opening & closing ceremonies", "Cultural night"],
    },
    {
      type: "School Delegation (10+ delegates)",
      fee: "$130 per delegate",
      deadline: "Any time before March 1, 2025",
      includes: [
        "All committee sessions",
        "Conference materials",
        "Opening & closing ceremonies",
        "Cultural night",
        "Faculty advisor support",
      ],
    },
  ]

  const resources = [
    {
      title: "Conference Venue Map",
      description: "Detailed map of the United Nations Headquarters with committee room locations",
      icon: <MapPin className="w-8 h-8" />,
      buttonText: "Download Map",
    },
    {
      title: "Committee Assignments",
      description: "Complete list of committees, topics, and country assignments",
      icon: <Building className="w-8 h-8" />,
      buttonText: "Download List",
    },
    {
      title: "Transportation Guide",
      description: "Information on getting to and from the conference venue",
      icon: <Globe className="w-8 h-8" />,
      buttonText: "Download Guide",
    },
    {
      title: "Accommodation Options",
      description: "Partner hotels and special rates for conference delegates",
      icon: <Building className="w-8 h-8" />,
      buttonText: "View Options",
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
              <Link href="/conference-info" className="text-blue-400 font-medium">
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
              <Info className="w-4 h-4 mr-2" />
              Essential Information
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              CONFERENCE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                INFORMATION
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Everything you need to know about Global MUN 2025, from venue details to registration fees and special
              events. Plan your diplomatic journey with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CONFERENCE RESOURCES</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download maps, guides, and other essential materials to help you navigate the conference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
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
                      {resource.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">REGISTRATION FEES</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent fee structure with options for early registration discounts and school delegations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {feeStructure.map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{fee.type}</h3>
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-400/30 text-lg px-3 py-1">
                        {fee.fee}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300 mb-4">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{fee.deadline}</span>
                    </div>
                    <div className="bg-blue-900/30 rounded-xl p-4">
                      <h4 className="font-semibold text-blue-300 mb-2">What's Included:</h4>
                      <ul className="space-y-2">
                        {fee.includes.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-gray-300">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              All fees are in USD. Payment can be made via bank transfer, credit card, or PayPal.
              <br />
              Scholarships are available for qualified applicants.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Apply for Financial Aid
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Guest Speaker */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Ambassador James Wilson"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-full p-4 shadow-lg">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-400/30">Keynote Speaker</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ambassador James Wilson</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Former UN Ambassador and distinguished diplomat with over 30 years of experience in international
                relations. Ambassador Wilson has served in key diplomatic posts across four continents and led
                negotiations on critical global issues.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                His keynote address, "Diplomacy in the Digital Age," will explore how emerging technologies are
                reshaping international relations and the skills future diplomats need to navigate this new landscape.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn More About Ambassador Wilson
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Memorial Award */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-400/30">Annual Award</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Jeanie Ayub International Relations Award
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Established in memory of Professor Jeanie Ayub, a pioneering scholar in international relations and
                dedicated mentor to generations of diplomats. This prestigious award recognizes outstanding achievement
                in diplomatic excellence and innovative problem-solving.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Recipients demonstrate exceptional leadership, diplomatic skill, and commitment to international
                cooperation. The award includes a $5,000 scholarship for further studies in international relations or
                related fields.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn About the Award
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Jeanie Ayub Award"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-full p-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join Global MUN 2025?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Register now to secure your spot and take advantage of early bird pricing. Join delegates from around the
              world for an unforgettable diplomatic experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Contact Us
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
