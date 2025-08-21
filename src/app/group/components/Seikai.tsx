export default function Seikai() {
  return (
    <section className="relative z-10 px-5">
      <div className="relative mx-auto w-full max-w-[1400px] pt-25 md:pt-38">
        <div className="fade-up border-b border-white pb-8 md:pb-[60px]">
          <h2 className="text-center text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            SEIKAI - Fully Automated <br />
            AI Advertising Platform
          </h2>
          <p className="mt-2.5 text-center text-[15px] leading-[1.3] tracking-wider md:text-[18px]">
            24/7 Optimization That Gets Smarter with Every Real Conversion
          </p>
        </div>
        <div className="mx-auto mt-8 w-full max-w-[1320px] md:mt-13">
          <div className="fade-up flex justify-center">
            <img src="/assets/images/seikai-logo.png" alt="" />
          </div>
          <div className="fade-up mt-8 flex gap-10 max-lg:flex-col md:mt-14">
            <span className="max-w-[760px] lg:w-[58%]">
              <img src="/assets/images/seikai-img.png" alt="" />
            </span>
            <div className="flex-1 text-[20px] font-light tracking-wider md:text-[28px] lg:pt-12">
              SEIKAI delivers complete advertising automation powered by AI, requiring{' '}
              <span className="bg-[linear-gradient(154deg,_#FF884B_11.49%,_#EF38BE_83.76%)] pb-1">
                zero marketing
              </span>{' '}
              expertise. What makes it revolutionary is the ability to incorporate real business
              outcomes - when clients report actual sales, the AI learning accelerates dramatically.
              With{' '}
              <span className="bg-[linear-gradient(154deg,_#FF884B_11.49%,_#EF38BE_83.76%)] pb-1">
                just 9%
              </span>{' '}
              management fee and post-payment billing, professional advertising becomes accessible
              to all.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
