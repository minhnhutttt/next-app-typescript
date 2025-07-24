"use client";

export default function Effect() {
  return (
    <section className="pt-48 px-[0] pb-[22rem] relative z-10 max-md:pt-32 max-md:px-12 max-md:pb-48 before:content-[''] before:absolute before:top-[0] before:left-[0] before:right-[0] before:bottom-[0] before:bg-[#f9c8c8] before:[clip-path:polygon(100%_0,_100%_95%,_50%_100%,_0_95%,_0_0)] after:content-[''] after:absolute after:top-[0] after:left-[0] after:right-[0] after:bottom-[35%] after:bg-[url(/assets/img/deco-light.png)] after:bg-no-repeat after:bg-center after:bg-contain max-md:after:bg-cover max-md:after:bottom-[65%]">
      <div className="relative z-10">
        <h2 className="flex items-center justify-center mb-24 js-list">
          <picture>
            <source media="(768px)" srcSet="/assets/img/effect_ttl.svg" />
            <img
              src="/assets/img/effect_ttl_sp.svg"
              alt="陰の貢献や善行の可視化で組織が変わります！"
            />
          </picture>
        </h2>
        <div className="max-w-[82rem] mt-10 ml-auto mr-auto bg-[#fff] rounded-[4rem] border-[solid] border-[0.24rem] border-[#fe1d37] p-20 max-md:py-[4rem] max-md:px-[2rem] js-list">
          <h3 className="text-center text-[3.6rem] font-medium tracking-[0.08em] mb-8 max-md:text-[2.2rem] max-md:leading-normal flex items-center justify-center">
            従来の評価<span className="text-[3.2rem] mx-[0.6rem] max-md:text-[1.8rem] max-md:leading-normal">vs</span><img className="md:w-[20rem] w-[14rem]"  src="/assets/img/logo-black.svg" alt="p2p bonus" />
          </h3>
          <table className="w-full max-w-[64.5rem] border border-solid border-[#666]">
            <thead>
              <tr>
                <th className="text-[2.2rem] text-center p-8 border-[solid] border-[1px] border-[#666] bg-[#eeeeee] max-md:p-4 max-md:leading-normal max-md:text-[1.5rem]">
                  従来の評価
                </th>
                <th className="text-[2.2rem] text-center p-8 border-[solid] border-[1px] border-[#666] bg-[#ff8f94] max-md:p-4 max-md:leading-normal max-md:text-[1.5rem]">
                  <img className="md:w-[16rem] w-[12rem]" src="/assets/img/logo.svg" alt="p2p bonus" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  traditional: "目立つ成果のみ",
                  p2pBonus: "陰の貢献も発見",
                },
                {
                  traditional: "結果重視",
                  p2pBonus: "プロセス・協力も評価",
                },
                {
                  traditional: "限られた人への光",
                  p2pBonus: "全員にスポットライトの可能性",
                },
                {
                  traditional: "年数回の評価",
                  p2pBonus: "日々のトークンで継続評価",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="border-[solid] border-[1px] border-[#666] "
                >
                  <td className="text-[2rem] font-normal px-12 py-8 border-[solid] border-[1px] border-[#666] max-md:p-4 max-md:leading-normal max-md:text-[1.6rem] max-md:align-middle">
                    {item.traditional}
                  </td>
                  <td className="text-[2rem] px-12 py-8 border-[solid] border-[1px] border-[#666] max-md:p-4 max-md:leading-normal max-md:text-[1.6rem] max-md:align-middle font-semibold bg-[#f9c8c8]">
                    {item.p2pBonus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-[82rem] mt-10 ml-auto mr-auto bg-[#fff] rounded-[4rem] border-[solid] border-[0.24rem] border-[#fe1d37] p-20 max-md:py-[4rem] max-md:px-[2rem] js-list">
          <h3 className="text-center text-[3.6rem] font-medium tracking-[0.08em] mb-8 max-md:text-[2.2rem] max-md:leading-normal">スポットライト効果</h3>
          <p className="text-center text-[2rem] font-medium tracking-[0.08em] max-md:text-[1.8rem] max-md:leading-[1.6]">
            陰の功労者にスポットライトが当たると、組織が変わる
          </p>
          <ul className="w-[fit-content] ml-auto mr-auto mt-12 space-y-[2.6rem]">
            {[
              <>陰の功労者が正当に評価される</>,
              <>感謝トークンが新しい動機になる</>,
              <>縁の下の貢献が文化として根づく</>,
              <>表舞台と裏方の両方が輝く組織に</>,
              <>隠れた価値の総量が向上</>,
            ].map((item, index) => (
              <li className="flex items-center gap-4" key={index}>
                <img
                  className="md:w-[5.6rem] w-[3.8rem]"
                  src="/assets/img/ico_light.svg"
                  alt="ico_light"
                />
                <p className="flex-[1] text-[3.2rem] leading-[1.2] tracking-[0.08em] max-md:text-[1.8rem]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
