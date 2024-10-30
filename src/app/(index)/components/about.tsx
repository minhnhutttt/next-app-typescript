"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const About = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative overflow-hidden pt-[100px] md:pt-[154px] ">
      <div className="flex max-lg:flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        <figure className="fade-up max-lg:w-full max-xl:w-1/2 flex-1 ">
          <img className="w-full md:rounded-tr-[90px]" src="/assets/images/img-about.jpg" alt="" />
          </figure>
        <div className="lg:pl-[40px] max-md:px-4 lg:pt-0 md:pt-10 pt-5">
        <Title
              text_ja="福利厚生クエストとは？"
              text_en="What is Welfare Quest?"
              alignment="left"
            />
            <div className="fade-up text-black md:text-[22px] text-[16px] leading-loose max-w-[350px] min-[480px]:max-w-[440px] md:max-w-[600px] max-md:mt-4">
                福利厚生クエストは、<span className="relative gradient-background bg-no-repeat bg-[size:0_100%] bg-[linear-gradient(to_top,_#FAC103_30%,_transparent_30%)]">従業員が近くで利用できる福利厚生サービスを瞬時に見つけ</span>、簡単にアクセスできる地図プラットフォームです。社員のモチベーションと企業への愛着を高め、誇りと喜びに満ちた職場環境を実現します。
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
