import { DashboardNavbar } from '@/components/dashboard-navbar'

export default function DashboardPage () {
  return (
    <div className="flex h-screen w-full">
      <DashboardNavbar />
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="container mx-auto p-6 md:p-8">
          <div className="mb-8">
            <p className="mb-2 text-sm text-muted-foreground">
              Mon, July 7
            </p>
            <h1 className="mb-2 text-4xl font-bold text-foreground">
              Hello, Courtney
            </h1>
            <p className="text-lg text-primary">
              How can I help you today?
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Dashboard content will go here */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Welcome to Dashboard</h2>
              <p className="text-muted-foreground">
                Your dashboard content will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

