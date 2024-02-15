"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Introduction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="">
        <div className="overflow-hidden">
        <div className="w-full relative">
            <div className="flex w-[200%] animate-[slide_10s_linear_infinite]">
            <div className="basis-1/2 flex items-center">
                <figure className="basis-1/5"><img src="/images/ic-logo-01.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-02.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-03.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-04.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-05.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-06.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-07.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-08.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-09.png" alt="" /></figure>
            </div>
            <div className="basis-1/2 flex items-center">
                <figure className="basis-1/5"><img src="/images/ic-logo-01.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-02.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-03.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-04.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-05.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-06.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-07.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-08.png" alt="" /></figure>
                <figure className="basis-1/5"><img src="/images/ic-logo-09.png" alt="" /></figure>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
}
