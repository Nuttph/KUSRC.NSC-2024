/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'node-fetch': 'isomorphic-fetch',
      };
      return config;
    },
  };
  
  export default nextConfig;
  