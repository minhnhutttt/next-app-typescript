"use client";
export default function PurchasePopup() {
  return (
    <div className="w-full pt-[50px] flex flex-col items-center justify-center px-6 pb-9">
            <figure>
              <img className="max-md:w-[120px]" src="/images/d.png" alt="" />
            </figure>
            <div className="w-full max-w-[350px] mx-auto md:mt-[30px] mt-5">
              <a
                href="https://www.web3-zexagift.com/"
                target="_blank"
                className="h-[60px] flex justify-center items-center bg-[#18539E] rounded-[5px] text-white text-[14px] md:text-[18px] font-bold gap-3"
              >
                <figure>
                  <img src="/images/ic-d.png" alt="" />
                </figure>
                <span>DIVERコインで購入</span>
              </a>
              <div className="flex items-center justify-center gap-2 md:py-5 py-4">
                <span className="h-px bg-[#E4E7EC] flex-1"></span>
                <span className="md:text-[14px] text-[12px]">OR</span>
                <span className="h-px bg-[#E4E7EC] flex-1"></span>
              </div>
              <a
                href="https://zexagift.com/"
                target="_blank"
                className="h-[60px] flex justify-center items-center border-black border-2 rounded-[8px] text-[14px] md:text-[18px] font-bold gap-2"
              >
                <figure>
                  <img src="/images/ic-wallet.png" alt="" />
                </figure>
                <span>クレジットカードで購入</span>
              </a>
            </div>
          </div>
  );
}
