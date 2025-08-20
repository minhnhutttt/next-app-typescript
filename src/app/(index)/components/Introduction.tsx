import Link from 'next/link';

export default function Introduction() {
  return (
    <section className="relative z-10 mt-15 mb-18 px-5 md:mt-[94px] md:mb-[116px]">
      <div className="fade-up relative mx-auto flex w-full max-w-[1250px] items-center gap-10 overflow-hidden rounded-[30px] border border-black px-8 py-12 max-md:flex-col md:gap-[60px] md:p-10 md:py-15 lg:px-20 lg:py-25">
        <div className="absolute inset-0 bg-[#3D4654]/[0.3] backdrop-blur backdrop-filter"></div>
        <p className="fade-up relative text-[18px] font-light tracking-widest md:text-[24px]">
          AIS Holdings Group pioneers AI-driven marketing solutions that break down barriers between
          businesses and their growth potential. Our group companies deliver enterprise-grade
          capabilities at revolutionary economics.
        </p>
        <div className="fade-up relative flex flex-col gap-7 md:gap-10">
          <Link
            href="/"
            className="flex h-16 w-[260px] items-center justify-center rounded-full bg-[linear-gradient(99deg,_#2500C8_-2.99%,_#000_102.28%)] text-[13px] font-medium duration-200 hover:opacity-70 md:h-20 md:w-[300px] md:text-[16px]"
          >
            DISCOVER OUR COMPANIES
          </Link>
          <Link
            href="/"
            className="flex h-16 w-[260px] items-center justify-center rounded-full bg-[linear-gradient(99deg,_#00B70C_-2.99%,_#000_102.28%)] text-[13px] font-medium duration-200 hover:opacity-70 md:h-20 md:w-[300px] md:text-[16px]"
          >
            LEARN ABOUT OUR VISION
          </Link>
        </div>
      </div>
    </section>
  );
}
