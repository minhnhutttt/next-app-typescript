"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/images/img-sec-01-01.png',
        title: <>100種以上の干し芋を比較！<br />辿り着いたサッパリした甘み！</>,
        text: <><span className="font-black">日本中を1年間探し、茨城県だけでも100種類以上比較しました。</span>そして自慢のサッパリした甘みの「至高の干し芋」に行きつきました。</>
    },
    {
        image: '/images/img-sec-01-02.png',
        title: <>原材料はオーガニックの<br />サツマイモのみ！</>,
        text: <>一福の至高のほしいもは、<span className="font-black">砂糖・添加物ゼロの完全オーガニック。</span>生産過程から試行錯誤を繰り返した自然由来のサツマイモです。</>
    },
    {
        image: '/images/img-sec-01-03.png',
        title: <>有機栽培で自然の旨味を<br />ギューッと凝縮！</>,
        text: <>気候、土壌、栽培方法が違います！<span className="font-black">芋になる前から栄養を凝縮し続けた</span>「至高のほしいも」は、濃さが違います。</>
    },
]

const SectionComparison = () => {
  const ref = useScrollAnimations();


  return (
    <section ref={ref} className="bg-[url('/images/bg-01.png')] bg-cover max-md:bg-bottom pt-8 md:pt-16 pb-40 md:pb-[510px]">
        <div className="fade-up w-full md:max-w-[1240px] max-w-[440px] mx-auto flex max-md:justify-center items-center md:gap-[60px] gap-5 px-5 pb-5 md:pb-8">
            <p className="">
                <svg className="max-md:h-[50px] md:h-[119px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142 119" fill="none">
                    <path d="M63.1775 92.5553C52.9884 109.62 41.0056 118.165 27.254 118.165C19.7056 118.165 13.2782 114.702 7.97193 107.802C2.66561 100.901 0 91.9076 0 80.8216C0 61.4897 5.03228 43.4532 15.1217 26.7122C25.6596 9.149 37.767 0.379883 51.3691 0.379883C59.64 0.379883 66.0923 3.91742 70.7509 10.9925C75.4094 18.0676 77.7263 27.4844 77.7263 39.1932C77.7263 58.575 72.8684 76.3623 63.1775 92.5553ZM38.8133 101.225C41.0056 96.7156 43.8207 88.6939 47.2337 77.1595C51.3193 63.383 54.508 51.0265 56.8249 40.09C59.1417 29.1536 60.2877 21.7546 60.2877 17.8932C60.2877 14.4802 59.8642 11.8146 59.0421 9.87146C57.7716 6.78234 55.4547 5.23778 52.0916 5.23778C47.4081 5.23778 42.9238 9.89637 38.614 19.2136C36.1975 24.495 33.3326 32.7908 30.0193 44.1009C27.1046 53.9164 24.2646 64.6535 21.4993 76.3374C18.734 88.0213 17.3639 96.6658 17.3639 102.296C17.3639 105.983 18.2607 108.674 20.0793 110.368C21.8979 112.037 23.841 112.884 25.9337 112.884C30.667 112.884 34.927 108.997 38.7386 101.225H38.8133Z" fill="#FCFCFC"/>
                    <path d="M72.2954 111.638C78.0751 111.464 82.5344 110.567 85.6733 108.923C88.8123 107.279 91.0793 103.99 92.4495 99.0824L113.65 21.6052C113.874 20.7333 114.023 19.8862 114.098 19.1389C114.173 18.3915 114.223 17.7687 114.223 17.3203C114.223 14.9038 113.426 13.3592 111.856 12.7364C110.287 12.1136 108.319 11.7898 105.952 11.7898C104.806 11.7898 103.087 11.8894 100.82 12.1136C99.5993 12.288 97.9551 12.4873 95.8624 12.7863L96.1863 8.89994C108.717 6.75748 116.913 5.31257 120.75 4.61503C124.586 3.89257 131.661 2.44766 142 0.230469L115.842 94.8224C115.344 96.7406 114.895 98.5592 114.522 100.278C114.148 101.997 113.949 103.417 113.949 104.563C113.949 107.702 115.369 109.72 118.234 110.592C120.052 111.19 124.013 111.563 130.142 111.663V115.549H72.2456V111.663L72.2954 111.638Z" fill="#FCFCFC"/>
                </svg>
            </p>
            <h5 className="font-hiragino md:text-[30px] text-[17px] font-semibold">選び抜かれた「至高」のほしいも</h5>
        </div>
        <div className="md:pr-[15%] max-md:px-5">
            <div className="fade-up bg-[#E3BF3C]/[0.98] bg-[url('/images/bg-sec-01.png')] bg-cover px-5 md:px-[2vw] border-white border-2 md:border-l-0 pt-8 md:pb-14 md:pt-12 relative max-md:max-w-[440px] max-md:mx-auto">
                <div className="flex max-md:flex-col justify-between w-full max-w-[1200px] md:ml-auto gap-10 max-md:pb-10">
                    {data.map((item, index) => {
                        return (
                            <div className="fade-up flex-1 flex flex-col items-center" key={index}>
                                <figure>
                                    <img className="max-md:max-w-[180px]" src={item.image} alt="" />
                                </figure>
                                <div className="mt-4 md:mt-6">
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
                <div className="fade-up md:absolute left-full bottom-0 font-hiragino md:text-[58px] text-[30px] text-white font-semibold md:[writing-mode:vertical-rl] md:[text-orientation:mixed] md:rotate-180 max-md:!rotate-0">Characteristics</div>
            </div>
        </div>
    </section>
  );
};

export default SectionComparison;
