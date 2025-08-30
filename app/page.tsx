import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Users } from "lucide-react"
import { Analytics } from "@vercel/analytics/react"
import GoogleAdsConversion from "@/components/gtag"
export default function LandingPage() {
  
  return (
    <> 
    <div className="flex min-h-screen flex-col ">
       <Analytics/>
      <img className="app " src="./bg.svg" alt="bg" />
      <main className="flex-1">
        <section className="xl:py-42  size-full py-24 md:py-24 lg:py-64">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="anim space-y-2">
                <h1 className="bg-gradient-to-t from-zinc-100/50 to-white bg-clip-text py-4 text-center font-bold tracking-tight text-transparent sm:text-4xl md:text-6xl">
                  Hi, I'm Muath Alzoubi, <span className="bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-600 to-90% p-1 text-black ">Front-End</span>Developer
                </h1>
                <p className="md:text-l mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
                  I build responsive and dynamic web experiences.
                </p>
              </div>
              <div className="anim space-x-4">
              <Link href={'/projects'}>   <Button className="bg-gradient-to-r from-indigo-400 from-10% via-sky-500 via-30% to-emerald-600 to-90% text-white">View My Work</Button></Link>
              <Link href={'/experiences'}>  <Button variant="outline">Get in Touch</Button></Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 backdrop-blur md:py-32 lg:py-12">
          <div className="container w-full px-4 md:px-6  ">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-2">
                <Code className="size-8 text-green-500" />
                <h3 className="text-center text-xl font-bold">Responsive Layout</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Designing web pages that adapt to different screen sizes and devices using CSS media queries, Flexbox, Grid.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-2">
                <Code className="size-8 text-green-500" />
                <h3 className="text-center text-xl font-bold">Cross-Browser Compatibility</h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Ensuring that websites look and work well on all major browsers (Chrome, Firefox, Safari, Edge) and older versions when necessary.                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-2">
                <Code className="size-8 text-green-500" />
                <h3 className="text-center text-xl font-bold">CSS Preprocessors </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Writing maintainable, DRY (Don't Repeat Yourself) stylesheets by using variables, mixins, and nesting.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-2">
                <Code className="size-8 text-green-500" />
                <h3 className="text-center text-xl font-bold"> Performance Optimization </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Optimizing websites for speed by minimizing load times, reducing asset sizes, lazy loading, and using CDNs.                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-2">
                <Code className="size-8 text-green-500" />
                <h3 className="text-center text-xl font-bold ">API Integration  </h3>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Fetching and displaying data from APIs using HTTP methods and managing state effectively.             </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-2">
                <Code className="size-8 text-green-500" />
                <h4 className="text-center text-xl font-bold ">Progressive Web Apps </h4>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Building web apps that function like native apps with features like offline access and push notifications.</p>           </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-12 lg:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="pb-6 text-3xl font-bold tracking-tighter sm:text-5xl">
                  Technologies
                </h2>
                <div className="grid gap-10 sm:grid-cols-5 md:grid-cols-5">


                  <div className="flex flex-col items-center justify-center space-y-4 p-3 text-center shadow">
                    <img src="./icons/html.png" alt="" width={50} />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 p-3 text-center shadow">
                    <img src="./icons/next.png" alt="" width={70} />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 p-3 text-center shadow">
                    <img src="./icons/react.png" alt="" width={70} />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 p-3 text-center shadow">
                    <img src="./icons/node.png" alt="" width={70} />
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 p-3 text-center shadow">
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
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Muath Alzoubi. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      <GoogleAdsConversion />

    </div></>
  )
}

