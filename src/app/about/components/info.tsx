const Info = () => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <div className="font-anton text-[calc(24px_+_12vw)] mb-[64px] max-md:mb-[32px]">
          <h2 className="text-center uppercase leading-none" translate="no">
            Info
          </h2>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[4vw]">
          <div>
            <div>
              <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                <div className="py-[4%]">
                  <div className="text-[24px] max-md:text-[18px]">
                    The First Confidence Co., Ltd.
                    <br />
                  </div>
                </div>
              </div>
              <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                <div className="py-[4%]">
                  <div className="text-[24px] max-md:text-[18px]">
                    Rm. 5, 13F., No. 288, Nanjing W. Rd., Datong Dist., Taipei
                    City&nbsp;103005&nbsp;, Taiwan (R.O.C.)
                  </div>
                </div>
              </div>
              <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                <div className="py-[4%]">
                  <div className="text-[24px] max-md:text-[18px]">
                    info@1stcon.co
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/images/info.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
