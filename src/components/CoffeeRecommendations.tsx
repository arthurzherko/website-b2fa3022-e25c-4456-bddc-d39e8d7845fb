import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaShoppingCart } from "react-icons/fa"

interface CoffeeProduct {
  id: string
  name: string
  description: string
  image: string
  price: number
  rating: number
}

interface CoffeeRecommendationsProps {
  recommendations: CoffeeProduct[]
  onPurchase: (productId: string) => void
}

export const CoffeeRecommendations = ({
  recommendations,
  onPurchase,
}: CoffeeRecommendationsProps) => {
  // Take only the first recommendation
  const topMatch = recommendations[0]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Your Perfect Coffee Match</h2>
        <p className="mt-2 text-muted-foreground">
          Based on your preferences, we've found your ideal coffee
        </p>
      </div>

      <div className="mx-auto w-full max-w-md">
        {topMatch && (
          <Card>
            <CardHeader>
              <CardTitle>{topMatch.name}</CardTitle>
              <CardDescription>★★★★☆ ({topMatch.rating})</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={topMatch.image}
                alt={topMatch.name}
                className="mb-4 aspect-square rounded-lg object-cover"
              />
              <p className="text-sm text-muted-foreground">
                {topMatch.description}
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <span className="text-lg font-bold">${topMatch.price}</span>
              <Button onClick={() => onPurchase(topMatch.id)}>
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}