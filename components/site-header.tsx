import Link from "next/link"
export function SiteHeader() {
  return (
    <header className="top-0 z-30 w-full px-4 sm:fixed backdrop-blur bh-zinc-900/50 ">

      <div className="container mx-auto flex justify-between items-center">
        <Link className="flex items-center justify-center" href="#">
          <img src="./thirteen.svg" className="h-12 w-12" alt="logo" />
          <span className="sr-only">Muath Z</span>
        </Link>

        <ul className="hidden md:flex space-x-6">
          <Link className="text-sm font-small hover:underline underline-offset-4  decoration-sky-500 pt-3" href="/projects">
            Projects
          </Link>
          <Link className="text-sm font-small hover:underline underline-offset-4   decoration-indigo-500/30 pt-3" href="/experiences">
            Experiences
          </Link>
          <Link className="text-sm font-small hover:underline underline-offset-4  decoration-pink-500/30 pt-3" href="/aboutme">
            About me
          </Link>
          <Link className="text-sm font-small hover:underline underline-offset-4 pt-3  decoration-green-500/30" href="/contact">
            Contact
          </Link>
        </ul>

        <button className="block md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

    </header>
  )
}
