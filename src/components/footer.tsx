"use client"

import { usePathname } from "next/navigation";

interface NavLink {
  link: string;
  text: string;
  activeText: string;
  icon: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/about",
    text: "Overview",
    activeText: "About DIVER",
    icon: "/assets/images/ic-nav-01.svg",
  },
  {
    link: "/usecase",
    text: "Amazing",
    activeText: "Usecase",
    icon: "/assets/images/ic-nav-02.svg",
  },
  {
    link: "/gateway",
    text: "Unlock",
    activeText: "RPC Gateway",
    icon: "/assets/images/ic-nav-03.svg",
  },
  {
    link: "#",
    text: "Learn…",
    activeText: "Whitepaper",
    icon: "/assets/images/ic-nav-04.svg",
  },
];
const Footer = () => {
  const pathname = usePathname();
    return (
      <footer className="relative px-5 md:px-10 bg-[#00053A] md:py-5 py-8 z-10">
        <div className="w-full max-w-[1150px] mx-auto mb-10">
          <div className="flex items-center justify-between max-md:flex-col pt-6 max-md:pb-10">
            <div className="">
              <a href="/" className="flex max-md:ml-[-45px]"><img className="max-md:w-[240px]" src="/assets/images/logo-footer.svg" alt="" /></a>
              <div className="md:pl-[60px] space-y-4 max-md:text-center">
                <a href="privacy-policy" className="block text-[16px] font-medium uppercase">privacy policy</a>
                <a href="/terms-of-service" className="block text-[16px] font-medium uppercase">
                terms of service</a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-5 tracking-widest lg:pr-[76px] max-md:mt-10">
            <ul className="flex items-center justify-center md:justify-end md:flex-col gap-6 max-md:flex-wrap">
            {links.map(({ link, text, icon, activeText, target }, index) => (
              <li key={index} className="w-[45%] relative md:w-[143px]">
                <a
                  href={link}
                  className={`group h-[30px] relative flex items-center md:items-end justify-start flex-col md:text-[20px] text-[16px] font-medium tracking-widest overflow-hidden ${
                    pathname === link ? "active" : ""
                  }`}
                  target={target}
                >
                  <span className="group-hover:opacity-0 group-hover:-translate-y-full group-[.active]:opacity-0 group-[.active]:-translate-y-full  flex items-center justify-center gap-[3px] duration-150 text-center">
                    <span>{text}</span>
                    <span className="">
                      <img src={icon} alt="" />
                    </span>
                  </span>
                  <span className="group-hover:opacity-100 group-hover:-translate-y-full group-[.active]:opacity-100 group-[.active]:-translate-y-full opacity-0 flex items-center justify-center duration-150 text-center font-bold">
                    <span>{activeText}</span>
                  </span>
                </a>
                <span className={`absolute top-full left-0 w-full bg-white h-[3px] rounded-full  ${
                    pathname === link ? "opacity-100" : "opacity-0"
                  }`}></span>
              </li>
            ))}
          </ul>
              <a href="/" className="block text-[16px] font-medium">WHITEPAPER</a>
              <a href="/" className="block text-[16px] font-medium">CONTACT</a>
              <a href="/" className=""><img src="/assets/images/ic-knock.svg" alt="" /></a>
            </div>
          </div>
          
          </div>
          <p className="text-center text-[12px] font-medium">© Copyright 2024 DIVER.</p>
      </footer>
    );
  };
  
  export default Footer;
  