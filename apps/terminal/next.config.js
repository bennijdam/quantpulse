/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@quantpulse/ui', '@quantpulse/becker-core'],
}

module.exports = nextConfig
