"use client";

const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-[#0321BE] md:pt-[150px] pt-20">
        <div className="w-full max-w-[1080px] mx-auto px-5">
            <div className="flex justify-center items-center">
                <a href="/" className="relative w-full max-w-[800px] h-[100px] md:h-[200px] flex items-center justify-center md:text-[80px] text-[28px] font-bold border-2 border-white hover:opacity-70 duration-150">
                WHITEPAPER
                <span className="absolute right-5"><img className="max-md:w-10" src="/assets/images/arrow-wp.svg" alt="" /></span>
                </a>
            </div>
            <div className="mt-[60px] md:mt-[105px] mb-8 md:mb-12">
                <ul className="flex flex-wrap gap-x-5 gap-y-4 md:text-[16px] text-[15px]">
                    <li><a className="hover:opacity-75 duration-150" href="/#technology">Background of HGF Technology</a></li>
                    <li><a className="hover:opacity-75 duration-150" href="/#functions">Functions of HGF</a></li>
                    <li><a className="hover:opacity-75 duration-150" href="/#fields">Fields of application</a></li>
                    <li><a className="hover:opacity-75 duration-150" href="/#research">Current Status of Research</a></li>
                    <li><a className="hover:opacity-75 duration-150" href="/#technical">Technical issues and solutions</a></li>
                    <li><a className="hover:opacity-75 duration-150" href="/#ethical">Ethical and regulatory issues</a></li>
                    <li><a className="hover:opacity-75 duration-150" href="/#framework">HGF DAO Framework</a></li>
                    <li><a className="hover:opacity-75 duration-150" href="/#prospects">Future Prospects</a></li>
                    <li><a className="hover:opacity-75 duration-150" href="/#general">General summary</a></li>
                </ul>
            </div>
            <p className="text-center text-[13px] md:text-[15px] font-light">© 2024 HGF DAO</p>
        </div>
        
        <div className="flex justify-center items-center md:mt-16 mt-8">
                <img src="/assets/images/hgf-dao-footer.svg" alt="" />
            </div>
    </section>
  );
};

export default Footer;
