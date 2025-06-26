"use client";

const Introduction = () => {
  return (
    <section className="relative h-full w-full px-2 sm:px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden">
      <div data-scroll className="fade-up overflow-hidden h-16 sm:h-20 md:h-[100px] xl:h-[150px] min-[1366px]:h-[180px]">
        <div className="flex justify-center">
          <p className="text-[24px] sm:text-[32px] md:text-[48px] xl:text-[80px] min-[1366px]:text-[100px] font-bold mt-2 xl:mt-4">
            私たちは
          </p>
          <ul className="animate-[change_20s_infinite] px-4 md:px-6">
            {["成果に", "改善に", "導線に", "集客に", "効果に", "早さに"].map(
              (item, index) => (
                <li
                  className="text-[36px] sm:text-[42px] md:text-[58px] xl:text-[100px] min-[1366px]:text-[120px] font-bold"
                  key={index}
                >
                  {item}
                </li>
              )
            )}
          </ul>
          <p className="text-[24px] sm:text-[32px] md:text-[48px] xl:text-[80px] min-[1366px]:text-[100px] font-bold mt-2 xl:mt-4">
            本気です。
          </p>
        </div>
      </div>
      <div data-scroll className="fade-up flex justify-center py-10">
        <img className="max-md:w-[80px]" src="/assets/images/arrow.png" alt="" />
      </div>
      <div className="relative w-full z-50 text-center flex flex-col items-center justify-center pt-5 md:pt-10">
        <div data-scroll className="fade-up relative w-full ">
          <div className="flex items-center justify-center pt-5 md:pt-10">
            <div className="flex w-full overflow-hidden font-mohave leading-none">
              <div className="flex-[0_0_auto] text-[#E8FEF6] whitespace-nowrap text-[150px] md:text-[221px] font-bold italic overflow-hidden [filter:drop-shadow(0_0_1px_#05BAEA)] animate-[loop_50s_-25s_linear_infinite]">
                CONVERSION&nbsp;FIRST&nbsp;CONVERSION&nbsp;FIRST&nbsp;
              </div>
              <div className="flex-[0_0_auto] text-[#E8FEF6] whitespace-nowrap text-[150px] md:text-[221px] font-bold italic overflow-hidden [filter:drop-shadow(0_0_1px_#05BAEA)] animate-[loop2_50s_linear_infinite]">
                CONVERSION&nbsp;FIRST&nbsp;CONVERSION&nbsp;FIRST&nbsp;
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="relative z-20 text-[40px] md:text-[60px] xl:text-[100px] font-extrabold  leading-none">
              コンバージョン<br className="md:hidden" />ファースト
            </h1>
          </div>
        </div>
        <div className="relative z-10">
          <p data-scroll className="fade-up text-[20px] md:text-[32px] font-black leading-relaxed max-md:px-5 max-md:text-left">
            埋もれたCVR(コンバージョン)を表舞台へ。
            <br className="max-md:hidden" />
            &ldquo;説明から誘導&rdquo;ではなく、&ldquo;目的から詳細&rdquo;へ。
            <br className="max-md:hidden" />
            ユーザーのゴールを最速で可視化するWeb構造をご提案いたします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
