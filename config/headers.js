const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer',
  },
  {
    key: 'X-Frame-Options',
    value: 'ALLOW-FROM https://app.contentful.com',
  },
  {
    key: 'Content-Security-Policy',
    value: 'frame-ancestors https://app.contentful.com;'
  },
];

module.exports = async () => {
  return [
    {
      // Apply these headers to all routes in your application.
      source: '/(.*)',
      headers: securityHeaders,
    },
  ];
};
