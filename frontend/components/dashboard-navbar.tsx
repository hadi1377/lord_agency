'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Sparkles,
  CheckSquare,
  Inbox,
  Calendar,
  BarChart3,
  Settings,
  ChevronDown,
  Plus,
  User
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: boolean
}

const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/dashboard', icon: Home },
  { label: 'AI Assistant', href: '/dashboard/ai', icon: Sparkles, badge: true },
  { label: 'My Tasks', href: '/dashboard/tasks', icon: CheckSquare },
  { label: 'Inbox', href: '/dashboard/inbox', icon: Inbox },
  { label: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { label: 'Reports & Analytics', href: '/dashboard/reports', icon: BarChart3 }
]

interface Project {
  id: string
  name: string
  color: string
}

const projects: Project[] = [
  { id: '1', name: 'Product Launch', color: 'bg-primary' },
  { id: '2', name: 'Team Brainstorm', color: 'bg-blue-500' },
  { id: '3', name: 'Branding Launch', color: 'bg-teal-500' }
]

export function DashboardNavbar () {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar">
      {/* User Profile Section */}
      <div className="border-b border-sidebar-border p-4">
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <User className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-sidebar-foreground">
              Courtney Henry
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Online</span>
            </div>
          </div>
          <ChevronDown
            className={cn(
              'h-4 w-4 text-muted-foreground transition-transform',
              isUserMenuOpen && 'rotate-180'
            )}
          />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {mainNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="h-2 w-2 rounded-full bg-primary"></span>
              )}
            </Link>
          )
        })}

        {/* My Projects Section */}
        <div className="pt-6">
          <div className="mb-3 flex items-center justify-between px-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              My Projects
            </h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-sidebar-foreground"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/dashboard/projects/${project.id}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <div className={cn('h-3 w-3 rounded', project.color)}></div>
                <span>{project.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Settings */}
        <Link
          href="/dashboard/settings"
          className="mt-6 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>

      {/* Invite Section */}
      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-lg bg-sidebar-primary/10 p-4">
          <p className="mb-3 text-xs font-medium text-sidebar-foreground">
            New members will gain access to public Spaces, Docs and Dashboards
          </p>
          <Button
            variant="default"
            size="sm"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="mr-2 h-4 w-4" />
            Invite people
          </Button>
        </div>
      </div>
    </aside>
  )
}

