"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Download, Award, ArrowRight, Calendar, Info, Mic, Building, Clock, Users, Coffee, Utensils, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/Footer"

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
              <Link href="/conference-info" className="text-blue-400 font-medium">
                Conference Information
              </Link>
              <Link href="/resources" className="text-white hover:text-blue-400 transition-colors">
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
            <Badge className="mb-5 py-2 px-4 text-base bg-blue-600/20 text-blue-300 border-blue-400/30">
              <Info className="w-5 h-5 mr-2" />
              Essential Information
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              CONFERENCE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                INFORMATION
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Everything you need to know about LMUN 2026, from venue details to registration fees and special
              events. Plan your diplomatic journey with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30">
              <Calendar className="w-5 h-5 mr-2" />
              Conference Schedule
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CONFERENCE SCHEDULE</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three days of intensive diplomatic simulation, networking, and learning. Plan your conference experience
              with our detailed schedule of events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Download Full Schedule
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Add to Calendar
              </Button>
            </div>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                day: "Saturday, March 7, 2026",
                date: "Day 1",
                events: [
                  {
                    time: "8:00 AM - 9:00 AM",
                    title: "Registration & Welcome Breakfast",
                    location: "Main Lobby",
                    type: "registration",
                    description: "Check-in, receive conference materials, and network with fellow delegates",
                  },
                  {
                    time: "9:00 AM - 10:00 AM",
                    title: "Opening Ceremony",
                    location: "General Assembly Hall",
                    type: "ceremony",
                    description: "Welcome address by Secretary-General and keynote speaker",
                  },
                  {
                    time: "10:00 AM - 10:30 AM",
                    title: "Coffee Break & Networking",
                    location: "Conference Center Atrium",
                    type: "break",
                    description: "Connect with delegates and enjoy refreshments",
                  },
                  {
                    time: "10:30 AM - 12:30 PM",
                    title: "Committee Session I",
                    location: "Various Committee Rooms",
                    type: "session",
                    description: "First formal committee session - opening statements and initial debate",
                  },
                  {
                    time: "12:30 PM - 1:30 PM",
                    title: "Lunch Break",
                    location: "Conference Center Dining Hall",
                    type: "meal",
                    description: "Networking lunch with international cuisine",
                  },
                  {
                    time: "1:30 PM - 3:30 PM",
                    title: "Committee Session II",
                    location: "Various Committee Rooms",
                    type: "session",
                    description: "Continued debate and initial resolution drafting",
                  },
                  {
                    time: "3:30 PM - 4:00 PM",
                    title: "Afternoon Break",
                    location: "Conference Center Atrium",
                    type: "break",
                    description: "Refreshments and informal discussions",
                  },
                  {
                    time: "4:00 PM - 5:00 PM",
                    title: "Committee Session III",
                    location: "Various Committee Rooms",
                    type: "session",
                    description: "Working groups and resolution development",
                  },
                ],
              },
              {
                day: "Sunday, March 8, 2026",
                date: "Day 2",
                events: [
                  {
                    time: "8:00 AM - 9:00 AM",
                    title: "Breakfast & Morning Briefing",
                    location: "Conference Center Dining Hall",
                    type: "meal",
                    description: "Continental breakfast and daily briefing",
                  },
                  {
                    time: "9:00 AM - 11:00 AM",
                    title: "Committee Session IV",
                    location: "Various Committee Rooms",
                    type: "session",
                    description: "Intensive debate and amendment discussions",
                  },
                  {
                    time: "11:00 AM - 11:30 AM",
                    title: "Coffee Break",
                    location: "Conference Center Atrium",
                    type: "break",
                    description: "Mid-morning refreshments",
                  },
                  {
                    time: "11:30 AM - 1:00 PM",
                    title: "Crisis Committee Special Session",
                    location: "Security Council Chamber",
                    type: "special",
                    description: "Emergency session addressing breaking international crisis",
                  },
                  {
                    time: "1:00 PM - 2:00 PM",
                    title: "Lunch Break",
                    location: "Conference Center Dining Hall",
                    type: "meal",
                    description: "Working lunch with committee members",
                  },
                  {
                    time: "2:00 PM - 4:00 PM",
                    title: "Committee Session V",
                    location: "Various Committee Rooms",
                    type: "session",
                    description: "Final resolution drafting and voting procedures",
                  },
          
                ],
              },
            ].map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              >
                <div className="text-center mb-12">
                  <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-400/30 text-lg px-4 py-2">
                    {day.date}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{day.day}</h3>
                </div>

                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => {
                    const getEventIcon = (type: string) => {
                      switch (type) {
                        case "registration":
                          return <CheckCircle className="w-5 h-5" />
                        case "ceremony":
                          return <Award className="w-5 h-5" />
                        case "session":
                          return <Users className="w-5 h-5" />
                        case "break":
                          return <Coffee className="w-5 h-5" />
                        case "meal":
                          return <Utensils className="w-5 h-5" />
                        case "special":
                          return <Award className="w-5 h-5" />
                        default:
                          return <Clock className="w-5 h-5" />
                      }
                    }

                    const getEventColor = (type: string) => {
                      switch (type) {
                        case "registration":
                          return "bg-green-600/20 text-green-300 border-green-400/30"
                        case "ceremony":
                          return "bg-purple-600/20 text-purple-300 border-purple-400/30"
                        case "session":
                          return "bg-blue-600/20 text-blue-300 border-blue-400/30"
                        case "break":
                          return "bg-orange-600/20 text-orange-300 border-orange-400/30"
                        case "meal":
                          return "bg-yellow-600/20 text-yellow-300 border-yellow-400/30"
                        case "special":
                          return "bg-red-600/20 text-red-300 border-red-400/30"
                        default:
                          return "bg-gray-600/20 text-gray-300 border-gray-400/30"
                      }
                    }

                    return (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                      >
                        <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                              <div className="flex items-center space-x-4 md:w-1/4">
                                <div className={`p-2 rounded-lg ${getEventColor(event.type)}`}>
                                  {getEventIcon(event.type)}
                                </div>
                                <div className="font-mono text-blue-400 font-semibold">{event.time}</div>
                              </div>

                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-white mb-2">{event.title}</h4>
                                <p className="text-gray-300 mb-2">{event.description}</p>
                                <div className="flex items-center space-x-2 text-gray-400">
                                  <MapPin className="w-4 h-4" />
                                  <span>{event.location}</span>
                                </div>
                              </div>

                              <Badge className={`${getEventColor(event.type)} capitalize`}>{event.type}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
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

       
        </div>
      </section>

      {/* Guest Speaker */}
      {/* Temporarily hidden - Ambassador James Wilson section
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
      */}

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
              For over 30 years, Mrs. Jeanie Ayub (1948-2018) was one of the most influential, inspiring and dedicated teachers at Lincoln School. Over the course of her time at Lincoln, she was High
              School Assistant Principal, Social Studies Department Coordinator, served as advisor to several
              student groups, and helped forge the school’s IB History program. 

              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Perhaps her most lasting legacy was her introduction of a Model United Nations program at Lincoln School and in Costa Rica. 
              After taking several Lincoln delegations to participate in Harvard Model United Nations,she inspired and advised a group of students to launch Lincoln Model United Nations (LMUN).
              </p>
              <a href="https://docs.google.com/document/d/1xnkRuhVJcDWap_NcG_3zRUbwKPHCkp7p/edit" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn About the Award
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <Image
                  src="/jeanie-ayub-photo.avif"
                  alt="Jeanie Ayub"
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
