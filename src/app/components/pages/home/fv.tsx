export default function FV() {
  return (
    <section className="bg-[url('/images/fv-bg.png')] bg-cover h-[780px] bg-center">
        <div className="flex justify-center font-rocknRoll absolute inset-x-0 top-[110px] gap-7">
            <div className="bg-white text-center rounded-[20px] p-5">
                <span className="md:text-[24px] text-[16px] leading-none">
                    利用期間<span className="md:text-[34px] text-[20px]">「100年」</span><br />
                    家族利用<span className="md:text-[34px] text-[20px]">「OK」</span>
                </span>
            </div>
            <div className="bg-white text-center rounded-[20px] p-5">
                <span className="md:text-[24px] text-[16px] leading-none">
                    <span className="md:text-[50px] text-[32px]">100</span><span className="md:text-[34px] text-[20px]">年</span><br />
                    買い切り型で
                </span>
            </div>
            <div className="bg-white text-center rounded-[20px] p-5">
                <span className="md:text-[24px] text-[16px] leading-none">
                    <span className="flex"></span>
                </span>
            </div>
        </div>
        <div className="flex justify-center h-full items-end pb-8">
            <div className="w-1/3 flex justify-center pl-10 pb-4">
                <img src="/images/fv-image-01.png" alt="大容量" />
            </div>
            <div className="w-1/3 flex justify-center pr-6">
                <img src="/images/fv-image-02.png" alt="コスパ最強" />
            </div>
            <div className="w-1/3 flex justify-center pr-12">
                <img src="/images/fv-image-03.png" alt="お試しの" />
            </div>
        </div>
    </section>
  );
}
