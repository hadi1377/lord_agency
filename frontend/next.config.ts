import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // Enable fast refresh for hot reload
  reactStrictMode: true,
  
  // Empty turbopack config to silence the error
  // Turbopack handles file watching automatically with polling in Docker
  turbopack: {}
}

export default nextConfig
