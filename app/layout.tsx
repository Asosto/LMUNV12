import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'

export const metadata: Metadata = {
  title: 'LMUN Website',
  description: 'LMUN Website',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}<Analytics/></body>
    </html>
  )
}
