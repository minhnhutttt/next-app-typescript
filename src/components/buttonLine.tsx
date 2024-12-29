
const ButtonLine = () => {
    return (
      <div className="w-full md:max-w-[360px] h-[45px] md:h-[86px] flex group">
        <a href="/" target="_blank" className="group-hover:mt-[6px] group-hover:[box-shadow:0px_0px_0px_0px_#005100] duration-150 flex items-center w-full h-10 md:h-20 justify-center md:gap-2.5 gap-2 bg-[#01B902] rounded-[60px] font-medium [box-shadow:0px_6px_0px_0px_#005100] xl:text-[24px] text-[18px] text-white">
            <img className="max-md:w-5" src="/assets/images/ic-line.svg" alt="" />
            お問い合わせLINE
        </a>
      </div>
    );
  };
  
  export default ButtonLine;
  