/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from /mariyan-marinov-cv/ subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/mariyan-marinov-cv' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mariyan-marinov-cv' : '',
}

module.exports = nextConfig
