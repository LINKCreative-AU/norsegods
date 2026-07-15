import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
