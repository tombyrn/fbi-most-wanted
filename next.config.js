/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fbi.gov',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
