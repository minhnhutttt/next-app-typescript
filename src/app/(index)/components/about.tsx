"use client";
import Title from "@/components/title";

const About = () => {
  return (
    <section className="relative overflow-hidden pt-[100px] md:pt-[154px] ">
      <div className="flex max-md:flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        <figure className="max-md:w-full max-xl:w-1/2">
          <img className="w-full md:rounded-tr-[90px]" src="/assets/images/img-about.jpg" alt="" />
          </figure>
        <div className="flex-1 md:pl-[40px] max-md:px-5 md:pt-0 pt-5">
        <Title
              text_ja="福利厚生クエストとは？"
              text_en="What is Welfare Quest?"
              alignment="left"
            />
            <div className="text-black md:text-[22px] text-[16px] leading-loose max-w-[600px] max-md:mt-4">
            福利厚生クエストは、従業員が近くで利用できる福利厚生サービスを瞬時に見つけ、簡単にアクセスできる地図プラットフォームです。社員のモチベーションと企業への愛着を高め、誇りと喜びに満ちた職場環境を実現します。
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
