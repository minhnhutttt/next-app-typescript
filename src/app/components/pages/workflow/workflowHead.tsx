"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";

export default function WorkflowHead() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div className="px-[3.75vw] pb-20 ">
        <div className="text-center md:mt-10 mt-6 font-solaris [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(70px,9.028vw,130px)] text-white leading-[1.1]">
                <p data-split-text data-delay="1"><span className="opacity-0">WORKFLOW</span></p>
            </div>
        <p ref={animateRefs} className="opacity-0 md:text-[16px] text-[13px] text-white w-full max-w-[603px] mx-auto max-md:px-5 md:mt-8 mt-6">
        FROM CONCEPT TO COMPLETION, WE BRING YOUR PROJECTS TO LIFE. OUR EXPERT TEAMS IN MAJOR TECH HUBS WORLDWIDE ENSURE YOUR DEVELOPMENT NEEDS ARE MET WITH PRECISION AND AGILITY, ANYTIME, ANYWHERE.
        </p>
    </div>
  );
}
