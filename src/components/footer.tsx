"use client"
interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/",
    text: "Top",
  },
  {
    link: "/#concept",
    text: "Concept",
  },
  {
    link: "/#sake",
    text: "JAPANESE SAKE",
  },
  {
    link: "/#message",
    text: "Message",
  },
  {
    link: "/company",
    text: "Company",
  },
  {
    link: "https://lin.ee/bDgs0V3",
    text: "お問い合わせ",
    target: '_blank'
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#242424] md:pt-[60px] pt-10">
        <div className="w-full max-w-[1440px] mx-auto flex px-5 md:px-[26px] bg-[url('/assets/images/bg-footer.png')] max-md:bg-[length:50vw_auto] bg-no-repeat bg-center md:bg-right-top pb-5">
            <div className="flex justify-center w-[120px] md:w-[188px]">
                <a href="/" className="hover:opacity-75 duration-150">
                    <img className="" src="/assets/images/logo-footer.png" alt="" />
                </a>
            </div>
            <ul className="flex flex-col gap-12 md:gap-16 border-l border-white/50 pb-[100px] md:pb-[160px]">
                {links.map(({ link, text, target }, index) => (
                <li key={index} className="flex items-center">
                    <a
                    href={link}
                    className="text-[17px] font-inter text-white font-medium duration-150 hover:opacity-75 px-8 lg:px-12  flex items-center justify-center"
                    target={target}
                    >
                    {text}
                    </a>
                </li>
                ))}
            </ul>
        </div>
        <p className="text-center text-[14px] text-white border-t border-white/50 h-[77px] flex justify-end items-center px-10">Copyright © Sake Supreme Inc., 2024</p>
    </footer>
  );
};

export default Footer;
