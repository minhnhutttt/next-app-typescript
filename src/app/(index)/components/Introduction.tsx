'use client';
import { Button } from '@/components/ui/Button';
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Introduction() {
  return (
    <section className="relative px-5 pt-40 md:pt-55">
      <div className="mx-auto flex w-full max-w-[1250px] justify-end">
        <div className="w-full max-w-[925px]">
          <p className="scroll-text text-[24px] leading-[1.6] font-bold md:text-[38px]">
            AIS
            Japanが提供するAIプロダクト「SEIKAI」は広告運用を自動化するAI広告プラットフォームです。
            <br />
            <br />
            専門知識は不要。
            <br />
            24時間365日自動最適化。
            <br />
            成約報告によりAIの学習が加速。
            <br />
            驚異的な改善サイクルが動き出します。
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-x-10 gap-y-5 md:mt-12 md:gap-18">
            <Button link="/product">SEIKAIを詳しく見る</Button>
            <Button link="#">無料相談</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
