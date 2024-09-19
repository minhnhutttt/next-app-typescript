const Info = () => {
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div className="container">
        <div className="mb-[64px] font-anton text-[calc(24px_+_12vw)] max-md:mb-[32px]">
          <h2 className="text-center uppercase leading-none" translate="no">
            Info
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-[4vw] max-md:grid-cols-1">
          <div>
            <div>
              <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                <div className="py-[4%]">
                  <div className="text-[24px] max-md:text-[18px]">
                    株式会社 Yumeaci
                    <br />
                  </div>
                </div>
              </div>
              <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                <div className="py-[4%]">
                  <div className="text-[24px] max-md:text-[18px]">
                    〒125-0002 東京都葛飾区西亀有4-19-5
                  </div>
                </div>
              </div>
              <div className="border-b border-solid border-b-[rgba(172,172,172,0.3)]">
                <div className="py-[4%]">
                  <div className="text-[24px] max-md:text-[18px]">
                    info@yumeaci.co.jp
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/assets/images/techno_about.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
