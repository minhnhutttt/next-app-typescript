"use client";

const tags = ['日本初','会える','話せる','散歩できる','供養する','宮古島','現実の供養所','メタバースの供養所','ペットロス','2D','3D','供養の新たな選択肢','遺品預かり','散骨代行','僧侶読経','産官学連携']
const AnimatedTagRow = () => (
    <div className="animate-[infinity-loop_28s_infinite_linear_1s_both] flex relative group-hover:[animation-play-state:paused] [animation-direction:reverse]">
          {tags.map((tag, index) => (
            <div key={index} className="px-[15px]">
                <p className="px-[15px] py-2 bg-[linear-gradient(122deg,_rgba(142,_197,_252,_0.40)_10.27%,_rgba(224,_195,_252,_0.40)_100.14%)] rounded-[10px] whitespace-nowrap text-[18px] font-medium">
                {tag}
                </p>
            </div>
          ))}
    </div>
);
const AnimatedImageRow = () => (
    <div className="animate-[infinity-loop_28s_infinite_linear_1s_both] flex relative group-hover:[animation-play-state:paused]">
          {[...Array(10)].map((_, index) => (
            <div key={index}  className="w-[160px] px-2.5">
                <img
                  src={`/assets/images/mv-pet-${index + 1}.png`}
                  alt=""
                />
            </div>
          ))}
    </div>
);
const FV = () => {
  return (
    <section>
      <div className="bg-[url('/assets/images/fv.png')] bg-cover dt:h-[940px] pt-[90px] pb-7">
        <div className="w-full max-w-[1420px] mx-auto relative h-full">
          <figure>
            <img className="w-[75.625vw] dt:w-[1089px]" src="/assets/images/fv-pet.png" alt="" />
          </figure>
          <div className="absolute font-bold inset-0 flex justify-end items-end">
            <div className="w-[53%] pb-10 leading-[1.4]">
              <p className="md:text-[5.347vw] dt:text-[77px]">
                <span className="md:text-[7.431vw] dt:text-[107px] text-white leading-none pb-2 px-2 font-bold inline-block rounded-[20px] bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)]">
                  今
                </span>
                も愛する
              </p>
              <p className="md:text-[5.347vw] dt:text-[77px]">
                ペットとの
                <span className="md:text-[7.431vw] dt:text-[107px] text-white leading-none pb-2 px-2 font-bold inline-block rounded-[20px] bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)]">
                  絆
                </span>
              </p>
              <p className="md:text-[5.347vw] dt:text-[77px]">デジタルの力で</p>
              <p className="md:text-[5.347vw] dt:text-[77px]">
                <span className="md:text-[7.431vw] dt:text-[107px] text-white leading-none pb-2 px-2 font-bold inline-block rounded-[20px] bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)]">
                  復活
                </span>
                しませんか？
              </p>
            </div>
          </div>

          <div className="scrolldown-btn w-[23px] h-[50px] absolute z-10 left-1/2 -translate-x-1/2 bottom-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="50"
              viewBox="0 0 23 50"
              fill="none"
            >
              <g opacity="0.9">
                <path
                  className="animate-[scrollanim_2s_ease-in-out_infinite] [animation-delay:1.6s]"
                  opacity="0.6"
                  d="M22.2986 15.6094V22.2989L10.9015 34.0676L10.406 33.5721L0 22.7945V16.1049L10.6538 27.2542L22.2986 15.6094Z"
                  fill="url(#paint0_linear_1_1067)"
                />
              </g>
              <g opacity="0.8">
                <path
                  className="animate-[scrollanim2_2s_ease-in-out_infinite]  [animation-delay:0.8s]"
                  opacity="0.2"
                  d="M22.2986 0V6.68957L10.9015 18.4582L10.406 17.9627L0 7.06121V0.371643L10.6538 11.5209L22.2986 0Z"
                  fill="url(#paint1_linear_1_1067)"
                />
              </g>
              <path
                className="animate-[scrollanim_2s_ease-in-out_infinite]"
                d="M22.2986 31.3418V38.0314L10.9015 49.8L10.406 49.3045L0 38.403V31.7134L10.6538 42.8627L22.2986 31.3418Z"
                fill="url(#paint2_linear_1_1067)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1067"
                  x1="-2.515e-08"
                  y1="20.5789"
                  x2="20.8294"
                  y2="36.1067"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8EC5FC" />
                  <stop offset="1" stopColor="#E0C3FC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_1067"
                  x1="-2.515e-08"
                  y1="4.96953"
                  x2="20.8294"
                  y2="20.4974"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8EC5FC" />
                  <stop offset="1" stopColor="#E0C3FC" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_1067"
                  x1="-2.515e-08"
                  y1="36.3113"
                  x2="20.8294"
                  y2="51.8392"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8EC5FC" />
                  <stop offset="1" stopColor="#E0C3FC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden mt-4">
      <div className="flex w-auto group">
        <AnimatedImageRow />
        <AnimatedImageRow />
        <AnimatedImageRow />
      </div>
      <div className="flex w-auto group bg-[url('/assets/images/bg-text-meta.png')] bg-[length:100%_auto] bg-[center_top_10px] h-[125px] pt-8 bg-no-repeat mt-3">
         <AnimatedTagRow />
         <AnimatedTagRow />
         <AnimatedTagRow />
      </div>
      </div>
    </section>
  );
};

export default FV;
