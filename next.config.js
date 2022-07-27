const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["laratest.key-notion.com"],
  },
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: [''],
//   },
// }

