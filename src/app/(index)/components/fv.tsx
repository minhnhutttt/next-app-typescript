"use client";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";

const FV = () => {
  const [NavOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <section className="relative px-5 md:px-10 bg-[url('/assets/images/fv-bg.png')] bg-[length:100%_auto] bg-no-repeat overflow-hidden">
      <div className="absolute inset-x-0">
        <div className="flex absolute top-0 left-0 z-10">
          <div className="relative">
            <img
              className="max-md:w-[180px] max-dt:w-[23.542vw]"
              src="/assets/images/logo-bg.png"
              alt=""
            />
            <a
              href="/"
              className="absolute inset-0 flex justify-start items-start pl-4 md:pl-[3.889vw] dt:pl-14 pt-5 md:pt-[3.333vw] dt:pt-12"
            >
              <img
                className="max-md:w-[100px] max-dt:w-[8.958vw] max-w-[129px]"
                src="/assets/images/logo.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div
          className={`max-xl:fixed max-w-[1360px] mx-auto max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:bg-black/90 z-[99] max-xl:overflow-y-scroll flex items-center justify-end max-xl:flex-col ${
            NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
          }`}
        >
          <ul className="flex items-end max-md:flex-col text-[18px] font-bold gap-10 md:h-[56px]">
            <li>
              <a href="/" onClick={close} className="">
                よくある質問
              </a>
            </li>
            <li>
              <a href="/" onClick={close} className="">
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
        <button
          className={`group  z-[99] h-6 w-8 xl:hidden absolute right-5 top-5 ${
            NavOpen ? "active fixed" : ""
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute top-2.5 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-black transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </button>
      </div>
      <div className="relative pb-[8.333vw] dt:pb-[120px]">
        <div className="w-full max-w-[1360px] mx-auto flex items-center justify-center relative pt-[56px]">
          <div className="size-full bg-[url('/assets/images/fv-img.png')] h-[440px] md:h-[690px] bg-center max-md:bg-cover flex items-center justify-center rounded-[60px]">
            <div className="absolute top-0 left-[9.722vw] dt:left-[140px] z-20 max-md:hidden">
              <img
                className="max-dt:w-[26.875vw]"
                src="/assets/images/fv-person2.png"
                alt=""
              />
            </div>
            <h1>
              <img src="/assets/images/fv-text.png" alt="" />
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute w-[15.417vw] aspect-[222/251] bg-[url('/assets/images/fv-deco.png')] bg-cover bottom-0 right-0"></div>
    </section>
  );
};

export default FV;
