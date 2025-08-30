'use client'

import { MessageSquare, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
export function SiteHeader() {
  const [hidden, setHidden] = useState('hidden')
  return (
    <>
      <aside className={`${hidden} fixed right-0 top-0 z-10 h-full w-64 overflow-y-auto bg-gray-800 md:hidden`}>
        <nav className="mt-12">
          <ul className=" flex flex-col text-center ">
            <Link className="font-small pt-3 text-sm decoration-sky-500  underline-offset-4 hover:underline" href="/projects" onClick={() => setHidden('hidden')}>
              Projects
            </Link>
            <Link className="font-small pt-3 text-sm decoration-indigo-500/30   underline-offset-4 hover:underline" href="/experiences" onClick={() => setHidden('hidden')}>
              Experiences
            </Link>
            <Link className="font-small pt-3 text-sm decoration-pink-500/30  underline-offset-4 hover:underline" href="/aboutme" onClick={() => setHidden('hidden')}>
              About me
            </Link>
            <Link className="font-small pt-3 text-sm decoration-green-500/30 underline-offset-4  hover:underline" href="/contact" onClick={() => setHidden('hidden')}>
              Contact
            </Link>
          </ul>
        </nav>
      </aside>
      <header className="bh-zinc-900/50 top-0 z-30 w-full px-4 backdrop-blur sm:fixed ">

        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <img src="./thirteen.svg" className="size-12" alt="logo" />
            <span className="sr-only">Muath Z</span>
          </Link>

          <ul className="hidden space-x-6 md:flex">
            <Link className="font-small pt-3 text-sm decoration-sky-500  underline-offset-4 hover:underline" href="/projects">
              Projects
            </Link>
            <Link className="font-small pt-3 text-sm decoration-indigo-500/30   underline-offset-4 hover:underline" href="/experiences">
              Experiences
            </Link>
            <Link className="font-small pt-3 text-sm decoration-pink-500/30  underline-offset-4 hover:underline" href="/aboutme">
              About me
            </Link>
            <Link className="font-small pt-3 text-sm decoration-green-500/30 underline-offset-4  hover:underline" href="/contact">
              Contact
            </Link>
          </ul>
          <button onClick={() => { hidden !== '' ? setHidden('') : setHidden('hidden') }} className="block text-white md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header></>
  )
}
