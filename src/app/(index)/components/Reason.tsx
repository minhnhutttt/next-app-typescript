"use client";

export default function Reason() {
  return (
    <section className="md:mt-[12vw] mt-[12rem]">
      <div className="flex flex-row-reverse gap-[5%] relative z-10 max-md:flex-col max-md:gap-16 js-list before:content-[''] before:bg-[#ffffff] before:absolute before:left-[0] before:right-[15%] before:-top-[12%] before:bottom-[35%] before:rounded-tl-[0] before:rounded-br-[0] before:rounded-tr-[5vw] before:rounded-bl-[0] max-md:before:-top-24 max-md:before:bottom-[65%] max-md:before:rounded-tl-[0] max-md:before:rounded-br-[0] max-md:before:rounded-tr-[4rem] max-md:before:rounded-bl-[0]">
        <div className="flex-[1] max-md:ml-[10%] js-list">
          <img
            className="w-full rounded-tl-[6rem] rounded-br-[0] rounded-tr-[0] rounded-bl-[6rem]"
            src="/assets/img/reason_img-1.png"
            alt="reason"
          />
        </div>
        <div className="md:pl-[6%] md:w-1/2 w-full pl-12 z-10 js-list">
          <h2 className="text-[2.8vw] flex items-center gap-[0.8vw] mb-[3vw] max-md:text-[2.2rem] max-md:mb-12 max-md:gap-4 md:leading-[1.4] leading-[1.6]">
            p2p bonusが陰の功労者に
            <br />
            スポットライトを当てられる理由
          </h2>
          <ul className="md:space-y-[1.4vw] space-y-[1rem]">
            {[
              <>感謝トークンを陰の功労者に贈る</>,
              <>縁の下の貢献がスポットライトで照らされる</>,
              <>隠れた価値が数値で見える化される</>,
              <>組織全体に感謝・助け合い文化が根づく</>,
            ].map((item, index) => (
              <li
                className="text-[1.488vw] font-medium leading-loose flex gap-[0.6vw] max-md:text-[1.6rem] max-md:gap-4"
                key={index}
              >
                <img
                  className="md:w-[2.8vw] w-[2.2rem]"
                  src="/assets/img/ico_fing.svg"
                  alt="1"
                />
                <p className="flex-[1]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
