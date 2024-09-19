import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import PageTitle from '@/components/pageTitle'

export const metadata: Metadata = {
  title: 'Sitemap',
  openGraph: {
    ...OG,
    title: 'Sitemap',
    url: SITE_URL + '/sitemap',
  },
  twitter: {
    ...TWITTER,
    title: 'Sitemap',
  },
  alternates: {
    canonical: SITE_URL + '/sitemap',
  },
}

const DataSitemap = [
  {
    href: '/',
    text: 'TOP',
  },
  {
    href: '/about',
    text: 'About us',
  },
  {
    href: '/solutions',
    text: 'Solutions',
  },
  {
    href: '/web-development',
    text: 'Web Development ',
  },
  {
    href: '/system-development',
    text: 'System Development',
  },
  {
    href: '/apparel',
    text: 'Apparel and Novelty Goods',
  },
  {
    href: '/sitemap',
    text: 'Sitemap',
  },
  {
    href: '/privacy-policy',
    text: 'Privacy Policy',
  },
]

const SitemapPage = () => {
  return (
    <main>
      <PageTitle>Sitemap</PageTitle>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <h2 className="mb-[24px] border-b border-solid border-b-[rgba(172,172,172,0.3)] font-anton text-[calc(18px_+_8vw)]">
            Pages
          </h2>
          <div className="mb-[128px] flex flex-col">
            {DataSitemap.map((item, index) => (
              <a
                className="relative border-b border-solid border-b-[rgba(172,172,172,0.3)] py-[24px] text-[calc(18px_+_2vw)] ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:scale-y-0 before:bg-black before:transition-all before:duration-[700ms] before:content-[''] hover:py-[32px] hover:text-white hover:before:scale-y-100"
                href={item.href}
                key={index}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default SitemapPage
