"use client"
import { usePathname } from "next/navigation";
import Fv from "./fv";
import LineButton from "./lineButton";

const Mainvisual = () => {
    const pathname = usePathname();
    return (
        <div className={`flex-[0_0_600px] xl:h-screen xl:overflow-hidden max-xl:absolute max-xl:inset-0 max-xl:z-50 xl:sticky top-0 max-xl:animate-[fadeOut_6.5s_forwards] ${pathname !== "/" ? 'max-xl:!hidden' : ''}`}>
            <Fv />
            <div className="max-xl:hidden px-5">
            <LineButton />
            </div>
        </div>
    );
  };
  
  export default Mainvisual;
  