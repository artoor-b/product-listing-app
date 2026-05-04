import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        // Whatever path your frontend calls...
        source: "/api/:path*",
        // ...will be quietly routed to the external API by the Next.js server
        destination: `${env.API_HOST}/:path*`,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
