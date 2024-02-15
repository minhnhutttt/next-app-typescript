"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Introduction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="pt-[50px]">
        <div className="overflow-hidden">
          <div className="w-full relative">
              <div className="flex w-[400%] md:w-[200%] animate-[slide_10s_linear_infinite]">
              <div className="basis-1/2 flex justify-between items-center">
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-01.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-02.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-03.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-04.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-05.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-06.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-07.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-08.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-09.png" alt="" /></figure>
              </div>
              <div className="basis-1/2 flex justify-between items-center">
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-01.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-02.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-03.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-04.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-05.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-06.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-07.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-08.png" alt="" /></figure>
                  <figure className="basis-[11%] flex justify-center px-3"><img src="/images/ic-logo-09.png" alt="" /></figure>
              </div>
              </div>
          </div>
        </div>
        <div className="bg-[url('/images/bg-01.png')] bg-center bg-no-repeat bg-[length:100%_auto] md:mt-[58px] mt-[30px]">
          <div className=" flex items-center gap-7 md:gap-[60px] w-full max-w-[1188px] mx-auto md:pl-[57px]">
            <figure>
              <img src="/images/image-intro.jpg" alt="受け取り後はボタンひとつで名刺交換を完了！" />
            </figure>
            <div className="flex-1">
              <h5 className="md:text-[31px] text-[24px] font-bold mb-7">
                受け取り後はボタンひとつで <br />
                名刺交換を完了！
              </h5>
              <p className="md:text-[18px] text-[14px] font-medium leading-relaxed">
                名刺を受け取ると、相手に自分の名刺を送るためのボタンが表示されます。このボタンを押すだけで、名刺交換が完了します。
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
