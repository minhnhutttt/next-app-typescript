"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function Menu() {
  const handleSendEmail = () => {
    const emailAddress = process.env.EMAIL_ADDRESS;
    window.location.href = `mailto:${emailAddress}`;
  };
  const [expanded, setExpanded] = useState(false);
  const boxRef = useRef(null);

  const toggleExpand = () => {
    setExpanded(!expanded);
    const box = boxRef.current;

    if (expanded) {
      gsap.to(box, { height: 46, xPercent: 100, x: -46, duration: 0.3 });
    } else {
      gsap.to(box, { height: 200, duration: 0.3 });
      gsap.to(box, { height: "auto", xPercent: 0, x: 0, duration: 0.3, delay: 0.3 });
    }
  };
  return (
    <div className="md:hidden">
        <div className="fixed top-[10%] right-0 overflow-hidden flex justify-end">
            <div ref={boxRef} className="h-[46px] translate-x-[calc(100%-46px)] bg-[linear-gradient(180deg,_#FFC700_0%,_#FF8719_100%)] rounded-l-[22px] py-2 origin-right">
                <button onClick={toggleExpand} className="absolute w-[54px] right-4 top-4 z-10">
                        <svg className="" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 107 47" fill="none">
                        <line x1="1.20064" y1="0.542021" x2="106.201" y2="46.542" stroke="black"/>
                        <line x1="0.68285" y1="46.2675" x2="105.921" y2="0.814274" stroke="black"/>
                        </svg>
                </button>
                <div className="flex">
                    <button onClick={toggleExpand} className="flex flex-col items-center pl-2 pr-3.5 gap-2.5">
                        <figure>
                            <img src="/images/ic-circle.png" alt="" />
                        </figure>
                        <figure>
                            <img className="w-[9.5px]" src="/images/menu.png" alt="" />
                        </figure>
                    </button>
                    <div className="border-l border-[#9A4646] px-4 py-2 space-y-5 flex-1 relative">
                        <div>
                            <p className="text-[14px] font-bold">The Will</p>
                            <ul className="space-y-1 mt-1">
                                <li><Link href="/" className="tblock ext-[14px] pl-4">What is ARDOREX</Link></li>
                                <li><Link href="/get-connection" className="block text-[14px] pl-4">Get Connection</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[14px] font-bold">The forte</p>
                            <ul className="space-y-1 mt-1">
                                <li><Link href="/globarity" className="tblock ext-[14px] pl-4">Globarity</Link></li>
                                <li><Link href="/flextegrity" className="block text-[14px] pl-4">Flextegrity</Link></li>
                                <li><Link href="/innovity" className="block text-[14px] pl-4">Innovity</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[14px] font-bold">The Contract</p>
                            <ul className="space-y-1 mt-1">
                                <li><Link href="/disclaimer" className="tblock ext-[14px] pl-4">Disclaimer</Link></li>
                                <li><Link href="/payment-method" className="block text-[14px] pl-4">Payment Method</Link></li>
                                <li><Link href="/ordering-flow" className="block text-[14px] pl-4">Ordering Flow</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[14px] font-bold">Support</p>
                            <ul className="space-y-1 mt-1">
                                <li><Link href="/faq" className="tblock ext-[14px] pl-4">FAQ</Link></li>
                                <li><button type="button" onClick={handleSendEmail} className="block text-[14px] pl-4">Contact</button></li>
                            </ul>
                        </div>
                        <div className="flex justify-end w-full px-5 py-4">
                            <Link href="/">
                                <img className="w-[222px]" src="/images/btn.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
