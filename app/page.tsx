import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Users } from "lucide-react"
import { Analytics } from "@vercel/analytics/react"
import GoogleAdsConversion from "@/components/gtag"
export default function LandingPage() {
  
  return (
    <> 
    <div className="flex flex-col min-h-screen ">
       <Analytics/>
      <img className="app " src="./bg.svg" alt="bg" />
      <main className="flex-1">
        <section className="w-full  h-full py-24 md:py-24 lg:py-64 xl:py-42">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 anim">
                <h1 className="py-4 font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white md:text-6xl sm:text-4xl">
                  Hi, I'm Muath Alzoubi, <span className="text-black bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-600 to-90% p-1 ">Front-End</span>Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-l dark:text-gray-400">
                  I build responsive and dynamic web experiences.
                </p>
              </div>
              <div className="space-x-4 anim">
              <Link href={'/projects'}>   <Button className="text-white bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-600 to-90%">View My Work</Button></Link>
              <Link href={'/experiences'}>  <Button variant="outline">Get in Touch</Button></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-32 lg:py-12 backdrop-blur">
          <div className="container px-4 md:px-6 w-full px-4  ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Skills
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-2 rounded-lg">
                <Code className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold text-center">Responsive Layout</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Designing web pages that adapt to different screen sizes and devices using CSS media queries, Flexbox, Grid.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-2 rounded-lg">
                <Code className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold text-center">Cross-Browser Compatibility</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Ensuring that websites look and work well on all major browsers (Chrome, Firefox, Safari, Edge) and older versions when necessary.                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-2 rounded-lg">
                <Code className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold text-center">CSS Preprocessors </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Writing maintainable, DRY (Don't Repeat Yourself) stylesheets by using variables, mixins, and nesting.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-2 rounded-lg">
                <Code className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold text-center"> Performance Optimization </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Optimizing websites for speed by minimizing load times, reducing asset sizes, lazy loading, and using CDNs.                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-2 rounded-lg">
                <Code className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold text-center ">API Integration  </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Fetching and displaying data from APIs using HTTP methods and managing state effectively.             </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-2 rounded-lg">
                <Code className="h-8 w-8 text-green-500" />
                <h4 className="text-xl font-bold text-center ">Progressive Web Apps </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Building web apps that function like native apps with features like offline access and push notifications.</p>           </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-12 lg:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pb-6">
                  Technologies
                </h2>
                <div className="grid gap-10 sm:grid-cols-5 md:grid-cols-5">


                  <div className="flex flex-col items-center justify-center space-y-4 text-center p-3 shadow">
                    <img src="./icons/html.png" alt="" width={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center p-3 shadow">
                    <img src="./icons/next.png" alt="" width={70} />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center p-3 shadow">
                    <img src="./icons/react.png" alt="" width={70} />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center p-3 shadow">
                    <img src="./icons/node.png" alt="" width={70} />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 text-center p-3 shadow">
                    <img src="./icons/tw.png" alt="" width={70} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-sm space-y-2">


              </div>
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Muath Alzoubi. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      <GoogleAdsConversion />

    </div></>
  )
}

