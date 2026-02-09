'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Breadcrumbs () {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return null
  }

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const isLast = index === segments.length - 1
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

    return {
      href,
      label,
      isLast
    }
  })

  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      <Link
        href="/dashboard"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        Dashboard
      </Link>
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          {crumb.isLast ? (
            <span className="font-medium text-foreground">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

export function DashboardTopNavbar () {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center">
          <Breadcrumbs />
        </div>

        {/* Right side - User menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full"
            aria-label="User menu"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <User className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  )
}

