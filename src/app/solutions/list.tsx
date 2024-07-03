"use client"
import useBackground from "@/hooks/useBackground";

const List = () => {
  useBackground();
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <h2 className="font-anton text-[calc(18px_+_8vw)] mb-[24px] border-b border-solid border-b-[rgba(172,172,172,0.3)]">
          List
        </h2>
        <div>
          <a
            className="font-anton text-[calc(16px_+_4vw)] text-white mb-[64px] p-[3%] flex items-end block bg-[#eee] rounded-[12px] aspect-[2.4/1] max-md:aspect-[1.7/1] relative z-20 overflow-hidden"
            href="/research"
          >
            Research
            <div className="text-[21px] absolute top-[5%] right-[2%] bg-white w-[2em] block flex justify-center items-center rounded-full aspect-square">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%] rotate-[-45deg]"
                alt=""
              />
            </div>
            <div className="img-container absolute bottom-[-100px] left-0 h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-center bg-cover z-[-1] bg-[url('/assets/images/design.jpg')]"></div>
          </a>
          <a
            className="font-anton text-[calc(16px_+_4vw)] text-white mb-[64px] p-[3%] flex items-end block bg-[#eee] rounded-[12px] aspect-[2.4/1] max-md:aspect-[1.7/1] relative z-20 overflow-hidden"
            href="/agency"
          >
            Agency
            <div className="text-[21px] absolute top-[5%] right-[2%] bg-white w-[2em] block flex justify-center items-center rounded-full aspect-square">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%] rotate-[-45deg]"
                alt=""
              />
            </div>
            <div className="img-container absolute bottom-[-100px] left-0 h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-center bg-cover z-[-1] bg-[url('/assets/images/development.jpg')]"></div>
          </a>
          <a
            className="font-anton text-[calc(16px_+_4vw)] text-white mb-[64px] p-[3%] flex items-end block bg-[#eee] rounded-[12px] aspect-[2.4/1] max-md:aspect-[1.7/1] relative z-20 overflow-hidden"
            href="/digital-marketing"
          >
            DIGITAL MARKETING
            <div className="text-[21px] absolute top-[5%] right-[2%] bg-white w-[2em] block flex justify-center items-center rounded-full aspect-square">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%] rotate-[-45deg]"
                alt=""
              />
            </div>
            <div className="img-container absolute bottom-[-100px] left-0 h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-center bg-cover z-[-1] bg-[url('/assets/images/marketing.jpg')]"></div>
          </a>
          <a
            className="font-anton text-[calc(16px_+_4vw)] text-white mb-[64px] p-[3%] flex items-end block bg-[#eee] rounded-[12px] aspect-[2.4/1] max-md:aspect-[1.7/1] relative z-20 overflow-hidden"
            href="/research-shield-ai"
          >
            Research Shield+AI
            <div className="text-[21px] absolute top-[5%] right-[2%] bg-white w-[2em] block flex justify-center items-center rounded-full aspect-square">
              <img
                src="/assets/images/arrow.svg"
                className="max-h-[50%] rotate-[-45deg]"
                alt=""
              />
            </div>
            <div className="img-container absolute bottom-[-100px] left-0 h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-center bg-cover z-[-1] bg-[url('/assets/images/techno_researchi_shield.png')]"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default List;
