import Link from 'next/link'
import { siteConfig } from '@/config/site'

// import logo from '@/assets/images/logo/green.svg'

// million-ignore
export function Logo() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      {/* <Image alt="logo" src={logo} className="h-6 w-6" /> */}
      <span className="hidden font-bold text-xl sm:inline-block">
        {siteConfig.name}
      </span>
    </Link>
  )
}
