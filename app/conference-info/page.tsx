"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Download, Award, ArrowRight, Calendar, Info, Mic, Building, Clock, Users, Coffee, Utensils, CheckCircle, DollarSign, CreditCard } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/Footer"

export default function ConferenceInfoPage() {
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
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8"></div>
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
              Everything you need to know about LMUN 2026, from venue details to conference registration fees!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committee Groups Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-400/30">
              <Users className="w-5 h-5 mr-2" />
              Committee Groups
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">COMMITTEE GROUPS</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 relative">
                  {/* Group 1 */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center md:text-left">
                      Group / Grupo 1
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Ad Hoc UNSC",
                        "ECA",
                        "UNESCO",
                        "Asamblea Legislativa",
                        "FAO",
                        "DISEC",
                      ].map((committee, index) => (
                        <div
                          key={index}
                          className="text-blue-300 text-lg py-2 border-b border-white/10 last:border-0"
                        >
                          {committee}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-400/30" />

                  {/* Group 2 */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center md:text-left">
                      Group / Grupo 2
                    </h3>
                    <div className="space-y-2">
                      {[
                        "GCMA",
                        "OIC",
                        "Historical UNSC",
                        "UNHRC (MS)",
                        "UNODC (MS)",
                        "OTAN (MS)",
                      ].map((committee, index) => (
                        <div
                          key={index}
                          className="text-blue-300 text-lg py-2 border-b border-white/10 last:border-0"
                        >
                          {committee}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
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
          </motion.div>

          <div className="space-y-12">
            {[
              {
                day: "DAY 1 - MAR. 7th, 2026",
                date: "Day 1",
                groups: [
                  {
                    name: "Group 1",
                    events: [
                      { time: "9:00 am – 10:15 am", title: "Opening Ceremony", type: "ceremony", location: "Lincoln Auditorium", description: "Welcome address by the Secretariat and panel speakers" },
                      { time: "10:15 am – 10:30 am", title: "Snack", type: "break", location: "Outside Committee Classrooms", description: "Refreshments and snacks!" },
                      { time: "10:30 am – 12:15 pm", title: "Committee Session 1", type: "session", location: "Committee Rooms", description: "First formal committee session" },
                      { time: "10:30 am – 11:15 am", title: "Faculty Advisor Meeting", type: "special", location: "HS Building - 2nd Floor Teachers Lounge", description: "Meeting for faculty advisors" },
                      { time: "12:15 pm – 1:00 pm", title: "Lunch", type: "meal", location: "Tentative", description: "Lunch/Break Time!" },
                      { time: "1:00 pm – 3:15 pm", title: "Committee Session 2", type: "session", location: "Committee Rooms", description: "Second formal committee session" },
                      { time: "3:15 pm – 3:30 pm", title: "Snack", type: "break", location: "Outside Committee Classrooms", description: "Afternoon refreshments and snacks" },
                      { time: "3:30 pm – 5:00 pm", title: "Committee Session 3", type: "session", location: "Committee Rooms", description: "Third formal committee session" },
                      { time: "5:00 pm – 5:30 pm", title: "Special Surprise", type: "special", location: "Lincoln Deck & Central Plaza", description: "To be revealed day of conference!" },

                    ],
                  },
                  {
                    name: "Group 2",
                    events: [
                      { time: "9:00 am – 10:15 am", title: "Opening Ceremony", type: "ceremony", location: "Lincoln Auditorium", description: "Welcome address by the Secretariat and panel speakers" },
                      { time: "10:15 am – 10:30 am", title: "Snack", type: "break", location: "Outside Committee Classrooms", description: "Refreshments and snacks!" },
                      { time: "10:30 am – 12:30 pm", title: "Committee Session 1", type: "session", location: "Committee Rooms", description: "First formal committee session" },
                      { time: "10:30 am – 11:15 am", title: "Faculty Advisor Meeting", type: "special", location: "HS Building - 2nd Floor Teachers Lounge", description: "Meeting for faculty advisors" },
                      { time: "12:30 pm – 1:15 pm", title: "Lunch", type: "meal", location: "Tentative", description: "Lunch/Break Time!" },
                      { time: "1:15 pm – 3:30 pm", title: "Committee Session 2", type: "session", location: "Committee Rooms", description: "Second formal committee session" },
                      { time: "3:30 pm – 3:45 pm", title: "Snack", type: "break", location: "Outside Committee Classrooms", description: "Afternoon refreshments and snacks" },
                      { time: "3:45 pm – 5:00 pm", title: "Committee Session 3", type: "session", location: "Committee Rooms", description: "Third formal committee session" },
                      { time: "5:00 pm – 5:30 pm", title: "Special Surprise", type: "special", location: "Lincoln Deck & Central Plaza", description: "To be revealed day of conference!" },
                    ],
                  },
                ],
              },
              {
                day: "DAY 2 - MAR. 8th, 2026",
                date: "Day 2",
                groups: [
                  {
                    name: "Group 1",
                    events: [
                      { time: "9:00 am – 10:30 am", title: "Committee Session 4", type: "session", location: "Committee Rooms", description: "Fourth formal committee session" },
                      { time: "10:30 am – 10:45 am", title: "Snack", type: "break", location: "Outside Committee Classrooms", description: "Mid-morning refreshments and snacks" },
                      { time: "10:45 am – 12:30 pm", title: "Committee Session 5", type: "session", location: "Committee Rooms", description: "Fifth  formal committee session" },
                      { time: "12:30 pm – 1:15 pm", title: "Lunch", type: "meal", location: "Tentative", description: "Working lunch with committee members" },
                      { time: "1:15 pm – 3:00 pm", title: "Committee Session 6", type: "session", location: "Committee Rooms", description: "Final formal committee session and resolution paper presentations" },
                      { time: "3:00 pm – 3:15 pm", title: "Snack", type: "break", location: "Outside Committee Classrooms", description: "Afternoon refreshments and snacks" },
                      { time: "3:15 pm – 4:00 pm", title: "Closing Ceremony", type: "ceremony", location: "Lincoln Auditorium", description: "Awards ceremony and closing remarks" },
                    ],
                  },
                  {
                    name: "Group 2",
                    events: [
                      { time: "9:00 am – 10:15 am", title: "Committee Session 4", type: "session", location: "Committee Rooms", description: "Fourth formal committee session" },
                      { time: "10:15 am – 10:30 am", title: "Snack", type: "break", location: "Outside Committee Classrooms", description: "Mid-morning refreshments and snacks" },
                      { time: "10:30 am – 12:15 pm", title: "Committee Session 5", type: "session", location: "Committee Rooms", description: "Fifth formal committee session" },
                      { time: "12:15 pm – 1:00 pm", title: "Lunch", type: "meal", location: "Tentative", description: "Working lunch with committee members" },
                      { time: "1:00 pm – 2:50 pm", title: "Committee Session 6", type: "session", location: "Committee Rooms", description: "Final formal committee session and resolution paper presentations" },
                      { time: "2:50 pm – 3:15 pm", title: "Snack", type: "break", location: "Outside Committee Classrooms", description: "Afternoon refreshments and snacks" },
                      { time: "3:15 pm – 4:00 pm", title: "Closing Ceremony", type: "ceremony", location: "Lincoln Auditorium", description: "Awards ceremony and closing remarks" },
                    ],
                  },
                ],
              },
            ].map((day, dayIndex) => {
              const getEventIcon = (type: string) => {
                switch (type) {
                  case "ceremony":
                    return <Award className="w-4 h-4" />
                  case "session":
                    return <Users className="w-4 h-4" />
                  case "break":
                    return <Coffee className="w-4 h-4" />
                  case "meal":
                    return <Utensils className="w-4 h-4" />
                  case "special":
                    return <Award className="w-4 h-4" />
                  default:
                    return <Clock className="w-4 h-4" />
                }
              }

              const getEventColor = (type: string) => {
                switch (type) {
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
                  key={dayIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <Badge className="mb-3 bg-blue-600/20 text-blue-300 border-blue-400/30 text-base px-3 py-1">
                      {day.date}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{day.day}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {day.groups.map((group, groupIndex) => (
                      <motion.div
                        key={groupIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                      >
                        <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                          <CardContent className="p-5">
                            <div className="mb-6 text-center">
                              <Badge className="bg-blue-600/40 text-white border-blue-400/50 text-lg font-bold px-6 py-2">
                                {group.name}
                              </Badge>
                            </div>
                            <div className="space-y-3">
                              {group.events.map((event, eventIndex) => (
                                <div key={eventIndex}>
                                  <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <CardContent className="p-4">
                                      <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between gap-2">
                                          <div className="flex items-center space-x-2">
                                            <div className={`p-1.5 rounded-lg ${getEventColor(event.type)}`}>
                                              {getEventIcon(event.type)}
                                            </div>
                                            <div className="font-mono text-blue-400 font-semibold text-sm">{event.time}</div>
                                          </div>
                                          <Badge className={`${getEventColor(event.type)} capitalize text-xs`}>{event.type}</Badge>
                                        </div>

                                        <div>
                                          <h4 className="text-base font-semibold text-white mb-1">{event.title}</h4>
                                          <p className="text-sm text-gray-300 mb-1 line-clamp-2">{event.description}</p>
                                          <div className="flex items-center space-x-1 text-gray-400 text-xs">
                                            <MapPin className="w-3 h-3" />
                                            <span>{event.location}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conference Map Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CONFERENCE MAP</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 max-w-3xl w-full">
              <Image
                src="/MAP_LMUN2026.jpeg"
                alt="LMUN 2026 conference map"
                width={850}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-full p-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">REGISTRATION FEES</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-4xl">
              <Image
                src="/Costs.png"
                alt="Conference Costs"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-full p-4 shadow-lg">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-12"
          >
            <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-4xl w-full">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Payment Information</h3>
              <Image
                src="/Payment Info.png"
                alt="Payment information - Banco Davivienda account details and IBAN"
                width={800}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-full p-4 shadow-lg">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Guest Speaker */}
      {/* Temporarily hidden - Ambassador James Wilson section
      <section className="py-12">
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
      <section className="py-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
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
