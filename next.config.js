/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/ja',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
