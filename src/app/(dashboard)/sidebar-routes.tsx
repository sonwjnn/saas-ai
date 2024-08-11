'use client'

// import { usePaywall } from "@/features/subscriptions/hooks/use-paywall";
// import { useCheckout } from "@/features/subscriptions/api/use-checkout";
// import { useBilling } from "@/features/subscriptions/api/use-billing";
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { routes } from '@/constants'
import { Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { SidebarItem } from './sidebar-item'

export const SidebarRoutes = () => {
  // const mutation = useCheckout();
  // const billingMutation = useBilling();
  // const { shouldBlock, isLoading, triggerPaywall } = usePaywall();

  const pathname = usePathname()

  const onClick = () => {
    // if (shouldBlock) {
    //   triggerPaywall();
    //   return;
    // }
    // billingMutation.mutate();
  }

  return (
    <div className="flex flex-1 flex-col gap-y-4">
      {/* {shouldBlock && !isLoading && (
        <>
          <div className="px-3">
            <Button
              onClick={() => mutation.mutate()}
              disabled={mutation.isPending}
              className="w-full rounded-xl border-none hover:bg-white hover:opacity-75 transition"
              variant="outline"
              size="lg"
            >
              <Crown className="mr-2 size-4 fill-yellow-500 text-yellow-500" />
              Upgrade to Pro
            </Button>
          </div>
          <div className="px-3">
            <Separator />
          </div>
        </>
      )} */}

      <ul className="flex flex-col gap-y-1 px-3">
        <SidebarItem
          href="/"
          icon={Home}
          color="text-sky-500"
          label="Home"
          isActive={pathname === '/'}
        />
        {routes.map(route => (
          <SidebarItem
            key={route.href}
            href={route.href}
            icon={route.icon}
            color={route.color}
            label={route.label}
            isActive={pathname === route.href}
          />
        ))}
        {/* <SidebarItem
          href="mailto:support@example.com"
          icon={MessageCircleQuestion}
          label="Get Help"
        /> */}
      </ul>
    </div>
  )
}
