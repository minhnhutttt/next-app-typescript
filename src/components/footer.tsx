"use client"

interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/#introduction",
    text: "バイトクエストとは？",
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
    text: "よくある質問",
  },
  {
    link: "/#work-style",
    text: "働き方",
  },
  {
    link: "/terms-of-service",
    text: "利用規約",
  },
  {
    link: "/privacy-policy",
    text: "プライバシーポリシー",
  },
  {
    link: "/company",
    text: "運営会社",
  },
];
const Footer = () => {
  return (
    <footer className="px-5 md:px-10 bg-[#191919] md:pt-[170px] pt-16 pb-5">
        <div className="w-full max-w-[1068px] mx-auto flex md:mb-[130px] mb-[80px] max-md:flex-col max-md:items-center max-md:gap-8">
            <div className="flex justify-between">
                <a href="/" className="hover:opacity-75 duration-150">
                    <img className="max-md:w-[200px]" src="/assets/images/logo-footer.png" alt="" />
                </a>
            </div>
            <ul className="flex md:justify-center items-center max-md:justify-center flex-wrap flex-1 gap-y-5">
                {links.map(({ link, text, target }, index) => (
                <li key={index} className="flex items-center">
                    <a
                    href={link}
                    className="text-[18px] text-white font-extrabold duration-150 hover:opacity-75 px-3 lg:px-5 flex items-center justify-center"
                    target={target}
                    >
                    {text}
                    </a>
                </li>
                ))}
            </ul>
        </div>
        <p className="text-center text-[14px] text-white">Copyright © バイトクエスト.</p>
    </footer>
  );
};

export default Footer;
