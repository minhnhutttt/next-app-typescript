import useScrollAnimations from "@/hooks/useScrollAnimations";

const Toppa = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="bg-black bg-[url('/images/bg-toppa.png')] pt-[130px]"
    >
      <div className="bg-[url('/images/toppa-line.png')] max-md:bg-center max-md:bg-cover bg-top w-full max-w-[1255px] mx-auto pb-[100px] md:pb-[200px]">
        <h4 className="fade-up md:text-[48px] text-[24px] text-white text-center font-bold [text-shadow:0px_0px_18.271px_rgba(255,_255,_255,_0.70),_0px_0px_70.734px_rgba(255,_255,_255,_0.50)] bg-[linear-gradient(180deg,_#FFF_-33.08%,_rgba(255,_255,_255,_1)_300.74%)] bg-clip-text [-webkit-background-clip:_text] [-webkit-text-fill-color:_transparent]">
          デキるビジネスマンに支えられ
          <br />
          発行されたNFT名刺は
        </h4>
        <div className="fade-up flex justify-center mt-10 md:mt-14">
          <img
            className="max-md:w-[240px] [box-shadow:0px_0px_250px_0px_#9EFF3E] rounded-[48px]"
            src="/images/toppa-img.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Toppa;
