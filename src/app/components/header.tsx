"use client";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isHomePage = pathname === "/";
    return (
        <header className="absolute top-0 left-0 right-0 z-10 px-5 md:px-16">
            <div className="mx-auto max-md:py-6 w-full flex md:items-center justify-between md:h-[106px] max-md:gap-5">
                <a href="/" className="duration-150 hover:opacity-75 max-md:flex-[0_0_130px]">
                    {isHomePage ?
                        <img src="/images/logo.png" alt="RWA Tag" />
                        :
                        <img src="/images/logo-black.png" alt="RWA Tag" />
                    }
                </a>
                <div className="flex items-center justify-end gap-3 md:gap-5 max-md:flex-wrap">
                    <a href="https://apps.apple.com/jp/app/diver-tag/id6449664504" target="_blank" rel="noopener noreferrer" className="duration-150 hover:opacity-75"><img className="max-md:w-[140px]" src="/images/btn-appstore.png" alt="App Store" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.world.scan.project.tag&hl=ja&gl=US" target="_blank" rel="noopener noreferrer" className="duration-150 hover:opacity-75"><img className="max-md:w-[140px]" src="/images/btn-google-play.png" alt="Google Play" /></a>
                </div>
            </div>
        </header>
    );
}
