import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import Header from '@/components/header'
import PageTitle from '@/components/pageTitle'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  openGraph: {
    ...OG,
    title: '特定商取引法に基づく表記',
    url: SITE_URL + '/tokutei/',
  },
  twitter: {
    ...TWITTER,
    title: '特定商取引法に基づく表記',
  },
  alternates: {
    canonical: SITE_URL + '/tokutei/',
  },
}

export default function SpecifiedCommercialTransactionsAct() {
  return (
    <main>
      <Header />
      <PageTitle>特定商取引法に基づく表記</PageTitle>
      <div className="my-14 px-5 md:my-20">
        <div className="mx-auto w-full max-w-[800px] space-y-14 md:space-y-20">
          {/* <div>
            <div className="font-bold mb-2">
              〇メタバース空間及びペットアバター
            </div>
            <table className="font-medium border-2 border-gray-500 [&_th]:border-2 [&_th]:text-left [&_th]:p-3 [&_th]:whitespace-nowrap [&_td]:p-3 [&_td]:border-2">
              <tr>
                <th>事業者名</th>
                <td>株式会社メタロポリス</td>
              </tr>
              <tr>
                <th>通信販売業務責任者</th>
                <td>小林義典</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>沖縄県那覇市久茂地2-19-18</td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>050-7117-7574<br/>(受付時間：9:00~17:30、土日祝日を除く※不在時は折り返します)<br/><br/>注意: この電話番号は、製品やサービスに関するお問い合わせ専用です。営業目的のご連絡は固くお断りいたします。</td>
              </tr>
              <tr>
                <th>メールアドレス</th>
                <td>pet@mp-inc.net</td>
              </tr>
              <tr>
                <th>販売URL</th>
                <td>pet.mp-inc.net</td>
              </tr>
              <tr>
                <th>商品名</th>
                <td>商品毎にWEBサイト上に表示しています。※</td>
              </tr>
              <tr>
                <th>代金</th>
                <td>商品毎にWEBサイト上に表示しています。※</td>
              </tr>
              <tr>
                <th>代金支払方法</th>
                <td>
                  次のいずれかの方法によりお支払いください。
                  <ol className="pl-[1.5em] list-decimal">
                    <li>クレジットカード番号を入力する</li>
                    <li>弊社指定の銀行口座に振り込む<br/>※振り込み手数料はお客様のご負担となります。</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th>代金支払期間</th>
                <td>
                  <ol className="pl-[1.5em] list-decimal">
                    <li>クレジットカードによるお支払いは、決済後決済会社の引き落としのタイミングで引き落とされます。</li>
                    <li>弊社銀行口座へのお振込みはサービス申し込み後、指定の期限までに前払いしてください。</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th>商品のお届け時期</th>
                <td>決済日又は入金日以降から１か月以内にサービスが利用できるようになります。<br/>※個別メタバース空間の構築およびペットの2D/3D制作のため</td>
              </tr>
              <tr>
                <th>お申込後のキャンセル</th>
                <td>お申込後のキャンセルはお受けいたしかねます。</td>
              </tr>
              <tr>
                <th>返品について</th>
                <td>メタバース個別空間・ペットアバターの制作業務を開始した以後の返品要望は一切お受けいたしかねます。</td>
              </tr>
            </table>
          </div>
          <div>
            <div className="font-bold mb-2">
              〇ペット供養所(狩俣)
            </div>
            <table className="font-medium border-2 border-gray-500 [&_th]:border-2 [&_th]:text-left [&_th]:p-3 [&_th]:whitespace-nowrap [&_td]:p-3 [&_td]:border-2">
              <tr>
                <th>事業者名</th>
                <td>株式会社んみゃーち</td>
              </tr>
              <tr>
                <th>通信販売業務責任者</th>
                <td>國仲義隆</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>沖縄県宮古島市平良字狩俣358-1</td>
              </tr>
              <tr>
                <th>販売URL</th>
                <td>pet.mp-inc.net</td>
              </tr>
              <tr>
                <th>商品名</th>
                <td>商品毎にWEBサイト上に表示しています。※</td>
              </tr>
              <tr>
                <th>代金</th>
                <td>商品毎にWEBサイト上に表示しています。※</td>
              </tr>
              <tr>
                <th>代金支払方法</th>
                <td>
                  次のいずれかの方法によりお支払いください。
                  <ol className="pl-[1.5em] list-decimal">
                    <li>クレジットカード番号を入力する</li>
                    <li>弊社指定の銀行口座に振り込む<br/>※振り込み手数料はお客様のご負担となります。</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th>代金支払期間</th>
                <td>
                  <ol className="pl-[1.5em] list-decimal">
                    <li>クレジットカードによるお支払いは、決済後決済会社の引き落としのタイミングで引き落とされます。</li>
                    <li>弊社銀行口座へのお振込みはサービス申し込み後、指定の期限までに前払いしてください。</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <th>商品のお届け時期</th>
                <td>決済日又は入金日以降から１か月以内にサービスが利用できるようになります。<br/>※個別メタバース空間の構築およびペットの2D/3D制作のため</td>
              </tr>
              <tr>
                <th>お申込後のキャンセル</th>
                <td>お申込後のキャンセルはお受けいたしかねます。</td>
              </tr>
            </table>
          </div> */}
          <figure>
            <img src="/assets/images/law-01.png" alt="" />
          </figure>
          <figure>
            <img src="/assets/images/law-02.png" alt="" />
          </figure>
        </div>
      </div>
    </main>
  )
}
