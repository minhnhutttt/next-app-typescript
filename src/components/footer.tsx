interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/",
    text: "DIVER Agentとは？",
  },
  {
    link: "/",
    text: "商品例",
  },
  {
    link: "/",
    text: "販売方法",
  },
  {
    link: "",
    text: "登録・販売フロー",
  },
  {
    link: "",
    text: "運営会社",
  },
  {
    link: "",
    text: "プライバシーポリシー",
  },
];
const Footer = () => {
  return (
    <footer className="px-5 md:px-10 bg-black md:pt-[110px] pt-16 pb-5">
        <div className="w-full max-w-[883px] mx-auto">
            <div className="flex justify-center">
                <a href="/" className="hover:opacity-75 duration-150">
                    <img className="max-md:w-[200px]" src="/assets/images/logo.png" alt="" />
                </a>
            </div>
            <ul className="flex md:justify-center items-center md:my-8 my-6 max-md:justify-center flex-wrap">
                {links.map(({ link, text, target }, index) => (
                <li key={index} className="flex items-center">
                    <a
                    href={link}
                    className="text-[16px] text-white font-medium duration-150 hover:opacity-75 px-8 lg:px-12 h-[60px] flex items-center justify-center"
                    target={target}
                    >
                    {text}
                    </a>
                </li>
                ))}
            </ul>
        </div>
        <p className="text-center text-[14px] text-white font-lato">Copyright © 2024 DIVER Agent.</p>
    </footer>
  );
};

export default Footer;
