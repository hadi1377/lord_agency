'use client'

import { User, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function LoginForm () {
  return (
    <div className="flex w-full h-[80vh] max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden">
      {/* Left Section - Login Form */}
      <div className="flex w-full flex-col items-center justify-center bg-card p-6 lg:p-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-card-foreground">LOGIN</h1>
            <p className="text-sm text-muted-foreground">
              Got More Thing To Do In Panel?
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                Email
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border-0 bg-muted pl-10 pr-4 py-2.5 text-card-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-card-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <Input
                  id="password"
                  type="password"
                  className="w-full rounded-lg border-0 bg-muted pl-10 pr-4 py-2.5 text-card-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-lg py-2.5 font-medium text-base"
            >
              Login Now
            </Button>
          </form>
        </div>
      </div>

      {/* Right Section - Cityscape Image */}
      <div className="hidden lg:flex lg:w-1/2 relative h-full overflow-hidden">
        <img
          src="/auth.jpg"
          alt="Nighttime cityscape with skyscrapers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        {/* Soft gradient transition to login form */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-[2]" />
      </div>
    </div>
  )
}
