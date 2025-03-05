"use client";

const Footer = () => {
  return (
    <footer className="md:h-[655px] h-[400px] flex">
      <div className="flex-[0_0_70px] md:h-[655px] bg-[#1A1A1A] flex justify-center p-5 border-r-2 border-white/40">
      <p className="md:text-[17px] font-extrabold text-[15px] text-white [writing-mode:vertical-rl] [text-orientation:mixed]">TOKYO  UNIVERSITY  HOSPITAL</p>
      </div>
      <div className="md:h-[655px] bg-[url(/assets/images/footer.png)] bg-right-top flex-1 bg-cover flex items-end justify-end px-5 md:px-[100px] py-10">
        <div className="flex gap-12 items-center  max-md:items-end">
          <ul className="text-white text-[14px] lg:text-[20px] font-semibold flex lg:gap-8 gap-5 max-md:flex-col">
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <p className="md:text-[14px] font-inter text-[12px] font-bold text-white">Copyright © 2024 〇〇〇〇</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
