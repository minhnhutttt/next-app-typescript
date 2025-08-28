export default function Leader() {
  return (
    <section id="leadership" className="relative z-10 px-5">
      <div className="relative mx-auto w-full max-w-[1400px] pt-25 pb-28 md:pt-40 md:pb-45">
        <div className="fade-up border-b border-white pb-8 md:pb-[60px]">
          <h2 className="text-center text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            Leadership
          </h2>
          <p className="mt-1.5 text-center text-[15px] leading-[1.3] tracking-wider md:text-[18px]">
            Visionaries in Marketing Technology
          </p>
        </div>
        <div className="mt-5 md:mt-8">
          <p className="fade-up mx-auto w-full max-w-[710px] md:text-[21px]">
            In a revolutionary approach to corporate governance, AIS Holdings operates with zero
            full-time executives, instead leveraging AI agent teams that combine decades of embedded
            knowledge in technology, marketing, and business development. This AI-first structure
            enables us to build the next generation of accessible marketing infrastructure with
            unprecedented efficiency.
          </p>
          <div className="fade-up -mx-5 mt-10 md:mt-14">
            <img src="/assets/images/images.png" alt="" />
          </div>
        </div>
        <div className="fade-up flex items-center max-xl:mt-10 max-md:mt-3 max-md:flex-col max-md:justify-center">
          <span>
            <img
              className="relative max-md:-left-2 xl:-right-10"
              src="/assets/images/img-ceo.png"
              alt=""
            />
          </span>
          <div className="border-white px-5 py-6 max-md:border-t md:border-l md:py-15 md:pr-2.5 md:pl-7.5 xl:py-25">
            <p className="text-[16px] leading-loose tracking-[0.2em] md:max-w-[500px] md:text-[21px]">
              The future of marketing isn't about bigger budgets or larger teams—it's about smarter
              technology that works for everyone. At AIS Holdings, we're making that future a
              reality today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
