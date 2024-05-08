export default function GoldenRatio() {
    return (
      <section className="bg-[url('/assets/images/fv-bg.png')] bg-bottom bg-[length:100%_100%] pt-7 md:pt-[70px] pb-[44vw] md:pb-[310px] px-5">
        <div className="w-full max-w-[1556px] mx-auto relative">
            <h3 className="absolute max-md:w-[22vw] max-md:max-w-[150px] max-[1560px]:w-[11vw] right-[3vw] md:right-[18.2%] top-0">
                <img src="/assets/images/fv-label.png" alt="" />
            </h3>
            <div className="md:pt-[4.2%] md:pb-[5%] pt-12 pb-[14vw]">
                <figure>
                    <img className="max-md:hidden" src="/assets/images/fv-main.png" alt="" />
                    <img className="md:hidden" src="/assets/images/fv-main-sp.png" alt="" />
                </figure>
            </div>
            <h4 className="absolute max-md:w-[55vw] max-w-[400px] max-[1560px]:w-[37.5vw] left-[16vw] md:left-[25.4%] bottom-0">
                <img src="/assets/images/fv-text.png" alt="" />
            </h4>
        </div>
      </section>
    );
  }
  