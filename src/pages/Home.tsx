import { useState } from "react"
import { HeroSection } from "@/components/HeroSection"
import { CoffeeQuiz } from "@/components/CoffeeQuiz"
import { CoffeeRecommendations } from "@/components/CoffeeRecommendations"

const MOCK_RECOMMENDATIONS = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    description: "Light roasted coffee with floral and citrus notes, perfect for pour-over brewing.",
    image: "/placeholder.svg",
    price: 18.99,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Colombian Supremo",
    description: "Medium roast with caramel sweetness and nutty undertones.",
    image: "/placeholder.svg",
    price: 16.99,
    rating: 4.6,
  },
  {
    id: "3",
    name: "Sumatra Mandheling",
    description: "Dark roast with full body and earthy, spicy notes.",
    image: "/placeholder.svg",
    price: 17.99,
    rating: 4.7,
  },
]

export const Home = () => {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleGetStarted = () => {
    setShowQuiz(true)
  }

  const handleQuizComplete = (answers: Record<number, string>) => {
    console.log("Quiz answers:", answers)
    setShowQuiz(false)
    setShowRecommendations(true)
  }

  const handlePurchase = (productId: string) => {
    console.log("Purchase product:", productId)
    // Implement purchase logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {!showQuiz && !showRecommendations && (
        <HeroSection onGetStarted={handleGetStarted} />
      )}

      {showQuiz && (
        <div className="flex min-h-[70vh] items-center justify-center">
          <CoffeeQuiz onComplete={handleQuizComplete} />
        </div>
      )}

      {showRecommendations && (
        <CoffeeRecommendations
          recommendations={MOCK_RECOMMENDATIONS}
          onPurchase={handlePurchase}
        />
      )}
    </div>
  )
}