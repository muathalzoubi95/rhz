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
    <div className="container mx-auto max-w-3xl p-4 ">
      <h2 className="p-6 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
                Projects
                </h2>
      <div className="relative overflow-hidden">
        <div className="p-0">
          <img
            src={viewpoints[currentViewpoint].image}
            alt={viewpoints[currentViewpoint].title}
            className="h-[400px] w-full object-cover"
          />
          <div className="absolute left-0 top-0 flex size-full items-center justify-between bg-black bg-opacity-50">
            <Button variant="ghost" size="icon" onClick={prevViewpoint} className="text-white">
              <ChevronLeft className="size-8" />
              <span className="sr-only">Previous viewpoint</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={nextViewpoint} className="text-white">
              <ChevronRight className="size-8" />
              <span className="sr-only">Next viewpoint</span>
            </Button>
          </div>
          <div className="absolute inset-x-4 bottom-4">
            <Button variant="secondary" size="sm" onClick={toggleInfo} className="w-full">
              <Info className="mr-2 size-4" />
              {showInfo ? "Hide Info" : "Show Info"}
            </Button>
          </div>
        </div>
      </div>
      {showInfo && (
        <div className="mt-4">
          <div className="p-4">
            <h2 className="mb-2 text-xl font-semibold">{viewpoints[currentViewpoint].title}</h2>
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