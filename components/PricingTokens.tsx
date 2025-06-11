import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

const pricingPlans = [
  {
    name: "Single Postcard",
    price: "{{SINGLE_TOKEN_PRICE}}",
    originalPrice: null,
    tokens: 1,
    popular: false,
    features: ["One AI-generated postcard", "Premium paper quality", "Free shipping in NL", "5-day delivery guarantee"],
  },
  {
    name: "5-Pack Bundle",
    price: "{{FIVE_PACK_PRICE}}",
    originalPrice: "{{FIVE_PACK_ORIGINAL_PRICE}}",
    tokens: 5,
    popular: true,
    features: [
      "Five AI-generated postcards",
      "Premium paper quality",
      "Free shipping in NL",
      "5-day delivery guarantee",
      "Save 15% vs single cards",
    ],
  },
  {
    name: "10-Pack Bundle",
    price: "{{TEN_PACK_PRICE}}",
    originalPrice: "{{TEN_PACK_ORIGINAL_PRICE}}",
    tokens: 10,
    popular: false,
    features: [
      "Ten AI-generated postcards",
      "Premium paper quality",
      "Free shipping in NL",
      "5-day delivery guarantee",
      "Save 25% vs single cards",
      "Perfect for special occasions",
    ],
  },
]

export default function PricingTokens() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you need one special postcard or planning for multiple occasions, we have the perfect package for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.popular ? "border-2 border-purple-500 shadow-2xl scale-105" : "border-0 shadow-lg hover:shadow-xl"
              } bg-white dark:bg-gray-800 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
                  <Sparkles className="inline w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"}`}>
                <CardTitle className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">€{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">€{plan.originalPrice}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {plan.tokens} postcard{plan.tokens > 1 ? "s" : ""} • incl. 21% VAT
                </p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      : "bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  } text-white ${plan.popular ? "" : "dark:text-gray-900"}`}
                  size="lg"
                >
                  Buy {plan.tokens} Token{plan.tokens > 1 ? "s" : ""}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
