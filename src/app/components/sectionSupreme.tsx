"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";


const SectionSupreme = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[url('/images/bg-02.png')] bg-cover max-md:bg-bottom pt-8 md:pt-16 pb-[70px] md:pb-[152px]">
        <div className="fade-up w-full md:max-w-[1240px] max-w-[440px] mx-auto flex max-md:justify-center items-center md:gap-[60px] gap-5 px-5 pb-5 md:pb-8">
            <p className="">
                <svg className="md:h-[122px] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 122" fill="none">
                    <path d="M64.724 94.8991C54.2855 112.382 42.0094 121.136 27.9213 121.136C20.1881 121.136 13.6035 117.588 8.16727 110.518C2.73109 103.449 0.000244141 94.2355 0.000244141 82.8782C0.000244141 63.0732 5.15568 44.5953 15.4921 27.4445C26.2879 9.45151 38.6915 0.467773 52.6265 0.467773C61.0998 0.467773 67.71 4.09189 72.4826 11.3401C77.2552 18.5884 79.6288 28.2357 79.6288 40.231C79.6288 60.0871 74.652 78.3098 64.724 94.8991ZM39.7635 103.781C42.0094 99.1612 44.8934 90.9431 48.3899 79.1265C52.5755 65.0128 55.8423 52.3539 58.2159 41.1498C60.5894 29.9456 61.7634 22.3656 61.7634 18.4097C61.7634 14.9132 61.3295 12.1824 60.4873 10.1916C59.1857 7.02692 56.8121 5.44456 53.3667 5.44456C48.5686 5.44456 43.9746 10.2172 39.5593 19.7624C37.0837 25.173 34.1486 33.6719 30.7542 45.2588C27.7681 55.3145 24.8586 66.3144 22.0257 78.2842C19.1928 90.2541 17.7891 99.1102 17.7891 104.878C17.7891 108.655 18.7078 111.412 20.5709 113.147C22.4341 114.857 24.4248 115.725 26.5686 115.725C31.4178 115.725 35.782 111.744 39.6869 103.781H39.7635Z" fill="white"/>
                    <path d="M71.9214 114.296C73.5548 112.662 78.5316 107.839 86.8262 99.8247C92.2369 94.5672 96.7032 90.0243 100.2 86.196C112.833 72.261 121.102 61.797 125.007 54.8295C128.912 47.862 130.852 41.2518 130.852 34.9734C130.852 29.231 129.524 24.586 126.87 21.0639C124.216 17.5419 120.005 15.7809 114.262 15.7809C109.005 15.7809 104.258 17.5419 99.97 21.0384C97.4434 23.1312 94.6359 26.3215 91.5988 30.6091L87.7961 28.6695C91.0629 21.7275 95.1209 15.883 99.9955 11.1614C107.448 3.93869 115.947 0.340088 125.466 0.340088C134.986 0.340088 141.571 3.35168 146.548 9.34934C151.524 15.347 154 22.0082 154 29.282C154 37.1683 151.524 44.5952 146.599 51.4861C141.673 58.377 135.828 64.7065 129.116 70.3979L95.274 99.2632H120.924C127.534 99.2632 132.485 98.3189 135.828 96.4303C139.172 94.5417 142.209 90.8665 144.965 85.3793H149.457L135.752 118.481H72.0235V114.347L71.9214 114.296Z" fill="white"/>
                </svg>
            </p>
            <h5 className="font-hiragino md:text-[30px] text-[18px] font-semibold">「至高」のほしいもに<br className="md:hidden" />たどり着くまで…</h5>
        </div>
        <div className="md:pl-[15%] max-md:px-5">
            <div className="fade-up bg-white/80 bg-cover px-5 md:pl-[4.5vw] border-[#75C875] border-2 md:border-r-0 pt-8 md:pb-24 md:pt-7 relative max-md:max-w-[440px] max-md:mx-auto">
                <div className="w-full max-w-[1280px] md:mr-auto max-md:pb-10">
                    <div className="fade-up flex max-xl:flex-col">
                        <div className="flex max-md:flex-col md:mt-10 gap-6">
                            <figure className="max-md:w-full max-xl:w-1/3">
                                <img className="max-md:w-full" src="/images/img-supreme-01.png" alt="" />
                            </figure>
                            <div className="w-full max-w-[550px] flex-1 -mt-3">
                                <h5 className="md:text-[28px] text-[16px] font-semibold font-hiragino">日本中を駆け回り探した最高の干し芋</h5>
                                <p className="md:text-[18px] text-[13px] md:ml-4 mt-4">
                                    本当に美味しい干し芋を見つけたいという情熱から、約1年間日本中を探し茨城県へたどり着きました。茨城県だけでも<span className="font-bold">100種類以上の干し芋を試食</span>しました。<br />
                                    <span className="font-bold">茨城県</span>を選んだ理由は、サツマイモの生産量で全国トップクラスであること、そして多様な農産物で知られる農業県であるからです。特に<span className="font-bold">「べにはるか」という品種の干し芋</span>が、サッパリした甘みで私たちの理想にぴったり合致すると確信しました。
                                </p>
                            </div>
                        </div>
                        <figure className="max-md:my-5 max-md:mx-auto max-xl:ml-auto">
                            <img className="max-xl:w-[200px]" src="/images/img-supreme-map.png" alt="" />
                        </figure>
                    </div>
                    <div className="fade-up flex justify-start max-md:mt-5 min-[1600px]:mt-[-28px]">
                        <div className="flex max-md:flex-col md:mt-10 gap-6 md:flex-row-reverse">
                            <figure className="max-md:w-full max-xl:w-1/3">
                                <img src="/images/img-supreme-02.png" alt="" />
                            </figure>
                            <div className="w-full max-w-[680px] flex-1 -mt-2">
                                <h5 className="md:text-[28px] text-[16px] font-semibold font-hiragino">やっと出会えた！根菜専門の農家さん</h5>
                                <p className="md:text-[18px] text-[13px] md:ml-4 mt-4">
                                    茨城県つくば市で<span className="font-bold">根菜専門農家さんの「つくばヤーコン株式会社」</span>と出会いました。この地域は、固有の赤土と水はけの良い土壌がサツマイモ栽培に最適です。<br />
                                    特有の気候を活かし、自然の力を最大限に引き出す有機栽培に徹底的にこだわる農家さんで他と一線を画す凝縮された旨味と甘みを持つサツマイモを提供することができるため、私たちはパートナーとして信頼し、協力を求めました。<br />
                                    生産過程から試行錯誤を繰り返し、<span className="font-bold">試作パターンだけでも100以上行った</span>中で最後に選ばれた干し芋を至高のほしいもとして商品化いたしました。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fade-up md:absolute right-full bottom-0 font-hiragino md:text-[58px] text-[30px] text-white font-semibold md:[writing-mode:vertical-rl] md:[text-orientation:mixed] md:rotate-180">Development story </div>
            </div>
        </div>
    </section>
  );
};

export default SectionSupreme;
