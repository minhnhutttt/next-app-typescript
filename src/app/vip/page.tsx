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
      baseSpeed: 0.4,
      maxAcceleration: 0.3,
      accelerationRate: 0.2,
      decelerationRate: 0.2,
      minSpawnRadius: 100,
      maxSpawnRadius: 600,
    });
  });

  return (
    <main>
      <div id="starfield-container" className="starfield w-screen h-screen">
        <span className="starfield-origin absolute left-1/2 top-1/2 size-px pointer-events-none opacity-0"></span>
        <div className="size-full flex items-center justify-center">
          <div className="text-white text-center ">
            <h3 className="md:text-[80px] text-[40px] font-bold leading-tight mb-8">
              SKALE's <br />
              VIP-only <br />
              information
            </h3>
            <button className="button-starfield-origin h-[50px] w-[200px] leading-none bg-black flex items-center justify-center rounded-[10px] md:text-[24px] text-[20px] mx-auto  border whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gradient-rainbow-button px-4 py-2 jumper-shadow shaky">
            Login
            </button>
            <p className="md:text-[12px] text-[12px] py-5 flex items-center justify-center gap-2 leading-none">
            <svg
              className="w-[20px]"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 9.5V7M7.5 4.5H7.50625M13.75 7C13.75 10.4518 10.9518 13.25 7.5 13.25C4.04822 13.25 1.25 10.4518 1.25 7C1.25 3.54822 4.04822 0.75 7.5 0.75C10.9518 0.75 13.75 3.54822 13.75 7Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
