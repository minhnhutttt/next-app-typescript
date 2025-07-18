"use client";

import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="pb-[3vw] md:pt-[3vw] bg-black overflow-hidden text-white js-sfoot">
      <div className="will-change-transform js-sfoot-inner">
        <div className="grid gap-y-[6vw] grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))]  gap-x-5 pt-[16vw] md:pt-0 pb-[12vw] md:pb-[20vw] px-[4vw] md:px-[2vw]">
          <div className="col-span-12">
            <p className="md:text-[4vw] text-[8vw] font-semibold leading-none">
              Let Sunny inspire your<br />next leap forward
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-[19] contant-link">
            <NavLink href="/contact" className="ul-ink is-full md:text-[4vw] text-[8vw] font-semibold">Book Sunny</NavLink>
          </div>
        </div>
        <div className="border-t border-white border-opacity-25 px-[4vw] md:px-[2vw]">
          <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-y-[10vw] pt-[10vw] md:pt-[2vw] pb-[20vw] md:pb-[20vw]  gap-x-5 font-semibold">
            <div className="col-span-6 md:col-span-3">
              <p className="md:text-[2vw] text-[7vw]">Navigate</p>
              <ul className="flex flex-col md:leading-[2.6rem] leading-[2rem] pt-[4vw] md:pt-[2vw] md:text-[1.3vw] text-[5vw]">
                <li><NavLink href="/speaking" className="text-white/40 transition-colors hover:text-white u-link">Speaking</NavLink></li>
                <li><NavLink href="/media" className="text-white/40 transition-colors hover:text-white u-link">Media</NavLink></li>
                <li><NavLink href="/books" className="text-white/40 transition-colors hover:text-white u-link">Books</NavLink></li>
                <li><NavLink href="/about" className="text-white/40 transition-colors hover:text-white u-link">About</NavLink></li>
                <li><NavLink href="/contact" className="text-white/40 transition-colors hover:text-white u-link">Contact</NavLink></li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="md:text-[2vw] text-[7vw]">Talks</p>
              <ul className="flex flex-col md:leading-[2.6rem] leading-[2rem] pt-[4vw] md:pt-[2vw] md:text-[1.3vw] text-[5vw]">
                <li><NavLink href="/speaking/visionary-leadership" className="text-white/40 transition-colors hover:text-white u-link">Vision</NavLink></li>
                <li><NavLink href="/speaking/culture-of-innovation" className="text-white/40 transition-colors hover:text-white u-link">Culture</NavLink></li>
                <li><NavLink href="/speaking/brands-of-the-future" className="text-white/40 transition-colors hover:text-white u-link">Big Ideas</NavLink></li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3">
              <p className="md:text-[2vw] text-[7vw]">Socials</p>
              <ul className="flex flex-col md:leading-[2.6rem] leading-[2rem] pt-[4vw] md:pt-[2vw] md:text-[1.3vw] text-[5vw]">
                <li><a href="/" className="text-white/40 transition-colors hover:text-white u-link">Instagram</a></li>
                <li><a href="/" className="text-white/40 transition-colors hover:text-white u-link">LinkedIn</a></li>
                <li><a href="/" className="text-white/40 transition-colors hover:text-white u-link">Motto</a></li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 md:col-start-[19]">
              <p className="md:text-[2vw] text-[7vw]">Links</p>
              <ul className="flex flex-col md:leading-[2.6rem] leading-[2rem] pt-[4vw] md:pt-[2vw] md:text-[1.3vw] text-[5vw]">
                <li><a href="/" className="text-white/40 transition-colors hover:text-white u-link">Explore Motto®</a></li>
                <li><a href="/" className="text-white/40 transition-colors hover:text-white u-link">Download press</a></li>
                <li><a href="/" className="text-white/40 transition-colors hover:text-white u-link">kit</a></li>
              </ul>
            </div>
          </div>
          <div className="grid gap-y-[5vw] grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))]  gap-x-5 md:text-[1.5vw] text-[4vw]">
            <div className="col-span-6 md:col-span-8 text-center order-2 text-white/40">Back to top ↑</div>
            <div className="col-span-6 md:col-span-8 text-center md:text-right order-3"><a href="/" className="text-white/40 transition-colors hover:text-white u-link">Privacy Policy</a></div>
            <div className="col-span-12 md:col-span-8 text-center md:text-left order-3 md:order-1 text-white/40">
                    <p className="h4 text-black-4">Copyright © Sunny Bonnell 2005-2025</p>
                </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
