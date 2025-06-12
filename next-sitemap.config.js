/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.tonsite.com', // remplace par ton vrai domaine
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ['/admin', '/dashboard'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}