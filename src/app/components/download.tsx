"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Download = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 md:py-[100px] py-[60px]">
        <div className="w-full md:max-w-[912px] max-w-[440px] mx-auto rounded-[20px] flex">
            <div className="">
                <figure></figure>
            </div>
        </div>
    </section>
  );
};

export default Download;
