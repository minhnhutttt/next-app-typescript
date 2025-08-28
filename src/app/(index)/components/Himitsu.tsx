export default function Himitsu() {
  return (
    <section className="relative px-5 pt-25 pb-15 md:pt-44 md:pb-[90px]">
      <div className="mx-auto w-full max-w-[400px] md:max-w-[1000px]">
        <h4 className="fade-up">
          <p className="text-center text-[40px] leading-snug font-extrabold text-[#01FFAA] [text-shadow:0_0_100px_#01FFAA] md:text-[80px]">
            DWUの価値と
            <br className="md:hidden" />
            換金のヒミツ
          </p>
        </h4>
        <div className="pt-12 max-md:space-y-4 md:mb-18 md:pt-20">
          <div className="fade-up flex items-end justify-center gap-3 md:gap-5">
            <span>
              <img className="max-md:w-[56px]" src="/assets/images/bubble-question.png" alt="" />
            </span>
            <div className="pb-5 max-md:flex-1 md:pr-20">
              <div className="relative rounded-2xl bg-[#01FFAA] px-5 py-3.5 text-[16px] leading-[1.2] font-semibold text-black after:absolute after:bottom-0 after:-left-2 after:aspect-[22/18] after:w-[22px] after:bg-[url(/assets/images/bubble-chat.png)] after:bg-cover md:text-[24px]">
                なんでドルと同じ価値なの？
              </div>
            </div>
          </div>
          <div className="fade-up flex items-end justify-center gap-3 md:gap-5">
            <div className="pb-5 max-md:flex-1 md:pl-20">
              <div className="relative rounded-2xl bg-[#01FFAA] px-5 py-3.5 text-[16px] leading-[1.2] font-semibold text-black after:absolute after:-right-2 after:bottom-0 after:aspect-[22/18] after:w-[22px] after:scale-x-[-1] after:bg-[url(/assets/images/bubble-chat.png)] after:bg-cover md:text-[24px]">
                世界中で認められてる価値だから、
                <br className="max-md:hidden" />
                安心して持っていられますよ！
              </div>
            </div>
            <span>
              <img className="max-md:w-[62px]" src="/assets/images/bubble-answer.png" alt="" />
            </span>
          </div>
        </div>
        <div className="fade-up mx-auto rounded-[20px] bg-white/10 p-5 md:w-[687px] md:p-10">
          <p className="text-center text-[18px] md:text-[24px]">実はカンタンな仕組みです！</p>
          <ul className="mt-3 list-disc pl-6 text-[14px] leading-loose md:mt-5 md:text-[18px]">
            <li>DWUはUSDTと「1対1」で交換できることが保証されてます</li>
            <li>USDTは本物のドルに裏付けられた安定したデジタル通貨</li>
            <li>だから、DWU = USDT = ドルっていう関係が成り立つんです</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
