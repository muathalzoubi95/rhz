'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Download, List, Maximize2, Minimize2, Search, ZoomIn, ZoomOut } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

// Sample document data
const documentPages = [
  { id: 1, content: "This is the first page of the document. It contains important information about the topic at hand." },
  { id: 2, content: "Page two delves deeper into the subject matter, providing detailed explanations and examples." },
  { id: 3, content: "The third page presents a case study that illustrates the concepts discussed in the previous pages." },
  { id: 4, content: "Page four offers a comprehensive analysis of the findings from the case study." },
  { id: 5, content: "The final page summarizes the key points and provides conclusions based on the information presented." },
]

const tableOfContents = [
  { id: 1, title: "Introduction", page: 1 },
  { id: 2, title: "Main Concepts", page: 2 },
  { id: 3, title: "Case Study", page: 3 },
  { id: 4, title: "Analysis", page: 4 },
  { id: 5, title: "Conclusion", page: 5 },
]

export default function DocumentViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoomLevel, setZoomLevel] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= documentPages.length) {
      setCurrentPage(newPage)
    }
  }

  const handleZoomChange = (newZoom: number[]) => {
    setZoomLevel(newZoom[0])
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <div className="flex flex-col  bg-background pt-6 ">
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Table of Contents</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-8rem)] mt-4">
                {tableOfContents.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-start text-white"
                    onClick={() => handlePageChange(item.page)}
                  >
                    {item.title} (Page {item.page})
                  </Button>
                ))}
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <input
            type="number"
            min={1}
            max={documentPages.length}
            value={currentPage}
            onChange={(e) => handlePageChange(parseInt(e.target.value))}
            className="w-16  text-white py-1 shadow leading-tight focus:outline-none focus:shadow-outline "
          />
          <span className="text-sm text-muted-foreground">
            of {documentPages.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => handleZoomChange([zoomLevel - 10])}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Slider
            min={50}
            max={200}
            step={10}
            value={[zoomLevel]}
            onValueChange={handleZoomChange}
            className="w-[100px]"
          />
          <Button variant="outline" size="icon" onClick={() => handleZoomChange([zoomLevel + 10])}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4">
        <div
          className="bg-white rounded-lg shadow-lg p-8 mx-auto transition-all  text-black duration-200 ease-in-out"
          style={{
            zoom: `${zoomLevel}%`,
            maxWidth: '700px',
            minHeight: '750px',
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Page {currentPage}</h2>
          <p className="text-lg leading-relaxed">{documentPages[currentPage - 1].content}</p>
        </div>
      </main>
      <footer className="flex items-center bg-gray-8000 justify-between px-4 py-2 border-t fixed bottom-0 left-0 right-0">
        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-64"
          />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === documentPages.length}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </footer>
    </div>
  )
}