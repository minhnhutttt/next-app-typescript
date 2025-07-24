"use client";

export default function Exe() {
  return (
    <section className="md:mt-[6vw] mt-[6rem]">
      <h2 className="text-[4.8rem] font-medium leading-[1.4] tracking-widest text-center mb-40 max-md:text-[2.3rem] max-md:mb-16 js-list">
        <img className="md:w-[24rem] mb-3 w-[12rem] inline-block" src="/assets/img/logo-black.svg" alt="p2p bonus" />で陰の功労者に
        <br />
        スポットライトを当てた結果
      </h2>
      <div className="flex gap-[5%] max-md:flex-col max-md:gap-20 js-list">
        <div className="flex-[1] max-md:pr-[10%] js-list">
          <img className="w-full rounded-tl-[0] rounded-br-[6rem] rounded-tr-[6rem] rounded-bl-[0]" src="/assets/img/exe_img-1.png" alt="about" />
        </div>
        <div className="pr-[5%] w-1/2 relative z-10 max-md:w-full max-md:pl-12 max-md:pr-[3re] js-list before:absolute before:bottom-[0] before:right-[12%] before:content-[''] before:w-[42%] before:[aspect-ratio:260/374] before:bg-[url(/assets/img/ico_ilst-2.svg)] before:bg-no-repeat before:bg-center before:bg-contain max-md:before:w-[38%] max-md:before:-bottom-16">
          <h2 className="text-[3.4vw] font-medium tracking-widest mb-[2vw] max-md:text-[2.4rem] max-md:mb-12 max-md:gap-4">経営者の発見</h2>
          <p className="text-[1.64vw] leading-loose tracking-widest max-md:text-[1.7rem]">
            「一番トークンを集めていたのは、普段はあまり目立たないけど陰で新人を支えていた島田さんでした」
          </p>
          <p className="text-[1.64vw] leading-loose tracking-widest max-md:text-[1.7rem] max-w-[50%] mt-[1.6vw] max-md:max-w-full max-md:mt-8">
            「売上には直結しないけど組織に欠かせない陰の功労者を発見できました」
          </p>
          <p className="text-[1.64vw] leading-loose tracking-widest max-md:text-[1.7rem] max-w-[50%] mt-[1.6vw] max-md:max-w-[50%] max-md:mt-8">
            「縁の下の力持ちにスポットライトが当たることで明らかに組織の雰囲気が変わりました」
          </p>
        </div>
      </div>
    </section>
  );
}
