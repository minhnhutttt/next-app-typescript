const PrivacyContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
    <div className="prose prose-lg max-w-none">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">プライバシーポリシー</h1>
        <p className="text-gray-700 text-left">AIS Japan株式会社（以下「当社」）は、SEIKAI広告エージェントサービス（以下「本サービス」）の提供にあたり、利用者の個人情報を以下の通り取り扱います。</p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 個人情報の取得項目</h2>
        <p className="text-gray-700 mb-4">当社は、以下の個人情報を取得する場合があります：</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">利用者から直接取得する情報</h3>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• 氏名（法人の場合は担当者名）</li>
            <li>• 会社名・組織名</li>
            <li>• 電話番号</li>
            <li>• メールアドレス</li>
            <li>• Google広告アカウント情報</li>
            <li>• ランディングページのURL</li>
            <li>• 業種・業界情報</li>
            <li>• 広告予算・出稿期間等の設定情報</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">サービス利用により自動的に取得する情報</h3>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• IPアドレス</li>
            <li>• Cookie情報</li>
            <li>• アクセスログ</li>
            <li>• 広告配信・最適化に関するデータ</li>
            <li>• ブラウザ情報</li>
            <li>• 利用状況に関する情報</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. 個人情報の利用目的</h2>
        <p className="text-gray-700 mb-4">取得した個人情報は、以下の目的で利用します：</p>
        <ol className="space-y-2 text-gray-700">
          <li>1. 本サービスの提供・運営</li>
          <li>2. SEIKAI広告エージェントによる広告最適化</li>
          <li>3. 利用者への各種連絡・通知</li>
          <li>4. 本サービスの改善・開発</li>
          <li>5. カスタマーサポートの提供</li>
          <li>6. 利用料金の請求・決済</li>
          <li>7. 法令に基づく対応</li>
          <li>8. その他本サービスの提供に必要な業務</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. 個人情報の第三者提供</h2>
        <p className="text-gray-700 mb-4">当社は、以下の場合を除き、個人情報を第三者に提供いたしません：</p>
        <ol className="space-y-2 text-gray-700">
          <li>1. 利用者の同意がある場合</li>
          <li>2. 法令に基づく場合</li>
          <li>3. 人の生命、身体または財産の保護のために必要がある場合</li>
          <li>4. 国の機関等への協力が必要な場合</li>
        </ol>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">業務委託先への提供</h3>
          <p className="text-gray-700 mb-2">当社は、本サービスの提供のため、以下の業務を委託し、個人情報を提供する場合があります：</p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• Google LLC（Google広告プラットフォームとの連携）</li>
            <li>• その他のクラウドサービス提供者</li>
            <li>• システム開発・保守業者</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. 個人情報の安全管理</h2>
        <p className="text-gray-700">当社は、個人情報の漏えい、滅失または毀損の防止その他個人情報の安全管理のため、必要かつ適切な措置を講じます。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. 個人情報の保存期間</h2>
        <p className="text-gray-700">当社は、個人情報を利用目的の達成に必要な期間のみ保存し、その後適切に削除いたします。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. 利用者の権利</h2>
        <p className="text-gray-700 mb-4">利用者は、当社に対して以下の権利を行使することができます：</p>
        <ol className="space-y-2 text-gray-700">
          <li>1. 個人情報の開示請求</li>
          <li>2. 個人情報の訂正・追加・削除請求</li>
          <li>3. 個人情報の利用停止・消去請求</li>
          <li>4. 個人情報の第三者提供の停止請求</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookie等の利用</h2>
        <p className="text-gray-700">当社は、本サービスの利用状況の分析、サービス向上等を目的として、Cookieおよび類似の技術を使用する場合があります。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. お問い合わせ窓口</h2>
        <p className="text-gray-700">個人情報の取扱いに関するお問い合わせは、下記までご連絡ください：</p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="font-semibold text-gray-800">SEIKAI お問い合わせ窓口</p>
          <p className="text-gray-700">Email: <a href="mailto:info@cv-agent.ai" className="text-blue-600 hover:text-blue-800 underline">info@cv-agent.ai</a></p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. プライバシーポリシーの変更</h2>
        <p className="text-gray-700">当社は、法令の変更や事業内容の変更等により、本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、当社サイトでの公表により効力を生じます。</p>
      </section>

      <div className="text-center mt-8 text-gray-600">
        <p>制定日：2025年8月13日</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};


export default PrivacyContent;