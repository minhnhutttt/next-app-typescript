"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import Button from "@/components/button";

const Getting = () => {
  const ref = useScrollAnimations();
  return (
    <section id="getting-started" ref={ref} className="relative overflow-hidden md:pt-[80px] pt-16 px-5">
        <div className="flex justify-center items-center">
            <h4>
                <img className="animate-[anim-bounce_1.6s_infinite_ease-in-out]" src="/assets/images/step-bubble.svg" alt='ただ消費されるだけだった"投稿"が"資産価値"を帯びるSNSの世界へ。さあ、今すぐ飛び込もう！' />
            </h4>
        </div>
        <p className="fade-up text-center md:text-[25px] text-[18px] font-bold">
        簡単2ステップで始めよう！
        </p>
        <div className="flex justify-center gap-5 md:mt-8 mb-10 md:mb-12 mt-5">
          <div className="fade-up"><img src="/assets/images/step-01.png" alt="open-fave.comへアクセス" /></div>
          <div className="fade-up"><img src="/assets/images/step-02.png" alt="アカウント登録" /></div>
        </div>
        <div className="flex justify-center">
          <Button />
        </div>
    </section>
  );
};

export default Getting;
