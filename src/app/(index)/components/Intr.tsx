"use client";

export default function Intr() {
  return (
    <section className="md:pt-32 md:pb-48 pt-24 pb-32">
      <div className="md:w-[calc(100%-10rem)] w-[calc(100%-6rem)] max-w-[140rem] ml-auto mr-auto">
        <h3 className="w-[fit-content] ml-auto mr-auto text-[#fe1d37] md:text-[3.6rem] font-semibold tracking-widest bg-[#ffec3e] rounded-[4rem] px-12 py-6 mb-20 text-[2rem] js-list">p2p bonusを導入すると</h3>
        <div className="text-center mb-24 js-list flex justify-center items-center">
          <img className="md:max-w-[50%] max-w-[25%]" src="/assets/img/arw-3.svg" alt="arrow" />
        </div>
        <div className="flex flex-col items-center js-list">
          <p className="text-[2rem] mb-8 md:text-[1.6rem] md:leading-[1.65]">
            社員から社員へ、
            <br className="md:hidden" />
            言葉よりも気軽なトークンを送り合うから
          </p>
          <h4 className="w-[fit-content] px-12 py-4 text-[3.2rem] border-[solid] border-[1px] border-[#333333] max-md:p-4 max-md:text-[2.4rem] max-md:leading-[1.4] max-md:w-full">
            組織の屋台骨となっている
            <br className="md:hidden" />
            社員を発見！
          </h4>
        </div>
        <div className="mt-24 ml-auto mr-auto max-w-[82rem] js-list md:space-y-[6rem] space-y-[3rem]">
          <div className="[box-shadow:0_1rem_3rem_rgba(0,_0,_0,_0.15)] rounded-[4rem] flex items-center justify-center p-16 max-md:flex-col max-md:px-8 max-md:py-16 max-md:rounded-[3rem] js-list">
            <div className="flex-[1]">
              <p className="w-[fit-content] ml-auto mr-auto text-[2.4rem] font-semibold border-b-[solid_2px_#fe1d37] pb-[0.3rem] mb-8 max-md:text-[2.2rem]">経理の田中さんへ</p>
              <p className="text-[2rem] leading-[1.6] text-center max-md:text-[1.7rem]">
                新人研修の細やかな
                <br />
                サポートに感謝
                <img className="align-baseline w-auto inline" src="/assets/img/ico_folded.svg" alt="icon" />
              </p>
            </div>
            <div className="w-[22rem] text-center max-md:w-full max-md:mt-16 max-md:mb-16 max-md:flex max-md:items-center max-md:flex-col">
              <p className="text-[1.6rem] mb-8">良いはたらきでした！</p>
              <img src="/assets/img/token.svg" alt="token" />
            </div>
            <div className="w-72 text-center ml-16 max-md:w-full max-md:ml-0 max-md:flex max-md:items-center max-md:justify-center">
              <img src="/assets/img/token_img-1.svg" alt="img" />
            </div>
          </div>

          <div className="[box-shadow:0_1rem_3rem_rgba(0,_0,_0,_0.15)] rounded-[4rem] flex items-center justify-center p-16 max-md:flex-col max-md:px-8 max-md:py-16 max-md:rounded-[3rem] js-list">
            <div className="flex-[1]">
              <p className="w-[fit-content] ml-auto mr-auto text-[2.4rem] font-semibold border-b-[solid_2px_#fe1d37] pb-[0.3rem] mb-8 max-md:text-[2.2rem]">総務の佐藤さんへ</p>
              <p className="text-[2rem] leading-[1.6] text-center max-md:text-[1.7rem]">
                いつも会議室を綺麗に
                <br />
                整備する配慮に感謝
                <img className="align-baseline w-auto inline" src="/assets/img/ico_folded.svg" alt="icon" />
              </p>
            </div>
            <div className="w-[22rem] text-center max-md:w-full max-md:mt-16 max-md:mb-16 max-md:flex max-md:items-center max-md:flex-col">
              <p className="text-[1.6rem] mb-8">いつもありがとう！</p>
              <img src="/assets/img/token.svg" alt="token" />
            </div>
            <div className="w-72 text-center ml-16 max-md:w-full max-md:ml-0 max-md:flex max-md:items-center max-md:justify-center">
              <img src="/assets/img/token_img-2.svg" alt="img" />
            </div>
          </div>

          <div className="[box-shadow:0_1rem_3rem_rgba(0,_0,_0,_0.15)] rounded-[4rem] flex items-center justify-center p-16 max-md:flex-col max-md:px-8 max-md:py-16 max-md:rounded-[3rem] js-list">
            <div className="flex-[1]">
              <p className="w-[fit-content] ml-auto mr-auto text-[2.4rem] font-semibold border-b-[solid_2px_#fe1d37] pb-[0.3rem] mb-8 max-md:text-[2.2rem]">営業の山田さんへ</p>
              <p className="text-[2rem] leading-[1.6] text-center max-md:text-[1.7rem]">
                提案資料作成の
                <br />
                陰の協力に感謝
                <img className="align-baseline w-auto inline" src="/assets/img/ico_folded.svg" alt="icon" />
              </p>
            </div>
            <div className="w-[22rem] text-center max-md:w-full max-md:mt-16 max-md:mb-16 max-md:flex max-md:items-center max-md:flex-col">
              <p className="text-[1.6rem] mb-8">助かりました！</p>
              <img src="/assets/img/token.svg" alt="token" />
            </div>
            <div className="w-72 text-center ml-16 max-md:w-full max-md:ml-0 max-md:flex max-md:items-center max-md:justify-center">
              <img src="/assets/img/token_img-3.svg" alt="img" />
            </div>
          </div>
        </div>
        <div className="flex gap-24 max-w-[128rem] mt-24 max-md:flex-col max-md:gap-16 js-list">
          <div className="w-[calc((100%-6rem)/2)] bg-[#fff] rounded-[6rem] p-16 [box-shadow:0_1rem_3rem_rgba(0,_0,_0,_0.15)] max-md:w-full max-md:rounded-[3rem] max-md:px-12 max-md:py-16 js-list">
            <h4 className="w-[fit-content] ml-auto mr-auto text-[2.4rem] font-semibold border-b-[solid_2px_#fe1d37] pb-[0.3rem] mb-12 max-md:text-[2rem] max-md:pb-[0.6rem]">今月のスポットライト</h4>
            <div className="text-center">
              <img src="/assets/img/graph_img-1.svg" alt="グラフ" />
            </div>
          </div>
          <div className="w-[calc((100%-6rem)/2)] bg-[#fff] rounded-[6rem] p-16 [box-shadow:0_1rem_3rem_rgba(0,_0,_0,_0.15)] max-md:w-full max-md:rounded-[3rem] max-md:px-12 max-md:py-16 js-list">
            <h4 className="w-[fit-content] ml-auto mr-auto text-[2.4rem] font-semibold border-b-[solid_2px_#fe1d37] pb-[0.3rem] mb-12 max-md:text-[2rem] max-md:pb-[0.6rem]">スポットライトで判明した事実</h4>
            <ul className="max-w-[42rem] mx-auto space-y-[2rem]">
                 {[
              <>新人定着は田中さんの細やかなサポートのおかげ</>,
              <>円滑な会議進行は佐藤さんの陰の整備のおかげ</>,
              <>商談成功は山田さんの陰の資料作成協力のおかげ</>,
            ].map((item, index) => (
              <li
                className="flex gap-[1.8rem] items-center"
                key={index}
              >
                <img className="md:w-[6rem] w-[3.4rem]" src="/assets/img/ico_good.svg" alt="good" />
                <p className="flex-[1] text-[2.4rem] leading-normal tracking-widest max-md:text-[1.7rem]">{item}</p>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
