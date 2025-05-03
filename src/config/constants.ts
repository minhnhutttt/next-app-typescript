export const SITE_URL = 'http://localhost:3000' // No trailing slash is required
export const SITE_NAME = 'Name'
export const DEFAULT_DESCRIPTION =
  ''
export const OG = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  siteName: SITE_NAME,
  locale: 'en_US',
  type: 'article',
  images: SITE_URL + '/assets/images/og_image.png',
}
export const TWITTER = {
  card: '',
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  images: SITE_URL + '/assets/images/og_image.png',
}
