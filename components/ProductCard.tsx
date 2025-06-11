"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Eye, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/CartProvider"

interface Product {
  id: string
  title: string
  image: string
  price: number
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: "A6",
      finish: "matte",
    })
  }

  return (
    <Card className="group overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
          AI Generated
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">€{product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">incl. 21% VAT</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/product/${product.id}`}>
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Link>
        </Button>
        <Button
          onClick={handleAddToCart}
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
