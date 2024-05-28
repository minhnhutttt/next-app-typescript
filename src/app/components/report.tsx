"use client";

import { ReactNode } from "react";

const data = [
    {
        id: '1',
        title: '基本情報',
        text: (<>氏名、生年月日、国籍、現住所</>)
    },
    {
        id: '2',
        title: '学歴',
        text: (<>出身校、学位、専攻、卒業年月<br className="max-md:hidden" />学歴の真偽検証結果</>)
    },
    {
        id: '3',
        title: '職歴',
        text: (<>企業名、職種、雇用期間、役職<br className="max-md:hidden" />職歴の真偽検証結果</>)
    },
    {
        id: '4',
        title: '言語能力',
        text: (<>語学試験のスコア<br className="max-md:hidden" />実践的なコミュニケーション能力の評価</>)
    },
    {
        id: '5',
        title: 'ビザ情報',
        text: (<>ビザの種類、取得状況、有効期限<br className="max-md:hidden" />ビザ取得可否の検証結果</>)
    },
    {
        id: '6',
        title: '犯罪歴',
        text: (<>犯罪歴の有無、詳細情報<br className="max-md:hidden" />各国の犯罪データベースを照合した結果</>)
    },
    {
        id: '7',
        title: '健康状態',
        text: (<>主要な疾患の有無、感染症の有無<br className="max-md:hidden" />健康診断結果の確認</>)
    },
    {
        id: '8',
        title: 'コンプライアンス',
        text: (<>ハラスメント行為等の懲戒処分歴の有無<br className="max-md:hidden" />SNSやウェブ上での不適切な発言や行動の確認</>)
    },
    {
        id: '9',
        title: '信用情報',
        text: (<>債務不履行や破産等の情報の有無<br className="max-md:hidden" />金融機関への照会結果</>)
    },
    {
        id: '10',
        title: 'テロ・反社会的勢力との関連',
        text: (<>テロリストや過激派組織との関連性の有無<br className="max-md:hidden" />反社会的勢力との関与の有無</>)
    },
    {
        id: '11',
        title: '薬物関連情報',
        text: (<>違法薬物の使用歴や依存の有無<br className="max-md:hidden" />薬物関連の犯罪歴や逮捕歴の確認</>)
    },
    {
        id: '12',
        title: '総合評価',
        text: (<>調査結果を踏まえた総合的なリスク評価<br className="max-md:hidden" />採用・雇用における注意点や推奨事項をコメント</>)
    },
]


const Report = () => {
  return (
    <section className="md:my-[120px] my-16 px-5 relative">
        <span className="absolute top-10 inset-0 bg-white -skew-y-[3.5deg] z-0"></span>
        <div className="md:pt-[145px] pt-20 md:pb-[120px] pb-16 relative">
            <div className="flex justify-center">
                <div className="flex justify-center items-center relative flex-col">
                    <span className="md:absolute right-[-24.512vw] lg:right-[-256px] max-md:w-full md:top-[-40px]">
                        <img className="max-md:w-[40vw] max-lg:w-[24.512vw] max-md:ml-auto" src="/assets/images/report-bubble.png" alt="導入の決め手は何？Research Shield+AIの特徴をご紹介" />
                    </span>
                    <h3 className="lg:text-[48px] md:text-[3vw] text-[6vw] font-black tracking-[0.2em] px-5 max-md:pt-2">調査レポート紹介</h3>
                    <p className="text-center md:text-[16px] text-[13px] font-bold mt-3">※お客様の依頼により調査項目は変動いたします。</p>
                </div>
             </div>
             <div className="w-full max-w-[928px] mx-auto bg-[#EDEDED] border border-[#F77F7F] rounded-[20px] md:pt-[75px] md:pb-[65px] pt-10 pb-8 md:pr-11 md:pl-10 pl-3 pr-3 md:mt-[65px] mt-10">
                <div className="border border-[#E2E3E3] divide-y divide-[#E2E3E3]">
                {data.map((item, index) => (
                    <div
                        className="flex min-h-[70px] odd:bg-white even:bg-[#FFEDED] max-md:flex-wrap"
                        key={index}
                    >
                        <div className="md:text-[18px] text-[13px] md:w-10 w-6 bg-black flex items-center justify-center text-white p-1">
                            {item.id}
                        </div>
                        <div className="md:w-[300px] w-[120px] flex items-center justify-center md:text-[18px] text-[13px] font-bold border-l border-[#E2E3E3] py-2 md:px-5 px-3 text-center">{item.title}</div>
                        <div className="flex-1 flex items-center justify-center md:text-[16px] text-[12px] border-l border-[#E2E3E3] text-center py-2 md:px-5 px-3">{item.text}</div>
                    </div>
                    ))}
                </div>
             </div>
             <div className="flex justify-center mt-8 md:mt-12 w-full max-w-[822px] mx-auto">
                <span className="w-[25px] border border-[#EB001C] border-r-0"></span>
                <p className="flex-1 md:text-[18px] text-[14px] md:py-5 py-4 md:px-[34px]">Research Shield+AIではこれらの項目を調査し、レポートとしてご提供いたします。外国人材の採用・雇用に伴う潜在的なリスクを洗い出し、貴社の安全で効果的な外国人材活用に役立つ情報をお届けいたします。</p>
                <span className="w-[25px] border border-[#EB001C] border-l-0"></span>
            </div>
        </div>
    </section>
  );
};

export default Report;
