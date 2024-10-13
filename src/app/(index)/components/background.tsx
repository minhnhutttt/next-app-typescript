"use client";
import useScrollAnimations from '@/hooks/useScrollAnimations';
import Title from "@/components/title";
const data = [
    {
        text:`In the Web1.0 era, "bookmarks" were used solely for personal organization. In Web2.0, they evolved into "likes" and "shares," allowing for interactive expression and becoming a measure of popularity, shared with others. However, these features are controlled by centralized platforms, where users' personal data and accounts are under the platform's control. While recognition is distributed as a form of reward, are financial benefits truly shared?`,
    },
    {
        text:`With the advent of Web3.0, Fave Coin aims to reclaim these centralized rights for individuals, creating a new ecosystem where users can earn revenue from their "likes" and posts. Fave Coin focuses on privacy protection and fairly distributes both recognition and financial rewards, offering an SNS platform where personal information is not freely exploited. "Your popularity belongs to you."`,
    },
];
const Background = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[180px] mt-10 md:w-full w-11/12 md:max-w-[1200px] max-w-full mx-auto md:rounded-[30px] rounded-[15px] md:border-[11px] border-[5px] border-white bg-[url('/assets/images/bg-background.png')] bg-[length:100%_100%] md:pt-[90px] pt-9 md:pb-[55px] pb-5 md:px-0 px-5">
     <div className="relative">
     <Title>
        Background of Fave Coin
     </Title>
     <img className="fade-up absolute left-1/2 -translate-x-1/2 md:top-[-35px] top-[-13px] md:w-auto w-[60px]" src="/assets/images/vector.svg" alt="" />
     </div>
     
     <div className="w-full max-w-[713px] mx-auto md:mt-12 mt-8">
     {data.map((item, index) => (
        <p className="fade-up md:text-[16px] text-[12px] font-normal mt-5" key={index}> {item.text}</p>
        ))}
     </div>
     
    <figure className="fade-up text-center">
        <img className="mx-auto" src="/assets/images/background-img.png" alt="" />
    </figure>
    </section>
  );
};

export default Background;
