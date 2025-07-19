"use client";

const Footer = () => {
  return (
    <div className="sticky bottom-0 z-50 bg-slate-800">
      <div className="px-2.5 py-3.5">
        <div className="grid grid-cols-4 text-white">
          <button className="mx-auto">
            <div className="mb-1">
              <img
                src="/assets/images/icon/navigation-home-active.svg"
                className="mx-auto h-5"
                alt=""
              />
            </div>
            <div className="text-[12px] tracking-widest text-gray-100">
              home
            </div>
          </button>
          <button className="mx-auto">
            <div className="mb-1">
              <img
                src="/assets/images/icon/navigation-search.svg"
                className="mx-auto h-5"
                alt=""
              />
            </div>
            <div className="text-[12px] tracking-widest text-gray-100">
              search
            </div>
          </button>
          <button className="mx-auto">
            <div className="mb-1">
              <img
                src="/assets/images/icon/navigation-discovery.svg"
                className="mx-auto h-5"
                alt=""
              />
            </div>
            <div className="text-[12px] tracking-widest text-gray-100">
              discovery
            </div>
          </button>
          <button className="mx-auto">
            <div className="mb-1">
              <img
                src="/assets/images/icon/share.svg"
                className="mx-auto h-5"
                alt=""
              />
            </div>
            <div className="text-[12px] tracking-widest text-gray-100">
              share
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
