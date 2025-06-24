import LegalLayout from '@/components/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout title="Unique Data Mining (UDM) 利用規約">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 mb-6">
          <p>制定日：2025年6月24日</p>
          <p>最終改定日：2025年6月24日</p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第1条（定義）</h2>
          <p className="mb-4">本利用規約において使用する用語の定義は、以下のとおりとします。</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>「当社」</strong>とは、株式会社SKALEをいいます</li>
            <li><strong>「本サービス」</strong>とは、当社が提供するコンバージョン改善システム「Unique Data Mining（UDM）」をいいます</li>
            <li><strong>「利用者」</strong>とは、本サービスを利用する個人または法人をいいます</li>
            <li><strong>「利用契約」</strong>とは、本規約に基づいて当社と利用者との間で締結される、本サービスの利用に関する契約をいいます</li>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第3条（利用契約の成立）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>利用契約は、利用者が当社所定の方法により利用申込みを行い、当社がこれを承諾した時点で成立するものとします</li>
            <li>当社は、利用申込みに対して承諾しない場合があり、その理由について開示する義務を負いません</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第4条（サービス内容）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>本サービスは、利用者のWebサイトにおけるユーザー行動分析およびコンバージョン最適化を目的としたシステムです</li>
            <li>本サービスの主な機能は以下のとおりです：
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>目的別ナビゲーション表示機能</li>
                <li>ユーザー行動分析機能</li>
                <li>アクセス解析レポート機能</li>
                <li>外部ツール連携機能</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第5条（利用者の義務）</h2>
          <p className="mb-3">利用者は、以下の事項を遵守するものとします：</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>本サービスを善良な管理者の注意をもって利用すること</li>
            <li>本サービスの利用に関して適用される法令等を遵守すること</li>
            <li>自らのWebサイトにおいて、訪問者に対し適切なプライバシー通知を行うこと</li>
            <li>本サービスのタグ設置およびその後の管理を適切に行うこと</li>
            <li>当社が提供するサポート情報やガイドラインに従うこと</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第6条（禁止事項）</h2>
          <p className="mb-3">利用者は、以下の各号に掲げる行為を行ってはなりません：</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>当社または第三者の著作権、商標権その他の知的財産権を侵害する行為</li>
            <li>当社または第三者の名誉、信用もしくはプライバシーを侵害する行為</li>
            <li>詐欺、脅迫、ハラスメント等の違法または不当な行為</li>
            <li>コンピューターウイルス等の有害なプログラムを送信または流布する行為</li>
            <li>本サービスのシステムに過度な負荷をかける行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>本サービスを利用して収集した情報を第三者に販売、譲渡もしくは貸与する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第7条（知的財産権）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>本サービスに関する知的財産権は、当社または当社にライセンスを許諾している第三者に帰属します</li>
            <li>利用者は、本サービスの利用により当社の知的財産権についていかなる権利も取得しません</li>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第9条（利用料金および支払い）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>利用料金は、当社が別途定める料金表によります</li>
            <li>利用者は、当社が指定する方法により、指定期日までに利用料金を支払うものとします</li>
            <li>一度支払われた利用料金は、理由の如何を問わず返金しません</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第10条（サービスの変更・中断・終了）</h2>
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
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第11条（契約の解除）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、利用者が以下の各号のいずれかに該当する場合、事前の催告なしに利用契約を解除することができるものとします：
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>本利用規約に違反した場合</li>
                <li>利用料金の支払いを怠った場合</li>
                <li>反社会的勢力に該当することが判明した場合</li>
                <li>その他、契約を継続しがたい重大な事由が生じた場合</li>
              </ul>
            </li>
            <li>利用者は、当社所定の手続きにより利用契約を解除することができるものとします</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第12条（損害賠償および免責）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社の債務不履行または不法行為により利用者に損害が生じた場合、当社は当該損害を賠償する責任を負うものとします。ただし、当社に故意または重大な過失がある場合を除き、当社の責任は利用者が当社に支払った直近12か月分の利用料金の総額を上限とするものとします</li>
            <li>当社は、本サービスの内容、品質について何らの保証も行わないものとします</li>
            <li>利用者の本サービスの利用により第三者に損害が生じた場合、利用者は自己の責任と費用において解決するものとし、当社に損害を与えてはならないものとします</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第13条（秘密保持）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当事者は、相手方から開示された秘密情報を第三者に開示または漏洩してはなりません</li>
            <li>前項の義務は、利用契約終了後も5年間継続します</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第14条（利用規約の変更）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、利用者の一般の利益に適合する場合、または契約をした目的に反せず、かつ変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものである場合には、利用者の同意を得ることなく本利用規約を変更できます</li>
            <li>前項による利用規約の変更は、変更後の利用規約の効力発生時期を定め、効力発生時期の相当期間前に、本サービス内または当社ウェブサイトへの掲載その他の適切な方法により利用者に周知します</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第15条（分離可能性）</h2>
          <p className="text-gray-700">
            本利用規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本利用規約の残りの規定および一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第16条（準拠法および管轄裁判所）</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>本利用規約の成立、効力、履行および解釈に関しては、日本法が適用されるものとします</li>
            <li>本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします</li>
          </ol>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">第17条（お問い合わせ）</h3>
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
                  href="mailto:info@u-d-m.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  info@u-d-m.com
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