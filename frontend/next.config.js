/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactivé pour garder toutes les fonctionnalités
  // output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath: process.env.NODE_ENV === 'production' ? '/carre-sante-beaute' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/carre-sante-beaute/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
