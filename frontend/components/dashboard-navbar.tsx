'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  User,
  Database,
  LogOut
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function DashboardNavbar () {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar">
      {/* User Profile Section */}
      <div className="border-b border-sidebar-border p-4">
        <div className="flex w-full items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <User className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-sidebar-foreground">
              Hadi Ahmadzadeh
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {/* Home Link */}
        <Link
          href="/dashboard"
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            pathname === '/dashboard'
              ? 'bg-sidebar-primary text-sidebar-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
        >
          <Home className="h-5 w-5" />
          <span className="flex-1">Home</span>
        </Link>

        {/* Separator */}
        <div className="my-2 border-t border-sidebar-border"></div>

        {/* Programs Bulk Update Link */}
        <Link
          href="/dashboard/programs-bulk-update"
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            pathname === '/dashboard/programs-bulk-update'
              ? 'bg-sidebar-primary text-sidebar-primary-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
          )}
        >
          <Database className="h-5 w-5" />
          <span className="flex-1">Programs Bulk Update</span>
        </Link>

        {/* Separator */}
        <div className="my-2 border-t border-sidebar-border"></div>

        {/* Logout */}
        <button
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  )
}

