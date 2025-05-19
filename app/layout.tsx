import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Spotlight } from "@/components/effects/Spotlight"

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background w-full overflow-x-hidden relative">
            <Header />
            <Spotlight />
            <main className="mx-auto px-4 py-8 max-w-[1000px]">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
