"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"

interface Viewpoint {
  id: number
  image: string
  title: string
  description: string
}

const viewpoints: Viewpoint[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600",
    title: "Living Room",
    description: "Spacious living area with modern furnishings and large windows."
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600",
    title: "Kitchen",
    description: "Fully equipped kitchen with state-of-the-art appliances."
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=600",
    title: "Bedroom",
    description: "Cozy bedroom with a king-size bed and ample storage."
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=600",
    title: "Bathroom",
    description: "Luxurious bathroom with a walk-in shower and double vanity."
  }
]

export default function VirtualTour() {
  const [currentViewpoint, setCurrentViewpoint] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  const nextViewpoint = () => {
    setCurrentViewpoint((prev) => (prev + 1) % viewpoints.length)
    setShowInfo(false)
  }

  const prevViewpoint = () => {
    setCurrentViewpoint((prev) => (prev - 1 + viewpoints.length) % viewpoints.length)
    setShowInfo(false)
  }

  const toggleInfo = () => {
    setShowInfo((prev) => !prev)
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl ">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center p-6">
                Projects
                </h2>
      <div className="relative overflow-hidden">
        <div className="p-0">
          <img
            src={viewpoints[currentViewpoint].image}
            alt={viewpoints[currentViewpoint].title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={prevViewpoint} className="text-white">
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous viewpoint</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={nextViewpoint} className="text-white">
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next viewpoint</span>
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <Button variant="secondary" size="sm" onClick={toggleInfo} className="w-full">
              <Info className="mr-2 h-4 w-4" />
              {showInfo ? "Hide Info" : "Show Info"}
            </Button>
          </div>
        </div>
      </div>
      {showInfo && (
        <div className="mt-4">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{viewpoints[currentViewpoint].title}</h2>
            <p>{viewpoints[currentViewpoint].description}</p>
          </div>
        </div>
      )}
      <div className="mt-4 flex justify-center space-x-2">
        {viewpoints.map((viewpoint, index) => (
          <Button
            key={viewpoint.id}
            variant={index === currentViewpoint ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setCurrentViewpoint(index)
              setShowInfo(false)
            }}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}