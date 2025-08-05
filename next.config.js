// TODO: use proper imports. Fix eslint issues

// eslint-disable-next-line @typescript-eslint/no-require-imports
const svgr = require("./svgr")

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    cssChunking: "strict",
  },
  webpack(config) {
    return svgr(config)
  },
}

module.exports = nextConfig
