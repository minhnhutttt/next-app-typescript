interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "#functionality",
    text: "機能性",
  },
  {
    link: "#service",
    text: "サービス内容",
  },
  {
    link: "#case-studies",
    text: "導入事例",
  },
  {
    link: "#plan",
    text: "料金・プラン",
  },
  {
    link: "#flow",
    text: "導入フロー",
  },
  {
    link: "#FAQ",
    text: "FAQ",
  },
  {
    link: "",
    text: "お問い合わせ",
  },
];
export default function Footer() {
  return (
    <footer className="px-5 pb-10 bg-[#CEE4FF] md:pt-16 pt-10">
      <div className="w-full max-w-[1232px] mx-auto flex items-center justify-center flex-col border-b border-[#2639A6]">
        <a href="/" className="block duration-150 hover:opacity-75">
          <img src="/assets/images/logo-footer.png" alt="" />
        </a>
        <div className="md:py-10 py-7">
          <ul className="flex md:gap-8 gap-6 flex-wrap justify-center">
            {links.map(({ link, text, target }, index) => (
              <li key={index}>
                <a
                  href={link}
                  className="text-[16px] font-roboto text-[#2639A6]"
                  target={target}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center text-[13px] text-[#2639A6] md:text-[16px] pt-6 md:pt-9">
        Copyright © 2024 NFT-MAP
      </div>
    </footer>
  );
}
