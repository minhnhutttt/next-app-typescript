const Header = () => {

  return (
    <header className="flex items-center fixed z-40 inset-x-0 top-0 md:h-[150px] h-[100px] bg-white/70 border-b border-[#111111]/[0.2] md:px-10 px-6 justify-between">
      <a href="/" className="max-md:w-[120px]"><img src="/assets/images/logo.svg" alt="" /></a>

      <div className="flex items-center md:gap-[64px] gap-4">
        <div className="w-[100px] md:w-[128px] h-[50px] bg-white border border-black rounded-[80px] flex justify-center items-center">
          <p className="flex items-center justify-center h-[25px] text-[#111111]/[0.4] md:text-[21px] text-[16px]">
            <button className="[&.active]:text-[#F34927] active">EN</button>
            <span className="h-[25px] mx-2 bg-[#111111] w-px"></span>
            <button className="[&.active]:text-[#F34927] ">JP</button>
          </p>
        </div>
        <div className="size-[60px] md:size-[100px] flex items-center justify-center bg-white rounded-[6px] border border-[#F34927]">
          <div className="md:w-[58px] w-[36px] md:space-y-4 space-y-2">
            <span className="bg-[#F34927] h-[3px] rounded-full block"></span>
            <span className="bg-[#F34927] h-[3px] rounded-full block"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
