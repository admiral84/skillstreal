/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.the-rampage.org" },
      { protocol: "https", hostname: "www.filepicker.io" },
      { protocol: "https", hostname: "thumbor.forbes.com" },
      { protocol: "https", hostname: "cdn.educba.com" },
      { protocol: "https", hostname: "www.thewindowsclub.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
};

export default nextConfig;
