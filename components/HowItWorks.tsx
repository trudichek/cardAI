import { Card, CardContent } from "@/components/ui/card"
import { Palette, MessageSquare, Heart, Truck } from "lucide-react"

const steps = [
  {
    icon: Palette,
    title: "Choose Your Style",
    description: "Select from various AI art styles - from watercolor to digital art, vintage to modern.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Describe Your Vision",
    description: "Tell our AI what you want to see. Be creative - describe scenes, emotions, or memories.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Pick Your Favorite",
    description: "Our AI generates multiple designs. Choose the one that speaks to your heart.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Truck,
    title: "We Print & Ship",
    description: "High-quality printing on premium paper, delivered to your door in just 5 days.",
    color: "from-orange-500 to-yellow-500",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Creating your perfect postcard is as easy as 1, 2, 3, 4! Our simple process turns your imagination into
            reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-6`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
