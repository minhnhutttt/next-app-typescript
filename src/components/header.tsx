const Header = () => {

  return (
    <header className="flex items-center fixed z-[99] inset-x-0 top-0 md:h-[120px] h-[100px] bg-black/70 md:px-10 px-6 justify-between">
      <a href="/" className="max-md:w-[120px]"><img src="/assets/images/logo.svg" alt="" /></a>

      <div className="flex items-center md:gap-[64px] gap-4">
        <div className="w-[100px] md:w-[128px] h-[50px] bg-[#808080]/[0.15] border border-white/20 rounded-[80px] flex justify-center items-center">
          <p className="flex items-center justify-center h-[25px] text-[#FAE2D7] md:text-[21px] text-[16px]">
            <button className="[&.active]:text-white active">EN</button>
            <span className="h-[25px] mx-2 bg-white w-px"></span>
            <button className="[&.active]:text-white ">JP</button>
          </p>
        </div>
        <div className="size-[60px] md:size-[100px] flex items-center justify-center bg-[#141414] rounded-[6px]">
          <div className="md:w-[58px] w-[36px] md:space-y-4 space-y-2">
            <span className="bg-white h-[3px] rounded-full block"></span>
            <span className="bg-white h-[3px] rounded-full block"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
