import { Button } from '@/components/ui/Button';

export default function Introduction() {
  return (
    <section className="relative px-5 pt-40 md:pt-55">
      <div className="mx-auto flex w-full max-w-[1250px] justify-end">
        <div className="w-full max-w-[925px]">
          <p className="fade-up text-[24px] leading-[1.6] font-bold md:text-[38px]">
            AIS Japanの「SEIKAI」は、広告運用を <br className="max-md:hidden" />
            完全自動化するAI広告プラットフォームです。
            <br />
            専門知識不要、24時間365日自動最適化。
            <br className="max-md:hidden" />
            実際の成約を報告することで、AIの学習が加速。
            <br />
            驚異的な改善サイクルが動き出します。
            <br />
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-x-10 gap-y-5 md:mt-12 md:gap-18">
            <Button link="#">SEIKAIを詳しく見る</Button>
            <Button link="#">無料相談</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
