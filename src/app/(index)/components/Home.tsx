export default function Home() {
  return (
    <div data-js="initial-overlay_preload" className="relative ">
      <div data-js="initial-overlay" className="fixed bg-white inset-0 z-50"></div>
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
            className="flex absolute max-md:w-[30vw] md:w-[160px]"
          >
            <div data-js="butterfly-inner">
              <img
                data-js="butterfly-img"
                src="/assets/images/home/brand__butterfly-001.webp"
                alt=""
              />
            </div>
          </div>
          <div data-js="brandj-layer" className="flex absolute">
            <div
              data-js="brandj-inner"
              className="flex items-center justify-center"
            >
              <img
                data-js="brandj-img"
                className="w-[10vw] md:w-[100px]"
                src="/assets/images/home/brand__j.webp"
                alt=""
              />
              <img
                data-js="stickbottle-img"
                className="w-[3vw] md:w-[20px] -mt-[4vw] -ml-[1.5vw]"
                src="/assets/images/home/brand__stick-bottle.webp"
                alt=""
              />
            </div>
          </div>
          <div
            data-js="framer-layer"
            className="absolute flex justify-center items-center"
          >
            <div
              data-js="framer-inner"
              className="flex items-center justify-center"
            >
              <img
                data-js="framer-framer"
                className="w-[30vw] md:w-[300px]"
                src="/assets/images/home/brand__farmer.webp"
                alt=""
              />
              <img
                data-js="framer-avocado"
                className="w-[10vw] md:w-[80px]"
                src="/assets/images/home/brand__avocado.webp"
                alt=""
              />
            </div>
          </div>
          <div
            data-js="bag-layer"
            className="absolute flex justify-center items-center"
          >
            <div
              data-js="bag-inner"
              className="flex items-center justify-center"
            >
              <img
                data-js="bag-tree"
                className="w-[16vw] md:w-[140px]"
                src="/assets/images/home/brand__bg-bag-lady.webp"
                alt=""
              />
              <img
                data-js="bag-bird"
                className="w-[8vw] md:w-[80px] md:-ml-[60px] -ml-[5vw] md:mt-[50px] mt-[6vw]"
                src="/assets/images/home/brand__flag-bird.webp"
                alt=""
              />
              <img
                data-js="bag-flag"
                className="md:w-[160px] w-[18vw] md:-mt-[110px] -mt-[10vw] md:-ml-[10px] -ml-[1vw]"
                src="/assets/images/home/brand__flag-002.webp"
                alt=""
              />
            </div>
          </div>

          <div
            data-js="tree-layer"
            className="inline-flex justify-center items-center"
          >
            <div
              data-js="tree-inner"
              className="flex justify-center items-center"
            >
              <img
                data-js="tree-sisters"
                className="md:w-[280px] object-top object-contain size-[30vw]"
                src="/assets/images/home/brand__tree-sisters.webp"
                alt=""
              />
              <img
                data-js="tree-cloud"
                className="absolute left-1/2 top-1/2 md:w-[500px] w-[70vw] max-w-fit"
                src="/assets/images/home/brand__cloud-lg.webp"
                alt=""
              />
            </div>
          </div>

          <div
            data-js="skyscraper-layer"
            className="absolute inset-0 flex justify-center items-center"
          >
            <div
              data-js="skyscraper-inner"
              className="flex justify-center items-center w-full h-full"
            >
              <img
                data-js="skyscraper-glory"
                className="absolute left-1/2 top-1/2 md:size-[280px] object-top object-contain size-[50vw]"
                src="/assets/images/home/brand__glory.webp"
                alt=""
              />
              <img
                data-js="skyscraper-tower"
                className="absolute left-1/2 top-1/2 md:w-[550px] w-[70vw]"
                src="/assets/images/home/brand__skyscraper.webp"
                alt=""
              />
            </div>
          </div>

          <div
            data-js="earth-layer"
            className="absolute inset-0 flex justify-center items-center"
          >
            <div
              data-js="earth-inner"
              className="flex items-center justify-center relative w-full h-full"
            >
              <img
                data-js="earth-arm"
                className="absolute left-1/2 top-1/2 w-[90vw] md:w-[700px]"
                src="/assets/images/home/brand__arm.webp"
                alt=""
              />
              <img
                data-js="earth-earth"
                className="absolute left-1/2 top-1/2 w-[70vw] md:w-[550px]"
                src="/assets/images/home/brand__earth.webp"
                alt=""
              />
              <img
                data-js="earth-john"
                className="absolute left-1/2 top-1/2 w-[30vw] md:w-[200px]"
                src="/assets/images/home/brand__john.webp"
                alt=""
              />
              <img
                data-js="earth-sunflower"
                className="absolute left-1/2 top-1/2 w-[40vw] md:w-[240px]"
                src="/assets/images/home/brand__sunflower.webp"
                alt=""
              />
            </div>
          </div>

          <div
            data-js="plate-layer"
            className="inline-flex justify-center items-center"
          >
            <div
              data-js="plate-inner"
              className="flex justify-center items-center"
            >
              <img
                data-js="plate-one"
                className="md:w-[190px] w-[20vw]"
                src="/assets/images/home/brand__plate-one.webp"
                alt=""
              />
              <img
                data-js="plate-earth"
                className="md:w-[310px] w-[32vw]"
                src="/assets/images/home/brand__plate-earth.webp"
                alt=""
              />
            </div>
          </div>

          <div
            data-js="stick-layer"
            className="inline-flex justify-center items-center"
          >
            <div
              data-js="stick-inner"
              className="flex justify-center items-center"
            >
              <img
                data-js="stick-tree"
                className="object-top object-contain max-w-fit w-[70px] md:w-[120px]"
                src="/assets/images/home/brand__stick-tree.webp"
                alt=""
              />
              <img
                data-js="stick-cloud"
                className="object-top w-[200px] md:w-[380px] left-1/2 top-1/2 absolute object-contain max-w-fit"
                src="/assets/images/home/brand__cloud-sm.webp"
                alt=""
              />
            </div>
          </div>

          <div
            data-js="birds-layer"
            className="inline-flex justify-center items-center"
          >
            <div
              data-js="birds-inner"
              className="flex justify-center items-center"
            >
              <img
                data-js="birds-frame"
                className="object-top object-contain max-w-fit w-[40px] md:w-[60px]"
                src="/assets/images/home/brand__bird-001.webp"
                alt=""
              />
              <img
                data-js="birds-frame"
                className="object-top object-contain max-w-fit w-[40px] md:w-[60px]"
                src="/assets/images/home/brand__bird-001.webp"
                alt=""
              />
              <img
                data-js="birds-frame"
                className="object-top object-contain max-w-fit w-[40px] md:w-[60px]"
                src="/assets/images/home/brand__bird-001.webp"
                alt=""
              />
              <img
                data-js="birds-frame"
                className="object-top object-contain max-w-fit w-[40px] md:w-[60px]"
                src="/assets/images/home/brand__bird-001.webp"
                alt=""
              />
              <img
                data-js="birds-frame"
                className="object-top object-contain max-w-fit w-[40px] md:w-[60px]"
                src="/assets/images/home/brand__bird-001.webp"
                alt=""
              />
              <img
                data-js="birds-frame"
                className="object-top object-contain max-w-fit w-[40px] md:w-[60px]"
                src="/assets/images/home/brand__bird-001.webp"
                alt=""
              />
              <img
                data-js="birds-frame"
                className="object-top object-contain max-w-fit w-[40px] md:w-[60px]"
                src="/assets/images/home/brand__bird-001.webp"
                alt=""
              />
              <img
                data-js="birds-frame"
                className="object-top object-contain max-w-fit w-[40px] md:w-[60px]"
                src="/assets/images/home/brand__bird-001.webp"
                alt=""
              />
            </div>
          </div>

          <div
            data-js="text01-layer"
            className="absolute inset-0 flex justify-center items-center"
          >
            <div
              data-js="text01-inner"
              className="flex justify-center items-center"
            >
              <h2>
                <span className="block text-[4.6vw] md:text-[32px]" data-splitting>
                  1994年、NY SOHOに誕生した
                </span>
                <span className="block text-[4.6vw] md:text-[32px]" data-splitting>
                  化学物質を一切使用しない<strong>世界初</strong>の
                </span>
                <span className="block text-[4.6vw] md:text-[32px]" data-splitting>
                  クリーンエアサロン。
                </span>
              </h2>
            </div>
          </div>

        </div>
        <div className="fixed inset-0 flex justify-center items-center">
          <div
            data-js="bottle-layer"
            className="absolute inline-flex justify-center items-center"
          >
            <div
              data-js="bottle-inner"
              className="flex justify-center items-center"
            >
              <img
                data-js="bottle-wash"
                className="object-top left-1/2 top-1/2 absolute object-contain md:w-[150px] w-[24vw] max-w-fit"
                src="/assets/images/home/brand__body-wash-bottle-wh.webp"
                alt=""
              />
              <img
                data-js="bottle-o"
                className="object-top object-contain max-w-fit w-[36vw] md:w-[200px]"
                src="/assets/images/home/brand__o.webp"
                alt=""
              />
            </div>
          </div>
          <div
            data-js="jc-layer"
            className="absolute inline-flex justify-center items-center"
          >
            <div
              data-js="jc-inner"
              className="flex justify-center items-center "
            >
              <img
                data-js="jc-cloud"
                className="object-top left-1/2 top-1/2 absolute object-contain max-w-fit w-[50vw] md:w-[400px]"
                src="/assets/images/home/brand__cloud-lg.webp"
                alt=""
              />
              <img
                data-js="jc-j"
                className="object-top object-contain max-w-fit w-[32vw] md:w-[360px]"
                src="/assets/images/home/brand__j-lg.webp"
                alt=""
              />
            </div>
          </div>

          <div
            data-js="balloon-layer"
            className="absolute inline-flex justify-center items-center"
          >
            <div
              data-js="balloon-inner"
              className="flex justify-center items-center "
            >
              <img
                data-js="balloon-flower"
                className="object-top object-contain max-w-fit w-[30vw] md:w-[320px]"
                src="/assets/images/home/brand__balloon.webp"
                alt=""
              />
            </div>
          </div>
          <div
            data-js="windmill-layer"
            className="absolute inline-flex justify-center items-center"
          >
            <div
              data-js="windmill-inner"
              className="flex justify-center items-center "
            >
              <img
                data-js="windmill-windmill"
                className="object-top object-contain max-w-fit md:w-[300px]"
                src="/assets/images/home/brand__windmill.webp"
                alt=""
              />
              <img
                data-js="windmill-wave-block"
                className="object-top object-contain max-w-fit left-1/2 top-1/2 absolute"
                src="/assets/images/home/brand__wave-block.webp"
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
