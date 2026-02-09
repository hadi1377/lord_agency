import { DashboardNavbar } from '@/components/dashboard-navbar'
import { DashboardTopNavbar } from '@/components/dashboard-top-navbar'

export default function ProgramsBulkUpdatePage () {
  return (
    <div className="flex h-screen w-full">
      <DashboardNavbar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardTopNavbar />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto p-6 md:p-8">
            <div className="mb-8">
              <h1 className="mb-2 text-4xl font-bold text-foreground">
                Programs Bulk Update
              </h1>
              <p className="text-muted-foreground">
                Update multiple programs at once
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">
                Content will be added here
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

