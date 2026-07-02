/** @type {import('next').NextConfig} */
const base = process.env.NODE_ENV === 'production' ? '/mariyan-marinov-cv' : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from /mariyan-marinov-cv/ subdirectory
  basePath: base,
  assetPrefix: base,
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
}

module.exports = nextConfig
