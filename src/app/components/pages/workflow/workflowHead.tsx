"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import WorkflowTextSVG from "./workflowTextSVG";

export default function WorkflowHead() {
  const animateRefs = useScrollAnimation("fadeDown");
  return (
    <div className="px-[3.75vw] pb-20 ">
        <div className="text-center md:mt-10 mt-6">
          <WorkflowTextSVG />
        </div>
        <p ref={animateRefs} className="opacity-0 md:text-[16px] text-[13px] text-white w-full max-w-[603px] mx-auto max-md:px-5 md:mt-8 mt-6">
        FROM CONCEPT TO COMPLETION, WE BRING YOUR PROJECTS TO LIFE. OUR EXPERT TEAMS IN MAJOR TECH HUBS WORLDWIDE ENSURE YOUR DEVELOPMENT NEEDS ARE MET WITH PRECISION AND AGILITY, ANYTIME, ANYWHERE.
        </p>
    </div>
  );
}
