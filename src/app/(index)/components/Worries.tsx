"use client";

export default function Worries() {
  return (
    <section className="md:mt-[12vw] mt-[12rem]">
      <div className="flex md:gap-[5%] relative z-10 max-md:flex-col before:content-[''] before:bg-[#ffffff] before:absolute before:right-[0] before:left-[15%] before:-top-[12%] before:bottom-[15%] before:rounded-tl-[5vw] before:rounded-br-[0] before:rounded-tr-[0] before:rounded-bl-[0] max-md:before:-top-24 max-md:before:bottom-[55%] max-md:before:rounded-tl-[4rem] max-md:before:rounded-br-[0] max-md:before:rounded-tr-[0] max-md:before:rounded-bl-[0]">
        <div className="flex-[1] max-md:mr-[10%] js-list">
          <img className="w-full rounded-tl-[0] rounded-br-[6rem] rounded-tr-[6rem] rounded-bl-[0]" src="/assets/img/about_img-2.png" alt="about" />
        </div>
        <div className="pr-[4%] w-1/2 max-md:w-full max-md:px-8 max-md:py-16 js-list">
          <h2 className="text-[3vw] flex items-center gap-[0.8vw] mb-[2vw] max-md:text-[2.6rem] max-md:mb-10 max-md:gap-4 before:content-[''] before:w-[2vw] before:h-[2vw] before:bg-[#fe1d37] before:rounded-[0.6rem] max-md:before:w-[1.6rem] max-md:before:h-[1.6rem]">経営者からは見えない苦悩</h2>
          <p className="text-[1.34vw] leading-loose max-md:text-[1.7rem] md:mb-[2vw] mb-[2.5rem]">
            売上を上げる人、プロジェクトを成功させる人は分かる。
            <br />
            その成果の裏に縁の下で支えてくれている人がいるのもわかっている。でも、その陰の功労者が誰なのかがわからない。
            <br />
            そして最悪なことに、退職のタイミングではじめて、その人が組織にとって重要な存在だったことがわかる...
          </p>
          <p className="text-[1.34vw] leading-loose max-md:text-[1.7rem] md:mb-[2vw] mb-[2.5rem]">
            新人の心の支えとなってくれていた先輩社員、困ったときに真っ先に駆けつけてくれるヒーロー、みんなが嫌がる仕事も笑顔で引き受けてくれるみんなの助っ人、いつも周りを気遣って場を和ませてくれるムードメーカー。
          </p>
          <p className="text-[1.34vw] leading-loose max-md:text-[1.7rem]">
            彼ら、彼女らはいつも組織運営を円滑にしてくれている。
            <br />
            そういう陰の功労者たちにもスポットライトを当てたい
          </p>
        </div>
      </div>
    </section>
  );
}
