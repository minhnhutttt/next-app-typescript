import { ReactNode } from "react";

type ContactPropsType = {
  title: ReactNode;
  children: ReactNode;
};
const Contact = ({ title, children }: ContactPropsType) => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="grid grid-cols-[.3fr_.7fr] max-md:grid-cols-1 gap-[3em] max-md:gap-[16px] container">
        <div>
          <a href="mailto:info@techno-agency.com" className="text-white text-bold bg-black px-[16px] py-[8px] rounded-full hover:opacity-75 duration-150">
            Contact
          </a>
        </div>
        <div>
          <div className="font-sans text-[calc(18px_+_2vw)] text-[calc(21px_+_4vw)] mb-[24px]">
            {title}
          </div>
          <div className="text-[24px] max-md:text-[18px] max-w-[800px] mb-[24px] font-sans">
            {children}
          </div>
          <a
            href="mailto:info@1stcon.co"
            className="max-w-[200px] flex items-center gap-[16px] uppercase leading-none"
          >
            Contact Us
            <div className="text-[21px] bg-black w-[2em] block flex justify-center items-center rounded-full aspect-square">
              <img
                src="/assets/images/arrow-w.svg"
                className="max-h-[50%]"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
