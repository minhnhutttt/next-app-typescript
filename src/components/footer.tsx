
const Footer = () => {
    return (
      <footer className="relative px-5 md:px-10 bg-[#111111] md:pt-[64px] py-8 z-10">
          <div className="w-full max-w-[1240px] mx-auto">
            <a href="/" className="flex">
              <img className="max-md:w-[60%]" src="/assets/images/seikai-footer.svg" alt="" />
            </a>
            <div className="flex items-end md:justify-between mt-28 md:mt-[165px] gap-10 max-md:flex-col-reverse">
              <ul className="md:text-[19px] text-[15px] font-medium text-white/80 flex gap-10">
                <li><a href="/" className="block p-4">利用規約</a></li>
                <li><a href="/" className="block p-4">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
      </footer>
    );
  };
  
  export default Footer;
  