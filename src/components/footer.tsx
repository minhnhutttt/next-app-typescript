"use client";
import { useFrontChatBoot } from "@/hooks/use-front-chat-boot";

export default function Footer() {
  const { frontChat } = useFrontChatBoot();

  function openFrontChat() {
    if (!frontChat) {
      return;
    }
    frontChat("show");
  }
  return (
    <footer className="px-5 pb-10 bg-[#CEE4FF] md:pt-16 pt-10">
      <div className="w-full max-w-[1232px] mx-auto flex items-center justify-center flex-col border-b border-[#2639A6]">
        <a href="/" className="block duration-150 hover:opacity-75">
          <img src="/assets/images/logo-footer.png" alt="" />
        </a>
        <div className="md:py-10 py-7">
          <ul className="flex md:gap-8 gap-6 flex-wrap justify-center">
            <li>
              <a href="/" className="text-[16px] font-roboto text-[#2639A6]">
                Home
              </a>
            </li>
            <li>
              <a
                href="/#functionality"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                機能性
              </a>
            </li>
            <li>
              <a
                href="/#service"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                サービス内容
              </a>
            </li>
            <li>
              <a
                href="/#case-studies"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                導入事例
              </a>
            </li>
            <li>
              <a
                href="/#plan"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                料金・プラン
              </a>
            </li>
            <li>
              <a
                href="/#flow"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                導入フロー
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                FAQ
              </a>
            </li>
            <li>
              <button
                onClick={openFrontChat}
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                お問い合わせ
              </button>
            </li>
            <li>
              <a
                href="/company"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                運営会社
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                プライバシーポリシー
              </a>
            </li>
            <li>
              <a
                href="/commerce-law"
                className="text-[16px] font-roboto text-[#2639A6]"
              >
                特定商取引法に基づく表記
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[13px] text-[#2639A6] md:text-[16px] pt-6 md:pt-9">
        Copyright © 2024 NFT-MAP
      </div>
    </footer>
  );
}
