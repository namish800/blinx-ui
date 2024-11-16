/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'oaidalleapiprodscus.blob.core.windows.net',
            port: '',
            pathname: '/private/org-nxGPxYmLSIb59XhORRBn58Oo/**',
          },
        ],
        domains: ['i.imgur.com'],
      },
};

export default nextConfig;
