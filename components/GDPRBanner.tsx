"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie } from "lucide-react"

export default function GDPRBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-white dark:bg-gray-800 shadow-2xl border-0">
        <CardContent className="p-6">
          <div className="flex items-start gap-3 mb-4">
            <Cookie className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">We use cookies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. By continuing
                to use our site, you consent to our use of cookies.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={acceptCookies}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              size="sm"
            >
              Accept All
            </Button>
            <Button onClick={declineCookies} variant="outline" size="sm">
              Decline
            </Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Learn more in our{" "}
            <a href="/privacy" className="underline hover:text-purple-600">
              Privacy Policy
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
