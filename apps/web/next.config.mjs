import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
  },
  reactStrictMode: true,
  transpilePackages: ['shadcn-ui'],
  experimental: {
    appDir: true,
  },
}

const millionConfig = {
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
}

export default million.next(nextConfig, millionConfig)
