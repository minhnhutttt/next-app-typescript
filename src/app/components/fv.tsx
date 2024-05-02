'use client';
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "react-splide-ts/css";
import useScrollAnimations from '@/hooks/useScrollAnimations'

const FV = () => {
  const ref = useScrollAnimations();


  return (
    <section ref={ref} className="relative bg-white">
        <a href="/" className="absolute left-[96px] top-[30px]">
            <img src="/images/logo.png" alt="" />
        </a>
        <div className="md:pt-[120px] flex justify-end">
            <div className="w-[70%] relative">
                <div className="w-full">
                    <Splide
                    hasTrack={ false }
                        options={{
                            rewind: true,
                            hasTrack: true
                        }}
                        className="w-full"
                    >
                        <SplideTrack>
                            <SplideSlide>
                            <img className="w-full" src="/images/fv-img-01.png" alt="" />
                            </SplideSlide>
                            <SplideSlide>
                            <img className="w-full" src="/images/fv-img-02.png" alt="" />
                            </SplideSlide>
                            <SplideSlide>
                            <img className="w-full" src="/images/fv-img-03.png" alt="" />
                            </SplideSlide>
                        </SplideTrack>
                        
                    </Splide>
                    
            <div className="splide__arrows">
    <button className="splide__arrow splide__arrow--prev">Prxxev</button>
    <button className="splide__arrow splide__arrow--next">Nexxxt</button>
  </div>
                </div>
                
            
            </div>
        </div>
    </section>
  )
}

export default FV
