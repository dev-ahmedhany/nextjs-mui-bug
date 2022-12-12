/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    modularizeImports: {
      "my-library/?(((\\w*)?/?)*)": {
        transform: "my-library/{{ matches.[1] }}/{{member}}",
      },
    },
  },
};

module.exports = nextConfig;
