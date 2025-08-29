const ExperienceItem = ({ avatar, children }: { avatar: string; children: React.ReactNode }) => (
  <div className="relative">
    <div className="-mb-20 md:-mb-28">
      <img className="max-md:w-40" src={avatar} alt="" />
    </div>
    <div className="ml-7.5">
      <div className="flex size-[300px] items-center justify-center rounded-full bg-[#6DB8F7]/[0.3] [box-shadow:6px_10px_0_0_rgba(0,_70,_184,_0.70)] md:size-[360px]">
        <p className="w-full max-w-[240px] pt-5 text-[16px] font-medium md:max-w-[280px] md:text-[20px]">
          {children}
        </p>
      </div>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section className="relative px-5 pt-20 pb-20 md:pt-28 md:pb-[120px]">
      <div className="mx-auto w-full max-w-[1250px]">
        <h3 className="text-center text-[32px] leading-[1.4] font-bold text-[#0046B8] md:text-[48px]">
          こんな光景、あなたの店でも
          <br className="max-md:hidden" />
          見てみませんか？
        </h3>
        <div className="mt-12 flex justify-center md:mt-23">
          <p className="border-b-[3px] border-[#0046B8] px-4 py-1 text-[20px] font-bold tracking-widest md:text-[24px]">
            お客様の体験
          </p>
        </div>
        <div className="mt-6 md:mt-10">
          <div className="flex flex-wrap justify-center gap-7.5">
            <ExperienceItem avatar="/assets/images/user-01.png">
              いつものカフェで、お気に入りのバリスタさんにありがとうの気持ちを込めてドルを送る
            </ExperienceItem>
            <ExperienceItem avatar="/assets/images/user-02.png">
              接客が素晴らしかった店員さんに『頑張ってますね』の応援ドルを贈る
            </ExperienceItem>
            <ExperienceItem avatar="/assets/images/user-03.png">
              推し活感覚で、好きな店のスタッフを応援できる楽しさ
            </ExperienceItem>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-20">
          <p className="border-b-[3px] border-[#0046B8] px-4 py-1 text-[20px] font-bold tracking-widest md:text-[24px]">
            スタッフの体験
          </p>
        </div>
        <div className="mt-6 md:mt-10">
          <div className="flex flex-wrap justify-center gap-7.5">
            <ExperienceItem avatar="/assets/images/user-04.png">
              お客様から直接『ありがとう』のドルをもらえる喜び
            </ExperienceItem>
            <ExperienceItem avatar="/assets/images/user-05.png">
              頑張った分だけ収入に反映される実感
            </ExperienceItem>
            <ExperienceItem avatar="/assets/images/user-06.png">
              他の店では体験できない、特別な働きがいを感じる職場
            </ExperienceItem>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:mt-20">
          <p className="border-b-[3px] border-[#0046B8] px-4 py-1 text-[20px] font-bold tracking-widest md:text-[24px]">
            事業者(お店)の体験
          </p>
        </div>
        <div className="mt-6 md:mt-10">
          <div className="flex flex-wrap justify-center gap-7.5">
            <ExperienceItem avatar="/assets/images/user-07.png">
              スタッフのモチベーションが目に見えて向上
            </ExperienceItem>
            <ExperienceItem avatar="/assets/images/user-08.png">
              お客様とスタッフの会話や顧客単価が自然に増える店内の良い雰囲
            </ExperienceItem>
            <ExperienceItem avatar="/assets/images/user-09.png">
              『あの店で働きたい』と言われる採用での優位性
            </ExperienceItem>
          </div>
        </div>
      </div>
    </section>
  );
}
