import Link from 'next/link';

export default function Group() {
  return (
    <section className="relative z-10 bg-[url(/assets/images/group-bg.png)] bg-cover bg-center px-5">
      <div className="relative mx-auto flex w-full max-w-[1320px] justify-center pt-40 md:justify-end md:pt-85">
        <div className="fade-up text-center md:w-[660px]">
          <h3 className="text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            OUR GROUP COMPANIES
          </h3>
          <p className="mt-1 text-[14px] leading-[1.3] tracking-wider md:mt-2 md:text-[18px]">
            Building the Future of Marketing Technology Together
          </p>
          <div className="mt-8 md:mt-12">
            <h6 className="text-center text-[15px] font-bold md:text-[20px]">AIS JAPAN</h6>
            <div className="flex justify-center">
              <p className="mt-4 max-w-[547px] text-left text-[14px] font-light tracking-wider md:mt-6 md:text-[18px]">
                Leading the Asia-Pacific market with <span className="font-bold">SEIKAI</span>, our
                revolutionary AI-powered advertising platform that optimizes campaigns based on real
                business outcomes reported by clients <br />
                Future group companies planned across key global markets
              </p>
            </div>
            <div className="mt-9 flex justify-center md:mt-16">
              <Link
                href="/"
                className="flex h-14 w-[240px] justify-center rounded-full bg-[linear-gradient(135deg,_#00B70C_0%,_#00D1C3_49.04%,_#2500C8_100%)] p-0.5 duration-200 hover:opacity-70 md:h-17.5 md:w-[230px]"
              >
                <span className="flex h-full w-full items-center justify-center rounded-full bg-black text-[15px] font-medium md:text-[20px]">
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
