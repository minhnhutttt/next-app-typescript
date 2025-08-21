export default function Overview() {
  return (
    <section className="relative z-10 px-5">
      <div className="relative mx-auto w-full max-w-[1400px] pt-25 md:pt-50">
        <div className="fade-up border-b border-white pb-8 md:pb-[60px]">
          <h2 className="text-center text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            AIS Japan - Revolutionizing Digital <br />
            Advertising in Asia-Pacific
          </h2>
          <p className="mt-2.5 text-center text-[15px] leading-[1.3] tracking-wider md:text-[18px]">
            Our Leading Group Company
          </p>
        </div>
        <div className="mt-10 md:mt-26">
          <div className="fade-up mx-auto flex w-full max-w-[500px] gap-7 max-md:flex-col max-md:items-center md:max-w-[904px] md:gap-16">
            <span className="max-lg:w-1/2 max-md:w-auto">
              <img className="rounded-[20px]" src="/assets/images/overview.png" alt="" />
            </span>
            <div className="flex-1 md:pt-55">
              <p className="text-[18px] font-light tracking-wider md:text-[28px]">
                AIS Japan leads our Asia-Pacific operations, bringing revolutionary marketing
                technology to one of the world's most sophisticated digital markets. The company's
                flagship product, SEIKAI, represents a breakthrough in AI-powered advertising that
                uniquely bridges online campaigns with offline business results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
