"use client";

const FV = () => {
  return (
    <section className="relative overflow-hidden h-[117.333vw] md:h-[52.778vw] md:bg-[url('/assets/images/fv.png')] bg-[url('/assets/images/fv-sp.png')] bg-cover bg-right-top">
      <div className="absolute top-0 left-0 max-dt:w-[25.764vw] max-md:w-[40vw]">
        <img src="/assets/images/fv-deco.png" alt="" />
      </div>
        <div className="w-full max-w-[92vw] md:max-w-[73.611vw] dt:max-w-[1060px] mx-auto h-full flex md:pt-[10.417vw] pt-[23vw] dt:pt-[150px]">
            <h1>
                <img className="max-md:w-[66vw] max-dt:w-[48.333vw]" src="/assets/images/fv-text.svg" alt="" />
            </h1>
        </div>
        <figure className="anim-poyopoyo absolute top-0 md:right-[1.944vw] right-[-3vw]">
          <img className="w-[50vw] md:w-[37.222vw] max-md:rotate-[12deg]" src="/assets/images/fv-bubble.svg" alt="" />
        </figure>
    </section>
  );
};

export default FV;
