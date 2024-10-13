"use client"

const Button = () => {

  return (
    <a href="#" target='_blank' className="fade-up relative bg-white rounded-[50px] block mx-auto py-[14px] md:w-[320px] w-[280px] max-w-[100%] text-black md:text-[32px] text-[16px] text-center font-medium md:shadow-[4px_4px_0_#000000] shadow-[2px_2px_0_#000000]  border-black border-2 tracking-wider">
        WHITEPAPER
        <figure className="absolute md:right-2 right-1 top-[50%] translate-y-[-50%]">
            <img className="max-md:w-1/2" src="/assets/images/arrow.svg" alt="" />
        </figure>
    </a>
  );
};

export default Button;
