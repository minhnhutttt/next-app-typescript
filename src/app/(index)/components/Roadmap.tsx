"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        phase: '✅ Phase 1',
        list: [
            'FAVEコイン発行・配布開始',
            'DWUベースVIPコイン発行サービス開始 ',
            'FAVER DIGITAL GOODSサービス機能開始',
            '基本的なトークン送金・受取機能実装',
            'VIPサービスアンロック機能開始',
        ],
        time: '3ヶ月後'
    },
    {
        phase: '🔄  Phase 2',
        list: [
            'プラットフォーム機能の拡張',
            'FAVER DIGITAL GOODSサービスの商品カテゴリ拡大 ',
            '商品レベルアンロック機能の高度化',
            'ユーザー体験の改善',
            'コミュニティフィードバックシステムの導',
        ],
        time: '6ヶ月後'
    },
    {
        phase: '🚀 Phase 3',
        list: [
            '新VIPサービス・機能ローンチ',
            'UI/UX改善の継続実施 ',
            'パートナーシップ拡大',
            'グローバル展開準備',
        ],
        time: '12ヶ月後'
    },
    {
        phase: '🌟 Phase 4',
        list: [
            'メタバース連携機能',
            'UI/AI技術の高度化 ',
            '他チェーン対応検討',
            '長期的持続可能性の確立',
        ],
    },
]

const Roadmap = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      id="roadmap"
      className="relative overflow-hidden sm:px-[30px] px-4 pb-20 sm:pb-[110px]"
    >
        <div className="relative">
            <h3 className="fade-up sm:text-[48px] text-[28px] font-bold text-center sm:border-b-[15px] border-b-[8px] border-[#3A86FF]">
                <p>ロードマップ</p>
            </h3>
            <div className="sm:pt-[74px] pt-12">
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-[-34px] w-1 sm:w-1.5 bg-black h-full"></div>
                    {data.map((item,index) => (
                        <div key={index} className="relative">
                        <div key={index} className="bg-[#FFDAF8] rounded-[20px] p-5 sm:p-10 pb-10 sm:pb-[60px]">
                            <div className="sm:text-[36px] text-[22px] font-bold text-center">{item.phase}</div>
                            <ul className="sm:text-[26px] text-[18px] sm:mt-6 mt-4 list-disc list-inside">
                                {item.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        {item.time &&
                            <div className="flex justify-center py-5">
                                <p className="w-[120px] sm:w-[167px] h-10 sm:h-[51px] bg-white flex items-center justify-center border-black border-[3px] rounded-full sm:text-[24px] text-[16px] font-bold">
                                    {item.time}
                                </p>
                            </div>
                        }
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 sm:mt-[124px]">
                <a href="/assets/pdf/FAVEコイン(FAVE) ホワイトペーパー.pdf" target="_blank" className="relative block">
                    <div className="absolute inset-0 flex items-center flex-col pt-[7.81vw] sm:pt-[50px]">
                        <p className=""><img className="max-md:w-[9.38vw]" src="/assets/images/file-15.svg" alt="" /></p>
                        <p className="sm:text-[36px] text-[5.63vw] font-bold text-center text-white tracking-wider">ホワイトペーパーを読む</p>
                    </div>
                    <img src="/assets/images/bg-btn.png" alt="" />
                </a>
                <div className="w-full max-w-[504px] mx-auto text-[12px] py-5 sm:py-[30px]">
                    ※ FAVEコインはユーティリティトークンであり、投資商品ではありません。<br />
                    ※ 詳細な免責事項はホワイトペーパーをご確認ください。
                </div>
            </div>
        </div>
    </section>
  );
};

export default Roadmap;
