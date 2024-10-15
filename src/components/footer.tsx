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
            <div className="max-md:flex max-md:flex-col max-md:items-center max-md:w-full max-md:max-w-[400px]">
              <a href="/" className="flex">
                <div data-scroll className="group [filter:drop-shadow(0px_6px_50px_rgba(1,_0,_69,_0.20))]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="max-md:w-[120px] md:w-[140px]" viewBox="0 0 184 184" fill="none">
                  <path className="group-data-[scroll=in]:animate-[logo3d_2s_0.5s_forwards]" d="M114.59 45.84H22.91L0 0H91.69L114.59 45.84Z" fill="#18539E"/>
                  <path className="group-data-[scroll=in]:animate-[logo3d_2s_0.6s_forwards]" d="M160.44 45.84L137.53 91.69L114.59 45.84L91.69 0H137.53L160.44 45.84Z" fill="#1A68AE"/>
                  <path className="group-data-[scroll=in]:animate-[logo3d_2s_0.8s_forwards]" d="M160.44 137.53L137.53 183.37H45.87L68.78 137.53H160.44Z" fill="#228FCE"/>
                  <path className="group-data-[scroll=in]:animate-[logo3d_2s_0.9s_forwards]" d="M68.75 137.53L68.78 137.53L45.87 183.37L0 183.37L68.75 45.8398L91.69 91.6898L68.75 137.53Z" fill="#2CA4DE"/>
                  <path className="group-data-[scroll=in]:animate-[logo3d_2s_0.7s_forwards]" d="M183.37 91.6898L160.44 137.53L114.59 137.53L137.53 91.69L160.44 45.84L183.37 91.6898Z" fill="#1E7DBE"/>
                </svg>
              </div>
              </a>
              <div className="fade-up max-md:w-full relative text-center md:text-left md:text-[45px] text-[36px] font-bold leading-none [text-shadow:2px_4px_4px_#18539E] mt-8">
                <h3 className="opacity-0">
                  DIVER <br />
                  <span className="whitespace-nowrap">Time Network</span>
                </h3>
                <p id="ui" className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2">
                  {[...Array(26)].map((_, index) => (
                    <span className="text-water" key={index}>
                      DIVER <br />
                      <span className="whitespace-nowrap">Time Network</span>
                    </span>
                  ))}
                </p>
              </div>
              <p className="fade-up text-center md:text-[28px] text-[18px] leading-none [text-shadow:2px_4px_4px_#18539E] max-md:mt-7 mt-10 mb-9">
                - Dive into a world created by free -
              </p>
              <div className="space-y-4 max-md:text-center md:mt-10">
                <a href="/privacy-policy" className="block md:text-[20px] text-[16px] font-medium">Privacy policy</a>
                <a href="/terms-of-service" className="block md:text-[20px] text-[16px] font-medium">
                Terms of service</a>
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
              <a href="/" className="block md:text-[20px] text-[16px] font-medium">Contact</a>
              <a href="/" className=""><img src="/assets/images/ic-knock.svg" alt="" /></a>
            </div>
          </div>
          
          </div>
          <p className="text-center text-[12px] font-medium">© Copyright 2024 DIVER.</p>
      </footer>
    );
  };
  
  export default Footer;
  