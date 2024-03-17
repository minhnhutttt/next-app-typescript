export default function FV() {
  return (
    <section className="bg-[url('/images/fv-bg.png')] bg-cover pt-[165px] bg-center">
        <div className="flex justify-center max-md:flex-col items-center font-rocknRoll absolute inset-x-0 top-[110px] gap-10 md:gap-7">
            <div className="bg-white text-center rounded-[20px] p-3 md:p-5 relative after:absolute md:after:top-1/2 md:after:-translate-y-1/2 after:max-md:left-1/2 max-md:after:-translate-x-1/2 max-md:after:top-full md:after:left-full after:w-0 after:h-0 md:after:border-r-0 max-md:after:border-x-transparent md:after:border-y-transparent after:border-[12px] md:after:border-l-[16px] md:after:border-l-white max-md:after:border-b-0 max-md:after:border-t-white">
                <span className="min-[1440px]:text-[24px] md:text-[1.667vw] text-[16px] leading-none">
                    利用期間<span className="min-[1440px]:text-[34px] md:text-[2.361vw] text-[20px]">「100年」</span><br />
                    家族利用<span className="min-[1440px]:text-[34px] md:text-[2.361vw] text-[20px]">「OK」</span>
                </span>
            </div>
            <div className="bg-white text-center rounded-[20px] p-3 md:p-5 relative after:absolute md:after:top-1/2 md:after:-translate-y-1/2 after:max-md:left-1/2 max-md:after:-translate-x-1/2 max-md:after:top-full md:after:left-full after:w-0 after:h-0 md:after:border-r-0 max-md:after:border-x-transparent md:after:border-y-transparent after:border-[12px] md:after:border-l-[16px] md:after:border-l-white max-md:after:border-b-0 max-md:after:border-t-white">
                <span className="min-[1440px]:text-[24px] md:text-[1.667vw] text-[16px] leading-none">
                    <span className="min-[1440px]:text-[50px] md:text-[3.472vw] text-[32px]">100</span><span className="min-[1440px]:text-[40px] md:text-[2.778vw] text-[24px]">年</span><br />
                    買い切り型で
                </span>
            </div>
            <div className="bg-white text-center rounded-[20px] p-3 md:p-5">
                <span className="min-[1440px]:text-[24px] md:text-[1.667vw] text-[16px] leading-none">
                    <span className="flex mb-1.5">
                        <span>
                            最安1GBあたり <br />
                            25円から使える
                        </span>
                        <span className="min-[1440px]:text-[45px] md:text-[3.125vw] text-[24px] text-[#F31558]">
                        月額費用なし
                        </span>
                    </span>
                    <span className="min-[1440px]:text-[28px] md:text-[1.944vw] text-[18px]">
                    のオンラインストレージサービス！
                    </span>
                </span>
            </div>
        </div>
        <div className="flex justify-center h-full items-end pb-8  relative z-10">
            <div className="w-1/3 flex justify-center pl-10 pb-6">
                <img src="/images/fv-image-01.png" alt="大容量" />
            </div>
            <div className="w-1/3 flex justify-center pr-6 pt-2">
                <img src="/images/fv-image-02.png" alt="コスパ最強" />
            </div>
            <div className="w-1/3 flex justify-center pr-12 pb-2">
                <img src="/images/fv-image-03.png" alt="お試しの" />
            </div>
        </div>
    </section>
  );
}
