"use client";

const data = [
    {
        step: '1',
        image: '/assets/images/img-fr-01.jpg',
        title: '外国人材の採用前と採用後の両ケースへ対応',
        text: '外国人材の採用候補者調査から、すでに雇用済みの外国人材の調査まで対応。採用前でも採用後でもリスクを把握できます。調査済みの外国人材紹介までワンストップでの採用サポートも可能です。詳細はお問い合わせください。'
    },
    {
        step: '2',
        image: '/assets/images/img-fr-02.jpg',
        title: 'AI活用と人力のハイブリット調査',
        text: '最新のAI技術を導入することで、膨大な情報を短時間で分析。調査の精度と効率を飛躍的に高め、リスクを見逃しません。さらに人力調査と併用することで広範な調査を可能としています。'
    },
    {
        step: '3',
        image: '/assets/images/img-fr-03.jpg',
        title: '9年間のリサーチ事業経験で蓄積されたデータとノウハウがAIにフィット',
        text: '当社は9年間に渡り、個人・法人問わずあらゆる領域でリサーチ業務に従事。外国人材のバックグラウンド調査領域でも積み上げてきた経験が強みとなり、蓄積データとノウハウがAI活用にうまくフィットしました。'
    },
    {
        step: '4',
        image: '/assets/images/img-fr-04.jpg',
        title: '幅広い調査項目で外国人材の見極めをサポート',
        text: '学歴・職歴、ビザ、語学力、適性、犯罪歴、信用情報、薬物使用歴、テロ関連、健康状態など、あらゆる角度から調査。リスクを見落とすことなく、外国人材の安心採用・安心雇用を実現します。'
    },
]

const FeaturesReasons = () => {
  return (
    <section>
        <figure>
            <img className="w-full" src="/assets/images/bg-deco.png" alt="" />
        </figure>
        <div className="bg-white md:pt-[90px] pt-10 md:pb-[230px] pb-[100px] px-[30px]">
            <div className="flex justify-center">
                <div className="flex justify-center items-center relative max-md:flex-col">
                    <span className="md:absolute left-[-24.512vw] lg:left-[-251px] max-md:w-full">
                        <img className="max-md:w-[40vw] max-lg:w-[24.512vw]" src="/assets/images/fr-bubble.png" alt="導入の決め手は何？Research Shield+AIの特徴をご紹介" />
                    </span>
                    <h3 className="lg:text-[48px] md:text-[3vw] text-[6vw] font-black tracking-[0.2em] px-5 max-md:pt-2">特徴・選ばれる理由</h3>
                </div>
             </div>
             <div className="md:mt-[160px] mt-[90px] md:space-y-[171px] space-y-[90px] max-w-[1440px] mx-auto">
             {data.map((item, index) => (
                  <div
                    className="relative flex even:justify-end md:odd:md:pr-10 md:even:pl-10"
                    key={index}
                  >
                    <div className="w-full max-w-[1120px] border border-[#EB001C] bg-[#FDF3F4] md:px-[45px] px-5 md:py-16 py-12 relative rounded-[10px]">
                        <div className="flex justify-center absolute md:top-[-71px] top-[-50px] inset-x-0">
                            <div className="md:w-[120px] w-[80px] md:h-[120px] h-[80px] rounded-full bg-[#F25B54] flex items-center justify-center flex-col text-white leading-none">
                                <span className="md:text-[18px] text-[14px] font-bold">特 徴</span>
                                <span className="font-lime md:text-[80px] text-[40px]">{item.step}</span>
                            </div>
                        </div>
                        <div className="flex max-md:flex-col max-md:justify-center items-center md:gap-[30px] gap-6">
                            <figure className="max-md:w-auto max-lg:w-[40%]">
                                <img src={item.image} alt="" />
                            </figure>
                            <div className="flex-1 max-w-[600px]">
                                <h5 className="md:text-[22px] text-[18px] font-bold">{item.title}</h5>
                                <p className="md:text-[18px] text-[14px] font-medium leading-[1.8] mt-5">{item.text}</p>
                            </div>
                        </div>
                    </div>
                  </div>
                ))}
             </div>
        </div>
        <figure>
            <img className="w-full" src="/assets/images/bg-deco-2.png" alt="" />
        </figure>
    </section>
  );
};

export default FeaturesReasons;
