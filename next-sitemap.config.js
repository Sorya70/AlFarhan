/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://al-farhan-xi.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // if any
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [
      'https://al-farhan-xi.vercel.app/sitemap.xml'
    ]
  }
};
