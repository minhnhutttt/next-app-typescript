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
                  TECHNO合同会社
                    <br />
                  </div>
                </div>
              </div>
              <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                <div className="py-[4%]">
                  <div className="text-[24px] max-md:text-[18px]">
                  〒150-0002 東京都渋谷区渋谷2-19-15宮益坂ビルディング609
                  </div>
                </div>
              </div>
              <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                <div className="py-[4%]">
                  <div className="text-[24px] max-md:text-[18px]">
                  info@techno-agency.com
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
