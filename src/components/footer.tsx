"use client"

interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/#delivery",
    text: "Delivery Man Mapとは?",
  },
  {
    link: "/#workstyle",
    text: "働き方",
  },
  {
    link: "/#item",
    text: "アイテム",
  },
  {
    link: "/#merit",
    text: "メリット",
  },
  {
    link: "/#howto",
    text: "使い方",
  },
  {
    link: "/#faq",
    text: "FAQ",
  },
  {
    link: "https://lin.ee/JYLtdjG",
    target: '_blank',
    text: "問い合わせ",
  },
];
const Footer = () => {
  return (
    <footer className="pt-16 -mt-[11.5vw]">
      <div className="w-full relative flex [clip-path:polygon(0_11.5vw,_100%_0,_100%_100%,_0%_calc(100%-7vw))] md:h-[34.722vw] h-[64.722vw]">
        <div className="absolute inset-0">
                <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover object-center">
                <source src="/assets/videos/footer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      </div>
        <div className="bg-black w-full mx-auto [clip-path:polygon(0_0,_100%_7vw,_100%_100%,_0%_100%)] pt-[7vw] -mt-[calc(7vw-5px)]">
            <div className="flex justify-end w-full -mt-[1.5vw] px-10">
                <a href="/" className="hover:opacity-75 duration-150">
                    <img className="max-md:w-[300px]" src="/assets/images/logo-footer.png" alt="" />
                </a>
            </div>
            <ul className="md:pr-[105px] md:pt-[335px] pt-[130px] pb-[60px] flex md:justify-end items-center max-md:justify-center flex-wrap flex-1 gap-y-5">
                {links.map(({ link, text, target }, index) => (
                <li key={index} className="flex items-center">
                    <a
                    href={link}
                    className="text-[20px] text-white font-extrabold duration-150 hover:opacity-75 px-3 lg:px-5 flex items-center justify-center"
                    target={target}
                    >
                    {text}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    </footer>
  );
};

export default Footer;
