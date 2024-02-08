"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";

export default function AboutContent() {
  const animateRefs = useScrollAnimation("fadeDown");
  return (
    <div className="px-[3.75vw]">
        <div className="w-full max-w-[1250px] mx-auto">
            <div className="space-y-[50px]">
                <div ref={animateRefs} className="opacity-0 flex lg:pr-[125px] max-md:items-center max-md:flex-col">
                    <figure className="md:flex-[0_0_250px] flex-[0_0_200px] relative">
                        <img src="/images/image-about-01.png" alt="" />
                    </figure>
                    <div className="bg-black/40 md:ml-[-125px] md:mt-[120px] flex items-center justify-center py-8 md:py-[60px] md:pl-[157px] lg:px-[157px] md:px-[100px] px-8 md:text-[16px] text-[13px] text-white rounded-[40px] leading-snug">
                    In a world where digital innovation is the heartbeat of progress, fliQt was founded to lead the charge. Our story is one of pioneering technology across multiple domains: blockchain, web, app, and AI. We began with the vision to not just participate in the digital era but to define it, shaping solutions that resonate with efficiency, creativity, and integrity. <br /><br />At fliQt, we&apos;ve always been more than a development hub. We are visionaries, thinkers, and creators. Our team, an ensemble of experts in their respective fields, shares a common passion for transforming complex challenges into elegant, user-friendly solutions. We believe in the power of technology to connect, empower, and drive businesses and individuals forward.
                    </div>
                </div>
                <div ref={animateRefs} className="opacity-0 flex flex-row-reverse lg:pl-[125px] max-md:items-center max-md:flex-col">
                    <figure className="md:flex-[0_0_250px] flex-[0_0_200px] relative">
                        <img src="/images/image-about-02.png" alt="" />
                    </figure>
                    <div className="bg-black/40 md:mr-[-125px] md:mt-[120px] flex items-center justify-center py-8 md:py-[60px] md:pr-[157px] lg:px-[157px] md:px-[100px] px-8 md:text-[16px] text-[13px] text-white rounded-[40px] leading-snug">
                    Our commitment has always been to deliver excellence. To us, that means developing solutions that are not only robust and efficient but also intuitive and adaptable, meeting the ever-evolving needs of our clients. We understand that in the tapestry of the digital world, each thread – each client&apos;s story – is unique, and we pride ourselves on weaving solutions that add real, measurable value. <br /><br />As we look to the future, our drive for innovation remains unwavering. fliQt is more than a company; it&apos;s a movement. We are dedicated to building a future where technology bridges gaps, fosters collaboration, and redefines the boundaries of what&apos;s possible. Together, we are setting the stage for a future where digital solutions are synonymous with excellence and trust.<br />
                    <br />
                    With fliQt, we continue to explore the possibilities technology brings. Starting today, let&apos;s build a future together where the challenges your business faces are met with innovative solutions.
                    </div>
                </div>
            </div>
            <div ref={animateRefs} className="opacity-0 flex md:items-end items-center max-md:flex-col max-md:gap-6 justify-center mt-20 md:mt-[150px]">
                <figure className="">
                    <img src="/images/image-about-03.png" alt="" />
                </figure>
                <p className="w-full max-w-[747px] text-[20px] md:text-[25px] xl:text-[32px] text-white md:ml-[-144px] md:mb-[-100px] leading-[1.8]">
                AS WE ADVANCE IN THE DIGITAL ERA, OUR MISSION ENDURES: TO ELEVATE YOUR BUSINESS WITH COMPREHENSIVE SOLUTIONS IN BLOCKCHAIN, WEB, APP, AND AI, ENSURING OPERATIONAL EXCELLENCE, SECURITY, AND SEAMLESS INTEGRATION.
                </p>
            </div>
            <div ref={animateRefs} className="opacity-0 flex max-md:flex-col-reverse items-center w-full max-w-[1100px] mx-auto lg:gap-[128px] md:gap-[40px] md:mt-[200px] mt-[100px]">
                <div className="text-white">
                    <p className="text-[24px] md:text-[40px] mb-3 md:mb-5">COMPANY OVERVIEW</p>
                    <p className="text-[18px] md:text-[32px] md:mb-4">FLIQT Pte Ltd</p>
                    <p className="text-[14px] md:text-[20px] leading-loose">
                    346C King George&apos;s Avenue, <br />King George&apos;s Building, <br />SINGAPORE 208577
                    </p>
                </div>
                <div className="">
                    <img className="max-md:max-w-[300px]" src="/images/image-about-04.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}
