import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export default function Introduction() {
  useInfiniteScroll();
  return (
    <section className="relative pt-6 pb-10 md:pb-[50px]">
      <div className="overflow-hidden">
        <h3 data-infinite-scroll="2:15s" className="flex w-max gap-10">
          <span className="shrink-0">
            <img className="max-md:h-16" src="/assets/images/dwu-action.svg" alt="" />
          </span>
        </h3>
      </div>
      <div className="relative -mt-8 md:-mt-18">
        <h2 className="text-center text-[45px] leading-none md:text-[90px]">
          <span className="font-bold">あなたと一緒に</span>
          <br className="md:hidden" />
          <span className="font-black text-[#0046B8]">ドル活</span>
        </h2>
        <div className="mt-10 flex items-center justify-center gap-5 max-md:flex-col md:mt-16 md:gap-7.5">
          <p className="text-[24px] font-bold tracking-widest md:text-[40px]">まずは無料相談</p>
          <a
            href=""
            className="flex h-14 w-[220px] items-center justify-center gap-2.5 rounded-full border-2 border-[#0046B8] bg-[#0046B8] text-[16px] font-bold tracking-wider text-white [box-shadow:0_6px_8px_0_rgba(0,_70,_184,_0.20)] md:h-[80px] md:w-[294px] md:text-[20px]"
          >
            <span>
              <img src="/assets/images/ic-content-02.svg" alt="" />
            </span>
            無料相談はこちら
          </a>
        </div>
      </div>
    </section>
  );
}
