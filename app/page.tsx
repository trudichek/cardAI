import type { Metadata } from "next"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import ProductCatalogue from "@/components/ProductCatalogue"
import Testimonials from "@/components/Testimonials"
import PricingTokens from "@/components/PricingTokens"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import GDPRBanner from "@/components/GDPRBanner"
import ExampleScenario from "@/components/ExampleScenario"

export const metadata: Metadata = {
  title: "Postcard-AI | Turn Ideas into Beautiful AI-Generated Postcards",
  description:
    "Create personalized postcards with AI. Choose your style, describe your vision, and we'll print and ship beautiful postcards across the Netherlands in just 5 days.",
  keywords: "AI postcards, personalized postcards, Netherlands, custom postcards, AI art",
  openGraph: {
    title: "Postcard-AI | AI-Generated Postcards",
    description: "Turn your ideas into beautiful postcards with AI technology",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <Hero />
      <HowItWorks />
      <ExampleScenario />
      <ProductCatalogue />
      <Testimonials />
      <PricingTokens />
      <FAQ />
      <Footer />
      <GDPRBanner />
    </main>
  )
}
