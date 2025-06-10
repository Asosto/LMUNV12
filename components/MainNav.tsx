import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export function MainNav() {
  return (
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
            <Link href="/conference-info" className="text-white hover:text-blue-400 transition-colors">
              Conference Info
            </Link>
            <Link href="/resources" className="text-white hover:text-blue-400 transition-colors">
              Resources
            </Link>
            <Link href="/upload" className="text-white hover:text-blue-400 transition-colors">
              Upload Payment
            </Link>
            <Link href="/admin/login" className="text-white hover:text-blue-400 transition-colors">
              Admin
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
} 