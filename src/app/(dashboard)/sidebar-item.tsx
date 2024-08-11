import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
  isActive?: boolean
  color?: string
  onClick?: () => void
}

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  isActive,
  color,
  onClick,
}: SidebarItemProps) => {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className={cn(
          'flex items-center rounded-xl bg-transparent px-3 py-3 transition hover:bg-white/10',
          isActive && 'bg-white/10'
        )}
      >
        <Icon className={cn('mr-2 size-4 stroke-2', color)} />
        <span className="text-sm font-medium text-white">{label}</span>
      </div>
    </Link>
  )
}
