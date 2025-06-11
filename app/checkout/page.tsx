"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CreditCard, Truck, Shield, Lock } from "lucide-react"
import { useCart } from "@/components/CartProvider"

export default function Checkout() {
  const { state, totalPrice } = useCart()
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    paymentMethod: "stripe",
  })

  const shippingCost = 0 // Free shipping
  const vatRate = 0.21
  const subtotal = totalPrice
  const vatAmount = subtotal * vatRate
  const total = subtotal + shippingCost

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle checkout submission
    console.log("Checkout submitted:", formData)
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Add some postcards to your cart before checking out.
            </p>
            <Button asChild>
              <Link href="/">Browse Postcards</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-6">
            <h1 className="font-display text-3xl font-bold text-gray-900 dark:text-white">Checkout</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
                  >
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="stripe" id="stripe" />
                      <Label htmlFor="stripe" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="w-5 h-5" />
                        Credit Card (Stripe)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="mollie" id="mollie" />
                      <Label htmlFor="mollie" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="w-5 h-5" />
                        iDEAL / Mollie
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-purple-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500">
                          {item.size} • {item.finish} • Qty: {item.quantity}
                        </p>
                        <p className="font-semibold text-sm">€{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping:</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>VAT (21%):</span>
                    <span>€{vatAmount.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Features */}
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Truck className="w-4 h-4 text-green-500" />
                    <span>5-day delivery guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Lock className="w-4 h-4 text-green-500" />
                    <span>SSL encrypted</span>
                  </div>
                </div>

                {/* Complete Order Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 mt-6"
                  size="lg"
                  onClick={handleSubmit}
                >
                  Complete Order - €{total.toFixed(2)}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
