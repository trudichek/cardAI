import type React from "react"
import type { Metadata } from "next"
import { Inter, Fredoka } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/CartProvider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" })

export const metadata: Metadata = {
  title: "Postcard-AI",
  description: "Turn ideas into beautiful postcards with AI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fredoka.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
