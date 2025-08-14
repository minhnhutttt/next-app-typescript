const TermsContent: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8">

                    <div className="prose prose-lg max-w-none">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">SEIKAI広告エージェント 利用規約</h1>
                        </div>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第1条（定義）</h2>
                            <ol className="space-y-2 text-gray-700">
                                <li>1. 「本サービス」とは、AIS Japan株式会社（以下「当社」という）が提供するSEIKAI広告エージェントサービスをいいます。</li>
                                <li>2. 「利用者」とは、本サービスを利用する個人または法人をいいます。</li>
                                <li>3. 「利用契約」とは、本規約に同意の上で利用者が本サービスの利用を開始することにより成立する契約をいいます。</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第2条（本サービスの内容）</h2>
                            <p className="text-gray-700 mb-4">本サービスは、AIを活用した自動広告運用を提供します。主な機能は以下の通りです：</p>
                            <ul className="space-y-2 text-gray-700 ml-4">
                                <li>• Google広告アカウントとの連携</li>
                                <li>• AI による24時間365日の自動広告最適化</li>
                                <li>• 実際の売上・コンバージョンにフォーカスした広告運用</li>
                                <li>• 広告審査および設定の自動化</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第3条（利用登録）</h2>
                            <ol className="space-y-2 text-gray-700">
                                <li>1. 本サービスの利用を希望する者は、本規約に同意の上、当社の定める方法により利用登録を行うものとします。</li>
                                <li>2. 利用登録時には、Google広告アカウントの連携、ランディングページのURL、基本方針の選択等が必要です。</li>
                                <li>3. 当社は、利用登録の申請を承諾しない場合があります。</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第4条（禁止事項）</h2>
                            <p className="text-gray-700 mb-4">利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません：</p>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">法的禁止事項</h3>
                                <ul className="space-y-2 text-gray-700 ml-4">
                                    <li>• 違法なモノやサービスの販売（麻薬、盗品、偽造品、無許可の薬等）</li>
                                    <li>• ギャンブルと依存性の高いもの（違法カジノ、非公認ギャンブル、危険ドラッグ等）</li>
                                    <li>• 大人向けの過激なコンテンツ（ポルノ、風俗店、アダルトグッズ等）</li>
                                    <li>• 危険な製品やサービス（銃器、爆発物、違法な車両改造等）</li>
                                    <li>• 詐欺や悪質商法（霊感商法、ネズミ講、誇大広告等）</li>
                                    <li>• 他人の権利を侵害するもの（個人情報売買、著作権侵害品、盗撮器具等）</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">その他の禁止事項</h3>
                                <ul className="space-y-2 text-gray-700 ml-4">
                                    <li>• 法令、本規約、公序良俗に違反する行為</li>
                                    <li>• 当社または第三者の権利を侵害する行為</li>
                                    <li>• 本サービスの運営を妨害する行為</li>
                                    <li>• 虚偽の情報を登録または提供する行為</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第5条（料金・支払い）</h2>
                            <ol className="space-y-2 text-gray-700">
                                <li>1. 本サービスの利用料金は、月間広告費の9%とします。</li>
                                <li>2. 初期費用および月額固定費は一切発生いたしません。</li>
                                <li>3. 本サービスは完全後払い制を採用しており、利用料金は月末締めで翌月にご請求いたします。</li>
                                <li>4. 支払い方法および支払い時期の詳細は、当社が別途定める方法によります。</li>
                                <li>5. 一度支払われた料金は、原則として返金いたしません。</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第6条（知的財産権）</h2>
                            <ol className="space-y-2 text-gray-700">
                                <li>1. 本サービスに関する知的財産権は、すべて当社に帰属します。</li>
                                <li>2. 利用者は、本サービスの利用により、当社の知的財産権を侵害してはなりません。</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第7条（個人情報の取扱い）</h2>
                            <p className="text-gray-700">個人情報の取扱いについては、別途定めるプライバシーポリシーに従います。</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第8条（免責事項）</h2>
                            <ol className="space-y-2 text-gray-700">
                                <li>1. 当社は、本サービスの利用により期待される広告効果や売上向上を保証するものではありません。</li>
                                <li>2. 当社は、本サービスの中断、停止、利用者のデータの消失等により利用者に損害が生じても、一切責任を負いません。</li>
                                <li>3. 当社の損害賠償責任は、利用者が当社に支払った直近3ヶ月分の利用料金を上限とします。</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第9条（サービスの変更・停止）</h2>
                            <p className="text-gray-700">当社は、利用者への事前通知により、本サービスの内容を変更し、または本サービスの提供を停止することができます。</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第10条（利用契約の解除）</h2>
                            <ol className="space-y-2 text-gray-700">
                                <li>1. 利用者は、当社所定の方法により、利用契約を解除することができます。</li>
                                <li>2. 当社は、利用者が本規約に違反した場合、事前通知なく利用契約を解除することができます。</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第11条（規約の変更）</h2>
                            <p className="text-gray-700">当社は、必要に応じて本規約を変更することができます。変更後の規約は、当社サイトでの公表により効力を生じます。</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第12条（準拠法・管轄裁判所）</h2>
                            <ol className="space-y-2 text-gray-700">
                                <li>1. 本規約は日本法を準拠法とします。</li>
                                <li>2. 本サービスに関する紛争については、当社所在地を管轄する裁判所を専属的合意管轄とします。</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">第13条（お問い合わせ）</h2>
                            <p className="text-gray-700">本規約に関するお問い合わせは、下記までご連絡ください：<br />
                                Email: <a href="mailto:info@cv-agent.ai" className="text-blue-600 hover:text-blue-800 underline">info@cv-agent.ai</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsContent;