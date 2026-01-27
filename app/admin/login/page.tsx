"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { supabase } from '@/lib/supabase'
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) throw signInError

      if (!data.user || !data.session) {
        throw new Error('Login failed - no user or session returned')
      }

      toast({
        title: "Success",
        description: "Logged in successfully",
      })

      // The middleware will handle the redirect
      router.refresh()
      
    } catch (error: any) {
      console.error('Login error:', error)
      setError(error.message || 'An error occurred during login')
      toast({
        title: "Error",
        description: error.message || 'An error occurred during login',
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0" />

      <div className="relative z-10">
        <Card className="w-[400px] bg-white/10 backdrop-blur-md border-white/20 text-white shadow-2xl">
          <CardHeader className="text-center">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
              <Image src="/logo.png" alt="LMUN Logo" width={40} height={40} className="object-contain" />
              <span className="text-2xl font-bold">LMUN</span>
            </Link>
            <CardTitle className="text-2xl font-semibold">Admin Portal</CardTitle>
            <CardDescription className="text-gray-400">
              Please sign in to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {error && (
                <div className="text-sm text-red-400 text-center pt-2">
                  {error}
                </div>
              )}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base" type="submit" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button variant="link" asChild className="text-gray-400 hover:text-white w-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to main website
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 