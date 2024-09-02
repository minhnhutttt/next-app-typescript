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
    <footer className="pt-16  -mt-[11.5vw]">
      <figure className="w-full">
        <img className="w-full" src="/assets/images/img-footer.png" alt="" />
      </figure>
        <div className="bg-black w-full mx-auto flex max-md:flex-col max-md:items-center max-md:gap-8">
            <div className="flex justify-between">
                <a href="/" className="hover:opacity-75 duration-150">
                    <img className="max-md:w-[200px]" src="/assets/images/logo-footer.png" alt="" />
                </a>
            </div>
            <ul className="md:pr-[105px] md:pt-[335px] pt- pb-[60px] flex md:justify-end items-center max-md:justify-center flex-wrap flex-1 gap-y-5">
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
