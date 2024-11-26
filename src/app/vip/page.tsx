"use client";
import React, { useEffect } from "react";
import Starfield from "@/module/starfield.js";
export default function Vip() {
  useEffect(() => {
    Starfield.setup({
      container: document.getElementById("starfield-container"),
      starColor: "rgb(255, 255, 255)",
      hueJitter: 0,
      trailLength: 0.8,
      baseSpeed: 2,
      maxAcceleration: 2,
      accelerationRate: 0.05,
      decelerationRate: 0.05,
      minSpawnRadius: 10,
      maxSpawnRadius: 300,
    });
  });

  return (
    <main>
      <div id="starfield-container" className="starfield w-screen h-screen">
        <span className="starfield-origin absolute left-1/2 top-1/2 size-px pointer-events-none opacity-0"></span>
        <div className="size-full flex items-center justify-center">
          <div className="text-white text-center ">
            <h3 className="md:text-[80px] text-[40px] font-bold leading-tight">
              SKALE's <br />
              VIP-only <br />
              information
            </h3>
            <p className="md:text-[24px] text-[18px] md:py-12 py-8">
              - 特別な情報が確認できます -
            </p>
            <button className="button-starfield-origin h-[50px] w-[200px] bg-white/10 flex items-center justify-center rounded-[10px] md:text-[24px] text-[18px]  mx-auto font-bold">
              ログイン
            </button>
            <p className="md:text-[12px] text-[12px] py-5 flex items-center justify-center gap-2">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10.5V8M7.5 5.5H7.50625M13.75 8C13.75 11.4518 10.9518 14.25 7.5 14.25C4.04822 14.25 1.25 11.4518 1.25 8C1.25 4.54822 4.04822 1.75 7.5 1.75C10.9518 1.75 13.75 4.54822 13.75 8Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              VIP申請はこちらから
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
