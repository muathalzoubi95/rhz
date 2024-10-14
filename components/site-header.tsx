import Link from "next/link"
export function SiteHeader() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link className="flex items-center justify-center" href="#">
      <img src="./thirteen.svg" className="h-12 w-12" alt="logo" />
      <span className="sr-only">Acme Inc</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link className="text-sm font-small hover:underline underline-offset-4 pt-3" href="#">
        Projects
      </Link>
      <Link className="text-sm font-small hover:underline underline-offset-4 pt-3" href="#">
      Experiences
      </Link>
      <Link className="text-sm font-small hover:underline underline-offset-4  pt-3" href="#">
        About me
      </Link>
      <Link className="text-sm font-small hover:underline underline-offset-4 pt-3" href="#">
        Contact
      </Link>
    
    </nav>
  </header>
  )
}
