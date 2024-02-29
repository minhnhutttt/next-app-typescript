"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

type ItemType = {
  href: string;
  active?: boolean;
  children: ReactNode;
};

function Item({
    href,
    active,
    children,
}: ItemType) {
  const pathname = usePathname();
  return (
    <li>
        <Link href={href} className={`flex items-center relative text-[16px] pl-12 [&.active]:before:block before:hidden before:absolute before:left-0 before:content-[''] before:w-4 before:h-4 before:bg-[#FF8719] before:rounded-full ${pathname === href && "active"}`}>{children}</Link>
    </li>
  );
}

export default function Sidebar() {
  const handleSendEmail = () => {
    const emailAddress = process.env.EMAIL_ADDRESS;
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <div className="w-[268px] border border-[#B1B1B1] rounded-[17px] px-[18px] space-y-1 pb-6 max-lg:hidden sticky top-10">
            <div>
              <div className="font-bold text-[19px] px-2.5 py-[14px] border-b border-white">The Will</div>
              <div className="py-4">
                <ul className="space-y-8">
                  <Item href="/">What is ARDOREX</Item>
                  <Item href="/get-connection">Get Connection</Item>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-bold text-[19px] px-2.5 py-[14px] border-b border-white">The forte</div>
              <div className="py-4">
                <ul className="space-y-8">
                    <Item href="/globarity">Globarity</Item>
                    <Item href="/flextegrity">Flextegrity</Item>
                    <Item href="/innovity">Innovity</Item>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-bold text-[19px] px-2.5 py-[14px] border-b border-white">The Contract</div>
              <div className="py-4">
                <ul className="space-y-8">
                    <Item href="/disclaimer">Disclaimer</Item>
                    <Item href="/payment-method">Payment Method</Item>
                    <Item href="/ordering-flow">Ordering Flow</Item>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-bold text-[19px] px-2.5 py-[14px] border-b border-white">Support</div>
              <div className="py-4">
                <ul className="space-y-8">
                    <Item href="/faq">FAQ</Item>
                    <button type="button" className="flex items-center relative text-[16px] pl-12 [&.active]:before:block before:hidden before:absolute before:left-0 before:content-[''] before:w-4 before:h-4 before:bg-[#FF8719] before:rounded-full" onClick={handleSendEmail}>Contact</button>
                </ul>
              </div>
            </div>
          </div>
  );
}
