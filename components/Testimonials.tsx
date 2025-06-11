import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Emma van der Berg",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    location: "Amsterdam",
    rating: 5,
    quote:
      "Absolutely love my AI-generated postcard! The quality is amazing and it arrived exactly when promised. My grandmother was so surprised to receive such a unique and personal card.",
  },
  {
    name: "Lars Janssen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    location: "Utrecht",
    rating: 5,
    quote:
      "The AI perfectly captured the mood I was going for. I've ordered 5 more postcards for different occasions. The whole process is so easy and fun!",
  },
  {
    name: "Sophie de Wit",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    location: "Rotterdam",
    rating: 5,
    quote:
      "I was skeptical about AI art at first, but these postcards are genuinely beautiful. The paper quality is excellent and the colors are vibrant. Highly recommended!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of happy customers who've discovered the magic of AI-generated postcards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
