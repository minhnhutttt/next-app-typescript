import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'

export const metadata: Metadata = {
  title: '企業情報',
  openGraph: {
    ...OG,
    title: '企業情報',
    url: SITE_URL + '/company',
  },
  twitter: {
    ...TWITTER,
    title: '企業情報',
  },
  alternates: {
    canonical: SITE_URL + '/company',
  },
}

const CompanyPage = () => {
  return (
    <main>
      <div className="-mt-[100vh] flex h-[240px] justify-center bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] pt-[124px] md:w-[550px]">
        <p className="text-[24px] font-semibold text-white md:text-[36px]">
          会社概要
        </p>
      </div>
      <div className="px-4 pb-[100px] pt-10 md:pb-[200px]">
        <div>
          <p className="md;text-[20px] flex h-[60px] items-center justify-center bg-[#FF7DD3] text-[18px] text-white">
            会社名
          </p>
          <p className="p-5 text-center text-[18px] font-light md:p-[30px] md:text-[20px]">
            株式会社 Good Fellows
          </p>
        </div>
        <div>
          <p className="md;text-[20px] flex h-[60px] items-center justify-center bg-[#FF7DD3] text-[18px] text-white">
            設立年月日
          </p>
          <p className="p-5 text-center text-[18px] font-light md:p-[30px] md:text-[20px]">
            2011年8月9日
          </p>
        </div>
        <div>
          <p className="md;text-[20px] flex h-[60px] items-center justify-center bg-[#FF7DD3] text-[18px] text-white">
            資本金
          </p>
          <p className="p-5 text-center text-[18px] font-light md:p-[30px] md:text-[20px]">
            500万円
          </p>
        </div>
        <div>
          <p className="md;text-[20px] flex h-[60px] items-center justify-center bg-[#FF7DD3] text-[18px] text-white">
            所在地
          </p>
          <p className="p-5 text-[18px] font-light leading-[1.3] md:p-[30px] md:text-[20px]">
            <span className="text-[14px] md:text-[15px]">〒150-0001</span>{' '}
            <br />
            東京都渋谷区神宮前6丁目23-4 桑野ビル2階
            <br />
            (弊社はリモートワーク推進企業の為、レンタルオフィスを利用しております。)
          </p>
        </div>
        <div>
          <p className="md;text-[20px] flex h-[60px] items-center justify-center bg-[#FF7DD3] text-[18px] text-white">
            電話番号
          </p>
          <p className="p-5 text-center text-[18px] font-light md:p-[30px] md:text-[20px]">
            03-6824-8280
          </p>
        </div>
        <div>
          <p className="md;text-[20px] flex h-[60px] items-center justify-center bg-[#FF7DD3] text-[18px] text-white">
            社員数
          </p>
          <p className="p-5 text-center text-[18px] font-light md:p-[30px] md:text-[20px]">
            10名
          </p>
        </div>
        <div>
          <p className="md;text-[20px] flex h-[60px] items-center justify-center bg-[#FF7DD3] text-[18px] text-white">
            所属タレント数
          </p>
          <p className="p-5 text-center text-[18px] font-light md:p-[30px] md:text-[20px]">
            累計3000名以上
          </p>
        </div>
        <div>
          <p className="md;text-[20px] flex h-[60px] items-center justify-center bg-[#FF7DD3] text-[18px] text-white">
            会社の目的
          </p>
          <ul className="list-disc p-5 text-[18px] font-light md:p-[30px] md:text-[20px]">
            <li>
              ライブストリーミングにおける配信者（ライバー）の育成ならびにマネジメント
            </li>
            <li>広告宣伝の代理業務</li>
            <li>
              インターネット等を利用した通信販売業務ならびに各種情報提供サービス
            </li>
            <li>
              音楽、映画、演劇、演芸、講演の制作およびその請負と興行ならびにその施設の運営、請負
            </li>
            <li>
              ラジオ、テレビ放送番組、コマーシャルフィルム、コマーシャルソングの企画、制作、請負ならびに版権事業
            </li>
            <li>
              音声、映像のソフトウェア（ディスク、テープ、フィルム）の企画、制作、製造、販売、貸与ならびに版権事業
              キャラクター商品（個性的な名称や特徴を有している人物、動物等の肖像、署名、愛称等を使用したもの）の企画、販売ならびに使用せしめる権利の管理
            </li>
            <li>書籍、楽譜等の印刷物の出版、販売</li>
            <li>
              企業および個人向けのイベント、研修会、講習会などの各種教育事業に関する企画、立案、制作、運営ならびにコンサルティング業務
            </li>
            <li>
              アパレル製品及び雑貨の企画、デザイン、製造、卸し、販売、輸出入並びにアパレル事業に関するコンサルティング
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default CompanyPage
