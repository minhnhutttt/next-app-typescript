'use client';

export default function Leader() {
  return (
    <section className="relative z-10 px-5">
      <div className="relative mx-auto w-full max-w-[1400px] pt-25 md:pt-40">
        <div className="border-b border-white pb-8 md:pb-[60px]">
          <h2 className="text-center text-[28px] leading-[1.3] font-bold tracking-wider md:text-[46px]">
            Leadership
          </h2>
          <p className="mt-1.5 text-center text-[15px] leading-[1.3] md:text-[18px]">
            Visionaries in Marketing Technology
          </p>
        </div>
        <div className="mt-5 md:mt-8">
          <p className="mx-auto w-full max-w-[710px] md:text-[21px]">
            Our leadership team combines decades of experience in technology, marketing, and
            business development. United by a shared vision of democratizing marketing excellence,
            we&apos;re building the next generation of accessible marketing infrastructure
          </p>
          <div className="-mx-5 mt-10 md:mt-14">
            <img src="/assets/images/images.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
