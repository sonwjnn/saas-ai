import {
  Code,
  CreditCard,
  ImageIcon,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react'

export const routes = [
  {
    href: '/conversation',
    icon: MessageSquare,
    label: 'Conversation',
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    href: '/image',
    icon: ImageIcon,
    label: 'Image Generation',
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
  },
  {
    href: '/video',
    icon: VideoIcon,
    label: 'Video Generation',
    color: 'text-orange-700',
    bgColor: 'bg-pink-700/10',
  },
  {
    href: '/music',
    icon: Music,
    label: 'Music Generation',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    href: '/code',
    icon: Code,
    label: 'Code generation',
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
  },
  {
    href: '/billing',
    icon: CreditCard,
    label: 'Billing',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    href: '/settings',
    icon: Settings,
    label: 'Settings',
    color: 'text-zinc-500',
    bgColor: 'bg-zinc-500/10',
  },
]
