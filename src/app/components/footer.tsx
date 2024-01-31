import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] px-5 py-16 md:py-[100px]">
        <div className="w-full max-w-[1200px] mx-auto">
            <div className="flex max-[899px]:justify-center gap-5 flex-wrap">
                <a href="/" className="w-[280px] md:w-[412px] block mt-2">
                    <img src="/images/logo-lg.png" alt="Men's Esthe BAZOOKA" />
                </a>
                <div className="min-[900px]:flex-1 flex-wrap flex justify-center md:justify-end items-start gap-5 md:pr-5">
                    <div className="">
                        <div className="flex items-center gap-2">
                            <figure>
                                <img className="max-md:w-7" src="/images/ic-phone.png" alt="" />
                            </figure>
                            <p className="md:text-[48px] text-[24px] tracking-wide leading-none font-bold mt-2">043-312-6905</p>
                        </div>
                        <p className="md:text-[32px] text-[20px] font-bold tracking-tighter">info@esthe-bazooka.com</p>
                    </div>
                    <p className="md:text-[16px] mt-2 text-[13px] bg-white font-bold py-2.5 px-5 rounded-[20px] leading-none">営業時間 平日10:00-19:00</p>
                </div>
            </div>
            <div className="flex max-md:flex-col max-[899px]:justify-center items-center gap-7 md:gap-11 mt-8">
                <a href="/" className="md:text-[24px] text-[16px] font-bold">メンエスバズーカ </a>
                <div className="flex flex-wrap max-md:justify-center flex-1 gap-x-6 gap-y-6 md:gap-x-11">
                    <a href="https://lin.ee/f4F3Xa4へ" target="_blank" className="md:text-[15px] text-[13px] font-semibold">公式LINE </a>
                    <a href="/terms-of-service" className="md:text-[15px] text-[13px] font-semibold">利用規約 </a>
                    <a href="/company" className="md:text-[15px] text-[13px] font-semibold">運営会社 </a>
                    <a href="/privacy-policy" className="md:text-[15px] text-[13px] font-semibold">プライバシーポリシー </a>
                </div>
            </div>
        </div>
    </footer>
  );
}
