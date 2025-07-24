export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-lg w-full max-w-7xl mx-auto my-[150px] leading-[1.65] text-2xl px-7">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">P2P Bonus 個人情報保護方針</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
        <p className="text-3xl font-medium text-blue-900 mb-1">制定日：2025年7月25日</p>
        <p className="text-3xl font-medium text-blue-900">最終改定日：2025年7月25日</p>
      </div>

      <p className="lead text-gray-700">
        株式会社ZEXAVERSE（以下「当社」といいます）は、P2P Bonusサービス（以下「本サービス」といいます）の提供にあたり、お客様の個人情報を以下のとおり適切に取り扱います。
      </p>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">1. 個人情報の定義</h2>
        <p className="text-gray-700">
          本方針において「個人情報」とは、生存する個人に関する情報であって、氏名、生年月日、メールアドレス、その他の記述により特定の個人を識別できるもの、および個人識別符号が含まれるものをいいます。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">2. 収集する個人情報</h2>
        <p className="text-gray-700 mb-4">当社は、本サービスの提供にあたり、以下の個人情報を収集します。</p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">導入企業の管理者情報</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>氏名、部署名、役職</li>
          <li>メールアドレス、電話番号</li>
          <li>ログインID、パスワード</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">利用者（従業員）情報</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>氏名、社員番号、部署名</li>
          <li>メールアドレス</li>
          <li>トークン送受信履歴（送信者、受信者、日時、メッセージ内容）</li>
          <li>システム利用ログ（ログイン履歴、操作履歴）</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
        <p className="text-gray-700 mb-4">収集した個人情報は、以下の目的で利用します。</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>本サービスの提供、運営、管理</li>
          <li>トークンの送受信機能の実現</li>
          <li>利用状況の分析、レポート作成</li>
          <li>不正利用の監視、防止</li>
          <li>お問い合わせへの対応</li>
          <li>サービス改善のための統計データ作成（個人を特定できない形式）</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">4. 個人情報の第三者提供</h2>
        <p className="text-gray-700 mb-4">当社は、以下の場合を除き、個人情報を第三者に提供しません。</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>ご本人の同意がある場合</li>
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産の保護のために必要な場合</li>
          <li>導入企業の管理者に対して、当該企業の従業員情報を提供する場合</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">5. 個人情報の管理</h2>
        <p className="text-gray-700 mb-4">当社は、個人情報への不正アクセス、紛失、破損、改ざん、漏洩などを防止するため、以下の措置を講じます。</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>SSL/TLS通信による暗号化</li>
          <li>アクセス権限の適切な管理</li>
          <li>定期的なセキュリティ監査</li>
          <li>従業員への個人情報保護教育</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">6. 個人情報の保存期間</h2>
        <p className="text-gray-700">
          個人情報は、サービス利用契約終了後1年間保存し、その後速やかに削除します。ただし、法令により保存が義務付けられている場合はこの限りではありません。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">7. 個人情報の開示・訂正・削除</h2>
        <p className="text-gray-700">
          ご本人から個人情報の開示、訂正、削除等の請求があった場合、本人確認を行った上で、合理的な期間内に対応します。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">8. お問い合わせ窓口</h2>
        <p className="text-gray-700 mb-4">個人情報に関するお問い合わせは、以下までご連絡ください。</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-gray-900">株式会社ZEXAVERSE</p>
          <p className="text-gray-700">〒102-0083 東京都千代田区麹町3-5-2 ビュレックス麹町205</p>
          <p className="text-gray-700">Email：info@p-2-p-bonus.com</p>
        </div>
      </section>
    </article>
  );
};