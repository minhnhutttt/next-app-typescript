"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Token = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden sm:px-[30px] px-4 pb-[110px]"
    >
        <div className="relative">
            <h3 className="fade-up sm:text-[48px] text-[28px] font-bold text-center sm:border-b-[15px] border-b-[8px] border-[#3A86FF]">
                <p>トークノミクス</p>
            </h3>
            <div className="sm:pt-[52px] pt-7">
                <div className="fade-up">
                    <table className="w-full border-collapse sm:[&_td:nth-of-type(1)]:text-[32px] [&_td:nth-of-type(1)]:text-[18px] [&_td:nth-of-type(1)]:font-bold sm:text-[36px] text-[20px] sm:[&_td]:px-5 sm:[&_td]:h-[116px] [&_td]:h-20 [&_td]:px-4 border border-gray-500 [&_td]:border [&_td]:border-gray-500">
                        <tr>
                            <td>トークン名</td>
                            <td>FAVEコイン</td>
                        </tr>
                        <tr>
                            <td>ティッカー</td>
                            <td>FAVE</td>
                        </tr>
                        <tr>
                            <td>総発行量 </td>
                            <td>1,000,000 FAVE<br />※100万枚</td>
                        </tr>
                        <tr>
                            <td>ブロック<br />チェーン</td>
                            <td>DIVER Chain</td>
                        </tr>
                        <tr>
                            <td>トークン規格</td>
                            <td>DRC-20</td>
                        </tr>
                    </table>
                </div>
                <div className="fade-up flex items-start justify-start sm:pt-10 pt-6">
                    <img src="/assets/images/graph.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Token;
