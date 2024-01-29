import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/projects",
        destination: "/#project",
        permanent: true,
      },
      {
        source: "/project",
        destination: "/#project",
        permanent: true,
      },
      {
        source: "/skills",
        destination: "/#skill",
        permanent: true,
      },
      {
        source: "/skill",
        destination: "/#skill",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
