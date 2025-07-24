export default function TermsOfServicePage() {
  return (
    <article className="prose prose-lg w-full max-w-7xl mx-auto my-[150px] leading-[1.65] text-2xl px-7">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">P2P Bonus 利用規約</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
        <p className="text-3xl font-medium text-blue-900 mb-1">制定日：2025年7月25日</p>
        <p className="text-3xl font-medium text-blue-900">最終改定日：2025年7月25日</p>
      </div>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第1条（規約の適用）</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>本利用規約（以下「本規約」といいます）は、株式会社ZEXAVERSE（以下「当社」といいます）が提供するP2P Bonusサービス（以下「本サービス」といいます）の利用に関する条件を定めるものです。</li>
          <li>本サービスを利用する企業（以下「導入企業」といいます）および導入企業の従業員（以下「利用者」といいます）は、本規約に同意したものとみなされます。</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第2条（サービスの内容）</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>本サービスは、利用者間で感謝や貢献を示すトークンを送り合うことができるシステムです。</li>
          <li>当社は、本サービスの内容を予告なく変更することができるものとします。</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第3条（トークンについて）</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">1. トークンの性質</h3>
        <p className="text-gray-700 mb-4">
          本サービスで使用されるトークンは、企業内での感謝や評価を可視化するためのポイントであり、法定通貨ではありません。
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">2. トークンの付与</h3>
        <p className="text-gray-700 mb-4">
          導入企業は、各利用者に対して定期的にトークンを付与します。付与数量・頻度は導入企業が決定します。
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">3. トークンの利用制限</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>トークンの現金化、売買、譲渡（本サービス内での正規の送信を除く）は禁止します</li>
          <li>トークンに有効期限を設定する場合があります</li>
          <li>サービス終了時、未使用トークンは消滅します</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第4条（利用者の義務）</h2>
        <p className="text-gray-700 mb-4">利用者は以下の事項を遵守するものとします。</p>
        <ol className="list-decimal pl-6 text-gray-700 space-y-1">
          <li>他の利用者への誹謗中傷を含むメッセージの送信禁止</li>
          <li>虚偽の理由によるトークン送信の禁止</li>
          <li>特定の利用者間での意図的な相互送信（談合行為）の禁止</li>
          <li>システムの不正利用、改ざん、リバースエンジニアリングの禁止</li>
          <li>他者のアカウントの不正使用禁止</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第5条（導入企業の責任）</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>導入企業は、本サービスの利用にあたり、労働関係法令を遵守するものとします。</li>
          <li>トークンを人事評価や報酬決定に利用する場合、導入企業は事前に従業員に対して十分な説明を行い、必要な同意を得るものとします。</li>
          <li>導入企業は、本サービスの利用により従業員間でハラスメントが発生しないよう、適切な運用ルールを定めるものとします。</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第6条（監視機能について）</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>導入企業の管理者は、不正利用防止のため、トークンの送受信履歴を閲覧できます。</li>
          <li>システムは異常な送受信パターンを自動検出し、管理者に通知する機能を有します。</li>
          <li>利用者は、自身の行動が監視・記録されることに同意したものとみなされます。</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第7条（知的財産権）</h2>
        <p className="text-gray-700">
          本サービスに関する一切の知的財産権は、当社または正当な権利者に帰属します。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第8条（免責事項）</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>当社は、本サービスの利用により生じた損害について、当社に故意または重大な過失がある場合を除き、責任を負いません。</li>
          <li>当社は、以下の事項について保証しません。
            <ul className="list-disc pl-6 mt-2">
              <li>本サービスが利用者の特定の目的に適合すること</li>
              <li>本サービスが中断なく提供されること</li>
              <li>本サービスの利用による組織改善効果</li>
            </ul>
          </li>
          <li>トークンのデータ消失、システム障害による損害について、当社は責任を負いません。</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第9条（サービスの停止・終了）</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>当社は、以下の場合、事前通知なく本サービスを停止できます。
            <ul className="list-disc pl-6 mt-2">
              <li>システムメンテナンスの場合</li>
              <li>天災、事故等の不可抗力の場合</li>
              <li>その他やむを得ない事情がある場合</li>
            </ul>
          </li>
          <li>当社は、30日前の通知により、本サービスを終了できます。</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第10条（規約の変更）</h2>
        <p className="text-gray-700">
          当社は、必要に応じて本規約を変更できるものとし、変更後の規約は当社ウェブサイトに掲載した時点で効力を生じます。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第11条（準拠法・管轄）</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>本規約は日本法に準拠します。</li>
          <li>本サービスに関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">第12条（問い合わせ）</h2>
        <p className="text-gray-700 mb-4">本規約に関するお問い合わせは、以下までご連絡ください。</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-gray-900">株式会社ZEXAVERSE</p>
          <p className="text-gray-700">〒102-0083 東京都千代田区麹町3-5-2 ビュレックス麹町205</p>
          <p className="text-gray-700">Email：info@p-2-p-bonus.com</p>
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-gray-900">以上</p>
      </div>
    </article>
  );
};