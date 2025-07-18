const Introduction = () => {
  return (
    <section className="bg-white relative pb-[30vw] md:pb-[20vw]">
      <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-[6vw] md:gap-x-[4vw] gap-y-[15vw] md:gap-y-[10vw] md:px-[2vw] px-[4vw]">
        <div className="col-span-6 md:col-span-12">
          <a href="/" className="fade-up relative mb-[7vw] md:mb-[4vw] group">
            <div className="absolute bg-white rounded-full px-3 top-4 left-4 z-[2] md:text-[18px] text-[16px]">
              Print
            </div>
            <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden z-1">
              <div className="md:pt-[102%] pt-[120%]"></div>
              <img
                src="/assets/images/1.webp"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="h4 mb-2 pr-5 md:mt-5 mt-3 js-split">
              Sunny Bonnell on Taylor Swift’s ‘marketing genius’
            </div>
            <div className="js-split text-black/60">Yahoo!</div>
          </a>
        </div>
        <div className="col-span-6 md:col-span-8 md:col-start-[17]">
          <a href="/" className="fade-up relative mb-[7vw] md:mb-[4vw] group">
            <div className="absolute bg-white rounded-full px-3 top-4 left-4 z-[2] md:text-[18px] text-[16px]">
              Podcast
            </div>
            <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden z-1">
              <div className="md:pt-[126.28%] pt-[120%]"></div>
              <video
                className="size-full object-cover absolute top-0 left-0 is-playing"
                data-lazy-video=""
                data-lazy=""
                data-autoplay="true"
                preload="none"
                loop
                muted
                autoPlay
                src="/assets/images/e3d75ddd-87e29be5.mp4"
                playsInline
                data-loaded="true"
              ></video>
            </div>
            <div className="h4 mb-2 pr-5 md:mt-5 mt-3 js-split">
              Sunny Bonnell on Visionary Leadership
            </div>
            <div className="js-split text-black/60">Udemy</div>
          </a>
        </div>
        <div className="col-span-12 md:col-[span_14_/_span_14] md:col-start-6">
          <a href="/" className="fade-up relative mb-[7vw] md:mb-[4vw] group">
            <div className="absolute bg-white rounded-full px-3 top-4 left-4 z-[2] md:text-[18px] text-[16px]">
              Podcast
            </div>
            <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden z-1">
              <div className="pt-[72%]"></div>
              <video
                className="size-full object-cover absolute top-0 left-0 is-playing"
                data-lazy-video=""
                data-lazy=""
                data-autoplay="true"
                preload="none"
                loop
                muted
                autoPlay
                src="/assets/images/01167253-2a0ecde7.mp4"
                playsInline
                data-loaded="true"
              ></video>
            </div>
            <div className="h4 mb-2 pr-5 md:mt-5 mt-3 js-split">
              Sunny Bonnell on Visionary Leadership
            </div>
            <div className="js-split text-black/60">Udemy</div>
          </a>
        </div>
        <div className="col-span-6 md:col-span-8">
          <a href="/" className="fade-up relative mb-[7vw] md:mb-[4vw] group">
            <div className="absolute bg-white rounded-full px-3 top-4 left-4 z-[2] md:text-[18px] text-[16px]">
              Print
            </div>
            <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden z-1">
              <div className="md:pt-[126%] pt-[120%]"></div>
              <video
                className="size-full object-cover absolute top-0 left-0 is-playing"
                data-lazy-video=""
                data-lazy=""
                data-autoplay="true"
                preload="none"
                loop
                muted
                autoPlay
                src="/assets/images/17868c59-88f647ea.mp4"
                playsInline
                data-loaded="true"
              ></video>
            </div>
            <div className="h4 mb-2 pr-5 md:mt-5 mt-3 js-split">Sunny Bonnell on Taylor Swift’s ‘marketing genius’</div>
            <div className="js-split text-black/60">Yahoo!</div>
          </a>
        </div>
        <div className="col-span-6 md:col-span-12  md:col-start-[13]">
          <a href="/" className="fade-up relative mb-[7vw] md:mb-[4vw] group">
            <div className="absolute bg-white rounded-full px-3 top-4 left-4 z-[2] md:text-[18px] text-[16px]">
              Podcast
            </div>
            <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden z-1">
              <div className="md:pt-[103%] pt-[120%]"></div>
              <img
                src="/assets/images/1.webp"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="h4 mb-2 pr-5 md:mt-5 mt-3 js-split">Sunny Bonnell on Visionary Leadership</div>
            <div className="js-split text-black/60">Udemy</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
