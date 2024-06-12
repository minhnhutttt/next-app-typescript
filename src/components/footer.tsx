import Button from "./button";

interface NavLink {
    link: string;
    text: string;
    target?: string;
  }
  
  const links: NavLink[] = [
    {
      link: "/",
      text: "HOME",
    },
    {
      link: "/",
      text: "メタでペット供養とは？",
    },
    {
      link: "/",
      text: "産官学連携",
    },
    {
      link: "/price",
      text: "料金",
    },
    {
        link: "#faq",
        text: "FAQ",
      },
  ];
export default function Footer() {
    return (
      <footer className="px-5 gradient-05 md:pt-[85px] pt-16 md:pb-9 pb-7">
        <div className="w-full md:max-w-[750px] max-w-[400px] mx-auto flex max-md:flex-col max-md:justify-center max-md:items-center gap-6 justify-between mb-8">
            <div className="">
                <div className="pb-10">
                    <a href="/" className="block hover:opacity-75 duration-150">
                <img src="/assets/images/logo-footer.png" alt="" /></a>
                </div>
                <Button href="#" rect=" md:text-[18px] text-[16px] w-[230px] h-[66px]">
                    お問い合わせ
                </Button>
            </div>
            <ul className="space-y-7 md:pr-[30px] max-md:w-[320px]">
            {links.map(({ link, text, target }, index) => (
            <li key={index}>
                <a
                href={link}
                className="inline-block text-[16px] md:text-[18px] xl:text-[18px] text-white font-bold [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)]"
                target={target}
                >
                {text}
                </a>
            </li>
            ))}
        </ul>
        </div>
        <div className="text-right md:text-[18px] text-[14px] font-noto text-white">Copyright © 2024 メタでペット供養</div>
      </footer>
    );
  }
  