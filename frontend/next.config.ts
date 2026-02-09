import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // Enable fast refresh for hot reload
  reactStrictMode: true,
  
  // Use Turbopack (default in Next.js 16) for local development
  // Empty config to silence webpack warning
  turbopack: {}
}

export default nextConfig
