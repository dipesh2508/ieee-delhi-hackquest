module.exports = {
    siteUrl: "https://hackquest.in" || "https://www.hackquest.in",
    generateRobotsTxt: true,
    exclude: ["/server-sitemap.xml"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/server-sitemap.xml"],
            },
        ],
    },
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    sitemapName: 'sitemap.xml',
    nextConfigPath: __dirname + "/next.config.js",
    ignoredExtensions: [
        'js',
        'map'
    ],
  };