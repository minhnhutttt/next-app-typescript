import Link from 'next/link';

export default function Contact() {
  return (
    <section className="relative px-5 pt-40 pb-40 md:pt-55 md:pb-60">
      <div className="mx-auto w-full max-w-[1250px]">
        <h5 className="fade-up text-center text-[32px] leading-snug font-bold md:text-[70px] lg:text-[80px] xl:text-[105px]">
          ご相談・お問い合わせ
        </h5>
        <p className="fade-up mt-10 text-center text-[20px] font-bold md:mt-20 md:text-[38px]">
          SEIKAIの導入相談から一般的なお問い合わせまで、
          <br />
          お気軽にご連絡ください。
        </p>
        <div className="fade-up mt-8 flex items-center justify-center gap-5 max-md:flex-col md:mt-12 md:gap-9">
          <Link
            href="/"
            className="flex h-16 w-[330px] items-center justify-center rounded-[45px] bg-[#090920] text-[28px] font-bold text-white md:h-[98px] md:w-[370px] md:rounded-[45px] md:text-[38px]"
          >
            SEIKAI無料相談
          </Link>
          <Link
            href="/"
            className="flex h-16 w-[330px] items-center justify-center rounded-[45px] bg-[#090920] text-[28px] font-bold text-white md:h-[98px] md:w-[370px] md:rounded-[45px] md:text-[38px]"
          >
            お問い合わせ
          </Link>
        </div>
        <p className="fade-up mt-3 text-center text-[22px] font-semibold md:mt-5 md:text-[40px]">
          まずはお気軽にご相談ください
        </p>
      </div>
    </section>
  );
}
