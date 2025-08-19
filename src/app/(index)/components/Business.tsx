import { Button } from '@/components/ui/Button';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export default function Business() {
  useInfiniteScroll();
  return (
    <section className="relative overflow-hidden pt-32 md:pt-99">
      <div className="mx-auto w-full max-w-[440px] px-5 sm:max-w-[1280px]">
        <div className="">
          <p className="fade-up text-[20px] font-bold md:text-[40px]">
            時間をかけずに、成果を最大化
          </p>
          <h3 className="fade-up relative text-[44px] leading-[1.2] font-black tracking-tight md:text-[90px] lg:text-[130px]">
            <p className="">忙しい経営者に</p>
            <p className="ml-[10%] xl:ml-[350px]">選ばれています</p>
          </h3>
          <div className="-mt-6 flex gap-6 max-md:flex-col md:-mt-16 lg:-mt-28 xl:gap-[140px]">
            <div className="fade-up max-lg:w-1/2 max-md:w-full">
              <img src="/assets/images/business.png" alt="" />
            </div>
            <div className="fade-up flex-1 md:mt-32 lg:mt-48">
              <p className="text-[20px] leading-relaxed font-bold tracking-tighter md:text-[38px]">
                「広告運用に時間を割けない」「でも成果は欲しい」そんな企業様に選ばれています。基本は完全自動、余裕があるときに成約報告をするだけで、AIがどんどん賢くなり、広告効果が向上し続けます。
              </p>
              <div className="mt-6 flex md:mt-8">
                <Button link="#">導入事例を見る</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
