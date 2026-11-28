import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the old forms post to `${NEXT_PUBLIC_API_URI}/api/wt/...`; empty means this same site
  env: { NEXT_PUBLIC_API_URI: "" },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  // The original frontend imports these Sanity packages; point them at local replacements.
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@sanity/image-url": path.resolve("src/legacy-shims/image-url.js"),
      "@sanity/asset-utils": path.resolve("src/legacy-shims/asset-utils.js"),
    };
    return config;
  },
};

export default nextConfig;
