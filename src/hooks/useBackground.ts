import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useBackground = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.img-container').forEach((container: any) => {

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
          }
        });

        tl.fromTo(container, {
          yPercent: -7,
          ease: 'none'
        }, {
          yPercent: 20,
          ease: 'none'
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

export default useBackground;
