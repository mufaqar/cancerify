/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'vni.fe7.mytemp.website',
          },
        ],
      },
}

module.exports = nextConfig


// vni.fe7.mytemp.website