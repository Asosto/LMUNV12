import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Create a response to modify
  const res = NextResponse.next()
  
  // Create the Supabase client
  const supabase = createMiddlewareClient({ req, res })

  try {
    // Get the session (this will also refresh if needed)
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Get the current path
    const path = req.nextUrl.pathname
    console.log('Middleware - Path:', path, 'Has session:', !!session)

    // Handle login page access
    if (path === '/admin/login') {
      if (session) {
        // If logged in, redirect to dashboard
        return NextResponse.redirect(new URL('/admin/dashboard', req.url))
      }
      // Allow access to login page if not logged in
      return res
    }

    // Handle other admin routes
    if (path.startsWith('/admin')) {
      if (!session) {
        // If not logged in, redirect to login
        return NextResponse.redirect(new URL('/admin/login', req.url))
      }
    }

    // Allow access to protected routes if we have a session
    return res

  } catch (error) {
    console.error('Middleware error:', error)
    // On error, redirect to login
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }
}

export const config = {
  matcher: ['/admin/:path*'],
} 