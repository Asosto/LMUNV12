"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Camera, Users, Eye, Download, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/Footer"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCommittee, setSelectedCommittee] = useState("all")

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      title: "UNSC Opening Session",
      committee: "UNSC",
      description: "Delegates during the opening statements of the Security Council session",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      title: "GA1 Debate Session",
      committee: "GA1",
      description: "Intense debate on nuclear disarmament in the General Assembly",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      title: "ECOSOC Working Groups",
      committee: "ECOSOC",
      description: "Delegates collaborating on sustainable development solutions",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      title: "WHO Crisis Committee",
      committee: "WHO",
      description: "Emergency session addressing global health security",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      title: "ICJ Court Proceedings",
      committee: "ICJ",
      description: "Formal court session with judges and legal representatives",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      title: "UNEP Environmental Summit",
      committee: "UNEP",
      description: "Climate change discussions and environmental policy debates",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      title: "Opening Ceremony",
      committee: "General",
      description: "Grand opening ceremony with all delegates and dignitaries",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      title: "Networking Reception",
      committee: "General",
      description: "Delegates networking during the welcome reception",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      title: "Awards Ceremony",
      committee: "General",
      description: "Recognition of outstanding delegates and achievements",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      title: "UNSC Voting Session",
      committee: "UNSC",
      description: "Critical voting on international security resolutions",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      title: "GA1 Resolution Drafting",
      committee: "GA1",
      description: "Delegates working together on resolution drafting",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      title: "Cultural Night",
      committee: "General",
      description: "Celebrating diversity through cultural performances",
    },
  ]

  const committees = ["all", "UNSC", "GA1", "ECOSOC", "WHO", "ICJ", "UNEP", "General"]

  const filteredImages =
    selectedCommittee === "all" ? galleryImages : galleryImages.filter((img) => img.committee === selectedCommittee)

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
              <Link href="/schedule" className="text-white hover:text-blue-400 transition-colors">
                Schedule
              </Link>
              <Link href="/gallery" className="text-blue-400 font-medium">
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
              <Camera className="w-4 h-4 mr-2" />
              Conference Gallery
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              CONFERENCE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PHOTO GALLERY
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Relive the memorable moments from LMUN conferences. Browse through committee sessions, networking
              events, and ceremonial highlights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {committees.map((committee) => (
              <Button
                key={committee}
                variant={selectedCommittee === committee ? "default" : "outline"}
                onClick={() => setSelectedCommittee(committee)}
                className={
                  selectedCommittee === committee
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-white/30 text-white hover:bg-white/10"
                }
              >
                {committee === "all" ? "All Photos" : committee}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          onClick={() => setSelectedImage(image.src)}
                          className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-blue-600/80 text-white">{image.committee}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{image.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{image.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery Image"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            <Button
              size="sm"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700/90 to-blue/90">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Camera className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Create Your Own Memories</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join us at the next LMUNconference and become part of these unforgettable moments. Register now to
              secure your place in diplomatic history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Register for Next Conference
                <Users className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Download All Photos
                <Download className="w-5 h-5 ml-2" />
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
