"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect } from "react";
import gsap from "gsap";

const FV = () => {
  useEffect(() => {
    const images = gsap.utils.toArray<HTMLElement>(".item");
    const imageSize = images.length;
    const rotations = [0, 18, 36, -36, -18]
    const total = images.length;
    const degree = 360 / total;

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      images.forEach((image, index) => {
        const sign = Math.floor((index / 2) % 2) ? 1 : -1;
        const value = Math.floor((index + 4) / 4) * 4;
        const rotation = index > imageSize - 3 ? 0 : sign * value;

        gsap.set(image, {
          rotation: rotation,
        });
        timeline.from(
          image,
          {
            x: () =>
              index % 2
                ? window.innerWidth + image.clientWidth * 4
                : -window.innerWidth - image.clientWidth * 4,
            y: () => window.innerHeight - image.clientHeight,
            rotation: index % 2 ? 200 : -200,
            scale: 4,
            opacity: 1,
            ease: "power4.out",
            duration: 1,
            delay: 0.15 * Math.floor(index / 2),
          },
          0
        );

        let rotationAngle = index * degree;
        timeline.to(
          image,
          {
            scale: 1,
            duration: 0,
          },
          0.15 * (imageSize / 2 - 1) + 1
        );

        timeline.to(
          image,
          {
            transformOrigin: "center 100vh",
            rotation: rotations[index], 
            duration: 1,
            ease: "power1.out",
          },
          0.15 * (imageSize / 2 - 1) + 1
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative">
      <span className="absolute top-0 bg-[#0D0A8E] w-full h-[410px]"></span>
      <div className="w-full max-w-[1380px] mx-auto bg-white [box-shadow:0px_4px_60px_0px_rgba(0,_0,_0,_0.10)] rounded-[30px] relative z-10 h-[560px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/assets/images/robo.png" alt="" />
        </div>
      </div>
      <div className="w-[100vw] h-[80vh] absolute left-0 top-0 z-10 select-none overflow-hidden">
        <div className="center">
          <div className="items">
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-01.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-02.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-03.png"
                />
              </div>
            </div>
            {/* <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-04.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-05.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-01.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-02.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-03.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-04.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-05.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-01.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-02.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-03.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-04.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-05.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-01.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-02.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-03.png"
                />
              </div>
            </div> */}
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-04.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img
                  className="image"
                  src="/assets/images/img-fv-05.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FV;
