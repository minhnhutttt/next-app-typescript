"use client";
import gsap from "gsap";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode, useEffect, useRef } from "react";
import Button from "@/components/button";

const Bubble = ({rect, children}: {rect: string, children: ReactNode}) => (
  <div className={`absolute bg-white border border-[#9B9B9B] scale-0 rounded-[26px] p-3 md:p-7 md:text-[17px] text-[14px] font-medium z-10 ${rect}`}>{children}</div>
)

const FV = () => {
  const ref = useScrollAnimations();
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=> {
    let ctx = gsap.context(() => {
      if (containerRef.current) {
        let duration = 1;
        let delay = 3;
        const f1_img = containerRef.current.querySelector(".f1-img");
        const f2_img = containerRef.current.querySelector(".f2-img");
        const f3_img = containerRef.current.querySelector(".f3-img");
        const f4_img = containerRef.current.querySelector(".f4-img");
        const f5_img = containerRef.current.querySelector(".f5-img");

        const f1_bubble = containerRef.current.querySelector(".f1-bubble");
        const f2_bubble = containerRef.current.querySelector(".f2-bubble");
        const f3_bubble = containerRef.current.querySelector(".f3-bubble");
        const f4_bubble = containerRef.current.querySelector(".f4-bubble");
        const f5_bubble = containerRef.current.querySelector(".f5-bubble");
        const f6_bubble = containerRef.current.querySelector(".f6-bubble");
        const tl = gsap.timeline({repeat: -1, ease: 'ease-in-out'});
        gsap.set([f2_img, f3_img, f4_img, f5_img], { opacity: 0 });
        gsap.set([f1_bubble, f2_bubble, f3_bubble, f4_bubble, f5_bubble, f6_bubble], { scale: 0 });

        tl.to(f1_bubble, {
          scale: 1,
          duration: 0.4
        }).to(f1_img, {
          rotateY: 180,
          opacity: 0,
          duration: duration,
          delay: delay
        },"<").to(f1_bubble, {
          scale: 0,
          duration: 0.4
        },"<").to(f2_img, {
          rotateY: 180,
          opacity: 1,
          duration: duration
        },"<").to(f2_bubble, {
          scale: 1,
          duration: 0.4
        },"-=0.5").to(f2_img, {
          rotateY: 360,
          opacity: 0,
          duration: duration,
          delay: delay
        }).to(f2_bubble, {
          scale: 0,
          duration: 0.4
        },"<").to(f3_img, {
          rotateY: 180,
          opacity: 1,
          duration: duration
        },"<").to(f3_bubble, {
          scale: 1,
          duration: 0.4
        },"-=0.5").to(f3_img, {
          rotateY: 360,
          opacity: 0,
          duration: duration,
          delay: delay
        }).to(f3_bubble, {
          scale: 0,
          duration: 0.4
        },"<").to(f4_img, {
          rotateY: 180,
          opacity: 1,
          duration: duration
        },"<").to(f4_bubble, {
          scale: 1,
          duration: 0.4
        },"-=0.5").to(f4_img, {
          rotateY: 360,
          opacity: 0,
          duration: duration,
          delay: delay
        }).to(f4_bubble, {
          scale: 0,
          duration: 0.4
        },"<").to(f5_img, {
          rotateY: 180,
          opacity: 1,
          duration: duration
        },"<").to(f5_bubble, {
          scale: 1,
          duration: 0.4
        },"-=0.5").to(f6_bubble, {
          scale: 1,
          duration: 0.4
        },"-=0.5").to(f5_img, {
          rotateY: 360,
          opacity: 0,
          duration: duration,
          delay: delay
        }).to(f5_bubble, {
          scale: 0,
          duration: 0.4
        },"<").to(f6_bubble, {
          scale: 0,
          duration: 0.4
        },"<").to(f1_img, {
          rotateY: 0,
          opacity: 1,
          duration: duration,
        },"<")
      }
    });

    return () => ctx.revert();
  })
  return (
    <section
      ref={ref}
      className="relative pr-5"
    >
      <div className="bg-[url('/assets/images/bg-01.png')] pb-[25px] bg-[length:100%_100%] rounded-r-[45px]">
      <div className="flex items-start absolute left-7 top-3">
          <a href="/" className="block relative duration-150 hover:opacity-75">
            <img
              className="max-md:w-[120px]"
              src="/assets/images/logo.svg"
              alt=""
            />
          </a>
        </div>
        <div className="relative w-full max-w-[1440px] mx-auto h-full pt-14 z-30">
          <div className="absolute top-2 left-[354px]"><img className="animate-[anistar_3s_ease-in-out_1s_infinite]" src="/assets/images/star-01.svg" alt="" /></div>
          <div className="absolute top-0 left-[970px]"><img className="animate-[anistar_3s_ease-in-out_2s_infinite]" src="/assets/images/star-02.svg" alt="" /></div>
          <div className="absolute top-[460px] left-[40px]"><img className="animate-[anistar_3s_ease-in-out_0.4s_infinite]" src="/assets/images/star-03.svg" alt="" /></div>
          <div className="absolute top-[440px] left-[820px]"><img className="animate-[anistar_3s_ease-in-out_infinite]" src="/assets/images/star-04.svg" alt="" /></div>
          <div className="flex max-lg:flex-col max-lg:items-center gap-5">
            <div className="md:pl-5 max-md:px-5 xl:pl-20 pt-16 md:pt-10">
              <h1 className="relative animate-[bgextendAnimeBase_1s_forwards] opacity-0">
                <span className="absolute w-full h-full bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)] animate-[bgLRextendAnime_2s_forwards] scale-x-0 z-10"></span>
                <img className="animate-[bgextendAnimeBase_2s_0.8s_forwards] opacity-0 max-md:w-full max-md:max-w-[400px]" src="/assets/images/fv-text.svg" alt="" />
              </h1>
              <ul className="relative space-y-1 md:text-[25px] text-[16px] font-bold lg:ml-9 md:ml-6 mt-6 z-10">
                <li className="flex items-center relative animate-[bgextendAnimeBase_1s_forwards] opacity-0">
                <span className="absolute w-full h-full bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)] animate-[bgLRextendAnime_2s_forwards] scale-x-0 z-10"></span>
                <span className="animate-[bgextendAnimeBase_2s_0.8s_forwards] opacity-0 flex items-start gap-2.5">
                  <figure>
                    <img className="max-md:w-[24px]" src="/assets/images/fv-list-star.svg" alt="" /></figure><span className="flex-1">実際の来店、購入、契約の増加にフォーカス!!</span>
                    </span>
                </li>
                <li className="flex items-center relative animate-[bgextendAnimeBase_1s_forwards] opacity-0">
                <span className="absolute w-full h-full bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)] animate-[bgLRextendAnime_2s_forwards] scale-x-0 z-10"></span>
                <span className="animate-[bgextendAnimeBase_2s_0.8s_forwards] opacity-0 flex items-start gap-2.5">
                  <figure>
                    <img className="max-md:w-[24px]" src="/assets/images/fv-list-star.svg" alt="" /></figure><span className="flex-1">24時間365日休まず自動改善!!</span>
                    </span>
                </li>
                <li className="flex items-center relative animate-[bgextendAnimeBase_1s_forwards] opacity-0">
                <span className="absolute w-full h-full bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)] animate-[bgLRextendAnime_2s_forwards] scale-x-0 z-10"></span>
                <span className="animate-[bgextendAnimeBase_2s_0.8s_forwards] opacity-0 flex items-start gap-2.5">
                  <figure>
                    <img className="max-md:w-[24px]" src="/assets/images/fv-list-star.svg" alt="" /></figure><span className="flex-1">専門知識・手数料不要!!※</span>
                    </span>
                </li>
              </ul>
              <div className="fade-up absolute bottom-[32%] md:bottom-24 max-md:hidden">
                <img src="/assets/images/fv-arrow.svg" alt="" />
              </div>
            </div>
            <div ref={containerRef} className="fade-up pt-10 md:pt-5">
                <div className="relative aspect-[518/377] max-[440px]:w-[360px] max-md:w-[440px] md:w-[518px] animate-[anibounce_2s_linear_infinite]">
                  <div className="f1 size-full absolute inset-0 z-[6]">
                    <Bubble rect="f1-bubble top-5 right-0 dt:-right-5">
                      せっかく広告出すから<br />
                      売上に直結する運用が<br />
                      したい!!
                    </Bubble>
                    <figure className="f1-img">
                      <img src="/assets/images/fv-item-01.png" alt="" />
                    </figure>
                  </div>
                  <div className="f2 size-full absolute inset-0 z-[5]">
                    <Bubble rect="f2-bubble -top-5 right-0 dt:-right-5">
                    お金をかけたら、かけた <br />
                    だけの効果を手に入れ<br />
                    たいよね!!
                      したい!!
                    </Bubble>
                    <figure className="f2-img">
                      <img src="/assets/images/fv-item-02.png" alt="" />
                    </figure>
                  </div>
                  <div className="f3 size-full absolute inset-0 z-[4]">
                    <Bubble rect="f3-bubble -top-5 right-5">
                    SEIKAIは費用対効果が高くて、<br />
                    上司や同僚からの評判もよく、<br />
                    私も鼻が高いです。
                    </Bubble>
                    <figure className="f3-img">
                      <img src="/assets/images/fv-item-03.png" alt="" />
                    </figure>
                  </div>
                  <div className="f4 size-full absolute inset-0 z-[3]">
                    <Bubble rect="f4-bubble top-1/3 right-0 dt:-right-10">
                    毎日忙しくてもSEIKAIなら<br />
                    やることがほとんどないし<br />お客さんも増えてます。
                    </Bubble>
                    <figure className="f4-img">
                      <img src="/assets/images/fv-item-04.png" alt="" />
                    </figure>
                  </div>
                  <div className="f5 size-full absolute inset-0 z-[3]">
                      <Bubble rect="f5-bubble top-0 right-0 dt:-right-10">
                      この現場もSEIKAI経由で <br />
                      契約したんだって。
                      </Bubble>
                      <Bubble rect="f6-bubble top-1/3 right-0 dt:-right-10">
                      また!?
                      </Bubble>
                    <figure className="f5-img">
                      <img src="/assets/images/fv-item-05.png" alt="" />
                    </figure>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="fade-up flex justify-center mt-6 relative z-30 max-md:px-5">
                <img className="max-md:w-full max-md:max-w-[400px]" src="/assets/images/seikai.svg" alt="" />
              </div>
              
        <div className="flex justify-center md:mt-7 mt-5 relative z-30">
            <Button href="/">
                SEIKAI広告を今すぐ試す
            </Button>
        </div>
        </div>
        </div>
    </section>
  );
};

export default FV;
