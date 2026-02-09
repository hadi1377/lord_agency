import { LoginForm } from '@/components/login-form'

export default function Home () {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 md:p-6" style={{ background: 'linear-gradient(to bottom right, var(--muted), var(--background), var(--secondary))' }}>
      <div className="w-full max-w-7xl">
        <LoginForm />
      </div>
    </div>
  )
}
