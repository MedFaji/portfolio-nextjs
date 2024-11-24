/** @type {import('next').NextConfig} */
const nextConfig = {
  // Specify the output directory for exported static files
  distDir: "out", // This sets the output directory to './out' instead of the default '.next'

  // Optional settings
  trailingSlash: true, // This ensures that URLs end with a trailing slash (e.g., '/about/')
};

export default nextConfig;
