import useScrollAnimations from "@/hooks/useScrollAnimations";

const Movie = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:py-[104px] py-[60px] px-5 bg-[#101010]">
      <div className="w-full max-w-[1320px] mx-auto flex max-md:flex-col gap-16 md:gap-20">
        <div className="fade-up w-full md:w-1/2">
          <div className="font-light md:text-[16px] text-[14px] text-center mb-5 md:mb-[30px] text-[#D9D9D9] tracking-[0.4em]">
            MOVIE TITLE
          </div>
          <video muted loop controls className="aspect-[31/20]" poster="">
            <source src="/videos/fv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="fade-up w-full md:w-1/2">
          <div className="font-light md:text-[16px] text-[14px] text-center mb-5 md:mb-[30px] text-[#D9D9D9] tracking-[0.4em]">
            MOVIE TITLE
          </div>
          <video muted loop controls className="aspect-[31/20]" poster="">
            <source src="/videos/fv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Movie;
