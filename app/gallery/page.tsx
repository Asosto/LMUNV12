"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/Footer"

export default function GalleryPage() {
  const galleryYears = [
    {
      year: "2023",
      driveLink: "https://drive.google.com/drive/u/5/folders/1riFnJ9bCvOorcLZhNFdaPx-OweebOZgd",
      image: "/Gallery1.JPG",
    },
    {
      year: "2024",
      driveLink: "https://drive.google.com/drive/folders/1Xd9oaaeS4EIiu84kcz1Lwqu4kvs8izgi",
      image: "/Gallery2.JPG",
    },
    {
      year: "2026",
      driveLink: "https://drive.google.com/drive/folders/183briE1bZ979-PtgxDzhw5SZ4XuD0Jwz?usp=sharing",
      image: "/Gallery3.JPG",
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
              <Link href="/gallery" className="text-blue-400 font-medium">
                Gallery
              </Link>
              <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-5 py-2 px-4 text-base bg-blue-600/20 text-blue-300 border-blue-400/30">
              <Camera className="w-5 h-5 mr-2" />
              Conference Gallery
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              CONFERENCE
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PHOTO GALLERY
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-0 leading-relaxed">
              Relive the memorable moments from LMUN conferences. Browse through photos from past years and experience
              the highlights of our conferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Year Gallery Boxes */}
      <section className="pb-20 pt-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryYears.map((yearData, index) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <CardContent className="p-0 text-center flex flex-col h-full">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={yearData.image}
                        alt={`LMUN ${yearData.year} Gallery`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center flex-1">
                      <h3 className="text-4xl font-bold text-white mb-4">{yearData.year}</h3>
                      <p className="text-gray-300 mb-6">View photos from LMUN {yearData.year}</p>
                      <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                        size="lg"
                      >
                        <a
                          href={yearData.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Gallery
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
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
    </div>
  )
}
