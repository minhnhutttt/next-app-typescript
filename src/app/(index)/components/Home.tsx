export default function Home() {
  return (
    <div data-js="initial-overlay_preload" className="relative ">
      <div data-js="initial-overlay" className="fixed bg-white inset-0"></div>
      <div
        data-js="scenes"
        className="w-full origin-center items-center justify-center"
      >
        <section>
          <div className="h-screen flex items-center justify-center">
            <div className="space-y-5">
              <h1
                data-js="text-brand"
                className="text-center text-[16px] md:text-[20px] leading-none"
              >
                john
                <br />
                masters
                <br />
                organics
              </h1>
              <p
                data-js="text-heading"
                className="text-center text-[30px] md:text-[54px] leading-none"
              >
                ONE EARTH
              </p>
              <p
                data-js="text-heading02"
                className="text-center text-[20px] md:text-[28px] leading-none"
              >
                地球に敬意を。
              </p>
            </div>
          </div>
        </section>
        <div className="fixed inset-0">
          <div
            data-js="butterfly-layer"
            className="flex absolute max-md:w-[30vw]"
          >
            <div data-js="butterfly-inner">
              <img
                data-js="butterfly-img"
                src="/assets/images/home/brand__butterfly-001.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="fixed inset-0">
          <div data-js="brandj-layer" className="flex absolute">
            <div
              data-js="brandj-inner"
              className="flex items-center justify-center"
            >
              <img
                data-js="brandj-img"
                className="w-[10vw] md:w-[120px]"
                src="/assets/images/home/brand__j.webp"
                alt=""
              />
              <img
                data-js="stickbottle-img"
                className="w-[10vw] md:w-[20px]"
                src="/assets/images/home/brand__stick-bottle.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="fixed inset-0">
          <div
            data-js="framer-layer"
            className="absolute flex justify-center items-center"
          >
            <div data-js="framer-inner" className="flex items-center justify-center">
            <img
            data-js="framer-framer"
                className=""
                src="/assets/images/home/brand__farmer.webp"
                alt=""
              />
              <img
              data-js="framer-avocado"
                className=""
                src="/assets/images/home/brand__avocado.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0">
        <div className="scene h-screen scene-1" data-scene-index="1"></div>
        <div className="scene h-screen scene-2" data-scene-index="2"></div>
        <div className="scene h-screen scene-3" data-scene-index="3"></div>
        <div className="scene h-screen scene-4" data-scene-index="4"></div>
        <div className="scene h-screen scene-5" data-scene-index="5"></div>
        <div className="scene h-screen scene-6" data-scene-index="6"></div>
        <div className="scene h-screen scene-7" data-scene-index="7"></div>
        <div className="scene h-screen scene-8" data-scene-index="8"></div>
        <div className="scene h-screen scene-9" data-scene-index="9"></div>
        <div className="scene h-screen scene-10" data-scene-index="10"></div>
        <div className="scene h-screen scene-11" data-scene-index="11"></div>
        <div className="scene h-screen scene-12" data-scene-index="12"></div>
        <div className="scene h-screen scene-13" data-scene-index="13"></div>
        <div className="scene h-screen scene-14" data-scene-index="14"></div>
        <div className="scene h-screen scene-15" data-scene-index="15"></div>
        <div className="scene h-screen scene-16" data-scene-index="16"></div>
        <div className="scene h-screen scene-17" data-scene-index="17"></div>
        <div className="scene h-screen scene-18" data-scene-index="18"></div>
        <div className="scene h-screen scene-19" data-scene-index="19"></div>
        <div className="scene h-screen scene-20" data-scene-index="20"></div>
        <div className="scene h-screen scene-21" data-scene-index="21"></div>
        <div className="scene h-screen scene-22" data-scene-index="22"></div>
        <div className="scene h-screen scene-23" data-scene-index="23"></div>
        <div className="scene h-screen scene-24" data-scene-index="24"></div>
        <div className="scene h-screen scene-25" data-scene-index="25"></div>
        <div className="scene h-screen scene-26" data-scene-index="26"></div>
        <div className="scene h-screen scene-27" data-scene-index="27"></div>
        <div className="scene h-screen scene-28" data-scene-index="28"></div>
      </div>
    </div>
  );
}
