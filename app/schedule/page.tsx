"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Clock, MapPin, Calendar, Users, Coffee, Utensils, Award, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"
import { Footer } from "@/components/Footer"

export default function SchedulePage() {
  const scheduleData = [
    {
      day: "Friday, March 15, 2025",
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
          time: "4:00 PM - 6:00 PM",
          title: "Committee Session III",
          location: "Various Committee Rooms",
          type: "session",
          description: "Working groups and resolution development",
        },
        {
          time: "7:00 PM - 9:00 PM",
          title: "Welcome Dinner & Cultural Night",
          location: "Grand Ballroom",
          type: "social",
          description: "Formal dinner with cultural performances and networking",
        },
      ],
    },
    {
      day: "Saturday, March 16, 2025",
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
        {
          time: "4:00 PM - 4:30 PM",
          title: "Afternoon Break",
          location: "Conference Center Atrium",
          type: "break",
          description: "Last networking opportunity before final sessions",
        },
        {
          time: "4:30 PM - 6:30 PM",
          title: "Committee Session VI",
          location: "Various Committee Rooms",
          type: "session",
          description: "Final voting and resolution adoption",
        },
        {
          time: "7:30 PM - 10:00 PM",
          title: "Gala Dinner & Awards Ceremony",
          location: "Grand Ballroom",
          type: "ceremony",
          description: "Formal gala with awards presentation and entertainment",
        },
      ],
    },
    {
      day: "Sunday, March 17, 2025",
      date: "Day 3",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Breakfast & Final Preparations",
          location: "Conference Center Dining Hall",
          type: "meal",
          description: "Final breakfast and preparation for closing ceremony",
        },
        {
          time: "10:00 AM - 11:30 AM",
          title: "General Assembly Plenary",
          location: "General Assembly Hall",
          type: "plenary",
          description: "Presentation of committee resolutions to the General Assembly",
        },
        {
          time: "11:30 AM - 12:00 PM",
          title: "Coffee Break",
          location: "Conference Center Atrium",
          type: "break",
          description: "Final networking and photo opportunities",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Closing Ceremony",
          location: "General Assembly Hall",
          type: "ceremony",
          description: "Awards presentation, closing remarks, and farewell",
        },
        {
          time: "1:00 PM - 2:00 PM",
          title: "Farewell Lunch",
          location: "Conference Center Dining Hall",
          type: "meal",
          description: "Final meal together and exchange of contact information",
        },
      ],
    },
  ]

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
      case "social":
        return <Users className="w-5 h-5" />
      case "special":
        return <Award className="w-5 h-5" />
      case "plenary":
        return <Globe className="w-5 h-5" />
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
      case "social":
        return "bg-pink-600/20 text-pink-300 border-pink-400/30"
      case "special":
        return "bg-red-600/20 text-red-300 border-red-400/30"
      case "plenary":
        return "bg-indigo-600/20 text-indigo-300 border-indigo-400/30"
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
            <Image src="/logo.png" alt="LMUN Logo" width={60} height={20} />
              <span className="text-3xl font-bold text-white">LMUN</span>
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
              <Link href="/schedule" className="text-blue-400 font-medium">
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
              <Calendar className="w-4 h-4 mr-2" />
              Conference Schedule
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              CONFERENCE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SCHEDULE
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Three days of intensive diplomatic simulation, networking, and learning. Plan your conference experience
              with our detailed schedule of events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Download Full Schedule
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Add to Calendar
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {scheduleData.map((day, dayIndex) => (
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
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{day.day}</h2>
                </div>

                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
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
                              <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
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
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Important Information</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please review these important details to ensure a smooth conference experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Punctuality</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Please arrive 15 minutes early for all sessions. Late arrivals may not be permitted entry during
                    formal proceedings.
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
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Dress Code</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Business formal attire is required for all committee sessions and ceremonies. Business casual for
                    meals and breaks.
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
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Venue Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All events take place at the UN Headquarters. Security clearance required - bring valid
                    government-issued ID.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700/90 to-blue/90">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't miss this opportunity to be part of an unforgettable diplomatic experience. Register now to secure
              your spot at LMUN 2026.
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
      <Footer />
    </div>
  )
}
