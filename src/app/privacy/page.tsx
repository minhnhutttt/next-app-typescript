import LegalLayout from '@/components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout title="Unique Data Mining (UDM) プライバシーポリシー">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 mb-6">
          <p>制定日：2025年6月24日</p>
          <p>最終改定日：2025年6月24日</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700">
            株式会社SKALE（以下「当社」といいます）は、個人情報の重要性を深く認識し、個人情報の保護に関する法律（個人情報保護法）その他の関連する法令および規範を遵守して、個人情報を適切に取り扱います。
          </p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 基本方針</h2>
          <p className="text-gray-700">
            株式会社SKALE（以下「当社」といいます）は、個人情報の重要性を深く認識し、個人情報の保護に関する法律（個人情報保護法）その他の関連する法令および規範を遵守して、個人情報を適切に取り扱います。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 適用範囲</h2>
          <p className="text-gray-700">
            本プライバシーポリシーは、当社が提供するコンバージョン改善システム「Unique Data Mining（UDM）」（以下「本サービス」）における個人情報の取扱いについて定めるものです。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 個人情報の定義</h2>
          <p className="text-gray-700">
            本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に規定する個人情報を指します。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 個人情報管理責任者</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-900">個人情報管理責任者</p>
            <p className="text-gray-700">株式会社SKALE 経営責任者 加藤 慶也</p>
            <p className="text-gray-700">連絡先：info@u-d-m.com</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 収集する個人情報の種類</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">5.1 契約者（本サービス利用者）から収集する情報</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>会社名・組織名</li>
                <li>部署名・役職名</li>
                <li>氏名（担当者名）</li>
                <li>電話番号</li>
                <li>メールアドレス</li>
                <li>郵便番号・住所</li>
                <li>契約に関する情報</li>
                <li>お問い合わせ内容</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">5.2 Webサイト訪問者から自動的に収集する情報</h3>
              <p className="mb-3 text-gray-700">本サービスが設置されたWebサイトの訪問者から、以下の情報を自動的に収集します：</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">アクセス情報</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>IPアドレス</li>
                    <li>ユーザーエージェント（ブラウザ・OS情報）</li>
                    <li>リファラー情報</li>
                    <li>アクセス日時</li>
                    <li>閲覧ページURL</li>
                    <li>滞在時間</li>
                    <li>クリック情報</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">デバイス情報</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>デバイスの種類</li>
                    <li>画面解像度</li>
                    <li>言語設定</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800">位置情報</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>IPアドレスから推定される地域情報（都道府県レベル）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Cookieおよび類似技術の使用</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">6.1 使用目的</h3>
              <p className="mb-3 text-gray-700">本サービスでは、以下の目的でCookieおよび類似技術を使用します：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>ユーザーの訪問履歴の分析</li>
                <li>Webサイトの利用状況の把握</li>
                <li>コンバージョン測定</li>
                <li>サービス機能の提供</li>
                <li>ユーザー体験の向上</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">6.2 使用するCookieの種類</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>必須Cookie</strong>: サービス提供に必要不可欠なCookie</li>
                <li><strong>分析Cookie</strong>: アクセス解析やパフォーマンス測定のためのCookie</li>
                <li><strong>機能Cookie</strong>: サービス機能の提供のためのCookie</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">6.3 Cookieの管理</h3>
              <p className="text-gray-700">
                ユーザーは、ブラウザの設定によりCookieの受け入れを拒否することができますが、この場合、本サービスの一部機能が利用できない場合があります。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 個人情報の利用目的</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">7.1 契約者の個人情報</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>本サービスの提供・運営・管理</li>
                <li>契約の履行</li>
                <li>お客様への連絡・サポート</li>
                <li>料金請求・決済処理</li>
                <li>サービス改善・新サービス開発</li>
                <li>マーケティング・営業活動</li>
                <li>法令遵守</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">7.2 Webサイト訪問者の情報</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Webサイトの利用状況分析</li>
                <li>コンバージョン測定・分析</li>
                <li>ユーザー行動分析</li>
                <li>レポート作成</li>
                <li>サービス改善</li>
                <li>統計データの作成（個人を特定できない形式）</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 個人情報の第三者提供</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">8.1 第三者提供の原則</h3>
              <p className="mb-3 text-gray-700">当社は、以下の各号に掲げる場合を除き、個人情報を第三者に提供いたしません：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">8.2 業務委託先への提供</h3>
              <p className="text-gray-700">
                当社は、個人情報の取扱いの全部または一部を第三者に委託する場合があります。この場合、委託先との間で秘密保持契約を締結し、適切な監督を行います。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">8.3 外部サービスとの連携</h3>
              <p className="mb-3 text-gray-700">本サービスは、以下の外部サービスと連携する場合があります：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Google Analytics</li>
                <li>その他の分析ツール</li>
              </ul>
              <p className="mt-3 text-gray-700">これらのサービスへの情報提供は、各サービスのプライバシーポリシーに従って行われます。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">9. 個人情報の海外への移転</h2>
          <p className="mb-3 text-gray-700">本サービスの一部機能において、個人情報が海外のサーバーで処理される場合があります。主な移転先は以下のとおりです：</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>アメリカ合衆国（Google Inc.等）</li>
          </ul>
          <p className="mt-3 text-gray-700">
            海外への移転にあたっては、移転先の国・地域における個人情報保護制度、移転先における安全管理措置等を確認の上、適切な保護措置を講じます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">10. 個人情報の保管期間</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">10.1 契約者の個人情報</h3>
              <p className="text-gray-700">契約終了日から5年間</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">10.2 Webサイト訪問者の情報</h3>
              <p className="text-gray-700">収集日から2年間</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">10.3 法令による保管義務</h3>
              <p className="text-gray-700">法令により保管が義務付けられている情報については、当該法令に定める期間</p>
            </div>
          </div>

          <p className="mt-4 text-gray-700">上記期間経過後、個人情報は適切な方法により廃棄いたします。</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">11. 安全管理措置</h2>
          <p className="mb-3 text-gray-700">当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のため、以下の措置を実施しています：</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>組織的安全管理措置</li>
            <li>人的安全管理措置</li>
            <li>物理的安全管理措置</li>
            <li>技術的安全管理措置</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">12. 個人情報の開示等の請求</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">12.1 対象者の権利</h3>
              <p className="mb-3 text-gray-700">個人情報の本人は、当社に対して以下の請求を行うことができます：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>個人情報の利用目的の通知</li>
                <li>個人情報の開示</li>
                <li>個人情報の訂正・追加・削除</li>
                <li>個人情報の利用停止・消去</li>
                <li>個人情報の第三者提供の停止</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">12.2 請求方法</h3>
              <p className="mb-3 text-gray-700">上記の請求は、以下の方法で受け付けます：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>メール：info@u-d-m.com</li>
                <li>公式LINE：https://lin.ee/sQ5Hh6G</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">12.3 本人確認</h3>
              <p className="text-gray-700">請求にあたっては、本人確認のため、運転免許証等の身分証明書の提示を求める場合があります。</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">12.4 手数料</h3>
              <p className="text-gray-700">開示請求については、実費相当額の手数料をいただく場合があります。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">13. 未成年者の個人情報</h2>
          <p className="text-gray-700">
            当社は、15歳未満の方から個人情報を収集することは想定しておりません。15歳未満の方が個人情報を提供する場合は、保護者の同意を得た上で行ってください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">14. お問い合わせ窓口</h2>
          <p className="mb-4 text-gray-700">個人情報の取扱いに関するお問い合わせ、苦情、開示等の請求については、以下までご連絡ください：</p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">株式会社SKALE 個人情報お問い合わせ窓口</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center space-x-3">
                <span className="font-medium">公式LINE:</span>
                <a 
                  href="https://lin.ee/sQ5Hh6G" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  https://lin.ee/sQ5Hh6G
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-medium">Email:</span>
                <a 
                  href="mailto:info@u-d-m.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  info@u-d-m.com
                </a>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <p><span className="font-medium">住所:</span> 〒160-0023 東京都新宿区西新宿３丁目２−９ 新宿ワシントンビル本館 2F</p>
                <p><span className="font-medium">経営責任者:</span> 加藤 慶也</p>
                <p><span className="font-medium">受付時間:</span> 平日 10:00～18:00（土日祝日、年末年始を除く）</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">15. プライバシーポリシーの変更</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、法令の改正や事業内容の変更等に伴い、本プライバシーポリシーを変更する場合があります</li>
            <li>変更する場合は、変更後のプライバシーポリシーの効力発生時期を定め、効力発生時期の相当期間前に、本サービス内または当社ウェブサイトへの掲載その他の適切な方法により通知いたします</li>
            <li>変更内容が利用者に不利益を与える可能性がある場合は、より明確な方法で通知し、必要に応じて同意を求めます</li>
          </ol>
        </section>
      </div>
    </LegalLayout>
  )
}