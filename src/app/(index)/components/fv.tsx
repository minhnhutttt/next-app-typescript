"use client";

const FV = () => {
  return (
    <section className="relative overflow-hidden h-[117.333vw] md:h-[52.778vw] md:bg-[url('/assets/images/fv.png')] bg-[url('/assets/images/fv-sp.png')] bg-cover bg-right-top">
        <div className="w-full max-w-[92vw] md:max-w-[73.611vw] dt:max-w-[1060px] mx-auto h-full flex md:pt-[10.417vw] pt-[35vw] dt:pt-[150px]">
            <h1>
                <img className="max-md:w-[58vw] max-dt:w-[48.333vw]" src="/assets/images/fv-text.svg" alt="" />
            </h1>
        </div>
        <figure className="absolute top-0 right-[1.944vw]">
          <img className="w-[60vw] md:w-[37.222vw]" src="/assets/images/fv-bubble.svg" alt="" />
        </figure>
    </section>
  );
};

export default FV;
