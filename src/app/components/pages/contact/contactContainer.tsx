"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import FormCheckbox from "./formCheckbox";
import FormInput from "./formInput";
import FormTextArea from "./formTextArea";

export default function ContactContainer() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div className="px-[3.75vw]">
        <div className="w-full max-w-[1000px] mx-auto">
            <p ref={animateRefs} className="opacity-0 md:text-[42px] text-[20px] text-center text-white">WHAT DO YOU NEED US TO DO?</p>
            <span ref={animateRefs} className="opacity-0 block bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)] h-px mt-4"></span>
            <div className="flex justify-center mb-12 md:mb-24">
                <div className="py-8 space-y-1">
                    <FormCheckbox label="BLOCKCHAIN DEVELOPMENT" name="BLOCKCHAIN" />
                    <FormCheckbox label="WEBSITE DEVELOPMENT" name="WEBSITE" />
                    <FormCheckbox label="APPLICATION DEVELOPMENT" name="APPLICATION" />
                    <FormCheckbox label="AI DEVELOPMENT" name="AI" />
                    <FormCheckbox label="CONSULTATION" name="CONSULTATION" />
                    <FormCheckbox label="OTHER INQUIRIES" name="OTHER" />
                </div>
            </div>
            <p ref={animateRefs} className="opacity-0 md:text-[42px] text-[20px] text-center text-white">REQUESTER AND PROJECT DETAILS</p>
            <span ref={animateRefs} className="opacity-0 block bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)] h-px mt-4"></span>
            <div className="w-full max-w-[722px] mx-auto mt-10 md:space-y-[60px] space-y-9">
                <div className="flex max-md:flex-col gap-9 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <FormInput label="Full Name" name="name" placeholder="Please enter your name." />
                    </div>
                    <div className="w-full md:w-1/2">
                        <FormInput label="Company Name" name="company" placeholder="Enter the name of your company or organization." />
                    </div>
                </div>
                <div className="flex max-md:flex-col gap-9 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <FormInput label="Email Address" name="email" placeholder="Provide an email address for reply correspondence." />
                    </div>
                    <div className="w-full md:w-1/2">
                        <FormInput label="Phone Number" name="phone" placeholder="Enter a contact phone number." />
                    </div>
                </div>
                <div className="">
                    <FormTextArea  label="PROJECT DETAILS" name="project" placeholder="Describe the details, requirements, objectives, and expected deliverables of your project." />
                </div>
                <div className="flex max-md:flex-col gap-9 md:gap-10">
                    <div className="w-full md:w-1/2">
                        <FormInput label="DESIRED PROJECT START DATE (optional)" name="date" placeholder="Enter the date you wish to start the project." />
                    </div>
                    <div className="w-full md:w-1/2">
                        <FormInput label="BUDGET RANGE (optional)" name="budget" placeholder="Enter your budget range for the project." />
                    </div>
                </div>
                <div className="">
                    <FormTextArea  label="ADDITIONAL COMMENTS OR QUESTIONS" name="additional" placeholder="If you have any additional notes or questions, please include them here." />
                </div>
                <div className="flex justify-center">
                    <button type="button" ref={animateRefs} className="md:h-[64px] h-[50px] px-8 md:px-[60px] flex items-center justify-center relative overflow-hidden rounded-[40px] md:text-[18px] text-[16px] opacity-0 hover:tracking-widest duration-300 origin-center">
                        <span className="block absolute top-2/4 left-2/4 w-[120%] pb-[120%] -translate-x-1/2 -translate-y-1/2">
                        <i className="block absolute top-[0] left-[0] w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[url(/images/bg-btn.png)] bg-cover bg-no-repeat animate-[rotate_15s_linear_infinite]"></i>
                        </span>
                        <span className="relative">SUBMIT NOW</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
