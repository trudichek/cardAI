"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const samplePostcards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    title: "Dreamy Landscape",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    title: "Abstract Art",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    title: "Mountain Vista",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    title: "Ocean Waves",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % samplePostcards.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Postcard Creation
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Turn ideas into{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              beautiful postcards
            </span>{" "}
            with AI
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Create personalized postcards that capture your imagination. Our AI transforms your ideas into stunning
            artwork, printed on premium paper and delivered across the Netherlands in just 5 days.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Creating
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Postcard Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center items-center space-x-4 overflow-hidden">
            {samplePostcards.map((postcard, index) => (
              <div
                key={postcard.id}
                className={`transition-all duration-500 transform ${
                  index === currentSlide
                    ? "scale-110 z-10 opacity-100"
                    : index === (currentSlide + 1) % samplePostcards.length ||
                        index === (currentSlide - 1 + samplePostcards.length) % samplePostcards.length
                      ? "scale-90 opacity-70"
                      : "scale-75 opacity-40"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl">
                  <Image
                    src={postcard.image || "/placeholder.svg"}
                    alt={postcard.title}
                    width={300}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                  <p className="text-center mt-3 font-medium text-gray-700 dark:text-gray-300">{postcard.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {samplePostcards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-purple-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
