export default function Voice() {
    return (
      <section className="relative md:pt-[74px] pt-16 md:mb-[45px] mb-8 px-4">
          <div className="w-full max-w-[1340px] mx-auto">
            <h4 className="flex items-center justify-center gap-2 md:gap-[30px] md:px-8">
                <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
                <p className="md:text-[48px] text-[24px] font-medium tracking-widest text-center">お客様の声</p>
                <span className="flex-1 h-[3px] md:h-[5px] bg-black max-md:min-w-[24px] max-w-[110px]"></span>
            </h4>
            <div className="mt-[132px]">
                <div className="relative aspect-[506/388] w-[506px]">
                    <figure>
                        <img src="/images/voice-01.png" alt="" />
                    </figure>
                    <div className="absolute">
                        <div className="md:text-[22px]">
                            やっとデジタル化を進め<br />られました！
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
    );
  }
  