"use client";

import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Issue = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[55px] mt-[32px] relative md:pt-[110px] pt-[60px] md:pb-[180px] pb-[100px] px-5">
      <span className="absolute inset-0 bg-[#0D0A8E] -skew-y-[3.5deg]"></span>
      <div className="w-full max-w-[1320px] mx-auto relative">
        <Title sub={<span className="text-[#1E78FF]">Sample issue</span>}>
          <span className="text-white">
            簡単サンプル発行
            <span className="md:text-[60px] text-[8vw]">3</span>ステップ
          </span>
        </Title>
        <div className="flex flex-wrap justify-center gap-6 md:gap-[30px] mt-5">
            <div className="fade-up bg-white w-[420px] rounded-[30px] md:pt-[60px] md:pb-11 pt-8 pb-6 md:px-7 px-5">
                <div className="flex justify-center">
                    <p className="text-center md:text-[22px] text-[17px] font-semibold">DIVER Bizアプリをインストール</p>
                </div>
                <div className="flex flex-col items-center justify-center md:pt-[50px] pt-6">
                    <figure>
                        <img className="max-md:w-[120px]" src="/assets//images/logo-diver.png" alt="DIVER Biz" />
                    </figure>
                    <div className="md:pt-[30px] pt-5 space-y-4">
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block duration-200 hover:opacity-75">
                            <img className="max-md:w-[180px]" src="/assets/images/btn-appstore.png" alt="" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="block duration-200 hover:opacity-75">
                            <img className="max-md:w-[180px]" src="/assets/images/btn-googleplay.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="fade-up bg-white w-[420px] rounded-[30px] md:pt-[60px] md:pb-11 pt-8 pb-6 md:px-7 px-5">
                <div className="flex justify-center">
                    <p className="md:text-[22px] text-[17px] font-semibold">メールで証明書にしたい項目、内容を記載、ファイルを添付</p>
                </div>
                <div className="flex flex-col items-center justify-center md:pt-[50px] pt-6">
                    <figure>
                        <img className="max-md:w-[280px]" src="/assets//images/img-issue-02.png" alt="メールで証明書にしたい項目、内容を記載、ファイルを添付" />
                    </figure>
                </div>
            </div>
            <div className="fade-up bg-white w-[420px] rounded-[30px] md:pt-[60px] md:pb-11 pt-8 pb-6 md:px-7 px-5">
                <div className="flex justify-center items-center">
                    <p className="md:text-[22px] text-[17px] font-semibold">発行されたNFTは指定いただいたDIVER Bizアプリで確認できる！</p>
                </div>
                <div className="flex flex-col items-center justify-center md:pt-[50px] pt-6">
                    <figure>
                        <img className="max-md:w-[280px]" src="/assets//images/img-issue-03.png" alt="発行されたNFTは指定いただいたDIVER Bizアプリで確認できる！" />
                    </figure>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Issue;
