import Link from 'next/link';

export default function Marketing() {
  return (
    <section className="relative z-10 bg-[url(/assets/images/marketing-bg.png)] bg-cover bg-center px-5">
      <div className="relative mx-auto flex w-full max-w-[600px] gap-10 py-15 max-lg:flex-col md:gap-16 md:py-[121px] lg:max-w-[1320px] xl:pr-15">
        <div className="fade-up flex-1">
          <h3 className="text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            TRANSFORMING GLOBAL MARKETING LANDSCAPE
          </h3>
          <p className="mt-1 text-[14px] leading-[1.3] tracking-wider md:mt-2 md:text-[18px]">
            One Vision, Multiple Markets, Unlimited Potential
          </p>
        </div>
        <div className="fade-up relative overflow-hidden rounded-[24px] p-6 md:w-[567px] md:rounded-[32px] md:p-10 lg:mt-20">
          <div className="absolute inset-0 bg-[#E2E2E2]/[0.1] backdrop-blur backdrop-filter"></div>
          <div className="relative">
            <p className="mb-5 text-[14px] leading-loose font-light tracking-wider md:mb-7 md:text-[18px]">
              Founded on the principle that sophisticated marketing technology should be accessible
              to all, AIS Holdings Group operates at the intersection of artificial intelligence and
              marketing innovation. Through our group companies, we&apos;re building solutions that
              empower businesses of every size to compete effectively in the digital economy.
            </p>
            <div className="flex justify-end">
              <Link
                href="/"
                className="flex h-14 w-[240px] justify-center rounded-full bg-[linear-gradient(135deg,_#00B70C_0%,_#00D1C3_49.04%,_#2500C8_100%)] p-0.5 duration-200 hover:opacity-70 md:h-17.5 md:w-[260px]"
              >
                <span className="flex h-full w-full items-center justify-center rounded-full bg-black text-[15px] font-medium md:text-[18px]">
                  LEARN MORE
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
