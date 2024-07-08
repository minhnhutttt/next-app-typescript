"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { frontOpen } from "@/lib/front";

const Chat = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="px-5 py-6 md:pt-[50px] md:pb-[60px] relative">
        <div className="absolute h-[47vw] md:h-[28.542vw] dt:h-[411px] bg-[#EDEDED] bottom-0 inset-x-0"></div>
        <div className="w-full max-w-[1290px] mx-auto relative">
            <figure>
                <img src="/assets/images/img-contact.png" alt="" />
            </figure>
            <div className="flex justify-center items-center -mt-3 md:-mt-5">
                <button  onClick={()=> frontOpen()} className="duration-150 hover:opacity-75">
                <img src="/assets/images/img-chat.png" alt="" /></button>
            </div>
        </div>
    </section>
  );
};

export default Chat;
