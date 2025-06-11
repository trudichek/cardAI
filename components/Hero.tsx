"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const styleOccasionCombos = [
  {
    id: 1,
    style: "Water-colour",
    occasion: "Birthday",
    image: "https://source.unsplash.com/random/640x400?watercolor,birthday",
  },
  {
    id: 2,
    style: "Cartoon",
    occasion: "Congratulations",
    image: "https://source.unsplash.com/random/640x400?cartoon,congratulations",
  },
  {
    id: 3,
    style: "Minimalist",
    occasion: "Thank-You",
    image: "https://source.unsplash.com/random/640x400?minimalist,thank-you",
  },
  {
    id: 4,
    style: "Vintage",
    occasion: "Farewell",
    image: "https://source.unsplash.com/random/640x400?vintage,farewell",
  },
]

const scrollToCatalogue = () => {
  const catalogueSection = document.querySelector("#products")
  if (catalogueSection) {
    catalogueSection.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Postcard Creation
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Create a unique{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              AI postcard
            </span>{" "}
            & we'll deliver it for you
          </h1>

          <div className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 space-y-2">
            <p>Design a one-of-a-kind postcard in seconds.</p>
            <p>
              We'll print it or send a high-res digital copy <strong>free</strong> via e-mail.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Creating
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={scrollToCatalogue}
              className="px-8 py-4 text-lg rounded-full border-2 border-purple-200 hover:border-purple-300 dark:border-purple-700 dark:hover:border-purple-600"
            >
              See Examples
            </Button>
          </div>
        </div>

        {/* Style + Occasion Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {styleOccasionCombos.map((combo) => (
                <CarouselItem key={combo.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white dark:bg-gray-800 shadow-2xl border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={combo.image || "/placeholder.svg"}
                          alt={`${combo.style} ${combo.occasion} postcard`}
                          width={640}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white font-semibold text-lg">{combo.style}</p>
                              <p className="text-white/80 text-sm">{combo.occasion}</p>
                            </div>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={scrollToCatalogue}
                              className="bg-white/90 hover:bg-white text-gray-900 text-xs"
                            >
                              Try this style
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
