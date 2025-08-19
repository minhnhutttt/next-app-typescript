export const SITE_URL = 'https://site.com'; // No trailing slash is required
export const SITE_NAME = 'site name';
export const DEFAULT_DESCRIPTION = 'site description';
export const OG = {
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  siteName: SITE_NAME,
  locale: 'en_US',
  type: 'article',
  images: SITE_URL + '/assets/images/og_image.png',
};
export const TWITTER = {
  card: 'summary_large_image',
  title: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  images: SITE_URL + '/assets/images/og_image.png',
};
