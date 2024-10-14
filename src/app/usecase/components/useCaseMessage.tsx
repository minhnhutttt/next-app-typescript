"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const UseCaseMessage = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative h-[500px] bg-[url('/assets/images/usecase-message-bg.png')] bg-cover flex items-center justify-center">
        <div className="fade-up w-full max-w-[770px] bg-white/90 h-[300px] flex items-center justify-center rounded-[10px] md:text-[24px] text-[18px] px-5 md:px-[50px] text-[#212534]">
            DIVER's innovative solutions have the potential to fundamentally change the way we do business and structure our society. How will these use cases shape our future? Let's bring your ideas and visions to life in the DIVER ecosystem.
        </div>
    </section>
  );
};

export default UseCaseMessage;
