"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Committees", href: "/committees" },
    { name: "Gallery", href: "/gallery" },
    { name: "Conference Information", href: "/conference-info" },
    { name: "Resources", href: "/resources" },
    { name: "Upload Payment", href: "/upload" },
    { name: "Admin", href: "/admin/login" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-slate-900/95 backdrop-blur-md border-slate-800 p-0">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <div className="font-bold text-xl text-white">LMUN</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 overflow-auto py-6">
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                  className="space-y-2 px-6"
                >
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center py-3 text-lg font-medium text-white hover:text-blue-400 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
          <div className="p-6 border-t border-slate-800">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpen(false)} asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSedNwUoCCEAvbmzqY21JoNnDv9I5rdT0GOlxxfcjAFi-wv6DA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
