import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  openGraph: {
    ...OG,
    title: 'プライバシーポリシー',
    url: SITE_URL + '/privacy-policy',
  },
  twitter: {
    ...TWITTER,
    title: 'プライバシーポリシー',
  },
  alternates: {
    canonical: SITE_URL + '/privacy-policy',
  },
}

const PrivacyPolicyPage = () => {
  return (
    <main>
      <div className="-mt-[100vh] flex h-[240px] justify-center bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] pt-[124px] md:w-[550px]">
        <p className="text-[24px] font-semibold text-white md:text-[36px]">
          プライバシーポリシー
        </p>
      </div>
      <div className="px-5 pb-20 pt-10">
        <div>
          <p className="border-b-[4px] border-black pb-2 pt-4 text-center text-[18px] font-semibold md:text-[20px]">
            基本方針
          </p>
          <div className="p-5 text-[14px] font-light tracking-tight md:py-[30px] md:text-[16px]">
            弊社では個人情報の取り扱いに関して以下の方針を遵守致します。
            <ol className="ml-5 list-decimal">
              <li>
                弊社は、個人情報の管理に関して漏えい事故などが起きないように適切に管理することを心掛けます。
              </li>
              <li>
                弊社は、個人情報を取得する場合、適法かつ公正な手段によって行います。
              </li>
              <li>
                弊社は、個人情報の利用に当たって、利用目的の範囲内で業務の遂行上必要な限りにおいて行います。
              </li>
              <li>
                弊社は、次の場合を除き、個人情報を第三者に提供致しません。
                <ul className="ml-5 list-[lower-alpha]">
                  <li>本人から事前の同意を得た場合</li>
                  <li>
                    業務を委託するために個人情報を業務委託先に提供する場合
                  </li>
                  <li>個人情報を弊社の関係会社との間で共同利用する場合</li>
                  <li>その他個人情報保護法等で定められている場合</li>
                </ul>
              </li>
              <li>
                弊社は、保有個人データについて、本人から開示、訂正、利用停止等の求めを受けた場合に速やかに対応する体制を整備します。
              </li>
            </ol>
          </div>
        </div>
        <div>
          <p className="border-b-[4px] border-black pb-2 pt-4 text-center text-[18px] font-semibold md:text-[20px]">
            個人情報の利用目的
          </p>
          <div className="p-5 text-[14px] font-light tracking-tight md:py-[30px] md:text-[16px]">
            弊社は、弊社が取得した個人情報を次の目的のために利用致します。
            <ol className="ml-5 list-decimal">
              <li>弊社の商品やサービスをお客様にお届けするため。</li>
              <li>
                弊社の現在・将来展開する商品やサービス関連でお客様にとって有益であると弊社が考える情報を、お客様にご紹介・ご案内するため。
              </li>
              <li>お客様とのビジネスを円滑に行うため。</li>
              <li>お客様満足度の向上のためのデータ分析。</li>
              <li>新しい商品やサービスの開発のため。</li>
              <li>その他弊社事業に付帯・関連する業務のため</li>
            </ol>
          </div>
        </div>
        <div>
          <p className="border-b-[4px] border-black pb-2 pt-4 text-center text-[18px] font-semibold md:text-[20px]">
            ご連絡先
          </p>
          <div className="p-5 text-[14px] font-light tracking-tight md:py-[30px] md:text-[16px]">
            以下が個人情報の取り扱いに関する窓口先になります。
            <ul className="ml-5 list-disc">
              <li>窓口：goodfellows0808@gmail.com</li>
              <li>
                住所： 〒860-0845 熊本県熊本市中央区上通町9-26 お手続きの流れ
              </li>
            </ul>
            <ol className="ml-5 list-decimal">
              <li>ご本人から窓口にお問合せ。</li>
              <li>必要書類等のご説明を弊社からご連絡。</li>
              <li>
                ご本人確認のうえ、個人情報保護法等に従い、弊社からご本人に回答。
              </li>
            </ol>
            ※ご本人であることを証明できない場合等、ご対応が出来かねる場合が御座います。
          </div>
        </div>
        <div>
          <p className="border-b-[4px] border-black pb-2 pt-4 text-center text-[18px] font-semibold md:text-[20px]">
            個人情報の共同利用
          </p>
          <div className="p-5 text-[14px] font-light tracking-tight md:py-[30px] md:text-[16px]">
            弊社はサービス向上の目的で、業務上の必要性があり、なおかつ法令で認められる場合に限り、弊社が取得した個人情報に関してグループ内で共同利用させていただくことがあります。
            <ul className="ml-5 list-disc">
              <li>範囲：弊社がご提供するサービスの範囲内</li>
              <li>
                項目：氏名、住所、電話番号、メールアドレス、その他上記の共同利用目的のために必要な事項
              </li>
              <li>責任先：個人情報の取扱いに関するご連絡先に同じ</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="border-b-[4px] border-black pb-2 pt-4 text-center text-[18px] font-semibold md:text-[20px]">
            SSL
          </p>
          <div className="p-5 text-[14px] font-light tracking-tight md:py-[30px] md:text-[16px]">
            当サイトでは、お問合せなどを通しお客様の個人情報を取得するに当たりSSL通信を利用しており、ご利用者様に対しセキュリティー面の安全性を考慮しております。
          </div>
        </div>
        <div>
          <p className="border-b-[4px] border-black pb-2 pt-4 text-center text-[18px] font-semibold md:text-[20px]">
            Google Analyticsの利用
          </p>
          <div className="p-5 text-[14px] font-light tracking-tight md:py-[30px] md:text-[16px]">
            当サイトでは、サイトの利用状況を把握するためにGoogle
            Analyticsを利用する場合が御座います。Google
            Analyticsは、クッキーを利用して利用者の個人を特定する情報を含まずに、情報を収集します。Google
            Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google
            Analyticsのサイトをご覧ください。
          </div>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPolicyPage
