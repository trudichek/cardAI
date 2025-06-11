import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Sparkles } from "lucide-react"

export default function ExampleScenario() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                Example
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                See It In Action
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Rob is turning 30. He loves tennis and cycling, and you pick the <em>cartoon</em> style. Our AI combines
              all that into a fun birthday card.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Occasion:</strong> Birthday
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Interests:</strong> Tennis, Cycling
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Style:</strong> Cartoon
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-0">
                <Image
                  src="https://source.unsplash.com/random/640x400?cartoon,tennis,cycling"
                  alt="AI-generated cartoon postcard featuring tennis and cycling themes"
                  width={640}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </CardContent>
            </Card>

            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                AI-generated preview – ready to print or e-mail.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
