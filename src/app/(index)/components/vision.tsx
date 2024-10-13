"use client";
import Title from "@/components/title";
import Text from "@/components/text";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const Vision = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="w-full max-w-[1140px] mx-auto flex max-[767px]:flex-wrap max-[760px]:flex-col-reverse md:mt-[48px] mt-6 md:px-0 px-5">
      <div className="flex max-[767px]:flex-wrap max-[767px]:flex-col-reverse items-end">
        <figure className="fade-up w-full max-w-[400px] mt-3">
          <img className="mx-auto" src="/assets/images/vision_img.png" alt="" />
        </figure>
        <div className="flex-1">
          <Title>Vision</Title>
          <Text>
            Fave Coin aims to return control of personal information and
            accounts from centralized SNS platforms to the users themselves.{" "}
          </Text>
        </div>
      </div>

      <figure className="fade-up w-full max-w-[331px] mt-8 mx-auto">
        <img src="/assets/images/note.png" alt="" />
      </figure>
    </section>
  );
};

export default Vision;
