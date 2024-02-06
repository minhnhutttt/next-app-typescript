"use client";
import useSplitTextAnimation from "@/app/_hooks/useSplitTextAnimation";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";

export default function TextSVG() {
  const animateRefs = useScrollAnimation("fadeDown");
  useSplitTextAnimation();
  return (
    <div ref={animateRefs} className="opacity-0 py-10 md:space-y-12 space-y-8">
        <div className="flex justify-center">
            <svg viewBox="0 0 640.606 86.9" className="svg-title w-[66.666vw] md:w-[44.444vw] min-[1440px]:w-[640px]">
            <linearGradient id="gradation-1">
                <stop offset="0%" stopColor="#FF84C8" />
                <stop offset="100%" stopColor="#0EFFFF" />
            </linearGradient>
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#ffffff" strokeWidth="0.25mm"
                fill="#ffffff" style={{ stroke: '#ffffff', strokeWidth: '0.25mm', fill: '#ffffff' }}>
                <path className="text-path"
                d="M 10.093 0.001 L 3.238 0.001 A 3.002 3.002 0 0 0 1.043 0.923 A 3.892 3.892 0 0 0 0.952 1.016 A 3.114 3.114 0 0 0 0.001 3.26 A 3.709 3.709 0 0 0 0 3.301 L 0 83.663 Q 0 84.996 0.952 85.948 A 3.114 3.114 0 0 0 3.196 86.9 A 3.709 3.709 0 0 0 3.238 86.9 L 10.093 86.9 A 3.376 3.376 0 0 0 11.415 86.647 A 3.199 3.199 0 0 0 12.442 85.948 A 3.114 3.114 0 0 0 13.394 83.704 A 3.709 3.709 0 0 0 13.394 83.663 L 13.394 3.301 Q 13.394 1.968 12.442 1.016 A 3.08 3.08 0 0 0 10.223 0.003 A 3.757 3.757 0 0 0 10.093 0.001 Z"
                id="0" />
                <path className="text-path"
                d="M 89.693 0.001 L 37.578 0.001 A 3.688 3.688 0 0 0 34.866 1.123 A 4.532 4.532 0 0 0 34.785 1.207 A 3.753 3.753 0 0 0 33.581 3.93 A 4.778 4.778 0 0 0 33.579 4.063 L 33.579 82.901 A 3.688 3.688 0 0 0 34.702 85.613 A 4.532 4.532 0 0 0 34.785 85.694 A 3.772 3.772 0 0 0 36.321 86.701 A 3.887 3.887 0 0 0 37.578 86.9 L 42.91 86.9 Q 44.624 86.9 45.767 85.694 A 3.772 3.772 0 0 0 46.774 84.158 A 3.887 3.887 0 0 0 46.973 82.901 L 46.973 17.393 A 3.931 3.931 0 0 1 47.334 15.697 A 3.894 3.894 0 0 1 48.116 14.6 Q 49.322 13.394 50.972 13.394 L 76.363 13.394 A 3.688 3.688 0 0 1 79.075 14.517 A 4.532 4.532 0 0 1 79.156 14.6 A 3.772 3.772 0 0 1 80.163 16.136 A 3.887 3.887 0 0 1 80.362 17.393 L 80.362 82.901 A 3.931 3.931 0 0 0 80.723 84.597 A 3.894 3.894 0 0 0 81.504 85.694 Q 82.71 86.9 84.361 86.9 L 89.693 86.9 A 3.896 3.896 0 0 0 92.511 85.731 A 4.951 4.951 0 0 0 92.549 85.694 Q 93.692 84.551 93.692 82.901 L 93.692 4.063 A 4.223 4.223 0 0 0 93.432 2.559 A 3.795 3.795 0 0 0 92.549 1.207 Q 91.343 0.001 89.693 0.001 Z"
                id="1" />
                <path className="text-path"
                d="M 169.991 0.001 L 117.876 0.001 A 3.688 3.688 0 0 0 115.164 1.123 A 4.532 4.532 0 0 0 115.083 1.207 A 3.753 3.753 0 0 0 113.879 3.93 A 4.778 4.778 0 0 0 113.877 4.063 L 113.877 82.901 A 3.688 3.688 0 0 0 115 85.613 A 4.532 4.532 0 0 0 115.083 85.694 A 3.772 3.772 0 0 0 116.619 86.701 A 3.887 3.887 0 0 0 117.876 86.9 L 123.208 86.9 Q 124.922 86.9 126.065 85.694 A 3.772 3.772 0 0 0 127.072 84.158 A 3.887 3.887 0 0 0 127.271 82.901 L 127.271 17.393 A 3.931 3.931 0 0 1 127.632 15.697 A 3.894 3.894 0 0 1 128.413 14.6 Q 129.619 13.394 131.27 13.394 L 156.66 13.394 A 3.688 3.688 0 0 1 159.372 14.517 A 4.532 4.532 0 0 1 159.453 14.6 A 3.772 3.772 0 0 1 160.46 16.136 A 3.887 3.887 0 0 1 160.659 17.393 L 160.659 82.901 A 3.931 3.931 0 0 0 161.021 84.597 A 3.894 3.894 0 0 0 161.802 85.694 Q 163.008 86.9 164.659 86.9 L 169.991 86.9 A 3.896 3.896 0 0 0 172.809 85.731 A 4.951 4.951 0 0 0 172.847 85.694 Q 173.99 84.551 173.99 82.901 L 173.99 4.063 A 4.223 4.223 0 0 0 173.73 2.559 A 3.795 3.795 0 0 0 172.847 1.207 Q 171.641 0.001 169.991 0.001 Z"
                id="2" />
                <path className="text-path"
                d="M 250.034 0.001 L 197.92 0.001 A 3.688 3.688 0 0 0 195.208 1.123 A 4.532 4.532 0 0 0 195.127 1.207 A 3.753 3.753 0 0 0 193.923 3.93 A 4.778 4.778 0 0 0 193.921 4.063 L 193.921 82.901 A 3.688 3.688 0 0 0 195.044 85.613 A 4.532 4.532 0 0 0 195.127 85.694 A 3.772 3.772 0 0 0 196.663 86.701 A 3.887 3.887 0 0 0 197.92 86.9 L 250.034 86.9 A 3.896 3.896 0 0 0 252.853 85.731 A 4.951 4.951 0 0 0 252.891 85.694 Q 254.034 84.551 254.034 82.901 L 254.034 4.063 A 4.223 4.223 0 0 0 253.774 2.559 A 3.795 3.795 0 0 0 252.891 1.207 Q 251.685 0.001 250.034 0.001 Z M 236.704 73.506 L 211.314 73.506 A 4.014 4.014 0 0 1 208.457 72.364 A 4.014 4.014 0 0 1 207.315 69.507 L 207.315 17.393 A 3.931 3.931 0 0 1 207.676 15.697 A 3.894 3.894 0 0 1 208.457 14.6 Q 209.663 13.394 211.314 13.394 L 236.704 13.394 A 3.688 3.688 0 0 1 239.416 14.517 A 4.532 4.532 0 0 1 239.497 14.6 A 3.772 3.772 0 0 1 240.504 16.136 A 3.887 3.887 0 0 1 240.703 17.393 L 240.703 69.507 A 3.896 3.896 0 0 1 239.535 72.326 A 4.951 4.951 0 0 1 239.497 72.364 Q 238.355 73.506 236.704 73.506 Z"
                id="3" />
                <path className="text-path"
                d="M 309.956 83.599 L 325.699 5.904 A 3.975 3.975 0 0 0 325.8 5.158 Q 325.84 4.077 325.237 3.113 A 4.449 4.449 0 0 0 325.064 2.857 A 3.971 3.971 0 0 0 322.513 1.178 A 5.262 5.262 0 0 0 322.334 1.143 L 316.812 0.127 A 4.994 4.994 0 0 0 316.049 0.049 Q 315.996 0.048 315.943 0.048 A 4.253 4.253 0 0 0 313.575 0.762 A 3.837 3.837 0 0 0 312.373 1.881 A 3.758 3.758 0 0 0 311.797 3.301 L 298.848 67.286 Q 298.524 68.688 297.239 68.899 A 3 3 0 0 1 296.753 68.936 Q 295.174 68.936 294.747 67.633 A 2.84 2.84 0 0 1 294.659 67.286 L 281.646 3.301 A 3.649 3.649 0 0 0 280.025 0.862 A 4.567 4.567 0 0 0 279.868 0.762 A 4.312 4.312 0 0 0 278.277 0.114 Q 277.515 -0.024 276.695 0.127 L 272.315 1.334 Q 270.601 1.651 269.649 3.047 Q 268.633 4.444 268.95 6.094 L 283.55 83.599 A 4.883 4.883 0 0 0 284.089 85.12 Q 284.868 86.476 286.542 86.799 A 5.987 5.987 0 0 0 287.676 86.9 L 305.767 86.9 A 5.494 5.494 0 0 0 307.381 86.681 Q 309.438 86.049 309.956 83.599 Z"
                id="4" />
                <path className="text-path"
                d="M 396.475 0.001 L 344.361 0.001 A 3.688 3.688 0 0 0 341.649 1.123 A 4.532 4.532 0 0 0 341.568 1.207 A 3.753 3.753 0 0 0 340.363 3.93 A 4.778 4.778 0 0 0 340.362 4.063 L 340.362 82.901 A 3.688 3.688 0 0 0 341.484 85.613 A 4.532 4.532 0 0 0 341.568 85.694 A 3.772 3.772 0 0 0 343.104 86.701 A 3.887 3.887 0 0 0 344.361 86.9 L 349.693 86.9 Q 351.407 86.9 352.549 85.694 A 3.772 3.772 0 0 0 353.556 84.158 A 3.887 3.887 0 0 0 353.755 82.901 L 353.755 54.146 A 3.931 3.931 0 0 1 354.117 52.45 A 3.894 3.894 0 0 1 354.898 51.353 Q 356.104 50.147 357.754 50.147 L 383.145 50.147 A 3.688 3.688 0 0 1 385.857 51.27 A 4.532 4.532 0 0 1 385.938 51.353 A 3.772 3.772 0 0 1 386.945 52.889 A 3.887 3.887 0 0 1 387.144 54.146 L 387.144 82.901 A 3.931 3.931 0 0 0 387.505 84.597 A 3.894 3.894 0 0 0 388.286 85.694 Q 389.492 86.9 391.143 86.9 L 396.475 86.9 A 3.896 3.896 0 0 0 399.294 85.731 A 4.951 4.951 0 0 0 399.331 85.694 Q 400.474 84.551 400.474 82.901 L 400.474 4.063 A 4.223 4.223 0 0 0 400.214 2.559 A 3.795 3.795 0 0 0 399.331 1.207 Q 398.125 0.001 396.475 0.001 Z M 383.145 36.753 L 357.754 36.753 A 4.014 4.014 0 0 1 354.898 35.611 A 4.014 4.014 0 0 1 353.755 32.754 L 353.755 17.393 A 3.931 3.931 0 0 1 354.117 15.697 A 3.894 3.894 0 0 1 354.898 14.6 Q 356.104 13.394 357.754 13.394 L 383.145 13.394 A 3.688 3.688 0 0 1 385.857 14.517 A 4.532 4.532 0 0 1 385.938 14.6 A 3.772 3.772 0 0 1 386.945 16.136 A 3.887 3.887 0 0 1 387.144 17.393 L 387.144 32.754 A 3.896 3.896 0 0 1 385.975 35.573 A 4.951 4.951 0 0 1 385.938 35.611 Q 384.795 36.753 383.145 36.753 Z"
                id="5" />
                <path className="text-path"
                d="M 471.377 9.395 L 471.377 4.063 A 4.223 4.223 0 0 0 471.118 2.559 A 3.795 3.795 0 0 0 470.235 1.207 Q 469.029 0.001 467.378 0.001 L 415.264 0.001 A 3.896 3.896 0 0 0 412.445 1.169 A 4.951 4.951 0 0 0 412.408 1.207 A 3.855 3.855 0 0 0 411.266 3.953 A 5.059 5.059 0 0 0 411.265 4.063 L 411.265 9.395 A 4.014 4.014 0 0 0 412.408 12.251 A 4.014 4.014 0 0 0 415.264 13.394 L 430.625 13.394 A 3.896 3.896 0 0 1 433.444 14.563 A 4.951 4.951 0 0 1 433.482 14.6 Q 434.624 15.743 434.624 17.393 L 434.624 82.901 A 3.688 3.688 0 0 0 435.747 85.613 A 4.532 4.532 0 0 0 435.83 85.694 A 3.753 3.753 0 0 0 438.554 86.898 A 4.778 4.778 0 0 0 438.687 86.9 L 444.019 86.9 A 3.688 3.688 0 0 0 446.731 85.777 A 4.532 4.532 0 0 0 446.812 85.694 A 3.772 3.772 0 0 0 447.819 84.158 A 3.887 3.887 0 0 0 448.018 82.901 L 448.018 17.393 A 3.931 3.931 0 0 1 448.379 15.697 A 3.894 3.894 0 0 1 449.16 14.6 Q 450.367 13.394 452.017 13.394 L 467.378 13.394 A 4.014 4.014 0 0 0 470.235 12.251 A 4.014 4.014 0 0 0 471.377 9.395 Z"
                id="6" />
                <path className="text-path"
                d="M 491.055 0.001 L 484.2 0.001 A 3.002 3.002 0 0 0 482.004 0.923 A 3.892 3.892 0 0 0 481.914 1.016 A 3.114 3.114 0 0 0 480.962 3.26 A 3.709 3.709 0 0 0 480.962 3.301 L 480.962 83.663 Q 480.962 84.996 481.914 85.948 A 3.114 3.114 0 0 0 484.158 86.9 A 3.709 3.709 0 0 0 484.2 86.9 L 491.055 86.9 A 3.376 3.376 0 0 0 492.377 86.647 A 3.199 3.199 0 0 0 493.404 85.948 A 3.114 3.114 0 0 0 494.356 83.704 A 3.709 3.709 0 0 0 494.356 83.663 L 494.356 3.301 Q 494.356 1.968 493.404 1.016 A 3.08 3.08 0 0 0 491.185 0.003 A 3.757 3.757 0 0 0 491.055 0.001 Z"
                id="7" />
                <path className="text-path"
                d="M 550.279 83.599 L 566.021 5.904 A 3.975 3.975 0 0 0 566.122 5.158 Q 566.163 4.077 565.559 3.113 A 4.449 4.449 0 0 0 565.386 2.857 A 3.971 3.971 0 0 0 562.835 1.178 A 5.262 5.262 0 0 0 562.657 1.143 L 557.134 0.127 A 4.994 4.994 0 0 0 556.372 0.049 Q 556.318 0.048 556.265 0.048 A 4.253 4.253 0 0 0 553.897 0.762 A 3.837 3.837 0 0 0 552.695 1.881 A 3.758 3.758 0 0 0 552.119 3.301 L 539.17 67.286 Q 538.847 68.688 537.561 68.899 A 3 3 0 0 1 537.075 68.936 Q 535.496 68.936 535.07 67.633 A 2.84 2.84 0 0 1 534.981 67.286 L 521.968 3.301 A 3.649 3.649 0 0 0 520.347 0.862 A 4.567 4.567 0 0 0 520.191 0.762 A 4.312 4.312 0 0 0 518.599 0.114 Q 517.837 -0.024 517.017 0.127 L 512.637 1.334 Q 510.923 1.651 509.971 3.047 Q 508.955 4.444 509.273 6.094 L 523.872 83.599 A 4.883 4.883 0 0 0 524.411 85.12 Q 525.191 86.476 526.864 86.799 A 5.987 5.987 0 0 0 527.998 86.9 L 546.089 86.9 A 5.494 5.494 0 0 0 547.704 86.681 Q 549.76 86.049 550.279 83.599 Z"
                id="8" />
                <path className="text-path"
                d="M 640.606 9.395 L 640.606 4.063 A 4.223 4.223 0 0 0 640.346 2.559 A 3.795 3.795 0 0 0 639.463 1.207 Q 638.257 0.001 636.607 0.001 L 584.492 0.001 A 3.896 3.896 0 0 0 581.674 1.169 A 4.951 4.951 0 0 0 581.636 1.207 A 3.855 3.855 0 0 0 580.495 3.953 A 5.059 5.059 0 0 0 580.493 4.063 L 580.493 82.901 A 3.931 3.931 0 0 0 580.855 84.597 A 3.894 3.894 0 0 0 581.636 85.694 Q 582.842 86.9 584.492 86.9 L 636.607 86.9 A 3.896 3.896 0 0 0 639.425 85.731 A 4.951 4.951 0 0 0 639.463 85.694 Q 640.606 84.551 640.606 82.901 L 640.606 77.569 A 4.223 4.223 0 0 0 640.346 76.065 A 3.795 3.795 0 0 0 639.463 74.712 Q 638.257 73.506 636.607 73.506 L 597.886 73.506 A 4.014 4.014 0 0 1 595.03 72.364 A 4.014 4.014 0 0 1 593.887 69.507 L 593.887 54.146 A 3.931 3.931 0 0 1 594.249 52.45 A 3.894 3.894 0 0 1 595.03 51.353 Q 596.236 50.147 597.886 50.147 L 626.577 50.147 A 4.223 4.223 0 0 0 628.081 49.888 A 3.795 3.795 0 0 0 629.434 49.004 Q 630.64 47.798 630.64 46.148 L 630.64 40.816 Q 630.64 39.102 629.434 37.959 A 3.753 3.753 0 0 0 626.71 36.755 A 4.778 4.778 0 0 0 626.577 36.753 L 597.886 36.753 A 4.014 4.014 0 0 1 595.03 35.611 A 4.014 4.014 0 0 1 593.887 32.754 L 593.887 17.393 A 3.931 3.931 0 0 1 594.249 15.697 A 3.894 3.894 0 0 1 595.03 14.6 Q 596.236 13.394 597.886 13.394 L 636.607 13.394 A 4.014 4.014 0 0 0 639.463 12.251 A 4.014 4.014 0 0 0 640.606 9.395 Z"
                id="9" />
            </g>
            </svg>
        </div>
        <div className="flex justify-center">
            <svg viewBox="0 0 738.233 86.9" className="svg-title w-[76.875vw] md:w-[51.25vw] min-[1440px]:w-[738px]">
            <linearGradient id="gradation-1">
                <stop offset="0%" stopColor="#FF84C8" />
                <stop offset="100%" stopColor="#0EFFFF" />
            </linearGradient>
            <g id="svgGroup2" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#ffffff" strokeWidth="0.25mm"
            fill="#ffffff" style={{ stroke: '#ffffff', strokeWidth: '0.25mm', fill: '#ffffff' }}>
            <path className="text-path"
            d="M 60.113 9.395 L 60.113 4.063 A 4.223 4.223 0 0 0 59.853 2.559 A 3.795 3.795 0 0 0 58.97 1.207 Q 57.764 0.001 56.114 0.001 L 3.999 0.001 A 3.896 3.896 0 0 0 1.181 1.169 A 4.951 4.951 0 0 0 1.143 1.207 A 3.855 3.855 0 0 0 0.002 3.953 A 5.059 5.059 0 0 0 0 4.063 L 0 9.395 A 4.014 4.014 0 0 0 1.143 12.251 A 4.014 4.014 0 0 0 3.999 13.394 L 19.361 13.394 A 3.896 3.896 0 0 1 22.179 14.563 A 4.951 4.951 0 0 1 22.217 14.6 Q 23.36 15.743 23.36 17.393 L 23.36 82.901 A 3.688 3.688 0 0 0 24.482 85.613 A 4.532 4.532 0 0 0 24.566 85.694 A 3.753 3.753 0 0 0 27.289 86.898 A 4.778 4.778 0 0 0 27.422 86.9 L 32.754 86.9 A 3.688 3.688 0 0 0 35.466 85.777 A 4.532 4.532 0 0 0 35.547 85.694 A 3.772 3.772 0 0 0 36.554 84.158 A 3.887 3.887 0 0 0 36.753 82.901 L 36.753 17.393 A 3.931 3.931 0 0 1 37.115 15.697 A 3.894 3.894 0 0 1 37.896 14.6 Q 39.102 13.394 40.752 13.394 L 56.114 13.394 A 4.014 4.014 0 0 0 58.97 12.251 A 4.014 4.014 0 0 0 60.113 9.395 Z"
            id="0" />
            <path className="text-path"
            d="M 129.493 9.395 L 129.493 4.063 A 4.223 4.223 0 0 0 129.233 2.559 A 3.795 3.795 0 0 0 128.35 1.207 Q 127.144 0.001 125.493 0.001 L 73.379 0.001 A 3.896 3.896 0 0 0 70.561 1.169 A 4.951 4.951 0 0 0 70.523 1.207 A 3.855 3.855 0 0 0 69.381 3.953 A 5.059 5.059 0 0 0 69.38 4.063 L 69.38 82.901 A 3.931 3.931 0 0 0 69.742 84.597 A 3.894 3.894 0 0 0 70.523 85.694 Q 71.729 86.9 73.379 86.9 L 125.493 86.9 A 3.896 3.896 0 0 0 128.312 85.731 A 4.951 4.951 0 0 0 128.35 85.694 Q 129.493 84.551 129.493 82.901 L 129.493 77.569 A 4.223 4.223 0 0 0 129.233 76.065 A 3.795 3.795 0 0 0 128.35 74.712 Q 127.144 73.506 125.493 73.506 L 86.773 73.506 A 4.014 4.014 0 0 1 83.916 72.364 A 4.014 4.014 0 0 1 82.774 69.507 L 82.774 54.146 A 3.931 3.931 0 0 1 83.135 52.45 A 3.894 3.894 0 0 1 83.916 51.353 Q 85.122 50.147 86.773 50.147 L 115.464 50.147 A 4.223 4.223 0 0 0 116.968 49.888 A 3.795 3.795 0 0 0 118.321 49.004 Q 119.527 47.798 119.527 46.148 L 119.527 40.816 Q 119.527 39.102 118.321 37.959 A 3.753 3.753 0 0 0 115.597 36.755 A 4.778 4.778 0 0 0 115.464 36.753 L 86.773 36.753 A 4.014 4.014 0 0 1 83.916 35.611 A 4.014 4.014 0 0 1 82.774 32.754 L 82.774 17.393 A 3.931 3.931 0 0 1 83.135 15.697 A 3.894 3.894 0 0 1 83.916 14.6 Q 85.122 13.394 86.773 13.394 L 125.493 13.394 A 4.014 4.014 0 0 0 128.35 12.251 A 4.014 4.014 0 0 0 129.493 9.395 Z"
            id="1" />
            <path className="text-path"
            d="M 203.062 9.395 L 203.062 4.063 A 4.223 4.223 0 0 0 202.802 2.559 A 3.795 3.795 0 0 0 201.919 1.207 Q 200.713 0.001 199.063 0.001 L 146.949 0.001 A 3.896 3.896 0 0 0 144.13 1.169 A 4.951 4.951 0 0 0 144.092 1.207 A 3.855 3.855 0 0 0 142.951 3.953 A 5.059 5.059 0 0 0 142.95 4.063 L 142.95 82.901 A 3.931 3.931 0 0 0 143.311 84.597 A 3.894 3.894 0 0 0 144.092 85.694 Q 145.298 86.9 146.949 86.9 L 199.063 86.9 A 3.896 3.896 0 0 0 201.881 85.731 A 4.951 4.951 0 0 0 201.919 85.694 Q 203.062 84.551 203.062 82.901 L 203.062 77.569 A 4.223 4.223 0 0 0 202.802 76.065 A 3.795 3.795 0 0 0 201.919 74.712 Q 200.713 73.506 199.063 73.506 L 160.342 73.506 A 4.014 4.014 0 0 1 157.486 72.364 A 4.014 4.014 0 0 1 156.343 69.507 L 156.343 17.393 A 3.931 3.931 0 0 1 156.705 15.697 A 3.894 3.894 0 0 1 157.486 14.6 Q 158.692 13.394 160.342 13.394 L 199.063 13.394 A 4.014 4.014 0 0 0 201.919 12.251 A 4.014 4.014 0 0 0 203.062 9.395 Z"
            id="2" />
            <path className="text-path"
            d="M 263.809 4.063 L 263.809 32.754 A 3.896 3.896 0 0 1 262.64 35.573 A 4.951 4.951 0 0 1 262.603 35.611 Q 261.46 36.753 259.81 36.753 L 234.419 36.753 A 4.014 4.014 0 0 1 231.563 35.611 A 4.014 4.014 0 0 1 230.42 32.754 L 230.42 4.063 Q 230.42 2.349 229.214 1.207 A 3.753 3.753 0 0 0 226.491 0.002 A 4.778 4.778 0 0 0 226.358 0.001 L 221.026 0.001 A 3.896 3.896 0 0 0 218.207 1.169 A 4.951 4.951 0 0 0 218.169 1.207 A 3.855 3.855 0 0 0 217.028 3.953 A 5.059 5.059 0 0 0 217.027 4.063 L 217.027 82.901 A 3.931 3.931 0 0 0 217.388 84.597 A 3.894 3.894 0 0 0 218.169 85.694 Q 219.375 86.9 221.026 86.9 L 226.358 86.9 Q 228.072 86.9 229.214 85.694 A 3.772 3.772 0 0 0 230.221 84.158 A 3.887 3.887 0 0 0 230.42 82.901 L 230.42 54.146 A 3.931 3.931 0 0 1 230.782 52.45 A 3.894 3.894 0 0 1 231.563 51.353 Q 232.769 50.147 234.419 50.147 L 259.81 50.147 A 3.688 3.688 0 0 1 262.522 51.27 A 4.532 4.532 0 0 1 262.603 51.353 A 3.772 3.772 0 0 1 263.61 52.889 A 3.887 3.887 0 0 1 263.809 54.146 L 263.809 82.901 A 3.931 3.931 0 0 0 264.17 84.597 A 3.894 3.894 0 0 0 264.952 85.694 Q 266.158 86.9 267.808 86.9 L 273.14 86.9 A 3.896 3.896 0 0 0 275.959 85.731 A 4.951 4.951 0 0 0 275.996 85.694 Q 277.139 84.551 277.139 82.901 L 277.139 4.063 A 4.223 4.223 0 0 0 276.88 2.559 A 3.795 3.795 0 0 0 275.996 1.207 Q 274.79 0.001 273.14 0.001 L 267.808 0.001 A 3.896 3.896 0 0 0 264.989 1.169 A 4.951 4.951 0 0 0 264.952 1.207 A 3.855 3.855 0 0 0 263.81 3.953 A 5.059 5.059 0 0 0 263.809 4.063 Z"
            id="3" />
            <path className="text-path"
            d="M 353.438 0.001 L 301.324 0.001 A 3.688 3.688 0 0 0 298.612 1.123 A 4.532 4.532 0 0 0 298.531 1.207 A 3.753 3.753 0 0 0 297.326 3.93 A 4.778 4.778 0 0 0 297.325 4.063 L 297.325 82.901 A 3.688 3.688 0 0 0 298.447 85.613 A 4.532 4.532 0 0 0 298.531 85.694 A 3.772 3.772 0 0 0 300.066 86.701 A 3.887 3.887 0 0 0 301.324 86.9 L 306.656 86.9 Q 308.369 86.9 309.512 85.694 A 3.772 3.772 0 0 0 310.519 84.158 A 3.887 3.887 0 0 0 310.718 82.901 L 310.718 17.393 A 3.931 3.931 0 0 1 311.08 15.697 A 3.894 3.894 0 0 1 311.861 14.6 Q 313.067 13.394 314.717 13.394 L 340.108 13.394 A 3.688 3.688 0 0 1 342.82 14.517 A 4.532 4.532 0 0 1 342.901 14.6 A 3.772 3.772 0 0 1 343.908 16.136 A 3.887 3.887 0 0 1 344.107 17.393 L 344.107 82.901 A 3.931 3.931 0 0 0 344.468 84.597 A 3.894 3.894 0 0 0 345.249 85.694 Q 346.455 86.9 348.106 86.9 L 353.438 86.9 A 3.896 3.896 0 0 0 356.256 85.731 A 4.951 4.951 0 0 0 356.294 85.694 Q 357.437 84.551 357.437 82.901 L 357.437 4.063 A 4.223 4.223 0 0 0 357.177 2.559 A 3.795 3.795 0 0 0 356.294 1.207 Q 355.088 0.001 353.438 0.001 Z"
            id="4" />
            <path className="text-path"
            d="M 433.482 0.001 L 381.368 0.001 A 3.688 3.688 0 0 0 378.656 1.123 A 4.532 4.532 0 0 0 378.575 1.207 A 3.753 3.753 0 0 0 377.37 3.93 A 4.778 4.778 0 0 0 377.368 4.063 L 377.368 82.901 A 3.688 3.688 0 0 0 378.491 85.613 A 4.532 4.532 0 0 0 378.575 85.694 A 3.772 3.772 0 0 0 380.11 86.701 A 3.887 3.887 0 0 0 381.368 86.9 L 433.482 86.9 A 3.896 3.896 0 0 0 436.3 85.731 A 4.951 4.951 0 0 0 436.338 85.694 Q 437.481 84.551 437.481 82.901 L 437.481 4.063 A 4.223 4.223 0 0 0 437.221 2.559 A 3.795 3.795 0 0 0 436.338 1.207 Q 435.132 0.001 433.482 0.001 Z M 420.152 73.506 L 394.761 73.506 A 4.014 4.014 0 0 1 391.905 72.364 A 4.014 4.014 0 0 1 390.762 69.507 L 390.762 17.393 A 3.931 3.931 0 0 1 391.124 15.697 A 3.894 3.894 0 0 1 391.905 14.6 Q 393.111 13.394 394.761 13.394 L 420.152 13.394 A 3.688 3.688 0 0 1 422.864 14.517 A 4.532 4.532 0 0 1 422.945 14.6 A 3.772 3.772 0 0 1 423.952 16.136 A 3.887 3.887 0 0 1 424.151 17.393 L 424.151 69.507 A 3.896 3.896 0 0 1 422.982 72.326 A 4.951 4.951 0 0 1 422.945 72.364 Q 421.802 73.506 420.152 73.506 Z"
            id="5" />
            <path className="text-path"
            d="M 471.06 69.507 L 471.06 4.063 Q 471.06 2.349 469.854 1.207 A 3.753 3.753 0 0 0 467.13 0.002 A 4.778 4.778 0 0 0 466.997 0.001 L 461.665 0.001 A 3.688 3.688 0 0 0 458.953 1.123 A 4.532 4.532 0 0 0 458.872 1.207 A 3.753 3.753 0 0 0 457.668 3.93 A 4.778 4.778 0 0 0 457.666 4.063 L 457.666 82.901 A 3.688 3.688 0 0 0 458.789 85.613 A 4.532 4.532 0 0 0 458.872 85.694 A 3.772 3.772 0 0 0 460.408 86.701 A 3.887 3.887 0 0 0 461.665 86.9 L 513.78 86.9 A 3.896 3.896 0 0 0 516.598 85.731 A 4.951 4.951 0 0 0 516.636 85.694 Q 517.779 84.551 517.779 82.901 L 517.779 77.569 A 4.223 4.223 0 0 0 517.519 76.065 A 3.795 3.795 0 0 0 516.636 74.712 Q 515.43 73.506 513.78 73.506 L 475.059 73.506 A 4.014 4.014 0 0 1 472.202 72.364 A 4.014 4.014 0 0 1 471.06 69.507 Z"
            id="6" />
            <path className="text-path"
            d="M 586.143 0.001 L 534.029 0.001 A 3.688 3.688 0 0 0 531.317 1.123 A 4.532 4.532 0 0 0 531.236 1.207 A 3.753 3.753 0 0 0 530.031 3.93 A 4.778 4.778 0 0 0 530.03 4.063 L 530.03 82.901 A 3.688 3.688 0 0 0 531.152 85.613 A 4.532 4.532 0 0 0 531.236 85.694 A 3.772 3.772 0 0 0 532.772 86.701 A 3.887 3.887 0 0 0 534.029 86.9 L 586.143 86.9 A 3.896 3.896 0 0 0 588.962 85.731 A 4.951 4.951 0 0 0 588.999 85.694 Q 590.142 84.551 590.142 82.901 L 590.142 4.063 A 4.223 4.223 0 0 0 589.882 2.559 A 3.795 3.795 0 0 0 588.999 1.207 Q 587.793 0.001 586.143 0.001 Z M 572.813 73.506 L 547.422 73.506 A 4.014 4.014 0 0 1 544.566 72.364 A 4.014 4.014 0 0 1 543.423 69.507 L 543.423 17.393 A 3.931 3.931 0 0 1 543.785 15.697 A 3.894 3.894 0 0 1 544.566 14.6 Q 545.772 13.394 547.422 13.394 L 572.813 13.394 A 3.688 3.688 0 0 1 575.525 14.517 A 4.532 4.532 0 0 1 575.606 14.6 A 3.772 3.772 0 0 1 576.613 16.136 A 3.887 3.887 0 0 1 576.812 17.393 L 576.812 69.507 A 3.896 3.896 0 0 1 575.643 72.326 A 4.951 4.951 0 0 1 575.606 72.364 Q 574.463 73.506 572.813 73.506 Z"
            id="7" />
            <path className="text-path"
            d="M 623.467 69.507 L 623.467 17.393 A 3.931 3.931 0 0 1 623.829 15.697 A 3.894 3.894 0 0 1 624.61 14.6 Q 625.816 13.394 627.466 13.394 L 666.187 13.394 A 4.014 4.014 0 0 0 669.043 12.251 A 4.014 4.014 0 0 0 670.186 9.395 L 670.186 4.063 A 4.223 4.223 0 0 0 669.926 2.559 A 3.795 3.795 0 0 0 669.043 1.207 Q 667.837 0.001 666.187 0.001 L 614.073 0.001 A 3.688 3.688 0 0 0 611.361 1.123 A 4.532 4.532 0 0 0 611.28 1.207 A 3.753 3.753 0 0 0 610.075 3.93 A 4.778 4.778 0 0 0 610.074 4.063 L 610.074 82.901 A 3.688 3.688 0 0 0 611.196 85.613 A 4.532 4.532 0 0 0 611.28 85.694 A 3.772 3.772 0 0 0 612.815 86.701 A 3.887 3.887 0 0 0 614.073 86.9 L 666.187 86.9 A 3.896 3.896 0 0 0 669.006 85.731 A 4.951 4.951 0 0 0 669.043 85.694 Q 670.186 84.551 670.186 82.901 L 670.186 40.816 A 4.223 4.223 0 0 0 669.926 39.312 A 3.795 3.795 0 0 0 669.043 37.959 Q 667.837 36.753 666.187 36.753 L 644.16 36.753 A 3.896 3.896 0 0 0 641.342 37.922 A 4.951 4.951 0 0 0 641.304 37.959 A 3.855 3.855 0 0 0 640.163 40.706 A 5.059 5.059 0 0 0 640.161 40.816 L 640.161 46.148 A 4.014 4.014 0 0 0 641.304 49.004 A 4.014 4.014 0 0 0 644.16 50.147 L 652.857 50.147 A 3.688 3.688 0 0 1 655.569 51.27 A 4.532 4.532 0 0 1 655.65 51.353 A 3.772 3.772 0 0 1 656.657 52.889 A 3.887 3.887 0 0 1 656.856 54.146 L 656.856 69.507 A 3.896 3.896 0 0 1 655.687 72.326 A 4.951 4.951 0 0 1 655.65 72.364 Q 654.507 73.506 652.857 73.506 L 627.466 73.506 A 4.014 4.014 0 0 1 624.61 72.364 A 4.014 4.014 0 0 1 623.467 69.507 Z"
            id="8" />
            <path className="text-path"
            d="M 724.903 4.063 L 724.903 32.754 A 3.896 3.896 0 0 1 723.734 35.573 A 4.951 4.951 0 0 1 723.697 35.611 Q 722.554 36.753 720.904 36.753 L 700.845 36.753 A 4.014 4.014 0 0 1 697.989 35.611 A 4.014 4.014 0 0 1 696.846 32.754 L 696.846 4.063 Q 696.846 2.349 695.64 1.207 A 3.753 3.753 0 0 0 692.917 0.002 A 4.778 4.778 0 0 0 692.784 0.001 L 687.452 0.001 A 3.688 3.688 0 0 0 684.739 1.123 A 4.532 4.532 0 0 0 684.659 1.207 A 3.753 3.753 0 0 0 683.454 3.93 A 4.778 4.778 0 0 0 683.452 4.063 L 683.452 46.148 A 3.896 3.896 0 0 0 684.621 48.967 A 4.951 4.951 0 0 0 684.659 49.004 Q 685.801 50.147 687.452 50.147 L 700.147 50.147 A 3.896 3.896 0 0 1 702.965 51.316 A 4.951 4.951 0 0 1 703.003 51.353 Q 704.146 52.496 704.146 54.146 L 704.146 82.901 A 3.688 3.688 0 0 0 705.269 85.613 A 4.532 4.532 0 0 0 705.352 85.694 A 3.772 3.772 0 0 0 706.888 86.701 A 3.887 3.887 0 0 0 708.145 86.9 L 713.54 86.9 A 3.688 3.688 0 0 0 716.252 85.777 A 4.532 4.532 0 0 0 716.333 85.694 A 3.772 3.772 0 0 0 717.34 84.158 A 3.887 3.887 0 0 0 717.539 82.901 L 717.539 54.146 A 3.931 3.931 0 0 1 717.901 52.45 A 3.894 3.894 0 0 1 718.682 51.353 Q 719.888 50.147 721.538 50.147 L 734.234 50.147 A 4.014 4.014 0 0 0 737.09 49.004 A 4.014 4.014 0 0 0 738.233 46.148 L 738.233 4.063 A 4.223 4.223 0 0 0 737.973 2.559 A 3.795 3.795 0 0 0 737.09 1.207 Q 735.884 0.001 734.234 0.001 L 728.902 0.001 A 3.896 3.896 0 0 0 726.083 1.169 A 4.951 4.951 0 0 0 726.045 1.207 A 3.855 3.855 0 0 0 724.904 3.953 A 5.059 5.059 0 0 0 724.903 4.063 Z"
            id="9" />
            </g>
            </svg>
        </div>
        <div className="flex justify-center">
            <svg viewBox="0 0 622.579 86.9" className="svg-title w-[64.896vw] md:w-[43.264vw] min-[1440px]:w-[623px]">
            <linearGradient id="gradation-1">
                <stop offset="0%" stopColor="#FF84C8" />
                <stop offset="100%" stopColor="#0EFFFF" />
            </linearGradient>
            
            <g id="svgGroup3" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#ffffff" strokeWidth="0.25mm"
            fill="#ffffff" style={{ stroke: '#ffffff', strokeWidth: '0.25mm', fill: '#ffffff' }}>
            <path className="text-path"
            d="M 60.113 9.395 L 60.113 4.063 A 4.223 4.223 0 0 0 59.853 2.559 A 3.795 3.795 0 0 0 58.97 1.207 Q 57.764 0.001 56.114 0.001 L 3.999 0.001 A 3.896 3.896 0 0 0 1.181 1.169 A 4.951 4.951 0 0 0 1.143 1.207 A 3.855 3.855 0 0 0 0.002 3.953 A 5.059 5.059 0 0 0 0 4.063 L 0 46.148 A 4.014 4.014 0 0 0 1.143 49.004 A 4.014 4.014 0 0 0 3.999 50.147 L 42.784 50.147 A 3.688 3.688 0 0 1 45.496 51.27 A 4.532 4.532 0 0 1 45.577 51.353 A 3.772 3.772 0 0 1 46.584 52.889 A 3.887 3.887 0 0 1 46.783 54.146 L 46.783 69.507 A 3.896 3.896 0 0 1 45.614 72.326 A 4.951 4.951 0 0 1 45.577 72.364 Q 44.434 73.506 42.784 73.506 L 3.999 73.506 A 3.896 3.896 0 0 0 1.181 74.675 A 4.951 4.951 0 0 0 1.143 74.712 A 3.855 3.855 0 0 0 0.002 77.459 A 5.059 5.059 0 0 0 0 77.569 L 0 82.901 A 3.931 3.931 0 0 0 0.362 84.597 A 3.894 3.894 0 0 0 1.143 85.694 Q 2.349 86.9 3.999 86.9 L 56.114 86.9 A 3.896 3.896 0 0 0 58.932 85.731 A 4.951 4.951 0 0 0 58.97 85.694 Q 60.113 84.551 60.113 82.901 L 60.113 40.816 A 4.223 4.223 0 0 0 59.853 39.312 A 3.795 3.795 0 0 0 58.97 37.959 Q 57.764 36.753 56.114 36.753 L 17.393 36.753 A 4.014 4.014 0 0 1 14.536 35.611 A 4.014 4.014 0 0 1 13.394 32.754 L 13.394 17.393 A 3.931 3.931 0 0 1 13.755 15.697 A 3.894 3.894 0 0 1 14.536 14.6 Q 15.743 13.394 17.393 13.394 L 56.114 13.394 A 4.014 4.014 0 0 0 58.97 12.251 A 4.014 4.014 0 0 0 60.113 9.395 Z"
            id="0" />
            <path className="text-path"
            d="M 132.92 0.001 L 80.806 0.001 A 3.688 3.688 0 0 0 78.094 1.123 A 4.532 4.532 0 0 0 78.013 1.207 A 3.753 3.753 0 0 0 76.809 3.93 A 4.778 4.778 0 0 0 76.807 4.063 L 76.807 82.901 A 3.688 3.688 0 0 0 77.93 85.613 A 4.532 4.532 0 0 0 78.013 85.694 A 3.772 3.772 0 0 0 79.549 86.701 A 3.887 3.887 0 0 0 80.806 86.9 L 132.92 86.9 A 3.896 3.896 0 0 0 135.739 85.731 A 4.951 4.951 0 0 0 135.777 85.694 Q 136.919 84.551 136.919 82.901 L 136.919 4.063 A 4.223 4.223 0 0 0 136.66 2.559 A 3.795 3.795 0 0 0 135.777 1.207 Q 134.571 0.001 132.92 0.001 Z M 119.59 73.506 L 94.2 73.506 A 4.014 4.014 0 0 1 91.343 72.364 A 4.014 4.014 0 0 1 90.201 69.507 L 90.201 17.393 A 3.931 3.931 0 0 1 90.562 15.697 A 3.894 3.894 0 0 1 91.343 14.6 Q 92.549 13.394 94.2 13.394 L 119.59 13.394 A 3.688 3.688 0 0 1 122.302 14.517 A 4.532 4.532 0 0 1 122.383 14.6 A 3.772 3.772 0 0 1 123.39 16.136 A 3.887 3.887 0 0 1 123.589 17.393 L 123.589 69.507 A 3.896 3.896 0 0 1 122.421 72.326 A 4.951 4.951 0 0 1 122.383 72.364 Q 121.241 73.506 119.59 73.506 Z"
            id="1" />
            <path className="text-path"
            d="M 170.498 69.507 L 170.498 4.063 Q 170.498 2.349 169.292 1.207 A 3.753 3.753 0 0 0 166.569 0.002 A 4.778 4.778 0 0 0 166.436 0.001 L 161.104 0.001 A 3.688 3.688 0 0 0 158.392 1.123 A 4.532 4.532 0 0 0 158.311 1.207 A 3.753 3.753 0 0 0 157.107 3.93 A 4.778 4.778 0 0 0 157.105 4.063 L 157.105 82.901 A 3.688 3.688 0 0 0 158.228 85.613 A 4.532 4.532 0 0 0 158.311 85.694 A 3.772 3.772 0 0 0 159.847 86.701 A 3.887 3.887 0 0 0 161.104 86.9 L 213.218 86.9 A 3.896 3.896 0 0 0 216.037 85.731 A 4.951 4.951 0 0 0 216.075 85.694 Q 217.217 84.551 217.217 82.901 L 217.217 77.569 A 4.223 4.223 0 0 0 216.958 76.065 A 3.795 3.795 0 0 0 216.075 74.712 Q 214.868 73.506 213.218 73.506 L 174.497 73.506 A 4.014 4.014 0 0 1 171.641 72.364 A 4.014 4.014 0 0 1 170.498 69.507 Z"
            id="2" />
            <path className="text-path"
            d="M 276.504 4.063 L 276.504 69.507 A 3.896 3.896 0 0 1 275.336 72.326 A 4.951 4.951 0 0 1 275.298 72.364 Q 274.156 73.506 272.505 73.506 L 247.115 73.506 A 4.014 4.014 0 0 1 244.258 72.364 A 4.014 4.014 0 0 1 243.116 69.507 L 243.116 4.063 Q 243.116 2.349 241.91 1.207 A 3.753 3.753 0 0 0 239.186 0.002 A 4.778 4.778 0 0 0 239.053 0.001 L 233.721 0.001 A 3.896 3.896 0 0 0 230.902 1.169 A 4.951 4.951 0 0 0 230.865 1.207 A 3.855 3.855 0 0 0 229.723 3.953 A 5.059 5.059 0 0 0 229.722 4.063 L 229.722 82.901 A 3.931 3.931 0 0 0 230.084 84.597 A 3.894 3.894 0 0 0 230.865 85.694 Q 232.071 86.9 233.721 86.9 L 285.835 86.9 A 3.896 3.896 0 0 0 288.654 85.731 A 4.951 4.951 0 0 0 288.692 85.694 Q 289.834 84.551 289.834 82.901 L 289.834 4.063 A 4.223 4.223 0 0 0 289.575 2.559 A 3.795 3.795 0 0 0 288.692 1.207 Q 287.486 0.001 285.835 0.001 L 280.503 0.001 A 3.896 3.896 0 0 0 277.685 1.169 A 4.951 4.951 0 0 0 277.647 1.207 A 3.855 3.855 0 0 0 276.505 3.953 A 5.059 5.059 0 0 0 276.504 4.063 Z"
            id="3" />
            <path className="text-path"
            d="M 360.738 9.395 L 360.738 4.063 A 4.223 4.223 0 0 0 360.478 2.559 A 3.795 3.795 0 0 0 359.595 1.207 Q 358.389 0.001 356.739 0.001 L 304.624 0.001 A 3.896 3.896 0 0 0 301.806 1.169 A 4.951 4.951 0 0 0 301.768 1.207 A 3.855 3.855 0 0 0 300.627 3.953 A 5.059 5.059 0 0 0 300.625 4.063 L 300.625 9.395 A 4.014 4.014 0 0 0 301.768 12.251 A 4.014 4.014 0 0 0 304.624 13.394 L 319.986 13.394 A 3.896 3.896 0 0 1 322.804 14.563 A 4.951 4.951 0 0 1 322.842 14.6 Q 323.985 15.743 323.985 17.393 L 323.985 82.901 A 3.688 3.688 0 0 0 325.107 85.613 A 4.532 4.532 0 0 0 325.191 85.694 A 3.753 3.753 0 0 0 327.914 86.898 A 4.778 4.778 0 0 0 328.047 86.9 L 333.379 86.9 A 3.688 3.688 0 0 0 336.091 85.777 A 4.532 4.532 0 0 0 336.172 85.694 A 3.772 3.772 0 0 0 337.179 84.158 A 3.887 3.887 0 0 0 337.378 82.901 L 337.378 17.393 A 3.931 3.931 0 0 1 337.74 15.697 A 3.894 3.894 0 0 1 338.521 14.6 Q 339.727 13.394 341.377 13.394 L 356.739 13.394 A 4.014 4.014 0 0 0 359.595 12.251 A 4.014 4.014 0 0 0 360.738 9.395 Z"
            id="4" />
            <path className="text-path"
            d="M 380.415 0.001 L 373.56 0.001 A 3.002 3.002 0 0 0 371.365 0.923 A 3.892 3.892 0 0 0 371.275 1.016 A 3.114 3.114 0 0 0 370.323 3.26 A 3.709 3.709 0 0 0 370.323 3.301 L 370.323 83.663 Q 370.323 84.996 371.275 85.948 A 3.114 3.114 0 0 0 373.518 86.9 A 3.709 3.709 0 0 0 373.56 86.9 L 380.415 86.9 A 3.376 3.376 0 0 0 381.737 86.647 A 3.199 3.199 0 0 0 382.764 85.948 A 3.114 3.114 0 0 0 383.716 83.704 A 3.709 3.709 0 0 0 383.716 83.663 L 383.716 3.301 Q 383.716 1.968 382.764 1.016 A 3.08 3.08 0 0 0 380.545 0.003 A 3.757 3.757 0 0 0 380.415 0.001 Z"
            id="5" />
            <path className="text-path"
            d="M 459.761 0.001 L 407.647 0.001 A 3.688 3.688 0 0 0 404.935 1.123 A 4.532 4.532 0 0 0 404.854 1.207 A 3.753 3.753 0 0 0 403.65 3.93 A 4.778 4.778 0 0 0 403.648 4.063 L 403.648 82.901 A 3.688 3.688 0 0 0 404.771 85.613 A 4.532 4.532 0 0 0 404.854 85.694 A 3.772 3.772 0 0 0 406.39 86.701 A 3.887 3.887 0 0 0 407.647 86.9 L 459.761 86.9 A 3.896 3.896 0 0 0 462.58 85.731 A 4.951 4.951 0 0 0 462.618 85.694 Q 463.76 84.551 463.76 82.901 L 463.76 4.063 A 4.223 4.223 0 0 0 463.501 2.559 A 3.795 3.795 0 0 0 462.618 1.207 Q 461.411 0.001 459.761 0.001 Z M 446.431 73.506 L 421.04 73.506 A 4.014 4.014 0 0 1 418.184 72.364 A 4.014 4.014 0 0 1 417.041 69.507 L 417.041 17.393 A 3.931 3.931 0 0 1 417.403 15.697 A 3.894 3.894 0 0 1 418.184 14.6 Q 419.39 13.394 421.04 13.394 L 446.431 13.394 A 3.688 3.688 0 0 1 449.143 14.517 A 4.532 4.532 0 0 1 449.224 14.6 A 3.772 3.772 0 0 1 450.231 16.136 A 3.887 3.887 0 0 1 450.43 17.393 L 450.43 69.507 A 3.896 3.896 0 0 1 449.261 72.326 A 4.951 4.951 0 0 1 449.224 72.364 Q 448.081 73.506 446.431 73.506 Z"
            id="6" />
            <path className="text-path"
            d="M 540.059 0.001 L 487.945 0.001 A 3.688 3.688 0 0 0 485.233 1.123 A 4.532 4.532 0 0 0 485.152 1.207 A 3.753 3.753 0 0 0 483.947 3.93 A 4.778 4.778 0 0 0 483.946 4.063 L 483.946 82.901 A 3.688 3.688 0 0 0 485.068 85.613 A 4.532 4.532 0 0 0 485.152 85.694 A 3.772 3.772 0 0 0 486.688 86.701 A 3.887 3.887 0 0 0 487.945 86.9 L 493.277 86.9 Q 494.991 86.9 496.133 85.694 A 3.772 3.772 0 0 0 497.14 84.158 A 3.887 3.887 0 0 0 497.339 82.901 L 497.339 17.393 A 3.931 3.931 0 0 1 497.701 15.697 A 3.894 3.894 0 0 1 498.482 14.6 Q 499.688 13.394 501.338 13.394 L 526.729 13.394 A 3.688 3.688 0 0 1 529.441 14.517 A 4.532 4.532 0 0 1 529.522 14.6 A 3.772 3.772 0 0 1 530.529 16.136 A 3.887 3.887 0 0 1 530.728 17.393 L 530.728 82.901 A 3.931 3.931 0 0 0 531.089 84.597 A 3.894 3.894 0 0 0 531.87 85.694 Q 533.077 86.9 534.727 86.9 L 540.059 86.9 A 3.896 3.896 0 0 0 542.878 85.731 A 4.951 4.951 0 0 0 542.915 85.694 Q 544.058 84.551 544.058 82.901 L 544.058 4.063 A 4.223 4.223 0 0 0 543.798 2.559 A 3.795 3.795 0 0 0 542.915 1.207 Q 541.709 0.001 540.059 0.001 Z"
            id="7" />
            <path className="text-path"
            d="M 622.578 9.395 L 622.578 4.063 A 4.223 4.223 0 0 0 622.319 2.559 A 3.795 3.795 0 0 0 621.436 1.207 Q 620.23 0.001 618.579 0.001 L 566.465 0.001 A 3.896 3.896 0 0 0 563.647 1.169 A 4.951 4.951 0 0 0 563.609 1.207 A 3.855 3.855 0 0 0 562.467 3.953 A 5.059 5.059 0 0 0 562.466 4.063 L 562.466 46.148 A 4.014 4.014 0 0 0 563.609 49.004 A 4.014 4.014 0 0 0 566.465 50.147 L 605.249 50.147 A 3.688 3.688 0 0 1 607.961 51.27 A 4.532 4.532 0 0 1 608.042 51.353 A 3.772 3.772 0 0 1 609.049 52.889 A 3.887 3.887 0 0 1 609.248 54.146 L 609.248 69.507 A 3.896 3.896 0 0 1 608.08 72.326 A 4.951 4.951 0 0 1 608.042 72.364 Q 606.9 73.506 605.249 73.506 L 566.465 73.506 A 3.896 3.896 0 0 0 563.647 74.675 A 4.951 4.951 0 0 0 563.609 74.712 A 3.855 3.855 0 0 0 562.467 77.459 A 5.059 5.059 0 0 0 562.466 77.569 L 562.466 82.901 A 3.931 3.931 0 0 0 562.828 84.597 A 3.894 3.894 0 0 0 563.609 85.694 Q 564.815 86.9 566.465 86.9 L 618.579 86.9 A 3.896 3.896 0 0 0 621.398 85.731 A 4.951 4.951 0 0 0 621.436 85.694 Q 622.578 84.551 622.578 82.901 L 622.578 40.816 A 4.223 4.223 0 0 0 622.319 39.312 A 3.795 3.795 0 0 0 621.436 37.959 Q 620.23 36.753 618.579 36.753 L 579.859 36.753 A 4.014 4.014 0 0 1 577.002 35.611 A 4.014 4.014 0 0 1 575.86 32.754 L 575.86 17.393 A 3.931 3.931 0 0 1 576.221 15.697 A 3.894 3.894 0 0 1 577.002 14.6 Q 578.208 13.394 579.859 13.394 L 618.579 13.394 A 4.014 4.014 0 0 0 621.436 12.251 A 4.014 4.014 0 0 0 622.578 9.395 Z"
            id="8" />
            </g>
            </svg>
        </div>
    </div>
  );
}
