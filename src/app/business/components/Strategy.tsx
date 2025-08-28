'use client';

import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const StrategyContent = ({
  id,
  video,
  title,
  subtitle,
  children,
}: {
  id: string;
  video: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div id={id} className="fade-up group flex items-start max-md:flex-col md:even:flex-row-reverse">
    <div className="md:w-[950px]">
      <div className="relative">
        <video
          className="relative h-full w-full object-cover opacity-50"
          loop
          muted
          autoPlay
          src={video}
          playsInline
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-5 text-center leading-[1.3]">
          <h6 className="text-[28px] font-bold tracking-wider md:text-[46px]">{title}</h6>
          <p className="text-[14px] tracking-wider md:text-[18px]">{subtitle}</p>
        </div>
      </div>
    </div>
    <div className="relative flex max-md:px-5 max-md:py-10 md:mt-92 md:group-odd:justify-end md:group-odd:pr-5 md:group-even:pl-5">
      <div className="scroll-text max-w-[575px] text-[20px] font-light tracking-wider md:text-[28px] md:group-odd:-ml-54 md:group-even:-mr-54">
        {children}
      </div>
    </div>
  </div>
);

export default function Strategy() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>('.scroll-text');
      els.forEach((el) => {
        const split = new SplitText(el, { type: 'chars' });

        gsap.set(split.chars, { opacity: 0.1 });

        gsap.to(split.chars, {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-10 mt-20 pb-25 md:mt-40 md:pb-50">
      <div className="relative mx-auto w-full max-w-[440px] space-y-30 md:max-w-[1440px] md:space-y-60">
        <StrategyContent
          id="marketing-technology-innovation"
          video="/assets/videos/b2.mp4"
          title={
            <>
              Marketing Technology <br />
              Innovation
            </>
          }
          subtitle="Building Tomorrow's Marketing Infrastructure"
        >
          We invest in technologies that fundamentally change how businesses approach marketing. Our
          focus on AI-driven automation, offline conversion tracking, and intelligent optimization
          creates solutions that deliver superior results with minimal human intervention.
        </StrategyContent>
        <StrategyContent
          id="ai-powered-automation"
          video="/assets/videos/b2.mp4"
          title={<>AI-Powered Automation</>}
          subtitle="Intelligence That Scales"
        >
          Our AI systems learn from millions of data points to make decisions that would require
          teams of specialists. From bid optimization to audience targeting, from creative testing
          to conversion tracking, our automation delivers 24/7 optimization that continuously
          improves performance.
        </StrategyContent>
        <StrategyContent
          id="strategic-global-expansion"
          video="/assets/videos/b3.mp4"
          title={<>Strategic Global Expansion</>}
          subtitle="Bringing Innovation to Every Market"
        >
          Starting with our success in Japan, we're systematically expanding to markets where
          businesses need accessible marketing technology. Each market entry is carefully planned to
          ensure local relevance while maintaining our core value proposition of democratized
          marketing excellence.
        </StrategyContent>
        <StrategyContent
          id="investment-philosophy"
          video="/assets/videos/b4.mp4"
          title={<> Investment Philosophy</>}
          subtitle="Creating Value Through Accessibility"
        >
          We invest in solutions that make premium capabilities accessible to all. Our group
          companies share common traits: revolutionary economics (like SEIKAI's 9% fee), removal of
          traditional barriers (no minimums, no contracts), and focus on real business outcomes
          rather than vanity metrics.
        </StrategyContent>
      </div>
    </section>
  );
}
