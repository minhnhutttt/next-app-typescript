"use client";

const Introduction = () => {
  return (
    <section className="relative h-full w-full px-2 sm:px-4 md:px-6 flex flex-col justify-center items-center overflow-hidden">
      <div className="overflow-hidden h-12 sm:h-14 md:h-[80px] xl:h-[130px] min-[1366px]:h-[150px]">
        <div className="flex justify-center">
          <p className="text-[24px] sm:text-[32px] md:text-[48px] xl:text-[80px] min-[1366px]:text-[100px] font-bold mt-2 xl:mt-4">
            私たちは
          </p>
          <ul className="animate-[change_16s_infinite] px-4 md:px-6">
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
      <div className="flex justify-center py-10">
        <img className="max-md:w-[80px]" src="/assets/images/arrow.png" alt="" />
      </div>
      <div className="relative w-full z-50 text-center flex flex-col items-center justify-center pt-5 md:pt-10">
        <div className="relative w-full ">
          <div className="flex items-center justify-center pt-5 md:pt-10">
            <div className="flex w-full overflow-hidden font-mohave leading-none">
              <div className="flex-[0_0_auto] whitespace-nowrap text-[150px] md:text-[221px] font-bold italic overflow-hidden text-transparent [text-stroke:1px_#CAFFF7] [-webkit-text-stroke:1px_#CAFFF7] sm:[text-stroke:2px_#CAFFF7] sm:[-webkit-text-stroke:2px_#CAFFF7] animate-[loop_50s_-25s_linear_infinite]">
                CONVERSION&nbsp;FIRST&nbsp;CONVERSION&nbsp;FIRST&nbsp;
              </div>
              <div className="flex-[0_0_auto] whitespace-nowrap text-[150px] md:text-[221px] font-bold italic overflow-hidden text-transparent [text-stroke:1px_#CAFFF7] [-webkit-text-stroke:1px_#CAFFF7] sm:[text-stroke:2px_#CAFFF7] sm:[-webkit-text-stroke:2px_#CAFFF7] animate-[loop2_50s_linear_infinite]">
                CONVERSION&nbsp;FIRST&nbsp;CONVERSION&nbsp;FIRST&nbsp;
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="relative z-20 text-[40px] md:text-[60px] xl:text-[100px] font-extrabold text-black leading-none">
              コンバージョンファースト
            </h1>
          </div>
        </div>
        <div className="relative z-10">
          <p className="text-[20] md:text-[32px] font-black text-black leading-relaxed">
            埋もれたCVR(コンバージョン)を表舞台へ。
            <br />
            &ldquo;説明から誘導&rdquo;ではなく、&ldquo;目的から詳細&rdquo;へ。
            <br />
            ユーザーのゴールを最速で可視化するWeb構造をご提案いたします。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
