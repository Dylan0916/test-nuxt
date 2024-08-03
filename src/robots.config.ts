const DISALLOW_PATH = ['/booking/', '/member/', '/orders/']
const DISALLOW_FILE = ['/*.svg$']

export default {
  UserAgent: '*',
  Disallow: () => [...DISALLOW_PATH, ...DISALLOW_FILE],
  Sitemap: 'https://example.com/sitemap.xml',
}
