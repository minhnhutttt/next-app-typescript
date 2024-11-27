export const SITE_URL = 'https://pet.mp-inc.net' // No trailing slash is required
export const SITE_NAME = 'メタでペット供養'
export const DEFAULT_DESCRIPTION =
  'まぶたを閉じれば浮かんでくる愛らしい姿を、『 メタでペット供養 』が永遠に。'
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
