import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import Image from "next/image"

export function MainNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="LMUN Logo" width={60} height={20} />
              <span className="text-3xl font-bold text-white">LMUN</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-400 font-medium">
                Home
              </Link>
               <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
                Committees
              </Link>
              <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
                Schedule
              </Link>
              <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
                Gallery
              </Link>
              <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
                Conference Info
              </Link>
              <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
                Resources
              </Link>
              <Link href="/soon" className="text-white hover:text-blue-400 transition-colors">
                Upload Payment
              </Link> 
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>
  )
} 