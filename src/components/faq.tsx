"use client";
import { ReactNode, useState } from "react";

type item = {
  id?: string;
  title: string;
  content: ReactNode;
};

type FaqPropsType = {
  items: item[];
};

const Item = ({ title, content }: item) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)] hover-underline">
      <div
        className="pr-[32px] py-[3%] max-md:py-[24px] cursor-pointer relative"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="text-[24px] max-md:text-[18px] leading-none font-sans">
          {title}
          <div className="text-white text-[21px] bg-black w-[1.5em] block flex justify-center items-center rounded-full aspect-square absolute top-1/2 right-0 translate-y-[-50%] rotate-90">
            <img
              src="/assets/images/arrow-w.svg"
              className="max-h-[50%]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`text-[21px] max-md:text-[18px] overflow-hidden font-sans ${isOpen ? "bg-[#eee] px-[16px] py-[24px] h-auto border-t border-solid border-t-[rgba(172,172,172,0.3)]" : "h-[0px]"}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Faq = ({ items }: FaqPropsType) => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <div className="font-anton text-[calc(18px_+_8vw)] mb-32px">
          <h2 className="uppercase leading-[1.25]">FAQS</h2>
        </div>
        <div>
          {items.map((item) => (
            <Item title={item.title} content={item.content} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
