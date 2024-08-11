import { cn } from '@/lib/utils'
import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const font = Space_Grotesk({
  weight: ['700'],
  subsets: ['latin'],
})

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex h-[68px] items-center gap-x-2 px-4 transition hover:opacity-75">
        <div className="relative size-8">
          {/* <Image src="/logo.svg" alt="The Canvas" fill /> */}
        </div>
        <h1 className={cn(font.className, 'text-xl font-bold text-white')}>
          SaaS
        </h1>
      </div>
    </Link>
  )
}
