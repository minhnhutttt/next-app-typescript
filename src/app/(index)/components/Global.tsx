export default function Global() {
  return (
    <section className="relative z-10">
      <div className="relative mx-auto flex w-full max-w-[1320px] pt-50 pb-20 pl-5 max-md:flex-col max-md:items-center max-md:gap-12 md:pt-106 md:pb-[141px] md:pl-10 xl:pl-36">
        <div className="absolute top-3 left-[-10vw] aspect-[1134/999] w-[100vw] bg-[url(/assets/images/global-bg.png)] bg-cover bg-no-repeat md:left-[-225px] md:w-[1134px]"></div>
        <div className="fade-up relative w-[340px] md:w-[520px]">
          <h3 className="text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            GLOBAL REACH <br />
            LOCAL EXCELLENCE
          </h3>
          <p className="mt-1 text-[14px] leading-[1.3] tracking-wider md:mt-2 md:text-[18px]">
            Operating Across Time Zones, United by Innovation, Expanding to Europe & Latin America
          </p>
        </div>
        <div className="fade-up relative w-[340px] px-5 py-6 md:mt-39 md:w-[595px] md:px-10 md:py-12">
          <div className="absolute inset-0 rounded-[16px] bg-[rgba(39,_50,_47,_0.24)] backdrop-blur backdrop-filter md:rounded-[32px]"></div>
          <div className="relative space-x-6 md:space-y-10">
            <div className="text-[15px] font-light md:text-[18px]">
              <div className="flex gap-2 font-bold">
                <span>
                  <img src="/assets/images/ic-usa.svg" alt="" />
                </span>
                HEADQUARTERS
              </div>
              <p className="mt-1">United States - AI operations and innovation center</p>
            </div>
            <div className="text-[15px] font-light md:text-[18px]">
              <div className="flex gap-2 font-bold">
                <span>
                  <img src="/assets/images/ic-jp.svg" alt="" />
                </span>
                AIS JAPAN
              </div>
              <p className="mt-1">Tokyo - Asia-Pacific operations and product development</p>
            </div>
            <p className="text-[15px] font-light md:text-[18px]">
              <a
                href="https://www.wsj.com/market-data/quotes/AIDG"
                target="_blank"
                className="underline"
                rel="noopener noreferrer"
              >
                ※Stock Information: Track AIDG on WSJ
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
