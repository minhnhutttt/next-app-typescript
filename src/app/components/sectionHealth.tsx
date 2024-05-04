"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/images/img-sec-01-01.png',
        title: <>100種以上の干し芋を比較！<br />辿り着いたサッパリした甘み！</>,
        text: <><span className="font-bold">日本中を1年間探し、茨城県だけでも100種類以上比較しました。</span>そして自慢のサッパリした甘みの「至高の干し芋」に行きつきました。</>
    },
    {
        image: '/images/img-sec-01-02.png',
        title: <>原材料はオーガニックの<br />サツマイモのみ！</>,
        text: <>一福の至高のほしいもは、<span className="font-bold">砂糖・添加物ゼロの完全オーガニック。</span>生産過程から試行錯誤を繰り返した自然由来のサツマイモです。</>
    },
    {
        image: '/images/img-sec-01-03.png',
        title: <>有機栽培で自然の旨味を<br />ギューッと凝縮！</>,
        text: <>気候、土壌、栽培方法が違います！<span className="font-bold">芋になる前から栄養を凝縮し続けた</span>「至高のほしいも」は、濃さが違います。</>
    },
]

const SectionHealth = () => {
  const ref = useScrollAnimations();


  return (
    <section className="bg-[url('/images/bg-03.png')] bg-cover max-md:bg-bottom pt-8 md:pt-16 pb-40 md:pb-[510px]">
        <div className="w-full md:max-w-[1240px] max-w-[440px] mx-auto flex max-md:justify-center items-center md:gap-[60px] gap-5 px-5 pb-5 md:pb-8">
            <p className="">
                <svg className="md:h-[118px] h-[60px]" xmlns="http://www.w3.org/2000/svg" width="157" height="118" viewBox="0 0 157 118" fill="none">
                    <path opacity="0.7" d="M62.8297 91.71C52.6967 108.611 40.7799 117.074 27.104 117.074C19.5971 117.074 13.2051 113.644 7.92804 106.81C2.65094 99.9755 0 91.0685 0 80.089C0 60.9426 5.00457 43.0793 15.0385 26.499C25.5184 9.10439 37.5591 0.394775 51.0863 0.394775C59.3117 0.394775 65.7284 3.89836 70.3614 10.9055C74.9943 17.9127 77.2984 27.2391 77.2984 38.8355C77.2984 58.0312 72.4673 75.6478 62.8297 91.6854V91.71ZM38.5997 100.296C40.7799 95.8305 43.5794 87.8857 46.9736 76.4621C51.0368 62.8178 54.208 50.5799 56.5121 39.7484C58.8162 28.9169 59.9558 21.589 59.9558 17.7647C59.9558 14.3844 59.5346 11.7444 58.7171 9.81991C57.4535 6.76044 55.1494 5.23071 51.8048 5.23071C47.1471 5.23071 42.6875 9.84459 38.4014 19.0723C35.9983 24.303 33.1491 32.5192 29.854 43.7208C26.9553 53.442 24.131 64.0761 21.3809 75.6478C18.6309 87.2195 17.2683 95.7811 17.2683 101.357C17.2683 105.009 18.1602 107.674 19.9688 109.351C21.7773 111.029 23.7098 111.843 25.7909 111.843C30.4982 111.843 34.7347 107.994 38.5253 100.296H38.5997Z" fill="#90442F"/>
                    <path opacity="0.7" d="M81.0643 96.4966C82.8233 94.7695 85.0778 93.9306 87.8774 93.9306C90.3302 93.9306 92.4113 94.4981 94.1208 95.6577C95.8303 96.8174 97.7379 98.9393 99.8686 102.073L102.247 105.354C103.659 107.377 104.923 108.66 106.038 109.228C107.152 109.795 108.589 110.042 110.398 110.042C115.502 110.042 119.887 107.427 123.578 102.171C127.27 96.9161 129.128 90.3283 129.128 82.3343C129.128 72.4403 126.328 65.5812 120.704 61.7569C115.081 57.9325 109.135 56.1067 102.842 56.2548L103.411 52.5785C112.454 50.5553 119.119 48.2607 123.455 45.6946C131.234 41.1795 135.124 34.8138 135.124 26.6223C135.124 22.1071 133.91 18.5049 131.457 15.8648C129.029 13.2248 125.585 11.8925 121.15 11.8925C117.162 11.8925 113.594 12.9041 110.472 14.9519C107.351 16.9998 104.204 20.1826 101.033 24.4757L97.5893 22.3539C101.256 16.8517 104.799 12.4846 108.193 9.25243C114.436 3.08414 122.389 0 132.027 0C138.592 0 144.414 2.0232 149.444 6.04492C154.473 10.0666 157 15.6428 157 22.724C157 27.856 155.291 32.5685 151.872 36.8863C148.453 41.2041 144.117 44.5597 138.84 46.953L136.858 47.8412C140.797 50.7773 144.092 54.2316 146.718 58.1793C149.345 62.127 150.658 66.9629 150.658 72.7117C150.658 84.2834 145.603 94.6215 135.47 103.726C125.783 112.386 114.065 116.729 100.315 116.729C91.891 116.729 85.7468 114.804 81.9066 110.93C79.6025 108.586 78.4629 105.971 78.4629 103.084C78.4629 100.37 79.33 98.1251 81.0891 96.4226L81.0643 96.4966Z" fill="#90442F"/>
                </svg>
            </p>
            <h5 className="font-hiragino md:text-[30px] text-[18px] font-semibold">「至高のほしいも」は…<br className="md:hidden" />美味しいだけじゃない！</h5>
        </div>
        <div className="md:pr-[15%] max-md:px-5">
            <div className="bg-[#E3BF3C]/[0.98] bg-[url('/images/bg-sec-03.png')] bg-cover px-5 md:px-[2vw] border-white border-2 md:border-l-0 pt-8 md:pb-14 md:pt-12 relative max-md:max-w-[440px] max-md:mx-auto">
                <div className="flex max-md:flex-col justify-between w-full max-w-[1200px] md:ml-auto gap-10 max-md:pb-10">
                    {data.map((item, index) => {
                        return (
                            <div className="flex-1 flex flex-col items-center" key={index}>
                                <figure>
                                    <img className="max-md:max-w-[180px]" src={item.image} alt="" />
                                </figure>
                                <div className="mt-4 md:mt-6 text-white">
                                    <h5 className="max-md:text-center font-hiragino md:text-[26px] text-[16px] font-semibold leading-snug">
                                        {item.title}
                                    </h5>
                                    <p className="md:text-[20px] text-[13px] font-light md:mt-8 mt-5">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
                <div className="md:absolute left-full bottom-0 font-hiragino md:text-[58px] text-[30px] text-[#C84E4E] font-semibold md:[writing-mode:vertical-rl] md:[text-orientation:mixed] md:rotate-180">Good for health</div>
            </div>
        </div>
    </section>
  );
};

export default SectionHealth;
