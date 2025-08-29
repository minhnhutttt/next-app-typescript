export default function Fv() {
  return (
    <section className="relative z-10 flex min-h-[550px] justify-center bg-[url(/assets/images/fv-bg.png)] bg-cover pt-[150px] md:min-h-[840px] md:pt-[140px]">
      <div className="mx-auto flex w-full max-w-[1440px] gap-7 px-5 max-xl:flex-col max-xl:items-center xl:px-10">
        <div className="flex flex-1 flex-col items-center justify-center md:pt-15 md:pl-4">
          <div className="w-[340px] space-y-2.5 text-center md:w-[635px]">
            <h1 className="flex w-full items-center bg-white/80 text-[20px] leading-none font-black tracking-tight md:px-4 md:text-[38px]">
              <span className="text-[32px] md:text-[58px]">ポイント</span>を
              <span className="relative text-[32px] md:text-[58px]">
                <img
                  className="absolute left-1/2 -translate-x-1/2 max-md:w-[32px]"
                  src="/assets/images/dollar.png"
                  alt=""
                />
                <span className="relative z-10">ドル</span>
              </span>
              に変えるだけ
            </h1>
            <p className="w-full bg-white/80 text-[20px] leading-[1.45] font-black tracking-tight md:px-4 md:text-[36px]">
              それだけで生まれる、選ばれる理由
            </p>
          </div>
          <p className="pt-5 text-center text-[17px] font-medium text-white md:pt-8 md:text-[28px]">
            事業者の悩みから生まれたドル活システム
          </p>
          <p className="py-3 text-center text-[13px] font-medium text-white md:text-[16px]">
            ディーダブリュー ユー アクション
          </p>
          <div className="flex items-center justify-center">
            <img src="/assets/images/fv-logo.png" alt="" />
          </div>
          <div className="mt-5 flex items-center justify-center gap-3.5 max-md:flex-wrap md:mt-10">
            <div className="relative flex size-[150px] items-center justify-center rounded-full bg-[#0046B8] p-5 [filter:drop-shadow(6px_8px_0_rgba(5,_21,_48,_0.50))] max-md:px-3 md:size-[226px]">
              <div className="absolute inset-0 flex items-center justify-center mix-blend-soft-light">
                <img className="max-md:w-[100px]" src="/assets/images/fv-pick-01.png" alt="" />
              </div>
              <p className="text-center text-[15px] font-medium text-white md:text-[20px]">
                お客様の来店する
                <br />
                きっかけに！
              </p>
            </div>
            <div className="relative flex size-[150px] items-center justify-center rounded-full bg-[#0046B8] p-5 [filter:drop-shadow(6px_8px_0_rgba(5,_21,_48,_0.50))] max-md:px-3 md:size-[226px]">
              <div className="absolute inset-0 flex items-center justify-center mix-blend-soft-light">
                <img className="max-md:w-[100px]" src="/assets/images/fv-pick-02.png" alt="" />
              </div>
              <p className="text-center text-[15px] font-medium text-white md:text-[20px]">
                チップの仕組が
                <br />
                スタッフの定着率を上げる！
              </p>
            </div>
            <div className="relative flex size-[150px] items-center justify-center rounded-full bg-[#0046B8] p-5 [filter:drop-shadow(6px_8px_0_rgba(5,_21,_48,_0.50))] max-md:px-3 md:size-[226px]">
              <div className="absolute inset-0 flex items-center justify-center mix-blend-soft-light">
                <img className="max-md:w-[100px]" src="/assets/images/fv-pick-03.png" alt="" />
              </div>
              <p className="text-center text-[15px] font-medium text-white md:text-[20px]">
                ドル活戦略で
                <br />
                お店の業績が
                <br />
                改善する！
              </p>
            </div>
          </div>
        </div>
        <div className="max-xl:p-10 max-md:p-5">
          <img src="/assets/images/fv-img.png" alt="" />
        </div>
      </div>
    </section>
  );
}
