'use client'

import { Card } from '@/components/ui/card'
import { routes } from '@/constants'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const HomePage = () => {
  const router = useRouter()
  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="text-center text-2xl font-bold md:text-4xl">
          Explore the power of AI
        </div>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {routes.map(route => (
          <Card
            onClick={() => router.push(route.href)}
            key={route.href}
            className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-sm"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('w-fit rounded-md p-2', route.bgColor)}>
                <route.icon className={cn('size-8', route.color)} />
              </div>
              <div className="font-semibold">{route.label}</div>
            </div>
            <ArrowRight className="size-5" />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HomePage
