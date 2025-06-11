"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Globe, Award, Star, ArrowRight, Play, CheckCircle, BookOpen, Target } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { MainNav } from "@/components/MainNav"
import Image from "next/image"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  // Video refs for controlling playback
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const ctaVideoRef = useRef<HTMLVideoElement>(null)

  // Play videos when component mounts
  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error)
      })
    }

    if (ctaVideoRef.current) {
      ctaVideoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error)
      })
    }
  }, [])

  const registrationSteps = [
    {
      step: "01",
      title: "Choose Your Committee",
      description: "Select from our diverse range of UN committees and specialized agencies",
      icon: <Target className="w-8 h-8" />,
    },
    {
      step: "02",
      title: "Complete Registration",
      description: "Fill out our comprehensive registration form with your details",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      step: "03",
      title: "Submit Payment",
      description: "Secure your spot with our streamlined payment process",
      icon: <Award className="w-8 h-8" />,
    },
    {
      step: "04",
      title: "Prepare & Attend",
      description: "Receive your study guide and join us for an unforgettable experience",
      icon: <BookOpen className="w-8 h-8" />,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      school: "Harvard University",
      rating: 5,
      text: "The Global MUN experience transformed my understanding of international relations. The quality of debate and networking opportunities were exceptional.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marcus Rodriguez",
      school: "Stanford University",
      rating: 5,
      text: "As a first-time delegate, I was amazed by the support and mentorship provided. This conference set the foundation for my diplomatic career.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Aisha Patel",
      school: "Oxford University",
      rating: 5,
      text: "The scholarship opportunities and professional development workshops made this conference invaluable. Highly recommend to all aspiring diplomats.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const upcomingConferences = [
    {
      title: "Global MUN New York",
      date: "March 15-17, 2025",
      location: "United Nations Headquarters",
      delegates: "500+",
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      title: "Global MUN Geneva",
      date: "June 20-22, 2025",
      location: "UN Office at Geneva",
      delegates: "300+",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Global MUN Vienna",
      date: "September 12-14, 2025",
      location: "Vienna International Centre",
      delegates: "400+",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <MainNav />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/lmun2.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
          {/* Overlay to darken video and add gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/70 backdrop-blur-sm"></div>
        </div>

        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-10"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-10"
        />

        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30">
              <Play className="w-4 h-4 mr-2" />
              Most Prestigious Conferences
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              FROM LOCAL
              <span className="block bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                LEADERS TO GLOBAL
              </span>
              <span className="block text-white">DIPLOMATS</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the world's most prestigious Model United Nations conference. Develop critical thinking, public
              speaking, and diplomatic skills while addressing real-world challenges alongside future global leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:text-gray-400 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Email Signup */}
            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4">Get Conference Updates</h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">We'll never share your information</p>
              </div>
            </div>

            {/* Google Rating */}
            <div className="flex items-center justify-center mt-8 space-x-2">
              <span className="text-white font-medium">Google</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                ))}
              </div>
              <span className="text-white font-bold">5.0</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">HOW TO JOIN LMUN</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Follow these simple steps to secure your place in the world's most prestigious Model United Nations
              conference
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-blue-400">{step.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-300 mb-8">
              Ready to begin your diplomatic journey? Start your registration today!
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              Start Registration
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Meet the Secretariat */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">MEET THE SECRETARIAT</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team brings years of Model UN expertise and diplomatic knowledge to guide your
              conference experience
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexandra Chen",
                position: "Secretary-General",
                email: "secretary.general@globalmun.org",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Harvard graduate with 8+ years of MUN experience",
              },
              {
                name: "Marcus Rodriguez",
                position: "Deputy Secretary-General",
                email: "deputy.sg@globalmun.org",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Stanford alumnus and former UN intern",
              },
              {
                name: "Priya Patel",
                position: "Director-General",
                email: "director.general@globalmun.org",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Oxford graduate specializing in international law",
              },
              {
                name: "James Wilson",
                position: "Under Secretary-General",
                email: "under.sg@globalmun.org",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Yale Law graduate with diplomatic experience",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-400/30"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <Badge className="mb-3 bg-blue-600/20 text-blue-300 border-blue-400/30">{member.position}</Badge>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      {member.email}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Conferences */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">UPCOMING CONFERENCES</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Join delegates from around the world at our prestigious conference locations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingConferences.map((conference, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden ${conference.featured ? "ring-2 ring-blue-400" : ""}`}
                >
                  <div className="relative">
                    <img
                      src={conference.image || "/placeholder.svg"}
                      alt={conference.title}
                      className="w-full h-48 object-cover"
                    />
                    {conference.featured && (
                      <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{conference.title}</h3>
                    <div className="space-y-2 text-gray-300 mb-4">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{conference.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <span>{conference.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                        <span>{conference.delegates} delegates</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">WHAT DELEGATES SAY</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our alumni who have gone on to shape the world through diplomacy and leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.school}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Video Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={ctaVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover"
          >
            <source src="/placeholder.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-blue/90"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Ready to Shape the Future?</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of delegates who have transformed their leadership skills and built lifelong connections
              through LMUN conferences.
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
                Download Brochure
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
              <Image src="/logo.png" alt="LMUN Logo" width={70} height={30} />
                <span className="text-4xl font-bold text-white">LMUN</span>
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
            <p className="text-gray-400">© 2026 LMUN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
