"use client"
import { useEffect } from "react";
export default function PrivacyPolicy() {
    return (
      <main>
        <div className="h-[240px] bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] flex justify-center pt-[124px] md:w-[550px] -mt-[100vh]">
          <p className="md:text-[36px] text-[24px] text-white font-semibold">プライバシーポリシー</p>
        </div>
        <div className="pt-10 px-5 pb-20">
            <div>
                <p className="md:text-[20px] text-[18px] text-center font-semibold border-b-[4px] border-black pt-4 pb-2">基本方針</p>
                <div className="md:text-[16px] text-[14px] p-5 md:py-[30px] font-light tracking-tight">
                    弊社では個人情報の取り扱いに関して以下の方針を遵守致します。
                    <ol className="list-decimal ml-5">
                        <li>
                            弊社は、個人情報の管理に関して漏えい事故などが起きないように適切に管理することを心掛けます。
                        </li>
                        <li>
                        弊社は、個人情報を取得する場合、適法かつ公正な手段によって行います。
                        </li>
                        <li>
                            弊社は、個人情報の利用に当たって、利用目的の範囲内で業務の遂行上必要な限りにおいて行います。
                        </li>
                        <li>
                            弊社は、次の場合を除き、個人情報を第三者に提供致しません。
                            <ul className="list-[lower-alpha] ml-5">
                                <li>本人から事前の同意を得た場合</li>
                                <li>業務を委託するために個人情報を業務委託先に提供する場合</li>
                                <li>個人情報を弊社の関係会社との間で共同利用する場合</li>
                                <li>その他個人情報保護法等で定められている場合</li>
                            </ul>
                        </li>
                        <li>弊社は、保有個人データについて、本人から開示、訂正、利用停止等の求めを受けた場合に速やかに対応する体制を整備します。</li>
                    </ol>
                </div>
            </div>
            <div>
                <p className="md:text-[20px] text-[18px] text-center font-semibold border-b-[4px] border-black pt-4 pb-2">個人情報の利用目的</p>
                <div className="md:text-[16px] text-[14px] p-5 md:py-[30px] font-light tracking-tight">
                    弊社は、弊社が取得した個人情報を次の目的のために利用致します。
                    <ol className="list-decimal ml-5">
                        <li>
                        弊社の商品やサービスをお客様にお届けするため。
                        </li>
                        <li>
                        弊社の現在・将来展開する商品やサービス関連でお客様にとって有益であると弊社が考える情報を、お客様にご紹介・ご案内するため。
                        </li>
                        <li>
                        お客様とのビジネスを円滑に行うため。
                        </li>
                        <li>
                        お客様満足度の向上のためのデータ分析。
                        </li>
                        <li>新しい商品やサービスの開発のため。</li>
                        <li>その他弊社事業に付帯・関連する業務のため</li>
                    </ol>
                </div>
            </div>
            <div>
                <p className="md:text-[20px] text-[18px] text-center font-semibold border-b-[4px] border-black pt-4 pb-2">ご連絡先</p>
                <div className="md:text-[16px] text-[14px] p-5 md:py-[30px] font-light tracking-tight">
                以下が個人情報の取り扱いに関する窓口先になります。
                    <ul className="list-disc ml-5">
                        <li>窓口：goodfellows0808@gmail.com</li>
                        <li>住所： 〒860-0845 熊本県熊本市中央区上通町9-26
                        お手続きの流れ</li>
                    </ul>
                    <ol className="list-decimal ml-5">
                        <li>
                        ご本人から窓口にお問合せ。
                        </li>
                        <li>
                        必要書類等のご説明を弊社からご連絡。
                        </li>
                        <li>
                        ご本人確認のうえ、個人情報保護法等に従い、弊社からご本人に回答。
                        </li>
                    </ol>
                    ※ご本人であることを証明できない場合等、ご対応が出来かねる場合が御座います。
                </div>
            </div>
            <div>
                <p className="md:text-[20px] text-[18px] text-center font-semibold border-b-[4px] border-black pt-4 pb-2">個人情報の共同利用</p>
                <div className="md:text-[16px] text-[14px] p-5 md:py-[30px] font-light tracking-tight">
                弊社はサービス向上の目的で、業務上の必要性があり、なおかつ法令で認められる場合に限り、弊社が取得した個人情報に関してグループ内で共同利用させていただくことがあります。
                    <ul className="list-disc ml-5">
                        <li>範囲：弊社がご提供するサービスの範囲内</li>
                        <li>項目：氏名、住所、電話番号、メールアドレス、その他上記の共同利用目的のために必要な事項</li>
                        <li>責任先：個人情報の取扱いに関するご連絡先に同じ</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="md:text-[20px] text-[18px] text-center font-semibold border-b-[4px] border-black pt-4 pb-2">SSL</p>
                <div className="md:text-[16px] text-[14px] p-5 md:py-[30px] font-light tracking-tight">
                当サイトでは、お問合せなどを通しお客様の個人情報を取得するに当たりSSL通信を利用しており、ご利用者様に対しセキュリティー面の安全性を考慮しております。
                </div>
            </div>
            <div>
                <p className="md:text-[20px] text-[18px] text-center font-semibold border-b-[4px] border-black pt-4 pb-2">Google Analyticsの利用</p>
                <div className="md:text-[16px] text-[14px] p-5 md:py-[30px] font-light tracking-tight">
                当サイトでは、サイトの利用状況を把握するためにGoogle Analyticsを利用する場合が御座います。Google Analyticsは、クッキーを利用して利用者の個人を特定する情報を含まずに、情報を収集します。Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。
                </div>
            </div>
        </div>
      </main>
    );
  }
  