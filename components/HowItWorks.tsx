import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageSquare, Palette, Truck } from "lucide-react"

const steps = [
  {
    icon: Palette,
    title: "Choose your occasion",
    description: "Birthday, Thank-You, Farewell… it's up to you.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Tell us about them",
    description: "Add interests, photos or fun facts.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Pick your favourite design",
    description: "AI generates several cards; choose the best.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Truck,
    title: "We handle the rest",
    description: "We print & ship, or e-mail a free digital version.",
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
            Creating your perfect postcard is simple and fun. Just follow these easy steps.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 via-red-300 to-orange-300 dark:from-purple-600 dark:via-pink-600 dark:via-red-600 dark:to-orange-600 transform -translate-y-1/2" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-4 relative z-10`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                        {index + 1}
                      </div>

                      <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center relative`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vertical Connection Line for Mobile */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 transform -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
