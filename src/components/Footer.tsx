
const Footer = () => {
    return (
      <footer className="pt-20 md:pt-[160px] lg:pt-[250px] pb-4 px-4 relative overflow-hidden bg-[url(/assets/images/footer-bg.png)] bg-top bg-[size:100%_auto]">
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center justify-between md:mb-20 mb-12">
        <div className="max-lg:mb-12 max-md:mb-10 max-md:text-center">
          <div className="mb-2">
            <a href="/" className="max-md:w-[120px]">
              <img src="/assets/images/logo2.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end items-center text-[20px] font-light md:divide-x divide-black max-md:flex-col max-md:gap-4">
          <a href="/privacy" className="whitespace-nowrap hover:opacity-75 duration-150 py-1 px-5 md:px-10 xl:px-16 md:h-10">Privacy Policy</a>
          <a href="/terms" className="whitespace-nowrap hover:opacity-75 duration-150 py-1 px-5 md:px-10 xl:px-16 md:h-10">利用規約</a>
          <a href="https://lin.ee/sQ5Hh6G" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:opacity-75 duration-150 py-1 px-5 md:px-10 xl:px-16 md:h-10">お問い合わせ</a>
        </div>
      </div>
      <div className="text-center font-light md:text-[14px] text-[12px] tracking-widest">
        <p>©2025 Unique Data Mining</p>
      </div>
    </footer>
    );
  };
  
  export default Footer;
  