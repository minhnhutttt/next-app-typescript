"use client";

const Footer = () => {
  return (
    <>
        <footer className="border-t border-dashed border-black/50 dark:border-white/50 absolute w-full bottom-0 h-[324px]">
            <div className="pb-[110px] border-b border-[#FF6F6F]">
                <div className="w-[295px] flex md:justify-end max-md:pl-[47px] p-6">
                    <a href="/" className=" max-md:w-[132px]">
                    <img className="dark:hidden" src="/assets/images/logo-footer.png" alt="" />
                    <img className="hidden dark:block" src="/assets/images/logo-footer-dark.png" alt="" />
                    </a>
                </div>
            </div>
        </footer>
        <div className="h-[45px] bg-[url('/assets/images/footer-bar.png')] bg-cover relative mt-[7px]">
        </div>
    </>
  );
};

export default Footer;
