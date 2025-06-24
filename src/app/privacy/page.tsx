import LegalLayout from '@/components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout title="「経愛」AIアドバイザーサービス プライバシーポリシー">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 mb-6">
          <p>最終更新日：2025年6月24日</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700">
            株式会社SKALE（以下「当社」）は、「経愛」AIアドバイザーサービス（以下「本サービス」）において、利用者の個人情報保護の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）その他関連法令を遵守し、適切な取扱いを行います。
          </p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 個人情報の定義</h2>
          <p className="text-gray-700">
            本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める「個人情報」、すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）を指します。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 取得する個人情報の種類</h2>
          <p className="mb-4 text-gray-700">当社は、本サービスの提供において、以下の個人情報を取得することがあります。</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">2.1 診断サービス利用時</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>氏名・連絡先情報</strong>：氏名、メールアドレス、電話番号等</li>
                <li><strong>企業・事業情報</strong>：企業名、事業内容、規模、業界、役職等</li>
                <li><strong>経営課題・状況</strong>：質問回答による経営状況、課題、方針等</li>
                <li><strong>利用状況データ</strong>：サービス利用日時、利用頻度、質問内容等</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">2.2 お問い合わせ時（LINE含む）</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>基本情報</strong>：氏名、連絡先、企業名等</li>
                <li><strong>お問い合わせ内容</strong>：質問、要望、意見等</li>
                <li><strong>LINE関連情報</strong>：LINEアカウント情報、メッセージ履歴等</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">2.3 自動的に取得される情報</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>アクセス情報</strong>：IPアドレス、ブラウザ情報、アクセス日時等</li>
                <li><strong>デバイス情報</strong>：端末種別、OS、画面解像度等</li>
                <li><strong>利用状況</strong>：ページ閲覧履歴、滞在時間、操作履歴等</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 個人情報の取得方法</h2>
          <p className="mb-3 text-gray-700">当社は、以下の方法により個人情報を取得します。</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>本サービスの診断機能利用時の入力フォーム</li>
            <li>お問い合わせフォーム、公式LINE、メール等でのお問い合わせ</li>
            <li>ウェブサイトへのアクセス時の自動取得</li>
            <li>セミナー、イベント等での名刺交換や申込み</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 個人情報の利用目的</h2>
          <p className="mb-4 text-gray-700">当社は、取得した個人情報を以下の目的で利用します。</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">4.1 サービス提供関連</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>AIアドバイザーによる経営診断・助言の提供</li>
                <li>利用者の質問・相談への回答</li>
                <li>サービスの改善・品質向上</li>
                <li>新機能の開発・検討</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">4.2 コミュニケーション関連</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>お問い合わせへの対応</li>
                <li>サービスに関する重要な通知・連絡</li>
                <li>サービス利用に関するサポート</li>
                <li>アフターフォロー・満足度調査</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">4.3 マーケティング関連</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>サービス関連情報の提供</li>
                <li>セミナー・イベントのご案内</li>
                <li>市場調査・統計データの作成（個人を特定できない形で処理）</li>
                <li>サービスの利用動向分析</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">4.4 管理・運営関連</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>利用者認証・本人確認</li>
                <li>不正利用の防止・セキュリティ対策</li>
                <li>利用規約違反の調査・対応</li>
                <li>法令に基づく対応</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 個人情報の第三者提供</h2>
          <p className="mb-4 text-gray-700">当社は、以下の場合を除き、利用者の同意なく個人情報を第三者に提供することはありません。</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">5.1 提供しない原則</h3>
              <p className="text-gray-700">当社は、原則として個人情報を第三者に提供いたしません。</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">5.2 例外的に提供する場合</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>法令に基づく場合</strong>：法律の規定に基づく場合</li>
                <li><strong>生命・身体保護の場合</strong>：人の生命、身体又は財産の保護のために必要がある場合</li>
                <li><strong>公衆衛生・児童の健全育成</strong>：公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合</li>
                <li><strong>国の機関等への協力</strong>：国の機関等が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">5.3 委託先での取扱い</h3>
              <p className="mb-3 text-gray-700">サービス提供に必要な範囲で、以下の委託先に個人情報の処理を委託する場合があります：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>システム開発・保守業者</li>
                <li>クラウドサービスプロバイダー</li>
                <li>データ分析業者</li>
                <li>カスタマーサポート業者</li>
              </ul>
              <p className="mt-3 text-gray-700">委託先に対しては、適切な監督を行い、個人情報の安全管理を徹底させます。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 個人情報の安全管理</h2>
          <p className="mb-4 text-gray-700">当社は、個人情報の漏洩、滅失、毀損等を防止するため、以下の安全管理措置を講じます。</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>技術的対策</strong>：暗号化、アクセス制御、ファイアウォール等</li>
            <li><strong>物理的対策</strong>：入退室管理、機器の物理的保護等</li>
            <li><strong>人的対策</strong>：従業員への教育、誓約書の取得等</li>
            <li><strong>組織的対策</strong>：管理責任者の設置、規程の整備等</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 個人情報の保存期間</h2>
          <p className="mb-4 text-gray-700">当社は、個人情報を利用目的の達成に必要な期間に限り保存します。</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">7.1 一般的な保存期間</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>診断データ</strong>：最終利用から3年間</li>
                <li><strong>お問い合わせ履歴</strong>：対応完了から1年間</li>
                <li><strong>統計データ</strong>：個人を特定できない形で無期限</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">7.2 法的保存義務</h3>
              <p className="text-gray-700">法令により保存期間が定められている場合は、当該期間中保存します。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">8. LINE公式アカウントでの個人情報取扱い</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">8.1 LINEとの情報共有</h3>
              <p className="mb-3 text-gray-700">公式LINEでのお問い合わせ時、以下の情報がLINE株式会社と共有されます：</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>LINEアカウント情報（ユーザーID、表示名等）</li>
                <li>メッセージ内容</li>
                <li>送受信日時</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">8.2 LINEプライバシーポリシー</h3>
              <p className="text-gray-700">
                LINE利用時は、LINE株式会社のプライバシーポリシーも適用されます。詳細は
                <a 
                  href="https://line.me/ja/terms/policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline ml-1"
                >
                  LINEプライバシーポリシー
                </a>
                をご確認ください。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">8.3 LINE上での個人情報取扱い</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>LINE上で提供された個人情報は、本プライバシーポリシーに従って取扱います</li>
                <li>必要に応じて、LINE外の方法（メール等）での連絡をお願いする場合があります</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">9. AIサービス特有の取扱い</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">9.1 学習データとしての利用</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>利用者の質問内容・企業情報は、個人・企業を特定できない形でAIの学習データとして活用する場合があります</li>
                <li>学習データは統計的処理により匿名化され、個別の企業・個人を特定することはできません</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">9.2 アドバイス内容の取扱い</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>AIが生成したアドバイス内容は、サービス改善のための分析に使用する場合があります</li>
                <li>個別のアドバイス内容を第三者に開示することはありません</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">10. 利用者の権利</h2>
          <p className="mb-4 text-gray-700">利用者は、自己の個人情報について以下の権利を有します。</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">10.1 開示請求権</h3>
              <p className="text-gray-700">当社が保有する自己の個人情報の開示を請求することができます。</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">10.2 訂正・削除請求権</h3>
              <p className="text-gray-700">保有する個人情報に誤りがある場合、訂正や削除を請求することができます。</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">10.3 利用停止請求権</h3>
              <p className="text-gray-700">個人情報の利用や第三者提供の停止を請求することができます。</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">10.4 権利行使の方法</h3>
              <p className="text-gray-700">これらの権利を行使される場合は、本人確認の上、以下のお問い合わせ先までご連絡ください。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">11. クッキー（Cookie）について</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">11.1 クッキーの利用</h3>
              <p className="text-gray-700">当社は、サービスの利便性向上のため、クッキーを使用する場合があります。</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">11.2 クッキーの種類・目的</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>機能的クッキー</strong>：サービスの基本機能提供</li>
                <li><strong>分析クッキー</strong>：利用状況の分析・改善</li>
                <li><strong>マーケティングクッキー</strong>：関連情報の提供</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">11.3 クッキーの管理</h3>
              <p className="text-gray-700">ブラウザの設定により、クッキーの受け入れを拒否することができます。ただし、一部の機能が利用できない場合があります。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">12. 未成年者の個人情報</h2>
          <p className="text-gray-700">
            本サービスは主に企業経営者を対象としていますが、18歳未満の方の個人情報を取得する場合は、保護者の同意を得た上で適切に取扱います。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">13. 国外への個人情報の移転</h2>
          <p className="text-gray-700">
            当社は、クラウドサービス等の利用により、個人情報を国外に移転する場合があります。その際は、移転先の国の個人情報保護制度や委託先の管理体制を確認し、適切な保護措置を講じます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">14. プライバシーポリシーの変更</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">14.1 変更について</h3>
              <p className="text-gray-700">当社は、法令の改正やサービス内容の変更等に応じて、本プライバシーポリシーを変更する場合があります。</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">14.2 変更の通知</h3>
              <p className="text-gray-700">重要な変更については、サービス内での表示、公式LINE、メール等により事前に通知いたします。</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">14.3 変更の効力</h3>
              <p className="text-gray-700">変更されたプライバシーポリシーは、公表した日から効力を生じます。</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">15. お問い合わせ</h2>
          <p className="mb-4 text-gray-700">個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。</p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">株式会社SKALE 個人情報保護担当</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center space-x-3">
                <span className="font-medium">公式LINE:</span>
                <a 
                  href="https://lin.ee/Qc2QZ4p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  https://lin.ee/Qc2QZ4p
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-medium">Email:</span>
                <a 
                  href="mailto:we@skale.co.jp"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  we@skale.co.jp
                </a>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <p><span className="font-medium">住所:</span> 〒160-0023 東京都新宿区西新宿３丁目２−９ 新宿ワシントンビル本館 2F</p>
                <p><span className="font-medium">経営責任者:</span> 加藤 慶也</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200">
          <p>附則: 本プライバシーポリシーは、2025年6月24日より施行いたします。</p>
        </div>
      </div>
    </LegalLayout>
  )
}