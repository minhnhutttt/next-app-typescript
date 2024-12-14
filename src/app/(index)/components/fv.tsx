const FV = () => {
  return (
    <section className="bg-cover relative">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/fv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-full bg-[url('/assets/images/fv-overlay.png')] relative pt-20 md:pt-[120px] text-white px-5 flex flex-col justify-between">
        <h1 className="text-center text-[8.889vw] dt:text-[128px] font-extrabold leading-[1.2] pt-10">
          Beyond Traffic. <br />
          Beyond Borders.
        </h1>
        <div className="flex justify-between w-full max-w-[1220px] mx-auto gap-7 mb-[-68px] relative px-2 md:mt-[82px] mt-12 max-md:flex-col max-md:items-center">
          <div className="max-w-[510px]">
            <p className="md:text-[24px] text-[18px] max-md:text-center leading-loose">
              Towards a new standard of payment that supports the revolution in
              sky mobility
            </p>
            <div className="md:mt-16 mt-7 max-md:flex max-md:justify-center">
              <a
                href="/"
                className="w-[280px] md:w-[320px] h-[50px] md:h-[64px] rounded-[50px] flex items-center justify-center relative bg-[linear-gradient(274deg,_#CE0016_21.7%,_#FF384A_97.85%)] [box-shadow:0px_4px_20px_0px_rgba(255,_56,_74,_0.50)] md:text-[20px] text-[16px]"
              >
                WHITEPAPER
                <svg
                className="absolute right-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                >
                  <path
                    d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.2929L18.3431 0.928934C17.9526 0.538409 17.3195 0.538409 16.9289 0.928934C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM1 9L24 9L24 7L1 7L1 9Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative md:min-h-[419px]">
            <img className=" object-cover" src="/assets/images/fv-img.png" alt="" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-[calc(100%-120px)] max-w-[60%] right-0 z-10">
            <img src="/assets/images/img-r.png" alt="" />
        </div>
    </section>
  );
};

export default FV;
