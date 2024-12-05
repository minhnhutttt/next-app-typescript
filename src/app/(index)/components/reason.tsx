"use client";
const Reason = () => {
  return (
    <section className="md:pt-[9em] pt-[5em] md:px-[2em] px-[1em]">
      <div className="grid lg:grid-cols-2 p-[1em] md:p-[4em] items-start rounded-[.75em] gap-x-[3em] md:gap-y-[4rem] gap-y-[2rem] border border-black">
        <div>
          <div className="text-[1em] mb-[1em] font-medium uppercase">
            Company Profile
          </div>
          <div className="max-w-[32em]">
            <h2 className="md:text-[1.5em] text-[1em] font-bold">
              <span className="text-[#c4c4c4]">私たちは、</span>変革を恐れぬ者たち<span className="text-[#c4c4c4]">の集まりです。 </span>
              <br />
              観る、解く、拓く、超える、魅せる、導く、創る、広げる、前進する─── 
              <br />
              <span className="text-[#c4c4c4]">それが</span>SKALE<span className="text-[#c4c4c4]">という会社の</span>在り方であり、存在意義<span className="text-[#c4c4c4]">です。</span>
            </h2>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-x-[4em] gap-y-[2em] leading-[1.3]">
            <div>
              <div className="mb-[.75em]">
                <div className="size-[60px]">
                  <img src="/assets/images/reason-01.svg" alt="" />
                </div>
              </div>
              <div className="mb-[.75em]">
                <h3 className="text-[1em] md:text-[1.5em] font-bold">会社名</h3>
              </div>
              <p className="md:text-[1em] text-[0.75em]">SKALE株式会社｜SKALE CO.,Ltd.</p>
            </div>
            <div>
              <div className="mb-[.75em]">
                <div className="size-[60px]">
                <img src="/assets/images/reason-02.svg" alt="" />
                </div>
              </div>
              <div className="mb-[.75em]">
                <h3 className="text-[1em] md:text-[1.5em] font-bold">事業内容</h3>
              </div>
              <p className="md:text-[1em] text-[0.75em]">デジタル領域における包括的なソリューションを提供します。</p>
            </div>
            <div>
              <div className="mb-[.75em]">
                <div className="size-[60px]">
                <img src="/assets/images/reason-03.svg" alt="" />
                </div>
              </div>
              <div className="mb-[.75em]">
                <h3 className="text-[1em] md:text-[1.5em] font-bold">本社所在地</h3>
              </div>
              <p className="md:text-[1em] text-[0.75em]">〒160-0023 東京都新宿区西新宿３丁目２−９ 新宿ワシントンビル本館 2F</p>
            </div>
            <div>
              <div className="mb-[.75em]">
                <div className="size-[60px]">
                <img src="/assets/images/reason-04.svg" alt="" />
                </div>
              </div>
              <div className="mb-[.75em]">
                <h3 className="text-[1em] md:text-[1.5em] font-bold">代表者名</h3>
              </div>
              <p className="md:text-[1em] text-[0.75em]">
                経営責任者 加藤 慶也 <br />
                執行責任者 工藤 拓矢
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
