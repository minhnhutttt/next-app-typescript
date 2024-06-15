"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        title: '小売店',
        image: '/assets/images/img-case-01.png',
        assignment: [
            {
                role: '集客力の低下',
                describe: '新規顧客の獲得や既存顧客の再来店を促進するための効果的な手段が不足している'
            },
            {
                role: '広告費の増加',
                describe: '効果的な広告を打つための費用が増加しており、予算内での効果的な集客が難しい。'
            }
        ],
        after: [
            {
                role: '集客力の向上',
                describe: (<><span className="underline">高精度の位置情報機能により、近隣の顧客を効果的にターゲットにし、来店を促進。</span>顧客は地図を通じて簡単に店舗を見つけることができた。</>)
            },
            {
                role: '広告費の削減',
                describe: (<>デジタルクーポンを活用することで、印刷費用を削減し、予算内で効果的な広告展開が可能。<br /><span className="underline">専用マップには他社の広告が掲載されたため、広告費用の負担が軽減された。</span></>)
            },
        ]
    },
    {
        title: '飲食店',
        image: '/assets/images/img-case-02.png',
        assignment: [
            {
                role: '顧客データの不足',
                describe: '顧客の嗜好や行動に関するデータが不足しており、パーソナライズされたマーケティングが困難。'
            },
            {
                role: 'クーポン管理の煩雑',
                describe: '紙のクーポンや従来型のデジタルクーポンの発行・管理が手間であり、利用状況の追跡が難しい。'
            }
        ],
        after: [
            {
                role: '簡単なクーポン管理',
                describe: (<>管理コンソールを通じて、クーポンの発行・管理が<span className="underline">簡単に行える。クーポンの利用状況をリアルタイムで追跡可能。</span></>)
            },
            {
                role: '競合との差別化',
                describe: (<><span className="underline">店舗専用のNFT Mapを活用し、他の飲食店にはないユニークな顧客体験を提供。</span>独自のクーポンや特典で差別化が図れた。</>)
            },
        ]
    },
    {
        title: '美容室',
        image: '/assets/images/img-case-03.png',
        assignment: [
            {
                role: '顧客データの不足',
                describe: '競合との差別化: 他店との差別化が難しく、顧客に独自の魅力をアピールする手段が不足している。'
            },
        ],
        after: [
            {
                role: '顧客エンゲージメントの向上',
                describe: (<><span className="underline">NFTの収集や交換といった楽しみを提供し、顧客のエンゲージメントを高めた。</span>これにより、リピーターの増加につながった。</>)
            },
            {
                role: 'プロモーションの多様化',
                describe: (<>季節ごとのキャンペーンや特別イベントなど、様々なプロモーションを効果的に展開可能。</>)
            },
        ]
    },
]

const Case = () => {
  const ref = useScrollAnimations();

  return (
    <section id="case-studies" ref={ref} className="relative overflow-hidden md:pt-[193px] pt-[100px]">
        <div className="bg-white md:rounded-t-[140px] rounded-t-[80px] relative md:pb-[55px] pb-[35px]">
            <span className="block h-px"></span>
            <div className="fade-up">
                <h4 className="text-center text-main text-inter md:text-[64px] text-[36px] font-medium tracking-wider md:-mt-[53px] -mt-6">Case studies</h4>
                <p className="text-center md:text-[24px] text-[18px] font-medium tracking-widest">導入事例</p>
            </div>
            <div className="w-full max-w-[1360px] mx-auto flex flex-wrap mt-12 gap-[58px] justify-center">
                    {data.map((item, index)=> (
                        <div className="fade-up w-[650px] p-5 relative odd:before:hidden min-[1358px]:before:w-px min-[1358px]:before:h-full min-[1358px]:before:bg-[#CEE4FF] min-[1358px]:before:absolute min-[1358px]:before:top-0 min-[1358px]:before:bottom-0 min-[1358px]:before:left-[-28px]" key={index}>
                            <h5 className="text-center md:text-[32px] text-[24px] font-bold text-main p-1 mb-4">{item.title}</h5>
                            <figure>
                                <img src={item.image} alt="" />
                            </figure>
                            <div className="pt-8">
                                <p className="text-center md:text-[22px] text-[17px] font-bold border-b border-[#949494] pb-1">課題</p>
                                <div className="px-5 py-2.5">
                                    {item.assignment.map(({role, describe}, index)=> (
                                        <div className="flex items-start gap-2.5 py-2.5 max-md:flex-col" key={index}>
                                            <p className="border border-[#CEE4FF] px-2.5 py-1 md:text-[18px] text-[14px] font-bold whitespace-nowrap">{role}</p>
                                            <p className="md:text-[16px] text-[13px] leading-snug">
                                                {describe}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center pt-1 pb-3">
                                <img src="/assets/images/ic-after.svg" alt="" />
                            </div>
                            <div className="bg-[#CEE4FF] pt-5">
                                <p className="text-center md:text-[22px] text-[17px] font-bold border-b border-[#949494] pb-1">導入後</p>
                                <div className="px-5 py-2.5">
                                    {item.after.map(({role, describe}, index)=> (
                                        <div className="flex items-start gap-2.5 py-2.5 max-md:flex-col" key={index}>
                                            <p className="border border-[#CEE4FF] px-2.5 py-1 md:text-[18px] text-[14px] font-bold whitespace-nowrap bg-white">{role}</p>
                                            <p className="md:text-[16px] text-[13px] leading-snug">
                                                {describe}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    </section>
  );
};

export default Case;
