"use client";

export default function Spot() {
  return (
    <section className="md:mt-[12rem] mt-[6rem]">
      <h2 className="bg-[#fe1d37] text-center p-[2vw] text-[#fff] text-[4vw] font-medium leading-[1.3] mb-[5vw] max-md:px-[0] max-md:py-8 max-md:text-[2.6rem] max-md:leading-[1.45] js-list">
        あなたの組織では
        <br className="md:hidden" />
        陰の功労者に
        <br />
        スポットライトを
        <br className="md:hidden" />
        当てられていますか？
      </h2>
      <div className="flex items-center gap-24 w-[calc(100% - 10rem)] max-md:flex-col max-md:gap-16 max-md:w-full max-w-[140rem] ml-auto mr-auto js-list">
        <div className="w-[42%] max-md:w-[calc(100%-6rem)] max-md:ml-auto max-md:mr-auto max-md:mt-12 js-list">
          <img
            src="/assets/img/spot_img-1.png"
            alt="あなたの組織では陰の功労者にスポットライトを当てられていますか？"
          />
        </div>
        <div className="flex-[1] js-list">
          <ul className="flex flex-col gap-12 [list-style:disc] pl-8 max-md:gap-8 max-md:pl-20 max-md:pr-8">
            {[
                <>新人の心の支えとなる<b>相談相手</b></>,
                <>他部署のピンチを救う<b>救世主</b></>,
                <>システムトラブルの陰の解決者</>,
                <>会議準備の<b>縁の下の力持ち</b></>,
                <>組織の雰囲気を支える<b>ムードメーカー</b></>,
                <>誰もやりたがらない仕事を引き受ける<b>優しい人</b></>,
                <>残業している同僚をさりげなく手伝う<b>気配り上手</b></>
            ].map((item, index) => (
                <li className="text-[2.4rem] tracking-[0.08em] max-md:text-[1.8rem] max-md:leading-normal" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
