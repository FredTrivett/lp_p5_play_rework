/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // This allows local images to work in static exports
    },
}

module.exports = nextConfig 