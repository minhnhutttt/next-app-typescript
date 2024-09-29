"use client";

interface NavLink {
    link: string;
    text: string;
    target?: string;
  }
  
  const links: NavLink[] = [
    {
      link: "/#introduction",
      text: "Campaign Questとは?　",
    },
    {
        link: "/#",
        text: "働き方",
      },
      {
        link: "/#",
        text: "アイテム",
      },
      {
        link: "/#",
        text: "メリット",
      },
      {
        link: "/#",
        text: "使い方",
      },
      {
        link: "/#faq",
        text: "FAQ",
      },
      {
        link: "/#",
        text: "問い合わせ",
      },
  ];
const Footer = () => {
  return (
    <section className="relative">
        <div className="bg-[#E6ECEA] relative">
            <h5>
              <div className="absolute left-[5vw] md:left-[25.5vw] top-[14vw] md:top-[7.5vw]">
                <img className="w-[50vw] md:w-[30.069vw]" src="/assets/images/footer-banner-text.svg" alt="" />
              </div>
              <div className="anim-poyopoyo absolute left-[75vw] top-[10vw] md:left-[76vw] md:top-[13vw]">
                <img className="w-[16vw] md:w-[10.694vw]" src="/assets/images/footer-banner-bubble.svg" alt="" />
              </div>
                <img className="w-full max-md:hidden" src="/assets/images/footer-banner.png" alt="キャンペーンクエストってLINEから登録できるんだ！" />
                <img className="md:hidden" src="/assets/images/footer-banner-sp.png" alt="キャンペーンクエストってLINEから登録できるんだ！" />
            </h5>
        </div>
        <div className="relative bg-[url('/assets/images/footer-bg.png')] bg-cover bg-top mt-[-100px] md:mt-[-200px] px-5 pb-9">
            <div className="w-full max-w-[940px] mx-auto max-md:pt-10">
                <div className="flex items-end pt-[40px] md:pt-[94px]">
                    <figure className="pb-10 relative">
                      <img src="/assets/images/footer-img-bubble.svg" alt="" className="anim-poyopoyo absolute top-[-46%] md:left-[-33%] left-[-12%] w-[53.31%]" />
                        <img src="/assets/images/footer-img.png" alt="" />
                    </figure>
                    <div className="">
                        <a href="https://lin.ee/5WfLOMX" target="_blank" className="">
                            <img src="/assets/images/line-button.png" alt="" />
                        </a>
                        <div className="md:-ml-[110px] -ml-[70px] relative max-md:w-[61.8vw]">
                          <img className="" src="/assets/images/footer-bubble.png" alt="" />
                          <p className="absolute top-[4vw] md:top-8 left-[10vw] md:left-[90px] font-mplus md:text-[24px] lg:text-[28px] text-[3vw] font-medium">あの店キャンペーンやってるよ！</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-9">
                <img src="/assets/images/footer-text.svg" alt="" />
            </div>
            <div className="w-full max-w-[1280px] mx-auto mt-5">
            <ul className="flex items-center max-md:justify-center flex-wrap flex-1 gap-y-5 gap-x-4">
                {links.map(({ link, text, target }, index) => (
                <li key={index} className="flex items-center">
                    <a
                    href={link}
                    className="text-[19px] text-[#111010] font-medium duration-150 hover:opacity-75 px-3 lg:px-5 flex items-center justify-center"
                    target={target}
                    >
                    {text}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </section>
  );
};

export default Footer;
