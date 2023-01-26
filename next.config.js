/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = withPlaiceholder({
  reactStrictMode: true,
});

module.exports = nextConfig;
