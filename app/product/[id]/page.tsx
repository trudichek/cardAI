"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Heart, Share2, Truck, Shield, Sparkles } from "lucide-react"
import { useCart } from "@/components/CartProvider"
import { useParams } from "next/navigation"

// Mock product data - in a real app, this would come from an API
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: "1",
      title: "Dreamy Watercolor",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      price: 4.99,
      description: "Soft watercolor style perfect for romantic messages",
      longDescription:
        "This beautiful watercolor style creates dreamy, ethereal postcards perfect for expressing heartfelt emotions. The AI generates soft, flowing colors that blend seamlessly together, creating a romantic and artistic feel that's perfect for love letters, thank you notes, or any message that comes from the heart.",
    },
  }
  return products[id as keyof typeof products] || products["1"]
}

export default function ProductDetail() {
  const params = useParams()
  const product = getProduct(params.id as string)
  const { addToCart } = useCart()

  const [size, setSize] = useState<"A6" | "A5">("A6")
  const [finish, setFinish] = useState<"matte" | "glossy">("matte")
  const [message, setMessage] = useState("")
  const [quantity, setQuantity] = useState(1)

  const sizeOptions = {
    A6: { name: "A6 (10.5 × 14.8 cm)", price: 0 },
    A5: { name: "A5 (14.8 × 21.0 cm)", price: 1.5 },
  }

  const finishOptions = {
    matte: { name: "Matte Finish", price: 0 },
    glossy: { name: "Glossy Finish", price: 0.5 },
  }

  const totalPrice = (product.price + sizeOptions[size].price + finishOptions[finish].price) * quantity

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${size}-${finish}`,
      title: product.title,
      price: product.price + sizeOptions[size].price + finishOptions[finish].price,
      image: product.image,
      quantity,
      size,
      finish,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-2xl">
              <CardContent className="p-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Heart className="w-4 h-4 mr-2" />
                Save to Favorites
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Generated
              </Badge>
              <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{product.longDescription}</p>
            </div>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 space-y-6">
                {/* Size Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Size</label>
                  <Select value={size} onValueChange={(value: "A6" | "A5") => setSize(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(sizeOptions).map(([key, option]) => (
                        <SelectItem key={key} value={key}>
                          {option.name} {option.price > 0 && `(+€${option.price.toFixed(2)})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Finish Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Finish</label>
                  <Select value={finish} onValueChange={(value: "matte" | "glossy") => setFinish(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(finishOptions).map(([key, option]) => (
                        <SelectItem key={key} value={key}>
                          {option.name} {option.price > 0 && `(+€${option.price.toFixed(2)})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Personal Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Personal Message (Optional)
                  </label>
                  <Textarea
                    placeholder="Write your personal message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Maximum 200 characters</p>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Quantity</label>
                  <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Price Display */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Base price:</span>
                    <span>€{product.price.toFixed(2)}</span>
                  </div>
                  {sizeOptions[size].price > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Size upgrade:</span>
                      <span>+€{sizeOptions[size].price.toFixed(2)}</span>
                    </div>
                  )}
                  {finishOptions[finish].price > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>Finish upgrade:</span>
                      <span>+€{finishOptions[finish].price.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Includes 21% VAT</p>
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - €{totalPrice.toFixed(2)}
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <Truck className="w-5 h-5 text-green-500" />
                <span>Free shipping in NL</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <Shield className="w-5 h-5 text-green-500" />
                <span>5-day delivery guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
