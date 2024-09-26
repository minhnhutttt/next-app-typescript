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
                <img className="w-full max-md:hidden" src="/assets/images/footer-banner.png" alt="キャンペーンクエストってLINEから登録できるんだ！" />
                <img className="md:hidden" src="/assets/images/footer-banner-sp.png" alt="キャンペーンクエストってLINEから登録できるんだ！" />
            </h5>
        </div>
        <div className="relative bg-[url('/assets/images/footer-bg.png')] bg-cover bg-top mt-[-100px] md:mt-[-200px] px-5 pb-9">
            <div className="w-full max-w-[1140px] mx-auto max-md:pt-10">
                <div className="flex items-end">
                    <figure className="pb-10">
                        <img src="/assets/images/footer-img.png" alt="" />
                    </figure>
                    <div className="">
                        <a href="/" className="">
                            <img src="/assets/images/line-button.png" alt="" />
                        </a>
                        <div className="md:-ml-[110px] -ml-[70px]">
                        <img src="/assets/images/footer-bubble.png" alt="" />
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
