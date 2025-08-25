import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export default function About() {
  useInfiniteScroll();
  return (
    <section className="relative overflow-hidden pt-24 md:pt-40">
      <h3
        data-infinite-scroll="4:10s"
        className="font-arimo u-text-gradient-01 flex w-max text-[100px] font-bold whitespace-nowrap italic md:text-[250px]"
      >
        <span className="shrink-0">about／</span>
      </h3>
      <div className="mx-auto flex w-full max-w-[1290px] justify-end px-5 pt-5">
        <div className="fade-up w-full text-right leading-snug">
          <p className="text-[20px] font-bold tracking-tight md:text-[40px]">
            AIの力で、広告運用の民主化を実現
          </p>
          <h5 className="mt-2 text-[38px] font-black tracking-tight md:text-[105px]">
            すべての事業者に
            <br />
            プロ級の広告運用を
          </h5>
          <p className="mt-10 text-[20px] leading-relaxed font-bold tracking-tight md:mt-16 md:text-[38px]">
            私たちAIS Japanは、
            <br />
            米国AIS Holdings Groupの日本法人として、
            <br />
            AIマーケティングソリューションを提供しています。
            <br />
            「予算が少ない」「運用ノウハウがない」「時間がない」
            <br />
            そんな課題を、最先端のAIテクノロジーで解決します。
          </p>
          <div className="fade-up mt-5 flex justify-end md:mt-7">
            <Button link="#">About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
