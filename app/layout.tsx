import { Spotlight } from "@/components/effects/Spotlight"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bruce Wang",
  description: "Personal website of Bruce Wang",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background w-full overflow-x-hidden relative">
            <Header />
            <Spotlight />
            <main className="mx-auto px-4 py-8 max-w-[1000px]">{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
