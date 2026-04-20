"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ToppersMeals = [
  {
    id: 1,
    meal: "ToppersA",
    description: "Java Rice and Chicken Sisig",
    price: 50.00,
    image: "/images/ToppersA.png"
  }
]

export const Products = () => {
  return (
    <div className="w-full h-full bg-red-500">
    
      {ToppersMeals.map((product) => (
        
        <Card key={product.id} className="mx-auto max-w-sm overflow-hidden">

  
        <div className="w-full">
           <CardAction>
              <Badge variant="secondary">Featured</Badge>
            </CardAction>

            <CardTitle>{product.meal}</CardTitle>
          
          <Image
            src={product.image}
            alt={product.meal}
            width={400}
            height={300}
            className="w-full h-120 object-cover"
          />
        </div>

          
           

            <CardDescription className="text-center">
              {product.description}
            </CardDescription>
          

          <CardFooter>
            <Button className="w-full">
              Add to Cart - ₱{product.price}
            </Button>
          </CardFooter>

        </Card>
              ))}
            </div>
            
  )
}