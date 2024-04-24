import useScrollAnimations from "@/hooks/useScrollAnimations";

const Toppa = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="bg-black bg-[url('/images/bg-toppa.png')] bg-cover pt-[130px]"
    >
      <div data-scroll="out" className="w-full max-w-[1255px] mx-auto pb-[100px] md:pb-[200px] relative">
        <span className="zoom scale-0 duration-1000 absolute inset-0 bg-[url('/images/toppa-line.png')] max-md:bg-center max-md:bg-[length:100%_auto] bg-no-repeat bg-top "></span>
        <h4 className="fade-up md:text-[48px] text-[24px] text-white text-center font-bold [text-shadow:0px_0px_18.271px_rgba(255,_255,_255,_0.70),_0px_0px_70.734px_rgba(255,_255,_255,_0.50)] bg-[linear-gradient(180deg,_#FFF_-33.08%,_rgba(255,_255,_255,_1)_300.74%)] bg-clip-text [-webkit-background-clip:_text] [-webkit-text-fill-color:_transparent]">
          デキるビジネスマンに支えられ
          <br />
          発行されたNFT名刺は
        </h4>
        <div  className="fade-up flex justify-center mt-10 md:mt-14">
          <div className="centerflipcards ">
            <div className="square-flip w-[380px] h-[392px] max-md:w-[240px] max-md:h-[248px]">
              <div className="square bg-[url('/images/toppa-img.png')]">
                <div className="square-container">
                </div>
              </div>
              <div className="square2 bg-[url('/images/toppa-img.png')] [box-shadow:0px_0px_250px_0px_#9EFF3E] md:rounded-[48px] rounded-[30px] overflow-hidden">
                <div className="square-container2">
                  <div className="align-center">
                    <img
                      src="/images/toppa-text.png"
                      className="boxshadow"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toppa;
