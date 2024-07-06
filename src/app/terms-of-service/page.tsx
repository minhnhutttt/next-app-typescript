import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'

import Header from '@/components/header'
import PageTitle from '@/components/pageTitle'
import TextBlock from '@/components/textBlock'

export const metadata: Metadata = {
  title: '利用規約',
  openGraph: {
    ...OG,
    title: '利用規約',
    url: SITE_URL + '/terms-of-service/',
  },
  twitter: {
    ...TWITTER,
    title: '利用規約',
  },
  alternates: {
    canonical: SITE_URL + '/terms-of-service/',
  },
}

export default function TermsOfService() {
  return (
    <main>
      <Header />
      <PageTitle>利用規約</PageTitle>
      <div className="mt-7 px-5 md:mt-10">
        <div className="mx-auto w-full max-w-[1000px] space-y-14 pb-16 pt-5 md:pb-20 md:pt-11">
          <div className="md:mb-14">
            <TextBlock>
              本ウェブサイトは株式会社メタロポリス（以下、「当社」といいます）またはその代理人が運営しています。本ウェブサイトをご利用することをもって、次のご利用条件にご了承いただいたものとみなされます。また、本ウェブサイトで提供される一部のサービスをご利用いただく際には、併せて当該サービスのご利用条件にもご同意いただく必要がある場合がありますのでご注意ください。
            </TextBlock>
          </div>
          <TextBlock title="1. 著作権について">
            ①本ウェブサイト及び本ウェブサイト上に掲載している個々の文章、写真、映像、音楽、音声、その他一切の著作物（以下、総称して「コンテンツ」といいます）の著作権は、当社または原著作者その他の権利者（以下、総称して「著作権者」といいます）に帰属します。
            <br />
            <br />
            <br />
            ②個人的な利用を目的として印字や保存等する場合、その他著作権法で認められる場合を除き、コンテンツを著作権者の事前の許諾なしに、複製、公衆送信、頒布、改変、切除、お客様のウェブサイトに転載するなどの行為（以下、「ご利用等」といいます）は著作権法で禁止されています。事前に当社の許諾を得ていただくようお願いします。ただし、肖像や第三者の著作物・商標等が含まれている場合、当社が不適切と判断する場合等、ご利用等の許諾をお断りする場合もあります。
            <br />
            <br />
            ③当社の許諾を得てコンテンツを利用等する場合、特別な定めがない限り、当社指定の著作権表示を行ってください。当社の事前の了承なく、著作権表示を変更、削除することはできません。
            <br />
            <br />
            掲載製品について
            <br />
            <br />
            製品の色はご覧の端末により、実際の色と多少異なる場合があります。
            また製品によっては、仕様変更の場合がございますので、ご了承ください。
          </TextBlock>
          <TextBlock title="2. 商標等について">
            本ウェブサイト及び本ウェブサイト上に掲載している個々の商標・標章・ロゴマーク、商号に関する権利は、当社または個々の権利の所有者に帰属します。商標法、その他の法律で認められる場合を除き、これらを当社又は各権利者の許諾なしに使用等する行為は商標法等で禁止されています。事前に当社又は各権利者に許諾を得ていただくようお願いします。
          </TextBlock>
          <TextBlock title="3. 免責事項">
            ①当社は、コンテンツ、その他本ウェブサイトで提供される情報等（以下、総称して「コンテンツ等」といいます）の内容について、その正確性、有用性、確実性その他の保証をするものではありません。コンテンツ等のご利用等により万一何らかの損害が発生したとしても、当社は一切責任を負いません。
            <br />
            <br />
            ②当社は、本ウェブサイトの構成、ご利用条件、URLおよびコンテンツ等を、予告なしに変更または中止することがあります。また、当社は、本ウェブサイトの運営を予告なしに中断または中止することがあります。
          </TextBlock>
          <TextBlock title="4. 禁止行為">
            本ウェブサイトのご利用にあたって、次の行為をしてはいけません。
            <br />
            <br />
            ・当社または第三者に不利益、損害を与え、または与える恐れのある行為
            <br />
            <br />
            ・当社の製品・サービスを誹謗（ひぼう）・中傷する行為、またはその恐れのある行為
            <br />
            <br />
            ・当社の役員または社員を誹謗（ひぼう）・中傷する行為、またはその恐れのある行為
            <br />
            <br />
            ・公序良俗に反するなど、当社の信用、品位を損なう行為、またはその恐れのある行為
            <br />
            <br />
            ・犯罪行為もしくは犯罪行為に結びつく行為、またはその恐れのある行為
            <br />
            <br />
            ・法律、法令もしくは条令に違反する行為、またはその恐れのある行為
            <br />
            <br />
            ・当社と何らかの提携または協力関係にあるものとの誤認を生じさせ、または当社がリンク元のサイトを認知、保証、支持もしくは推奨しているとの誤認を生じさせる行為、またはその恐れのある行為
            <br />
            <br />
            ・フレームリンク等、本ウェブサイトの明確性が損なわれる形のリンクを行う行為
            <br />
            <br />
            ・その他当社が不適切と判断した行為
          </TextBlock>
          <TextBlock title="5. リンクについて">
            本ウェブサイトは、営利、非営利、インターネット、イントラネットを問わず、本ウェブサイトに定める全てのご利用条件に従っていただくことを条件に、リンク
            （雑誌・書籍の出版物等への本ウェブサイトURLの掲載も含みます）していただくことが可能です。特に、4.禁止行為および以下に定める各事項をご確認いただき、遵守いただきますようお願いいたします。また、リンクに際して、当社へのご連絡は不要です。（以下、本ウェブサイトから、もしくは本ウェブサイトへリンクを貼っている当社以外の第三者のウェブサイトを、「リンクサイト」といいます。）
            リンクサイトは、それぞれのリンクサイトの運営者の責任で管理、運営されるもので、当社の管理下にあるものではありません。リンクサイトは、それぞれのリンクサイトの掲げる利用条件等に従ってご利用ください。当社は、リンクサイトの内容について、またこれらのご利用等で生じた第三者からの損害賠償を含む一切の損害、苦情その他いかなる請求についても責任を負いません。
            本ウェブサイトへのリンク、または本ウェブサイトからのリンクという事実は、当社がリンクサイトのご利用や、リンクサイトに掲載されている商品、サービス、会社等を認知、保証、支持もしくは推奨するものではありません。また、当社とリンクサイトとの間に提携などの特別な関係にあることを意味しません。
            <br />
            <br />
            遵守事項
            <br />
            <br />
            ①本ウェブサイトの情報やURLは、永続的な維持をお約束するものでなく、予告なしに変更・中止・削除する場合があります。リンクサイトにおけるURLの修正などメンテナンスはそれぞれのリンクサイトの運営者の責任で行ってください。本ウェブサイトにリンクされた結果、リンクサイトおよびリンクサイトの運営者、閲覧者または第三者に発生した一切の損害について、当社は責任を負いません。
            <br />
            <br />
            ②本ウェブサイトにリンクされる場合は、リンク先のページの「タイトル」等を参考にしていただき、リンク先のページ名を正しく表示してください。
            <br />
            <br />
            ③以下に該当するウェブサイトからのリンクは固くお断りいたします。
            当社または当社の役員または社員を誹謗（ひぼう）・中傷する内容を含むウェブサイト
            当社の製品・サービスを誹謗（ひぼう）・中傷する内容を含むウェブサイト
            公序良俗に反するなど、当社の信用、品位を損なうおそれのある内容を含むウェブサイト
            犯罪行為もしくは犯罪行為に結びつく行為、またはその恐れのある内容を含むウェブサイト
            法律、法令もしくは条令に違反する、またはその恐れのある情報を提供するウェブサイト
            <br />
            <br />
            ④貴ウェブサイトが上記諸事項のいずれかに違反していることが判明した場合、または当社がリンク削除の申し入れをした場合は、必ずこれに従っていただきます。
          </TextBlock>
          <TextBlock title="6. 個人情報保護方針">
            当社は、個人情報の重要性を認識し、個人情報保護方針を制定しています。お客様からお預かりする個人情報は、当社個人情報保護方針に基づき適切に管理、利用します。
            <br />
            <br />
            <ol className="ml-5 list-disc md:ml-10">
              <li>個人情報保護方針</li>
            </ol>
          </TextBlock>
          <TextBlock title="7. クッキー（Cookie）について">
            当社の本ウェブサイトでは、お客様の利便性向上、本ウェブサイト改善のための閲覧状況の統計的な把握、お客様への最適なサイト表示、および広告の配信のため、クッキー(Cookie)を使用しています。
            クッキーとは、本ウェブサイトを訪問したときに、本ウェブサイトがご利用の端末に書き込む小さなデータファイルで、本ウェブサイトを訪問したユーザーの識別が可能になります。本ウェブサイトは、予めお客様の承諾を得た場合を除き、クッキーによって個人を特定できるような情報を得ることはありません。また、当社は、クッキーに保存された情報を、閲覧状況の統計的な把握、お客様への最適なサイト表示、分析、および広告の配信以外の目的で使用することはありません。
            なお、お客様がブラウザの設定を変更することにより、クッキーを使用している本ウェブサイトを訪問しようとしているときに事前にその旨が表示されたり、クッキーの受け取りを拒否することができますが、拒否された場合に、本ウェブサイトの一部サービスがご利用できなくなることがありますので、あらかじめご了承ください。
            <br />
            <br />
            広告配信でのクッキー使用について
            <br />
            <br />
            当社は、当社の広告配信を業務委託している第三者との契約内容に基づき、第三者に対してクッキー等で収集した情報の全部または一部(個人を特定する情報は一切含まれません)を開示する場合があります。この場合、当該第三者は、本ウェブサイトでご覧いただいたページ履歴情報等を利用し、お客様にご興味・ご関心を持っていただける当社の広告を、広告ネットワークに登録している当社以外のウェブサイトでも表示することがあります。
            このような広告配信の停止をご希望の場合、広告配信会社のウェブページにて設定を変更することができます。
            <br />
            <br />
            <ol className="ml-5 list-disc md:ml-10">
              <li>Google 広告配信設定</li>
              <li>Facebook広告のオプトアウトページ</li>
              <li>Yahoo!広告のオプトアウトページ</li>
              <li>Twitter広告のオプトアウトページ</li>
              <li>Network Advertising Initiativeのオプトアウトページ</li>
            </ol>
            <br />
            <br />
            Google Analytics使用について
            <br />
            <br />
            本ウェブサイトでは本ウェブサイト改善のために、お客様からのアクセスを分析するツールとしてGoogle
            Analyticsを使用しています。Google
            Analyticsではクッキーを使用し、個人を特定する情報を含まずにログを収集しています。
            <br />
            <br />
            <ol className="ml-5 list-disc md:ml-10">
              <li>Google Analytics</li>
              <li>Google によるデータ使用について</li>
            </ol>
            <br />
            <br />
            Google Analyticsの広告向け機能について
            <br />
            <br />
            本ウェブサイトでは、「Google
            Analyticsの広告向けの機能」を有効にしており、下記の機能を利用し、広告やサイト改善のためDoubleClick
            CookieなどのサードパーティCookieを利用しています。 Google
            Analyticsのユーザーの分布とインタレストカテゴリに関するレポート
            これにより、本ウェブサイトではGoogle
            AnalyticsのCookieを利用して、お客様の年齢・性別・当社製品に関する関心の傾向をおおよそ把握するための分析が可能となっております。
            「Google
            Analyticsの広告向けの機能」を利用されたくない場合は、設定によってトラッキングを無効にすることが可能です。Google
            Analytics オプトアウト
            アドオンをブラウザにインストールされると簡単に無効化できます。
          </TextBlock>
          <TextBlock title="8. 動作環境について">
            本ウェブサイトを利用される場合には、Internet
            Explorer、Chrome、Firefox、Safariの最新版を推奨します。
            お客様がご利用される端末の設定や、一部のブラウザ、アプリケーションでは、意図しない表示になることがあります。
            <br />
            <br />
            httpsページの閲覧環境について
            <br />
            <br />
            ウェブサイトのセキュリティ強化の一環として、当社各ウェブサイトの常時SSL化(*1)の推進とSSL/TLS(*2)の最新バージョンの適用を順次実施しております。これに伴い、一部のブラウザで、表示に不具合が出る場合がございます。お手数ですが、お客様のパソコン・携帯電話のご利用環境を確認いただき、必要に応じて設定の変更をお願いいたします。
            (*1)常時SSL化とは、ウェブサイトのすべてのページをhttps化（通信の暗号化）するセキュリティ手法のことです。
            (*2) SSL/TLSとは、通信の暗号方式のことです。
          </TextBlock>
          <TextBlock title="9. 輸出管理について">
            ①本ウェブサイトで提供した技術、プログラムあるいは購入した製品を輸出（外国への持ち出し、日本国内における非居住者への開示を含む）する場合は、「外国為替及び外国貿易法」、「米国輸出管理法」その他適用される法令をお守りください。
            <br />
            <br />
            ②購入された製品は日本国内専用です。輸出（外国への持ち出し含む）に関して当社は一切の責任を負いません。
          </TextBlock>
          <TextBlock title="10. 準拠法、管轄裁判所について">
            ①本ウェブサイトのご利用やこの「サイトのご利用にあたって」の解釈および適用は、特別な定めがない限り、日本国法に準拠します。
            <br />
            <br />
            ②本ウェブサイトに関するすべての紛争に関し、特別な定めがない限り、東京地方裁判所を第一審の管轄裁判所とします。
          </TextBlock>
          <TextBlock title="11. 本ウェブサイトに関するお問い合わせ">
            本ウェブサイトに関するお問い合わせは、「お問い合わせ」から、当社にご連絡ください。
          </TextBlock>
        </div>
      </div>
    </main>
  )
}
