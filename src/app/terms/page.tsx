import LegalLayout from '@/components/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout title="THE LETTER 利用規約">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 mb-6">
          <p>制定日：2025年6月24日</p>
          <p>最終改定日：2025年6月24日</p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第1条（定義）</h2>
          <p className="mb-4">本利用規約において使用する用語の定義は、以下のとおりとします。</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>「当社」とは、株式会社SKALEをいいます</li>
            <li>「本サービス」とは、当社が提供するメッセージ配信サービス「THE LETTER」をいいます</li>
            <li>「利用者」とは、本サービスを利用する個人または法人をいいます</li>
            <li>「メッセージ」とは、利用者が本サービスを通じて作成・配信するコンテンツをいいます</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第2条（利用規約の適用）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>本利用規約は、本サービスの利用に関して適用されます</li>
            <li>利用者は、本サービスの利用開始をもって、本利用規約に同意したものとみなします</li>
            <li>当社が別途定める個別規定やガイドラインは、本利用規約の一部を構成するものとします</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第3条（サービス内容）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>本サービスは、利用者が作成したメッセージを専用URLで配信するサービスです</li>
            <li>本サービスの主な機能は以下のとおりです：
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>メッセージ作成機能</li>
                <li>専用URL生成機能</li>
                <li>メッセージ配信機能</li>
                <li>アクセス統計機能</li>
              </ul>
            </li>
            <li>本サービスはアカウント登録不要でご利用いただけますが、利用者は本規約を遵守する義務があります</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第4条（利用者の義務）</h2>
          <p className="mb-3">利用者は、以下の事項を遵守するものとします：</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>本サービスを適切かつ善良に利用すること</li>
            <li>本サービスの利用に関して適用される法令等を遵守すること</li>
            <li>他者の権利を尊重し、迷惑をかけないよう配慮すること</li>
            <li>当社が提供するサポート情報やガイドラインに従うこと</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第5条（禁止事項）</h2>
          <p className="mb-3">利用者は、以下の各号に掲げる行為を行ってはなりません：</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>当社または第三者の著作権、商標権その他の知的財産権を侵害する行為</li>
            <li>当社または第三者の名誉、信用もしくはプライバシーを侵害する行為</li>
            <li>詐欺、脅迫、ハラスメント等の違法または不当な行為</li>
            <li>わいせつ、暴力的、差別的な内容を含む行為</li>
            <li>虚偽の情報を流布する行為</li>
            <li>スパム行為や無差別な宣伝・広告行為</li>
            <li>コンピューターウイルス等の有害なプログラムを送信または流布する行為</li>
            <li>本サービスのシステムに過度な負荷をかける行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>営利目的での無断利用（当社が許可したOEM利用を除く）</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第6条（メッセージの管理）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>作成されたメッセージのURLには有効期限があります（原則として1年間）</li>
            <li>当社は、本規約に違反すると判断したメッセージを予告なく削除することがあります</li>
            <li>利用者は、作成したメッセージのバックアップを自己の責任で行うものとします</li>
            <li>メッセージの内容については、利用者が全責任を負います</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第7条（知的財産権）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>本サービスのシステム、デザイン、技術等に関する知的財産権は当社に帰属します</li>
            <li>利用者が作成したメッセージの著作権は利用者に帰属します</li>
            <li>利用者は、当社に対し、サービス運営に必要な範囲でメッセージを利用する権利を許諾するものとします</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第8条（データの取扱い）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>本サービスにより収集されるデータの所有権は、利用者に帰属します</li>
            <li>当社は、本サービスの提供および改善のために必要な範囲で、利用者のデータを利用できるものとします</li>
            <li>当社は、個人を特定できない統計的な情報として、データを学術研究やサービス改善のために利用することがあります</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第9条（サービスの変更・中断・終了）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、利用者への事前通知により、本サービスの内容を変更することができるものとします</li>
            <li>当社は、以下の各号のいずれかに該当する場合には、本サービスを一時的に中断することができるものとします：
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>システムメンテナンスを実施する場合</li>
                <li>天災地変等の不可抗力により本サービスの提供が困難になった場合</li>
                <li>その他、当社が必要と判断した場合</li>
              </ul>
            </li>
            <li>当社は、利用者への30日前の事前通知により、本サービスを終了することができるものとします</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第10条（免責事項）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、本サービスの品質、信頼性、有用性等について一切保証しません</li>
            <li>本サービスの利用により生じた損害について、当社は責任を負いません</li>
            <li>システムメンテナンス、障害等によりサービスが利用できない場合がありますが、当社は責任を負いません</li>
            <li>利用者が本サービスを利用して第三者との間で生じた紛争について、当社は責任を負いません</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第11条（損害賠償の制限）</h2>
          <p className="text-gray-700">
            当社の債務不履行または不法行為により利用者に損害が生じた場合であっても、当社に故意または重大な過失がある場合を除き、当社は一切の損害賠償責任を負わないものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第12条（秘密保持）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当事者は、相手方から開示された秘密情報を第三者に開示または漏洩してはなりません</li>
            <li>前項の義務は、本規約の効力終了後も3年間継続します</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第13条（利用規約の変更）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、利用者の一般の利益に適合する場合、または変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものである場合には、利用者の同意を得ることなく本利用規約を変更できます</li>
            <li>前項による利用規約の変更は、変更後の利用規約の効力発生時期を定め、効力発生時期の相当期間前に、本サービス内または当社ウェブサイトへの掲載その他の適切な方法により利用者に周知します</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第14条（分離可能性）</h2>
          <p className="text-gray-700">
            本利用規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本利用規約の残りの規定および一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第15条（準拠法および管轄裁判所）</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>本利用規約の成立、効力、履行および解釈に関しては、日本法が適用されるものとします</li>
            <li>本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします</li>
          </ol>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">第16条（お問い合わせ）</h3>
            <p className="mb-4 text-gray-700">本利用規約に関するお問い合わせは、以下までご連絡ください：</p>
            
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
                  href="mailto:we@skale.co.jp"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  we@skale.co.jp
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-900">株式会社SKALE</p>
              <p className="text-gray-700">〒160-0023 東京都新宿区西新宿３丁目２−９ 新宿ワシントンビル本館 2F</p>
              <p className="text-gray-700">経営責任者 加藤 慶也</p>
            </div>
          </div>
        </div>
      </div>
    </LegalLayout>
  )
}