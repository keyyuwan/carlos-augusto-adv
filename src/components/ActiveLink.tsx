'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface ActiveLinkProps extends LinkProps {
  title: string
}

export function ActiveLink({ title, ...rest }: ActiveLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === rest.href

  return (
    <Link
      data-active={isActive}
      className="relative h-full px-4 text-xs font-semibold uppercase leading-[80px] tracking-widest transition-colors data-[active=true]:after:absolute data-[active=true]:after:bottom-[0] data-[active=true]:after:left-[0] data-[active=true]:after:h-[2px] data-[active=true]:after:w-full data-[active=true]:after:bg-secondary data-[active=true]:after:content-[''] data-[active=false]:hover:text-secondary"
      {...rest}
    >
      {title}
    </Link>
  )
}
