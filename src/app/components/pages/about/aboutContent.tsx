"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";

export default function AboutContent() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div className="px-[3.75vw]">
        <div className="w-full max-w-[1250px] mx-auto">
            <div className="space-y-[50px]">
                <div className="flex pr-[125px]">
                    <figure className="flex-[0_0_250px] relative">
                        <img src="/images/image-about-01.png" alt="" />
                    </figure>
                    <div className="bg-black/40 md:ml-[-125px] md:mt-[120px] flex items-center justify-center py-8 md:py-[60px] md:px-[157px] px-[100px] md:text-[16px] text-[13px] text-white rounded-[40px] leading-snug">
                    In a world where digital innovation is the heartbeat of progress, fliQt was founded to lead the charge. Our story is one of pioneering technology across multiple domains: blockchain, web, app, and AI. We began with the vision to not just participate in the digital era but to define it, shaping solutions that resonate with efficiency, creativity, and integrity. <br /><br />At fliQt, we've always been more than a development hub. We are visionaries, thinkers, and creators. Our team, an ensemble of experts in their respective fields, shares a common passion for transforming complex challenges into elegant, user-friendly solutions. We believe in the power of technology to connect, empower, and drive businesses and individuals forward.
                    </div>
                </div>
                <div className="flex flex-row-reverse pl-[125px]">
                    <figure className="flex-[0_0_250px] relative">
                        <img src="/images/image-about-02.png" alt="" />
                    </figure>
                    <div className="bg-black/40 md:mr-[-125px] md:mt-[120px] flex items-center justify-center py-8 md:py-[60px] md:px-[157px] px-[100px] md:text-[16px] text-[13px] text-white rounded-[40px] leading-snug">
                    Our commitment has always been to deliver excellence. To us, that means developing solutions that are not only robust and efficient but also intuitive and adaptable, meeting the ever-evolving needs of our clients. We understand that in the tapestry of the digital world, each thread – each client's story – is unique, and we pride ourselves on weaving solutions that add real, measurable value. <br /><br />As we look to the future, our drive for innovation remains unwavering. fliQt is more than a company; it's a movement. We are dedicated to building a future where technology bridges gaps, fosters collaboration, and redefines the boundaries of what's possible. Together, we are setting the stage for a future where digital solutions are synonymous with excellence and trust.<br />
                    <br />
                    With fliQt, we continue to explore the possibilities technology brings. Starting today, let's build a future together where the challenges your business faces are met with innovative solutions.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
