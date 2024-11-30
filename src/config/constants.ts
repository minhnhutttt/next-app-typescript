export const SITE_URL = 'https://meta-earth.world' // No trailing slash is required
export const SITE_NAME = 'META Earth'
export const DEFAULT_DESCRIPTION = '地域情報×マップで広がる新しい体験'
export const OG = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  siteName: SITE_NAME,
  locale: 'ja_JP',
  type: 'article',
  images: SITE_URL + '/assets/images/og_image.png',
}
export const TWITTER = {
  card: 'summary_large_image',
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  images: SITE_URL + '/assets/images/og_image.png',
}
