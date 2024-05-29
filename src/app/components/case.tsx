"use client";

import { Splide, SplideSlide } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/case-01.jpg",
    title: "自動車部品の製造を行うY社",
    text: (
      <>
        Y社は人手不足を解消するために外国人技能実習生の受け入れを決定しましたが、過去に実習生の突然の帰国や不法残留などのトラブルを経験していたので、候補者の選定方法に課題を感じていました。
        <br />
        <br />
        その解決策としてResearch Shield+AI
        を導入いただいたところ、実習生候補者の学歴、職歴、言語能力、犯罪歴、健康状態などの調査結果をもとに適切な人材を選定できました。トラブルの発生リスクを大幅に減らせたことで、その後も安心して外国人材の受け入れを実施されています。
      </>
    ),
  },
  {
    image: "/assets/images/case-02.jpg",
    title: "建設工事を手がけるO社",
    text: (
      <>
        O社では建設現場の人手不足を補うため、外国人材の雇用を進めていました。しかし、言語や文化の違いから、安全管理や現場でのコミュニケーションに課題を抱えていました。
        <br />
        <br />
        Research Shield+AI
        を導入し、外国人材の言語能力、ビザ情報、健康状態、コンプライアンス意識などを事前に調査しました。その結果、現場での円滑なコミュニケーションが可能な人材を選定できるようになりました。
      </>
    ),
  },
  {
    image: "/assets/images/case-03.jpg",
    title: "ソフトウェア開発を専門とするK社",
    text: (
      <>
        K社はグローバル展開を加速するため、外国人エンジニアの採用を積極的に行っていました。応募者の技能レベルや経歴の真偽を確認することが課題となっていました。
        <br />
        <br />
        Research Shield+AI
        を導入し、応募者の学歴、職歴、言語能力、ビザ情報、犯罪歴、信用情報などを徹底調査しました。その結果、適切な人材の選定に成功。優秀な外国人エンジニアの採用を加速させることができました。
      </>
    ),
  },
];

const Case = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[200px] mt-[100px]">
      <div className="fade-up flex justify-center">
        <div className="flex justify-center items-center relative flex-col">
          <span className="md:absolute left-[-24.512vw] lg:left-[-256px] max-md:w-full md:top-[-60px] max-md:ml-[-20vw]">
            <img
              className="max-md:w-[40vw] max-lg:w-[24.512vw]"
              src="/assets/images/case-bubble.png"
              alt="導入の決め手は何？Research Shield+AIの特徴をご紹介"
            />
          </span>
          <h3 className="lg:text-[48px] md:text-[3vw] text-[clamp(20px,5.4vw,32px)] font-black tracking-[0.2em] px-5 max-md:pt-2">
            導入事例
          </h3>
        </div>
      </div>
      <div className="md:pl-20 pl-6 mt-10 md:mt-[72px]">
        <div className="fade-up">
          <Splide
            options={{
                autoplay: true,
              type: "loop",
              arrows: false,
              pagination: false,
              autoWidth: true,
            }}
          >
            {data.map((item, index) => (
              <SplideSlide key={index}>
                <div className="md:w-[560px] w-[320px] md:h-[803px] h-[630px] md:p-10 p-5 rounded-[10px] bg-white [box-shadow:4px_4px_14px_0px_rgba(175,_139,_153,_0.30)] mr-4 md:mr-10 mb-2">
                  <figure>
                    <img src={item.image} alt="" />
                  </figure>
                  <div className="md:mt-10 mt-7">
                    <h5 className="md:text-[22px] text-[16px] font-black tracking-widest">{item.title}</h5>
                    <p className="md:text-[18px] text-[14px] mt-3 leading-[1.6] tracking-widest">{item.text}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Case;
