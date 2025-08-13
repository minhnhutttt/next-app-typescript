export const SITE_URL = 'https://cv-agent.ai' // No trailing slash is required
export const SITE_NAME = 'SEIKAI'
export const DEFAULT_DESCRIPTION =
  '真の成果をAIと狙い撃つ!!正解広告エージェント'
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
