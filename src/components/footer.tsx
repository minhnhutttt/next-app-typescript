interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/about",
    text: "About Us",
  },
  {
    link: "/potential",
    text: "RWA’s Potential",
  },
  {
    link: "/privacy-policy",
    text: "Privacy policy",
  },
  {
    link: "mailto:info@ultimate-holdings-group.com",
    text: "Contact Us",
  },
];
const Footer = () => {
  return (
    <footer className="px-5 md:px-10 bg-black md:pt-[70px] pt-10 pb-5">
        <div className="w-full max-w-[883px] mx-auto">
            <div className="flex justify-center">
                <a href="/" className="hover:opacity-75 duration-150">
                    <img className="max-md:w-[240px]" src="/assets/images/logo-footer.png" alt="" />
                </a>
            </div>
            <ul className="flex md:justify-center items-center md:my-10 my-6 max-md:flex-col">
                {links.map(({ link, text, target }, index) => (
                <li key={index} className="flex items-center">
                    <span className="w-px h-10 bg-white block rotate-[30deg] max-md:hidden"></span>
                    <a
                    href={link}
                    className="text-[18px] md:text-[16px] xl:text-[18px] text-white font-medium duration-150 hover:opacity-75 px-8 lg:px-12 h-[60px] flex items-center justify-center"
                    target={target}
                    >
                    {text}
                    </a>
                </li>
                ))}
                <span className="w-px h-10 bg-white block rotate-[30deg] max-md:hidden"></span>
            </ul>
        </div>
        <p className="text-center text-[14px] text-white font-lato">Copyright © 2024 Ultimate holdings group</p>
    </footer>
  );
};

export default Footer;
