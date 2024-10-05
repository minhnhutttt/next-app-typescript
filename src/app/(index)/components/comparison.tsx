"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";

const Comparison = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:mt-[175px] mt-[100px] px-5 z-10">
      <div className="w-full max-w-[1280px] mx-auto">
        <h4 className="fade-up md:text-[48px] text-[28px] font-bold text-center">Comparison withother blockchains</h4>
        <div className="fade-up mt-8 overflow-auto">
            <table className="min-w-[600px] border-collapse w-full text-center [&_th:nth-of-type(2)]:bg-[#0B3FAD] [&_th:nth-of-type(2)]:text-[32px] [&_th]:text-[18px] [&_th]:font-black [&_th]:px-5 [&_th]:h-20 [&_th]:bg-[#2A5298]/[0.4] [&_th]:border [&_th]:border-white [&_td]:border [&_td]:border-white [&_td:nth-of-type(2)]:bg-[#0B3FAD] [&_td:nth-of-type(2)]:text-[24px] [&_td]:text-[18px] [&_td]:font-light [&_td]:px-5 [&_td]:h-20 [&_td]:bg-[#2A5298]/[0.4]">
                <thead>
                    <tr>
                        <th className="!bg-inherit !border-none"></th>
                        <th>DIV</th>
                        <th>BTC</th>
                        <th>ETH</th>
                        <th>SOL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GAS Fee</td>
                        <td>FREE</td>
                        <td>High</td>
                        <td>Low</td>
                        <td>Very low</td>
                    </tr>
                    <tr>
                        <td>Transaction <br />Throughput</td>
                        <td>240,000 TPS</td>
                        <td>7tps</td>
                        <td>14TPS</td>
                        <td>5,000TPS</td>
                    </tr>
                    <tr>
                        <td>Transaction Finality</td>
                        <td>2.5sec</td>
                        <td>60min</td>
                        <td>6min</td>
                        <td>5sec</td>
                    </tr>
                    <tr>
                        <td>Energy Efficiency</td>
                        <td>5 Wh/Tx</td>
                        <td>500,000 Wh/Tx</td>
                        <td>35 Wh/Tx</td>
                        <td>10 Wh/Tx</td>
                    </tr>
                    <tr>
                        <td>Number of Validators</td>
                        <td>200,000</td>
                        <td>10,000</td>
                        <td>632,000</td>
                        <td>2,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
