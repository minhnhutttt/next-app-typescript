"use client";
import { ReactNode } from "react";

const UnderlineText = ({ children }: { children: ReactNode }) => {
  return (
    <span data-scroll className="group relative">
      {children}
      <span className="w-full block h-4 absolute top-auto -bottom-[12px] left-[.0625rem] right-auto">
        <span className="justify-center items-center w-full h-full flex">
            {/* <span className="w-full h-4 bg-[linear-gradient(90deg,_rgba(150,68,255,1)_0%,_rgba(236,98,98,1)_80%)]"></span> */}
          <svg
            className="w-full !h-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            className="group-data-[scroll=in]:animate-[underlineText_1s_ease-in-out_forwards]"
              id="control-line"
              pathLength="1"
              d="M3 13C49.7892 6.25733 96.9501 3 144 3"
              stroke="url(#paint0_linear_463_797)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDashoffset={1}
              strokeDasharray={1}
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_463_797"
                x1="3"
                y1="8"
                x2="144"
                y2="8"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FDB83F"></stop>
                <stop offset="1" stopColor="#950AF7"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </span>
    </span>
  );
};

export default UnderlineText;
