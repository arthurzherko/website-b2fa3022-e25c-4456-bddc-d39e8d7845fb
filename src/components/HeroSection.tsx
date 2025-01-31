import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaCoffee } from "react-icons/fa"

interface HeroSectionProps {
  onGetStarted: () => void
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="grid min-h-[70vh] grid-cols-1 items-center gap-8 py-12 md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          Discover Your Perfect
          <span className="text-primary"> Coffee Match</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Let our AI find your ideal coffee based on your taste preferences.
          Personalized recommendations for every coffee lover.
        </p>
        <div className="flex gap-4">
          <Button size="lg" onClick={onGetStarted}>
            <FaCoffee />
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img
            src="/coffee-hero.jpg"
            alt="Various coffee drinks"
            className="aspect-video w-full object-cover"
          />
        </CardContent>
      </Card>
    </section>
  )
}