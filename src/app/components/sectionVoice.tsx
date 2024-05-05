"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/images/img-voice-01.png',
        title: <>茨城県　@sac_ccccchiiiii.diet様<br /><span className="md:text-[22px] text-[14px]">（ダイエットインスタグラマー）</span></>,
        text: <>私は約24キロのダイエットに成功しました。つらいダイエット時もおやつとして干し芋を食べ継続できました。一福の「至高のほしいも」を知ってからはメインで食べるおやつになるほどお気に入りです＾＾ダイエット実践中の方に「至高のほしいも」をお勧めします！！</>
    },
    {
        image: '/images/img-voice-02.png',
        title: <>東京都　TN様（IT会社勤務）
        </>,
        text: <>仕事の関係で食事が思うように取れないことが多々あります。一福の干し芋はデスクの上でも手軽につまめて袋の大きさも邪魔にならないので重宝します。蜜が多いので手を洗わないとですが、、、笑</>
    },
    {
        image: '/images/img-voice-03.png',
        title: <>埼玉県加須市　AN 様（主婦）</>,
        text: <>安さから今まで中国産の硬い干し芋を食べていました。広告を見て一福を知り試しに買ってみたら段違いの味と食感でもう病みつきです。食べ切りパックだからジップロックなどに移して保存等しなくて済むので重宝しています。</>
    },
    {
        image: '/images/img-voice-04.png',
        title: <>埼玉県 K様（主婦）</>,
        text: <>ほしいもの価格は高いイメージがあって何年も食べていませんでした。「至高のほしいも」の名前にひかれて購入してしまいました。私の知っている干し芋とは別格でまさに「至高」
        温めなくても食べられるしっとり感とやさしい甘さでやみつきになります！！ありがとう一福さん！</>
    },
]

const SectionVoice = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[url('/images/bg-04.png')] bg-no-repeat bg-center max-md:bg-bottom pt-8 md:pt-14 pb-20 md:pb-[130px]">
        <div className="fade-up w-full md:max-w-[1240px] max-w-[440px] mx-auto">
            <div className="flex max-md:justify-center items-center md:gap-[60px] gap-5 px-5 pb-10 md:pb-[70px]">
                <p className="">
                    <svg className="md:h-[117px] h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 117" fill="none">
                        <g opacity="0.7">
                            <path d="M62.5887 91.5664C52.5063 108.513 40.6366 117 27.0073 117C19.5223 117 13.1545 113.555 7.90388 106.692C2.65325 99.8295 0 90.8942 0 79.886C0 60.6708 4.99928 42.7721 14.9699 26.1338C25.4432 8.71128 37.4247 0 50.8865 0C59.0696 0 65.4654 3.52933 70.0736 10.532C74.6819 17.5626 77 26.8901 77 38.5425C77 57.8137 72.1962 75.4604 62.5887 91.5664ZM38.4581 100.194C40.6366 95.712 43.4295 87.729 46.8088 76.3007C50.8585 62.6035 54.0145 50.3349 56.3047 39.4668C58.5948 28.5988 59.7399 21.26 59.7399 17.4226C59.7399 14.0333 59.321 11.3723 58.5111 9.46756C57.2543 6.41441 54.9641 4.87383 51.6405 4.87383C47.0044 4.87383 42.5637 9.49557 38.2905 18.7671C35.8886 24.033 33.0399 32.2681 29.7722 43.5004C26.8676 53.248 24.0747 63.92 21.3377 75.5164C18.6007 87.1128 17.2601 95.712 17.2601 101.314C17.2601 104.983 18.1538 107.644 19.9692 109.325C21.7845 111.006 23.7116 111.818 25.7784 111.818C30.4704 111.818 34.6877 107.953 38.4581 100.25V100.194Z" fill="#8D6A60"/>
                            <path d="M154.296 0H165L144.985 72.6593H156.414L152.01 88.8894H140.609L133.64 114H112.148L119.117 88.8894H78L82.9061 71.5179L154.296 0ZM123.521 72.6593L136.316 25.9458L89.7357 72.6593H123.521Z" fill="#8D6A60"/>
                        </g>
                    </svg>
                </p>
                <h5 className="font-hiragino md:text-[30px] text-[18px] font-semibold">皆様のご感想</h5>
            </div>
            <div className="w-full md:max-w-[1090px] max-w-[440px] mx-auto xl:space-y-[200px] md:space-y-[100px] space-y-[60px] px-5">
                {data.map((item, index)=>{
                    return (
                        <div className="fade-up group flex max-md:flex-col max-md:items-center md:even:flex-row-reverse even:justify-end md:even:ml-10" key={index}>
                            <figure className="relative">
                                <img className="max-md:max-w-[240px]" src={item.image} alt="" />
                            </figure>
                            <div className="max-w-[640px] flex-1 font-hiragino font-semibold border-2 border-[##CBD0CA] rounded-[20px] bg-white/70 md:p-8 p-5 md:group-even:mr-[40px] md:group-odd:ml-[-15px] max-md:mt-5">
                                <h4 className="md:text-[28px] text-[18px] leading-tight">{item.title}</h4>
                                <p className="md:text-[20px] text-[14px] md:mt-[30px] mt-4">{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  );
};

export default SectionVoice;
