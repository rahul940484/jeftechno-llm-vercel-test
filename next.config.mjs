/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // No root /audit-services page exists — redirect to first sub-service
      {
        source: '/audit-services',
        destination: '/audit-services/earthing-health-assessment',
        permanent: false,
      },
      // No /consulting-services page — redirect to power-system-studies
      {
        source: '/consulting-services',
        destination: '/power-system-studies',
        permanent: false,
      },
      // No /projects page — redirect to products landing
      {
        source: '/projects',
        destination: '/Products/clps-products',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
