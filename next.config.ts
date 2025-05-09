import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60,
    },
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
