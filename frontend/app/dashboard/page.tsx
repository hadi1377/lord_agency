import { DashboardNavbar } from '@/components/dashboard-navbar'
import { DashboardTopNavbar } from '@/components/dashboard-top-navbar'
import { LayoutDashboard, Sparkles } from 'lucide-react'

export default function DashboardPage () {
  return (
    <div className="flex h-screen w-full">
      <DashboardNavbar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardTopNavbar />
        <main className="flex-1 overflow-y-auto bg-muted/30">
          {/* Header Section */}
          <div className="border-b border-border bg-background">
            <div className="container mx-auto px-6 py-8 md:px-8 md:py-10">
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">
                  Mon, July 7
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <LayoutDashboard className="h-5 w-5" />
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Hello, Hadi Ahmadzadeh
                  </h1>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-base text-primary md:text-lg">
                    How can I help you today?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="container mx-auto px-6 py-8 md:px-8 md:py-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Dashboard content will go here */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="mb-2 text-xl font-semibold">Welcome to Dashboard</h2>
                <p className="text-sm text-muted-foreground">
                  Your dashboard content will be displayed here.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

