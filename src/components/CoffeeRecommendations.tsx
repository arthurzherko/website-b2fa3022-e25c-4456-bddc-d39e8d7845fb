import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Your Perfect Coffee Matches</h2>
        <p className="mt-2 text-muted-foreground">
          Based on your preferences, we think you'll love these selections
        </p>
      </div>

      <Carousel className="mx-auto w-full max-w-4xl">
        <CarouselContent>
          {recommendations.map((coffee) => (
            <CarouselItem key={coffee.id} className="md:basis-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>{coffee.name}</CardTitle>
                  <CardDescription>★★★★☆ ({coffee.rating})</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="mb-4 aspect-square rounded-lg object-cover"
                  />
                  <p className="text-sm text-muted-foreground">
                    {coffee.description}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-lg font-bold">${coffee.price}</span>
                  <Button onClick={() => onPurchase(coffee.id)}>
                    <FaShoppingCart />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}