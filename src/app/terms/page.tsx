import LegalLayout from '@/components/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout title="「経愛」AIアドバイザーサービス利用規約">
      <div className="space-y-8">
        <div className="text-sm text-gray-600 mb-6">
          <p>最終更新日：2025年6月24日</p>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第1条（定義）</h2>
          <p className="mb-4">本利用規約において、以下の用語は以下の意味を有するものとします。</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>「本サービス」</strong>：株式会社SKALEが提供する「経愛」AIアドバイザーサービス</li>
            <li><strong>「当社」</strong>：株式会社SKALE</li>
            <li><strong>「利用者」</strong>：本サービスを利用する個人または法人</li>
            <li><strong>「AIアドバイザー」</strong>：加藤慶也氏の経営哲学・知識・判断基準を学習したAIシステム</li>
            <li><strong>「アドバイス」</strong>：本サービスを通じて提供される経営に関する助言・提案</li>
            <li><strong>「利用規約」</strong>：本文書に定める条項</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第2条（サービス概要）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>本サービスは、加藤慶也氏の経営知識・判断基準・価値観を継承したAIアドバイザーによる経営診断・助言サービスです。</li>
            <li>利用者が質問に回答することで、加藤氏の経営哲学に基づいた個別最適化されたアドバイスを提供します。</li>
            <li>本サービスで提供されるアドバイスは、あくまで参考情報であり、経営判断を保証するものではありません。</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第3条（利用者の資格）</h2>
          <p className="mb-3">本サービスは、以下の条件を満たす方のみご利用いただけます：</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>満18歳以上であること</li>
            <li>法人の場合は、適法に設立され有効に存続していること</li>
            <li>本利用規約に同意していること</li>
            <li>反社会的勢力に該当しないこと</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第4条（サービス内容・制限）</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">1. 提供内容</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>経営診断質問への回答に基づくカスタマイズアドバイス</li>
              <li>加藤慶也氏の経営哲学に基づく戦略的提言</li>
              <li>グローバル展開・多角的経営に関する知見の提供</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">2. 利用制限</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>本サービスは無料で提供いたしますが、システムの安定運用のため、以下の制限を設ける場合があります：
                <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                  <li>1日あたりの利用回数制限</li>
                  <li>1回のセッション時間制限</li>
                  <li>同時アクセス数の制限</li>
                </ul>
              </li>
              <li>制限内容は、事前の通知なく変更する場合があります</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">3. サービス範囲の限界</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>法的助言は提供いたしません</li>
              <li>具体的な投資推奨は行いません</li>
              <li>個別企業の株価予測等は提供いたしません</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第5条（料金）</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">1. 基本サービス</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>本サービスは無料で提供いたします</li>
              <li>利用者に料金をお支払いいただく義務はありません</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">2. 将来的なサービス拡張</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>当社は、将来的に有料の追加サービスを提供する場合があります</li>
              <li>有料サービスを提供する場合は、事前に利用者に告知し、別途同意を得た上で提供いたします</li>
              <li>基本の診断サービスは引き続き無料で提供いたします</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第6条（知的財産権）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>本サービスに関する一切の知的財産権は当社に帰属します。</li>
            <li>加藤慶也氏の経営哲学・知識に関する権利は、同氏および当社に帰属します。</li>
            <li>利用者は本サービスで得られたアドバイス内容を、以下の行為に使用することを禁じます：
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>第三者への有償提供</li>
                <li>他社による類似サービスの開発・運営（当社への依頼による場合を除く）</li>
                <li>知的財産権の侵害行為</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第7条（免責事項）</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">1. アドバイスの性質</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>本サービスで提供されるアドバイスは、参考情報としての提供であり、経営判断や投資判断を保証するものではありません</li>
              <li>利用者は自己の責任において、提供されたアドバイスの採用可否を判断するものとします</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">2. 免責範囲</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>当社は、本サービスの利用により利用者に生じた損害について、一切の責任を負いません</li>
              <li>当社に明らかな技術的過失がある場合でも、損害賠償責任の範囲は、当該過失と相当因果関係にある直接損害に限定されます</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">3. AI技術の限界</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>AIシステムの性質上、100%正確な回答を保証するものではありません</li>
              <li>システムの学習データに基づく回答であり、最新の情報を反映していない場合があります</li>
              <li>当社は、AIが生成する回答の正確性、完全性、適時性について保証いたしません</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第8条（個人情報・データ保護）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、利用者の個人情報を適切に管理し、法令に従って取り扱います。</li>
            <li>利用者の質問内容・企業情報は、以下の目的でのみ使用いたします：
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>サービス提供のため</li>
                <li>サービス改善・品質向上のため</li>
                <li>統計データ作成のため（個人・企業を特定できない形で処理）</li>
              </ul>
            </li>
            <li>利用者の同意なく、個人や企業を特定可能な形で第三者に開示することはありません。</li>
            <li>詳細は別途定める「プライバシーポリシー」をご確認ください。</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第9条（禁止事項）</h2>
          <p className="mb-3">利用者は以下の行為を行ってはなりません：</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>本サービスの運営を妨害する行為</li>
            <li>他の利用者に迷惑をかける行為</li>
            <li>虚偽の情報を提供する行為</li>
            <li>本サービスを法令に違反する目的で使用する行為</li>
            <li>本サービスの内容を無断で複製・転載・販売する行為</li>
            <li>リバースエンジニアリング等によりサービス構造を解析する行為</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第10条（サービスの変更・停止）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、利用者への事前通知により、本サービスの内容を変更することができます。</li>
            <li>以下の場合、当社は本サービスを一時的に停止することができます：
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>システムメンテナンスのため</li>
                <li>天災・事故等の不可抗力のため</li>
                <li>その他運営上必要と判断した場合</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第11条（利用の停止）</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">1. 利用者による利用停止</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>利用者は、いつでも本サービスの利用を停止することができます</li>
              <li>特別な手続きは不要です</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">2. 当社による利用停止</h3>
            <p className="mb-3">以下の場合、当社は利用者のサービス利用を停止することができます：</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>利用者が本利用規約に違反した場合</li>
              <li>本サービスの運営を著しく妨害する行為を行った場合</li>
              <li>その他、サービス提供の継続が困難と判断した場合</li>
            </ul>
            <p className="mt-3 text-gray-700">利用停止は、事前の通知なく行う場合があります</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">3. 利用停止後の措置</h3>
            <p className="text-gray-700">利用停止後も、本利用規約の関連条項（知的財産権、免責事項等）は有効に存続します</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第12条（利用規約の変更）</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>当社は、以下の方法により本利用規約を変更することができます：
              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                <li>重要な変更：30日前の事前通知</li>
                <li>軽微な変更：7日前の事前通知</li>
                <li>緊急時やセキュリティ上必要な変更：事前または事後の速やかな通知</li>
              </ul>
            </li>
            <li>変更の通知は、本サービス内での表示、公式LINE、メール等の方法で行います。</li>
            <li>変更後も継続してサービスを利用する場合、変更内容に同意したものとみなします。</li>
            <li>重要な変更に同意いただけない場合、利用者はサービスの利用を停止することができます。</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第13条（準拠法・管轄裁判所）</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>本利用規約は日本法に準拠して解釈されます。</li>
            <li>本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">第14条（その他）</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>本利用規約の一部が無効となった場合でも、残りの条項は有効に存続します。</li>
            <li>本利用規約に定めのない事項については、当社と利用者が誠意をもって協議の上決定するものとします。</li>
          </ol>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">お問い合わせ先</h3>
            <div className="space-y-2 text-gray-700">
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
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-900">株式会社SKALE</p>
              <p className="text-gray-700">〒160-0023 東京都新宿区西新宿３丁目２−９ 新宿ワシントンビル本館 2F</p>
              <p className="text-gray-700">経営責任者 加藤 慶也</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          <p>附則: 本利用規約は、2025年6月24日より施行いたします。</p>
        </div>
      </div>
    </LegalLayout>
  )
}