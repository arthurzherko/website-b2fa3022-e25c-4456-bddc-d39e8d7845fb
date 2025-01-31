import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you like your coffee?",
    options: ["Strong", "Medium", "Mild"],
  },
  {
    id: 2,
    question: "Do you prefer a particular roast?",
    options: ["Light", "Medium", "Dark"],
  },
  {
    id: 3,
    question: "Any specific flavor notes you enjoy?",
    options: ["Fruity", "Nutty", "Chocolate", "Floral"],
  },
]

interface CoffeeQuizProps {
  onComplete: (answers: Record<number, string>) => void
}

export const CoffeeQuiz = ({ onComplete }: CoffeeQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [QUIZ_QUESTIONS[currentQuestion].id]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion === QUIZ_QUESTIONS.length - 1) {
      onComplete(answers)
    } else {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  const question = QUIZ_QUESTIONS[currentQuestion]

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Coffee Preference Quiz</CardTitle>
        <CardDescription>
          Help us understand your taste preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">{question.question}</h3>
          <RadioGroup
            onValueChange={handleAnswer}
            value={answers[question.id]}
            className="gap-3"
          >
            {question.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleNext}
          disabled={!answers[question.id]}
          className="w-full"
        >
          {currentQuestion === QUIZ_QUESTIONS.length - 1
            ? "Get Recommendations"
            : "Next Question"}
        </Button>
      </CardFooter>
    </Card>
  )
}