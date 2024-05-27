"use client";

import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Receive = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[155px] mt-20 px-5">
      <div className="w-full max-w-[1210px] mx-auto relative">
        <Title sub="Receive">
        デジタルをドキュメント受け取る準備
        </Title>
        <div className="flex"></div>
      </div>
    </section>
  );
};

export default Receive;
