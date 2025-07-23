"use client";

export default function About() {
  return (
    <section className="md:mt-[12vw] mt-48">
      <div className="flex gap-[5%] relative z-10 max-md:flex-col max-md:gap-0 before:content-[''] before:bg-[#ffffff] before:absolute before:right-[0] before:left-[15%] before:-top-[12%] before:bottom-[35%] before:rounded-tl-[5vw] before:rounded-br-[0] before:rounded-tr-[0] before:rounded-bl-[0] max-md:before:-top-24 max-md:before:rounded-tl-[4rem] max-md:before:rounded-br-[0] max-md:before:rounded-tr-[0] max-md:before:rounded-bl-[0]">
        <div className="flex-[1] max-md:mr-[10%] js-list">
          <img className="w-full rounded-tl-[0] rounded-br-[6rem] rounded-tr-[6rem] rounded-bl-[0]" src="/assets/img/about_img-1.png" alt="about" />
        </div>
        <div className="pr-[5%] w-1/2 max-md:w-full max-md:px-8 max-md:py-16 js-list">
          <h2 className="text-[3.4vw] flex items-center gap-[0.8vw] mb-[2vw] max-md:text-[3rem] max-md:mb-10 max-md:gap-4 before:content-[''] before:w-[2vw] before:h-[2vw] before:bg-[#fe1d37] before:rounded-[0.6rem] max-md:before:w-[1.6rem] max-md:before:h-[1.6rem]">p2p bonusとは？</h2>
          <p className="md:text-[1.388vw] leading-loose text-[1.7rem] mb-[2vw] md:mb-10 last:mb-0">
            陰で支えている人たちに「感謝トークン」を贈り、
            <br className="pc" />
            縁の下の貢献に「スポットライト」を当てるシステムです。
          </p>
          <p className="md:text-[1.388vw] leading-loose text-[1.7rem] mb-[2vw] md:mb-10 last:mb-0">
            p2p
            bonusという、従業員同士がお互いに仕事の成果や貢献に対して賞賛したり認めたりするだけでなく、それと共に少額の報酬を送り合う仕組みをベースに開発されました。
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-20 mt-32 max-md:flex-col max-md:mt-16 max-md:gap-16 max-w-[120rem] ml-auto mr-auto js-list">
        <div className="text-[#333333] js-list">
          <h3 className="text-[3.6rem] tracking-widest mb-14 max-md:text-[2.6rem] max-md:mb-[2.8rem]">従来の評価</h3>
          <ul className="flex flex-col gap-8 font-medium">
            <li className="text-[2.4rem] font-medium">● 表舞台の成果のみ...</li>
            <li className="text-[2.4rem] font-medium">● 年1-2回の評価...</li>
            <li className="text-[2.4rem] font-medium">● 限られた人が目立つ...</li>
          </ul>
        </div>
        <div className="max-md:mt-12 max-md:mr-[0] max-md:-mb-[10rem] max-md:-ml-[18rem] js-list">
          <img className="max-md:rotate-90" src="/assets/img/arw-2.svg" alt="arrow" />
        </div>
        <div className="bg-[#fff] rounded-[4rem] p-16 relative z-10 max-md:mt-48 max-md:px-12 max-md:py-16 js-list before:content-[''] before:absolute before:bottom-full before:right-12 before:w-[30rem] before:h-[17.2rem] before:[aspect-ratio:300/172] before:bg-[url(/assets/img/ico_ilst-1.svg)] before:bg-center before:bg-cover max-md:before:w-64 max-md:before:h-auto">
          <h3 className="md:mb-14 text-center mb-10">
            <img className="md:max-w-[25rem] max-w-[18rem]" src="/assets/img/logo_bk.svg" alt="p2p bonus" />
          </h3>
          <ul className="flex flex-col gap-8 font-medium">
            <li className="text-[2.4rem] font-medium flex items-center gap-[0.7rem] max-md:text-[1.8rem]">
              <img className="max-md:w-[1.8rem]" src="/assets/img/ico_check.svg" alt="check" />
              縁の下の貢献も発見
            </li>
            <li className="text-[2.4rem] font-medium flex items-center gap-[0.7rem] max-md:text-[1.8rem]">
              <img className="max-md:w-[1.8rem]" src="/assets/img/ico_check.svg" alt="check" />
              日々のトークン送信で継続評価
            </li>
            <li className="text-[2.4rem] font-medium flex items-center gap-[0.7rem] max-md:text-[1.8rem]">
              <img className="max-md:w-[1.8rem]" src="/assets/img/ico_check.svg" alt="check" />
              陰の功労者にもスポットライト
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
