"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Globe,
  Shield,
  Gavel,
  Building,
  Heart,
  Download,
  BookOpen,
  UtensilsCrossed,
  Bomb,
  Atom,
  Clock,
  Pill,
  Network,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/Footer"

export default function CommitteesPage() {
  const [selectedCommittee, setSelectedCommittee] = useState<number | null>(null)
  const committees = [
    {
      name: "Ad Hoc United Nations Security Council",
      acronym: "Ad Hoc United Nations Security Council",
      topic: "Humanitarian crisis in South Sudan",
      difficulty: "Advanced",
      icon: <Shield className="w-8 h-8" />,
      description:
        "An ad hoc session of the Security Council addressing urgent humanitarian crises. Delegates must navigate complex political dynamics while prioritizing human welfare and international stability.",
      chair: {
        name: "Tomas Villalobos",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Tomas Van der Laat",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "European Club Association",
      acronym: "ECA",
      topic: "The Future of European Club Football: The Debate of the Super League proposition and the Fight for the Soul of the Game",
      difficulty: "Intermediate",
      icon: <Globe className="w-8 h-8" />,
      description:
        "A specialized committee examining the future of European football, addressing the controversial Super League proposal and its implications for the sport's integrity, tradition, and economic model.",
      chair: {
        name: "Ariel Araya",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Jorge Guardia",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "United Nations Educational, Scientific and Cultural Organization",
      acronym: "UNESCO",
      topic: "Bridging the Global Digital Divide in Education",
      difficulty: "Intermediate",
      icon: <BookOpen className="w-8 h-8" />,
      description:
        "Addresses the critical challenge of ensuring equitable access to digital education resources worldwide, focusing on closing the gap between developed and developing nations.",
      chair: {
        name: "Valentina Barzuna",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Lucía Shum",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Asamblea Legislativa",
      acronym: "Asamblea Legislativa",
      topic: "Voto: deber o derecho?",
      difficulty: "Intermediate",
      icon: <Gavel className="w-8 h-8" />,
      description:
        "A Spanish-language committee examining the fundamental question of voting rights: should voting be considered a civic duty or an individual right? Delegates explore the implications of mandatory versus voluntary participation in democratic processes.",
      chair: {
        name: "Maria Alexandra Sauter",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Emma Neurohr",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "Spanish",
      level: "HS",
      featured: false,
    },
    {
      name: "Food and Agriculture Organization",
      acronym: "FAO",
      topic: "Food Security: establishing consumerism rights in the 21st century",
      difficulty: "Beginner",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      description:
        "Focuses on global food security challenges and the establishment of consumer rights in the modern era, addressing issues of access, quality, and sustainability in food systems.",
      chair: {
        name: "Noah Lang",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Galia Luconi",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Disarmament and International Security Committee",
      acronym: "DISEC",
      topic: "Pulling back the curtain on the military-industrial complex: Addressing the role of defense contractors in modern warfare",
      difficulty: "Advanced",
      icon: <Bomb className="w-8 h-8" />,
      description:
        "Examines the complex relationship between governments, defense contractors, and international security, addressing transparency, accountability, and the ethical implications of the military-industrial complex.",
      chair: {
        name: "Claudia Escorriola",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Elena González",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "The Global Council on Mutant Affairs",
      acronym: "GCMA",
      topic: "Addressing the Complex Division Between Mutants and Humans",
      difficulty: "Beginner",
      icon: <Atom className="w-8 h-8" />,
      description:
        "A crisis committee addressing the complex social, political, and ethical challenges arising from the division between mutant and human populations, exploring themes of discrimination, coexistence, and mutual understanding.",
      chair: {
        name: "David Sandi",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Amanda Cabrera",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Organization of Islamic Cooperation",
      acronym: "OIC",
      topic: "Iran's nuclear weapons",
      difficulty: "Advanced",
      icon: <Shield className="w-8 h-8" />,
      description:
        "Addresses one of the most pressing security challenges in the Middle East, examining Iran's nuclear program and its implications for regional stability, non-proliferation efforts, and international relations.",
      chair: {
        name: "Luna Jervis",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Luciana Benavidez",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "Historical United Nations Security Council",
      acronym: "Historical UNSC",
      topic: "Checkpoint Crisis: The Berlin Wall Committee",
      difficulty: "Advanced",
      icon: <Clock className="w-8 h-8" />,
      description:
        "A historical crisis committee set during the Berlin Wall era, where delegates must navigate the tense geopolitical landscape of the Cold War and address critical checkpoint crises that defined an era.",
      chair: {
        name: "Elena Sáenz",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Alexa Kofoed",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "HS",
      featured: false,
    },
    {
      name: "United Nations Human Rights Council",
      acronym: "UNHRC",
      topic: "Addressing Human Right Concerns and Exploitation Along the Central Mediterranean Migration Route",
      difficulty: "Intermediate",
      icon: <Heart className="w-8 h-8" />,
      description:
        "Examines the critical human rights challenges facing migrants along the Central Mediterranean route, addressing exploitation, trafficking, and the protection of vulnerable populations seeking refuge.",
      chair: {
        name: "Gabriela Valerio",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Gabriel Molina",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "MS",
      featured: false,
    },
    {
      name: "United Nations Office on Drugs and Crime",
      acronym: "UNODC",
      topic: "Marijuana: Public Health vs Organized Crime",
      difficulty: "Intermediate",
      icon: <Pill className="w-8 h-8" />,
      description:
        "Addresses the complex debate surrounding marijuana legalization, balancing public health considerations, medical benefits, and the fight against organized crime in the global drug trade.",
      chair: {
        name: "Emma Holman",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Paulina Castro",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "English",
      level: "MS",
      featured: false,
    },
    {
      name: "De la Guerra Fría a la Guerra Digital: La OTAN Frente a los Ciberataques",
      acronym: "OTAN",
      topic: "De la Guerra Fría a la Guerra Digital: La OTAN Frente a los Ciberataques",
      difficulty: "Advanced",
      icon: <Network className="w-8 h-8" />,
      description:
        "A Spanish-language committee examining NATO's evolution from the Cold War era to the digital age, focusing on the alliance's response to modern cyber threats and the transformation of security challenges in the 21st century.",
      chair: {
        name: "Luciana Monge",
        image: "/placeholder.svg?height=80&width=80",
      },
      coChair: {
        name: "Lara Garita",
        image: "/placeholder.svg?height=80&width=80",
      },
      language: "Spanish",
      level: "MS",
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
            <Image src="/logo.png" alt="LMUN Logo" width={60} height={20} />
              <span className="text-3xl font-bold text-white">LMUN</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/committees" className="text-blue-400 font-medium">
                Committees
              </Link>
              <Link href="/gallery" className="text-white hover:text-blue-400 transition-colors">
                Gallery
              </Link>
              <Link href="/conference-info" className="text-white hover:text-blue-400 transition-colors">
                Conference Information
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
                  onClick={() => setSelectedCommittee(index)}
                  className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:scale-[1.02] hover:shadow-xl cursor-pointer transition-all duration-300 h-full ${committee.featured ? "ring-2 ring-blue-400" : ""}`}
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

                    <div className="flex items-center gap-3 mb-6">
                      <Badge className="bg-purple-600/20 text-purple-300 border-purple-400/30">
                        {committee.language}
                      </Badge>
                      <Badge className="bg-indigo-600/20 text-indigo-300 border-indigo-400/30">
                        {committee.level === "HS" ? "High School" : "Middle School"}
                      </Badge>
                    </div>

                    {/* Chair and Co-Chair Information */}
                    <div className="border-t border-white/10 pt-6 mb-6">
                      <h5 className="font-semibold text-white mb-4">Committee Leadership</h5>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={committee.chair.image || "/placeholder.svg"}
                            alt={committee.chair.name}
                            width={80}
                            height={80}
                            className="w-16 h-16 rounded-full"
                          />
                          <div>
                            <div className="font-semibold text-white">Chair: {committee.chair.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Image
                            src={committee.coChair.image || "/placeholder.svg"}
                            alt={committee.coChair.name}
                            width={80}
                            height={80}
                            className="w-16 h-16 rounded-full"
                          />
                          <div>
                            <div className="font-semibold text-white">Co-Chair: {committee.coChair.name}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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

      {/* Footer */}
      <Footer />

      {/* Committee Detail Modal */}
      <Dialog open={selectedCommittee !== null} onOpenChange={(open) => !open && setSelectedCommittee(null)}>
        <DialogContent className="max-w-6xl w-[90vw] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-white/20 text-white">
          {selectedCommittee !== null && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600/20 w-20 h-20 rounded-2xl flex items-center justify-center">
                      <div className="text-blue-400 text-4xl">{committees[selectedCommittee].icon}</div>
                    </div>
                    <div>
                      <DialogTitle className="text-3xl font-bold text-white mb-2">
                        {committees[selectedCommittee].acronym}
                      </DialogTitle>
                      <div className="flex items-center gap-3">
                        <Badge className={getDifficultyColor(committees[selectedCommittee].difficulty)}>
                          {committees[selectedCommittee].difficulty}
                        </Badge>
                        {committees[selectedCommittee].featured && (
                          <Badge className="bg-blue-600 text-white">Featured</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{committees[selectedCommittee].name}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{committees[selectedCommittee].description}</p>
                </div>

                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-300 mb-3 text-lg">Committee Topic:</h4>
                  <p className="text-white font-medium text-lg">{committees[selectedCommittee].topic}</p>
                </div>

                <div className="flex items-center gap-4">
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-400/30 text-base px-4 py-2">
                    {committees[selectedCommittee].language}
                  </Badge>
                  <Badge className="bg-indigo-600/20 text-indigo-300 border-indigo-400/30 text-base px-4 py-2">
                    {committees[selectedCommittee].level === "HS" ? "High School" : "Middle School"}
                  </Badge>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-semibold text-white mb-4 text-xl">Committee Leadership</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-6 bg-white/5 rounded-xl p-6">
                      <Image
                        src={committees[selectedCommittee].chair.image || "/placeholder.svg"}
                        alt={committees[selectedCommittee].chair.name}
                        width={160}
                        height={160}
                        className="w-40 h-40 rounded-full"
                      />
                      <div>
                        <div className="text-base text-gray-400 mb-2">Chair</div>
                        <div className="font-semibold text-white text-xl">{committees[selectedCommittee].chair.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 bg-white/5 rounded-xl p-6">
                      <Image
                        src={committees[selectedCommittee].coChair.image || "/placeholder.svg"}
                        alt={committees[selectedCommittee].coChair.name}
                        width={160}
                        height={160}
                        className="w-40 h-40 rounded-full"
                      />
                      <div>
                        <div className="text-base text-gray-400 mb-2">Co-Chair</div>
                        <div className="font-semibold text-white text-xl">{committees[selectedCommittee].coChair.name}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                    <Download className="w-5 h-5 mr-2" />
                    Download Study Guide
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
