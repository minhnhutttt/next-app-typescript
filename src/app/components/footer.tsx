"use client"
import Link from "next/link";

type NavLink = {
    id: number;
    link: string;
    text: string;
    target?: string,
  };
const links: NavLink[] = [
  {
    id: 1,
    link: "/service",
    text: "SERVICE",
  },
  {
      id: 2,
      link: "/workflow",
      text: "WORKFLOW",
  },
  {
      id: 3,
      link: "/about",
      text: "ABOUT",
  },
  {
      id: 4,
      link: "/contact",
      text: "CONTACT",
  },
];
export default function Footer() {
    return (
      <footer className="p-5 md:mt-[100px] mt-[50px]">
        <div className="w-full max-w-[840px] mx-auto flex max-md:flex-col justify-center items-center lg:gap-[100px] gap-10">
          <Link href="/" className="block relative z-10">
              <img className="max-md:max-w-[100px]" src="/images/logo-footer.png" alt="fliQt" />
          </Link>
          <nav>
            <ul className="flex gap-10 lg:gap-[100px] max-md:flex-wrap max-md:justify-center">
              {links.map(({ id, link, text, target }) => (
                <li key={id}>
                  <a
                    href={link}
                    target={target}
                    className="block text-[16px] text-white duration-300 hover:scale-125"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center mt-10 md:mt-[30px] md:mb-[90px] mb-8">
          <a href="" className="text-white text-[14px]">PRIVACY POLICY</a>
        </div>
        <p className="text-center text-[13px] text-white">Copyright © 2024 fliQt.</p>
      </footer>
    );
  }
  