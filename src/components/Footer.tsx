
const Footer = () => {
    return (
      <>
      <footer className="md:mt-[12rem] max-md:mb-[12rem]">
            <div className="w-[90%] ml-auto mr-auto rounded-[10rem] px-32 py-12 mb-24 flex items-center justify-between [box-shadow:0_0_2rem_rgba(0,_0,_0,_0.1)] max-w-[140rem] max-md:flex-col max-md:px-[0] max-md:py-12 max-md:mb-16">
                <a href="/" className="md:w-[25rem] w-[12rem]">
                    <img src="/assets/img/logo-black.svg" alt="p2p bonus" />
                </a>
                <ul className="flex items-center justify-center max-md:mt-[3rem] divide-x divide-[#333]">
                    <li><a className="text-[2rem] tracking-widest px-20 py-[0] max-md:text-[1.2rem] max-md:px-4 max-md:py-[0] max-md:block" href="/privacy">個人情報保護</a></li>
                    <li><a className="text-[2rem] tracking-widest px-20 py-[0] max-md:text-[1.2rem] max-md:px-4 max-md:py-[0] max-md:block" href="/terms">利用規約</a></li>
                    <li><a className="text-[2rem] tracking-widest px-20 py-[0] max-md:text-[1.2rem] max-md:px-4 max-md:py-[0] max-md:block" href="mailto:info@p-2-p-bonus.com">お問い合わせ </a></li>
                </ul>
            </div>
            <p className="text-center p-12 tracking-widest max-md:p-[2rem]">&copy;©2025 p2p bonus</p>
        </footer>

        <a href="/" className="fixed w-full bg-[#f63c4c] text-[#fff] md:hidden items-center justify-center gap-4 px-12 py-[1.3rem] text-[2rem] tracking-wider flex bottom-[0] max-md:left-[0] max-md:[transition:0.3s_ease-in-out] z-[99]">
            <img className="w-[2.4rem]" src="/assets/img/ico_line.svg" alt="line" />
                <p>お問い合わせ</p>
                <img className="w-[0.6rem] ml-4 mt-[0.3rem]" src="/assets/img/arw-1.svg" alt="arrow" />
        </a>
        </>
    );
  };
  
  export default Footer;
  