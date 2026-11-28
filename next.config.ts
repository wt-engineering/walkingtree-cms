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
  async headers() {
    const common = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
      { key: "Strict-Transport-Security", value: "max-age=31536000" },
    ];
    return [
      { source: "/:path*", headers: common },
      { source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }, { key: "Cache-Control", value: "no-store" }] },
      { source: "/auth/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }, { key: "Cache-Control", value: "no-store" }] },
    ];
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
