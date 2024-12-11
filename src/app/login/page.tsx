"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

export default function Login() {
  useEffect(() => {
    const svgCircle01 = document.querySelector("#svg-circle01");
    const svgCircle02 = document.querySelector("#svg-circle02");

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        svgCircle01,
        {
          strokeDasharray: 1169.0028076171875,
          strokeDashoffset: 1169.0028076171875,
        },
        { strokeDashoffset: 0, duration: 0.5, ease: "expo.inOut" }
      ).fromTo(
        svgCircle02,
        {
          strokeDasharray: 1169.0028076171875,
          strokeDashoffset: 1169.0028076171875,
        },
        { strokeDashoffset: 0, duration: 0.5, ease: "expo.inOut" },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div className="p-5">
        <div className="mt-[70px] font-['Hiragino_Mincho_ProN']">
          <div className="flex justify-center">
            <h1 className="relative text-center text-[18px] md:text-[35px] font-semibold">
              <div className="absolute top-1/2 -left-4 -right-4 -translate-y-1/2">
                <svg
                  className="w-full"
                  viewBox="0 0 576 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="svg-circle01"
                    d="M228.848 97.7638C209.63 97.7638 190.757 97.7638 170.704 96.7484C147.164 96.7484 127.585 93.915 103.572 92.9715C86.4067 92.297 66.3437 88.9642 49.569 86.5851C41.6173 85.4574 31.7894 82.6748 24.7558 80.1315C20.4485 78.574 15.9648 76.3555 13.4897 73.6202C8.69485 68.3213 8.2328 64.8491 13.4894 58.9793C20.2944 51.3803 37.7808 44.9817 49.569 41.1738C68.0287 35.211 81.275 30.1103 101.57 27.2634C140.087 20.15 183.55 15.8376 183.781 15.8146C183.788 15.8139 183.775 15.8152 183.782 15.8145C184.016 15.7915 250.896 9.1959 266.607 9.33984C286.659 8.26072 300.17 8.51794 319.789 8.80029C357.278 9.33982 358.222 9.69482 375.892 10.7121C403.363 12.2935 429.475 16.8845 456.637 19.6861C483.369 22.4434 504.113 26.8448 529.903 32.0013C533.713 32.7631 543.073 35.55 546.468 36.8574C562.161 42.9004 568.264 45.4903 572.623 49.2672C576.983 55.2023 575.239 62.2166 568.264 67.6122C560.418 72.4682 549.113 75.54 541.237 77.8638C528.031 81.7603 514.252 84.0281 500.26 86.5851C481.015 90.1024 460.639 92.1535 440.975 94.681C419.193 97.4808 401.742 97.7638 377.331 99.9857C353.077 103.138 324.785 104.573 300.076 105.428C280.619 106.101 251.224 107 231.733 107"
                    stroke="#48D7DC"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    id="svg-circle02"
                    d="M220.13 90.21C200.912 90.21 182.038 90.21 161.986 89.1945C138.446 89.1945 118.867 86.3612 94.8541 85.4176C77.6884 84.7432 57.6254 81.4104 40.8508 79.0313C32.8991 77.9036 23.0712 75.121 16.0375 72.5777C11.7303 71.0202 7.24651 68.8017 4.77145 66.0664C-0.023412 60.7675 -0.485466 57.2953 4.77112 51.4254C11.5762 43.8265 29.0625 37.4278 40.8508 33.62C59.3104 27.6571 72.5568 22.5565 92.8516 19.7095C131.369 12.5962 174.831 8.28375 175.063 8.26081C175.07 8.2601 175.057 8.26137 175.064 8.26066C175.297 8.23766 242.178 1.64207 257.889 1.78601C277.941 0.706896 291.452 0.964111 311.071 1.24646C348.56 1.786 348.632 2.68055 366.302 3.69779C393.772 5.27927 420.757 9.33064 447.919 12.1323C474.651 14.8896 495.395 19.291 521.185 24.4475C524.995 25.2093 534.355 27.9962 537.75 29.3035C553.443 35.3466 559.546 37.9365 563.905 41.7134C568.264 47.6485 566.521 54.6628 559.546 60.0584C551.699 64.9144 540.395 67.9862 532.519 70.31C519.312 74.2064 505.534 76.4742 491.542 79.0313C472.296 82.5486 451.921 84.5996 432.257 87.1272C410.475 89.927 393.024 90.21 368.612 92.4319C344.359 95.584 316.067 97.0189 291.358 97.8737C271.901 98.5468 242.506 99.4462 223.015 99.4462"
                    stroke="#FB9A6A"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <span>休日AIコンシェルジュへようこそ<br />希望ログイン方法をお聞かせください</span>
            </h1>
          </div>
          <div className="flex justify-center mt-12 md:mt-[94px] pb-40">
            <div className="w-[404px]">
                <div className="p-2 rounded-[33px] flex items-center justify-center flex-col bg-[linear-gradient(133deg,_rgba(244,136,71,1)_0%,_rgba(227,97,118,1)_54%,_rgba(91,112,236,1)_100%)]">
                    <div className="bg-white w-full rounded-[33px] pt-8 pb-10 flex items-center justify-center flex-col">
                        <div className=""><img src="/assets/images/logo2.svg" alt="" /></div>
                        <div className="space-y-5 mt-10 flex flex-col items-center justify-center">
                        <button><img src="/assets/images/btn-google.png" alt="" /></button>
                        <button><img src="/assets/images/btn-apple.png" alt="" /></button>
                        <button><img src="/assets/images/btn-x.png" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="py-7 px-3 md:text-[15px] text-[14px]">
                続行することにより、休日AI休日コンシェルジュの<a href="/terms-of-service" className="text-[#001AFF]">利用規約</a> に同意したことになります<br />
                詳しくは、<a href="/privacy-policy" className="text-[#001AFF]">プライバシーポリシー</a> をお読みください。ご不明な点がございましたら、 お問い合わせ ください。
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
