"use client";

export default function Cta() {
  return (
    <section className="bg-[#f9c8c8] px-12 py-40 mt-40 max-md:mt-16 max-md:px-12 max-md:py-32">
      <div className="bg-[#fff] relative px-32 py-16 rounded-[3rem] flex items-center max-w-[140rem] ml-auto mr-auto js-list max-md:flex-col-reverse max-md:gap-8 max-md:pt-24 max-md:px-12 max-md:pb-16">
        <img
          className="absolute top-[0] left-[0] md:w-[13.4rem] w-28"
          src="/assets/img/ico_light-2.svg"
          alt="icon"
        />
        <div className="flex-[1] js-list">
          <h3 className="text-[3.2rem] font-medium leading-[1.65] mb-16 max-md:text-[1.8rem] max-md:text-center max-md:mb-8 max-md:hidden">
            あなたの組織の陰の功労者に、
            <br />
            スポットライトを当てませんか？
          </h3>
          <a href="mailto:info@p-2-p-bonus.com" className="block bg-[#f63c4c] text-[#fff] w-[fit-content] text-[3.2rem] font-medium tracking-widest mt-12 px-40 py-14 rounded-[10rem] relative [box-shadow:0_0.6rem_0.3rem_rgba(0,_0,_0,_0.3)] max-md:text-[2rem] max-md:px-8 max-md:py-[1.8rem] max-md:mt-10 max-md:w-full max-md:text-center">
            まずは無料相談
            <img className="absolute right-16 top-2/4 -translate-y-1/2 max-md:right-[2rem]" src="/assets/img/arw-1.svg" alt="arrow" />
          </a>
        </div>
        <div className="md:w-[52rem] w-full js-list">
          <img
            src="/assets/img/cta_img-1.svg"
            alt="その人たちに感謝トークンを。その人たちにスポットライトを。"
          />
        </div>
        <h3 className="text-[3.2rem] font-medium leading-[1.65] mb-16 max-md:text-[1.8rem] max-md:text-center max-md:mb-8 md:hidden">
            あなたの組織の陰の功労者に、
            <br />
            スポットライトを当てませんか？
          </h3>
      </div>
    </section>
  );
}
