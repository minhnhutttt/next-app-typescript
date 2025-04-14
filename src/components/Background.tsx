"use client";

import Header from "@/components/header";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Background = () => {
  const ref = useScrollAnimations();
  return (
    <section>
      <div className="fixed right-[6%] top-1/2 h-[200%] w-[1200px] -translate-y-1/2 rotate-[28deg] bg-[url('/assets/images/bg.png')] bg-[length:100%_auto] opacity-80 max-md:hidden"></div>

      <div className="fixed inset-0 [background:linear-gradient(45deg,rgba(236,157,188,1)_0%,rgba(142,129,185,.97)_48%,rgba(126,202,240,.9)_100%)] max-md:hidden">
        <div className="absolute bottom-5 left-5 h-[calc(100%_-_40px)] w-[calc(100%_-_40px)] rounded-xl border-2 border-white/60 max-lg:hidden"></div>
      </div>

      <div className="fixed bottom-12 left-12 max-lg:hidden">
        <div className="justifi-center flex h-full items-end gap-3 text-[15px] font-bold tracking-wider text-white">
          <a className="transition-opacity hover:opacity-80" href="/company">
            / company
          </a>
          <a className="transition-opacity hover:opacity-80" href="/term">
            / terms of service
          </a>
          <a
            className="transition-opacity hover:opacity-80"
            href="/privacy-policy"
          >
            / privacy policy
          </a>
          <a
            className="transition-opacity hover:opacity-80"
            href="mailto:info@open-fave.com"
          >
            / contact
          </a>
        </div>
      </div>

      <div className="fixed left-0 top-1/2 w-[40vw] -translate-y-1/2 max-md:hidden lg:w-[50vw]">
        <div className="flex w-full items-center justify-center gap-8 max-[1100px]:flex-col">
          <div className="relative z-10 max-w-[30vw] lg:max-w-[280px]">
            <img
              src="/assets/images/logo-vertical.svg"
              className="mb-2 w-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-clip bg-white drop-shadow-[0_0_30px_rgba(39,0,70,0.4)] md:ml-[calc(100%_-_640px)] md:mt-16 md:w-[640px] md:rounded-t-xl lg:ml-[50%]"></div>
    </section>
  );
};

export default Background;
