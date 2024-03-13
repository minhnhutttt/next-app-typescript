export default function Footer() {
  return (
    <><div className="relative mt-10 md:mt-[60px]">
    <div className="w-[91%] border-t border-r rounded-tr-[102px] border-white/50 pl-14 lg:pl-[360px]">
      <div className="flex gap-6 pr-8 items-start">
        <div className="border-b border-white/50 flex-1">
          <div className="py-6"><img className="max-md:w-[100px]" src="/images/ardrex.png" alt="" /></div>
        </div>
        <figure className="pb-3 mt-[91px]">
          <img className="max-md:w-[50px]" src="/images/code.png" alt="" />
        </figure>
      </div>
    </div>
  </div>
    <footer className="bg-black relative z-10 px-5 md:px-10 md:h-[126px] h-[100px] flex justify-end py-9">
      <p className="text-[14px] text-white">Copyright 2024 Ardorex Inc.</p>
    </footer>
    </>
  );
}
