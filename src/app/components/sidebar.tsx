"use client";

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
  return (
    <li>
        <Link href={href} className={`flex items-center relative text-[16px] pl-12 [&.active]:before:black before:hidden before:absolute before:left-0 before:content-[''] before:w-4 before:h-4 before:bg-[#FF8719] before:rounded-full ${active && "active"}`}>{children}</Link>
    </li>
  );
}

export default function Sidebar() {

  return (
    <div className="w-[268px] border border-[#B1B1B1] rounded-[17px] px-[18px] space-y-1 sticky pb-6">
            <div>
              <div className="font-bold text-[19px] px-2.5 py-[14px] border-b border-white">The Will</div>
              <div className="py-4">
                <ul className="space-y-8">
                  <Item href="/">What is ARDOREX</Item>
                  <Item href="/">Get Connection</Item>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-bold text-[19px] px-2.5 py-[14px] border-b border-white">The forte</div>
              <div className="py-4">
                <ul className="space-y-8">
                    <Item href="/">Globarity</Item>
                    <Item href="/">Flextegrity</Item>
                    <Item href="/">Innovity</Item>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-bold text-[19px] px-2.5 py-[14px] border-b border-white">The Contract</div>
              <div className="py-4">
                <ul className="space-y-8">
                    <Item href="/">Disclaimer</Item>
                    <Item href="/">Payment Method</Item>
                    <Item href="/">Ordering Flow</Item>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-bold text-[19px] px-2.5 py-[14px] border-b border-white">Support</div>
              <div className="py-4">
                <ul className="space-y-8">
                    <Item href="/">FAQ</Item>
                    <Item href="/">Contact</Item>
                </ul>
              </div>
            </div>
          </div>
  );
}
