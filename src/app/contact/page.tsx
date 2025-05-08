import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import Form from './components/form'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  openGraph: {
    ...OG,
    title: 'お問い合わせ',
    url: SITE_URL + '/contact',
  },
  twitter: {
    ...TWITTER,
    title: 'お問い合わせ',
  },
  alternates: {
    canonical: SITE_URL + '/contact',
  },
}

const ContactPage = () => {
  return (
    <main>
      <div className="-mt-[100vh] flex h-[240px] justify-center bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] pt-[124px] md:w-[550px]">
        <p className="text-[24px] font-semibold text-white md:text-[36px]">
          法人様はこちら
        </p>
      </div>
      <div className="px-5 pb-7 pt-12 md:pb-[46px]">
        <p className=" mx-auto w-full max-w-[436px] text-[14px]">
          タレント・モデルのキャスティング、その他のお問い合わせがございましたら、以下のフォームよりお願いします。
        </p>
      </div>

      <Form />
    </main>
  )
}

export default ContactPage
