"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";
import { ReactNode } from "react";

export default function Use() {
  const animateRefs = useScrollAnimation("zoom");
  const animateRightRefs = useScrollAnimation("slideRight");
  return (
    <section className="px-5 py-16">
        <div className="w-full max-w-[420px] md:max-w-[1320px] mx-auto">
            <SectionTitle subTitle="現物資産×NFT">
            RWAタグでできること
            </SectionTitle>
            <div className="flex justify-center">
                <div className="bg-[#B7E7FF] w-[537px] aspect-square rounded-full">
                    <figure>
                        <img src="/images/use-01.png" alt="権利を譲渡する" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
  );
}
