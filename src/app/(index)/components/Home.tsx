export default function Home() {
  return (
    <>
      <div data-js="initial-overlay_preload" className="relative ">
        <div
          data-js="initial-overlay"
          className="fixed bg-white inset-0 z-50"
        ></div>
        <div
          data-js="scenes"
          className="w-full origin-center items-center justify-center"
        >
          <section className="absolute inset-0">
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
            {/* Butterfly */}
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

            {/* BrandJ */}
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
                  data-js="brandj-stickbottle"
                  className="w-[3vw] md:w-[20px] -mt-[4vw] -ml-[1.5vw]"
                  src="/assets/images/home/brand__stick-bottle.webp"
                  alt=""
                />
              </div>
            </div>

            {/* Framer */}
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

            {/* Bag */}
            <div
              data-js="bag-layer"
              className="absolute flex justify-center items-center"
            >
              <div
                data-js="bag-inner"
                className="flex items-center justify-center"
              >
                <div
                  data-js="bag-flu"
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
                    className="w-[8vw] md:w-[80px] md:-ml-[60px] -ml-[5vw] md:mt-[50px] mt-[6vw] relative z-10"
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
            </div>

            {/* Tree */}
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

            {/* Skyscraper */}
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

            {/* Earth */}
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

            {/* Plate */}
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

            {/* Stick */}
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

            {/* Birds */}
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
          </div>
          <div className="fixed inset-0 flex justify-center items-center">
            {/* Bottle */}
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

            {/* jc */}
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
                  className="object-top left-1/2 top-1/2 absolute object-contain max-w-fit w-[65vw] md:w-[400px]"
                  src="/assets/images/home/brand__cloud-lg.webp"
                  alt=""
                />
                <img
                  data-js="jc-j"
                  className="object-top object-contain max-w-fit w-[42vw] md:w-[360px]"
                  src="/assets/images/home/brand__j-lg.webp"
                  alt=""
                />
              </div>
            </div>

            {/* balloon */}
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

            {/* windmill */}
            <div
              data-js="windmill-layer"
              className="absolute inline-flex justify-center items-center"
            >
              <div
                data-js="windmill-inner"
                className="flex-col-reverse flex justify-center items-center "
              >
                <img
                  data-js="windmill-wave-block"
                  className="object-top object-contain origin-top absolute top-[90%] max-w-fit w-[16vw] md:w-[80px]"
                  src="/assets/images/home/brand__wave-block.webp"
                  alt=""
                />
                <img
                  data-js="windmill-windmill"
                  className="object-top object-contain max-w-fit md:w-[300px] relative w-[60vw]"
                  src="/assets/images/home/brand__windmill.webp"
                  alt=""
                />
              </div>
            </div>

            {/* argan */}
            <div
              data-js="argan-layer"
              className="absolute inline-flex justify-center items-center"
            >
              <div
                data-js="argan-inner"
                className="flex-col-reverse flex justify-center items-center relative"
              >
                <img
                  data-js="argan-bottle"
                  className="object-top object-contain max-w-fit relative md:w-[350px] w-[48vw]"
                  src="/assets/images/home/brand__argan-bottle.webp"
                  alt=""
                />
                <img
                  data-js="argan-cloud"
                  className="object-top object-contain origin-top absolute top-1/2 left-0 max-w-fit md:w-[600px] w-[60vw]"
                  src="/assets/images/home/brand__cloud-sm.webp"
                  alt=""
                />
              </div>
            </div>

            {/* chair */}
            <div
              data-js="chair-layer"
              className="absolute inline-flex justify-center items-center"
            >
              <div
                data-js="chair-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="chair-main"
                  className="relative w-[45vw] md:w-[300px]"
                  src="/assets/images/home/brand__cut-chair.webp"
                  alt=""
                />
                <img
                  data-js="chair-brush"
                  className="object-top object-contain origin-top absolute top-0 right-1/5 max-w-fit md:w-[100px] w-[14vw]"
                  src="/assets/images/home/brand__brush.webp"
                  alt=""
                />
              </div>
            </div>

            {/* working */}
            <div
              data-js="working-layer"
              className="absolute inline-flex justify-center items-center"
            >
              <div
                data-js="working-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="working-earth"
                  className="relative w-[60vw] md:w-[440px]"
                  src="/assets/images/home/brand__earth.webp"
                  alt=""
                />
                <img
                  data-js="working-leaves"
                  className="object-top object-contain origin-bottom absolute bottom-[75%] right-[60%] max-w-fit w-[23vw] md:w-[250px]"
                  src="/assets/images/home/brand__two-leaves.webp"
                  alt=""
                />
                <img
                  data-js="working-woman"
                  className="object-top object-contain origin-top absolute bottom-2/3 left-0 max-w-fit w-[22vw] md:w-[240px]"
                  src="/assets/images/home/brand__working-woman.webp"
                  alt=""
                />
              </div>
            </div>

            {/* BrandM */}
            <div
              data-js="brandm-layer"
              className="absolute inline-flex justify-center items-center"
            >
              <div
                data-js="brandm-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="brandm-main"
                  className="relative w-[45vw] md:w-[440px]"
                  src="/assets/images/home/brand__m-lg.webp"
                  alt=""
                />
              </div>
            </div>

            {/* Berry */}
            <div
              data-js="berry-layer"
              className="absolute inline-flex justify-center items-center"
            >
              <div
                data-js="berry-inner"
                className="flex justify-center items-center relative w-full"
              >
                <img
                  data-js="berry-01"
                  className="relative w-[10vw] md:w-[70px]"
                  src="/assets/images/home/brand__red-berry-1.webp"
                  alt=""
                />
                <img
                  data-js="berry-02"
                  className="w-[10vw] md:w-[70px] absolute left-full"
                  src="/assets/images/home/brand__red-berry-2.webp"
                  alt=""
                />
                <img
                  data-js="berry-03"
                  className="w-[10vw] md:w-[70px] absolute left-full top-full"
                  src="/assets/images/home/brand__red-berry-3.webp"
                  alt=""
                />
              </div>
            </div>

            {/* orange */}
            <div
              data-js="orange-layer"
              className="absolute inline-flex justify-center items-center"
            >
              <div
                data-js="orange-inner"
                className="flex justify-center items-center relative w-full"
              >
                <img
                  data-js="orange-01"
                  className="relative w-[12vw] md:w-[90px]"
                  src="/assets/images/home/brand__orange-fruit-1.webp"
                  alt=""
                />
                <img
                  data-js="orange-02"
                  className="w-[12vw] md:w-[100px] absolute top-1/2 left-full"
                  src="/assets/images/home/brand__orange-fruit-2.webp"
                  alt=""
                />
              </div>
            </div>

            {/* scissors */}
            <div
              data-js="scissors-layer"
              className="absolute inline-flex justify-center items-center right-0"
            >
              <div
                data-js="scissors-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="scissors-cactus"
                  className="object-top object-contain bottom-[-10%] right-[-20%] absolute max-w-fit w-[192%]"
                  src="/assets/images/home/brand__bg-cactus.webp"
                  alt=""
                />
                <img
                  data-js="scissors-body"
                  className="relative md:w-[232px] w-[40vw] "
                  src="/assets/images/home/brand__scissors-bird-body.webp"
                  alt=""
                />
                <img
                  data-js="scissors-head-front"
                  className="object-top object-contain absolute origin-top max-w-fit right-1/2 top-[-15%] w-[102%]"
                  src="/assets/images/home/brand__scissors-bird-head-front.webp"
                  alt=""
                />
                <img
                  data-js="scissors-head-back"
                  className="right-1/2 object-top object-contain absolute origin-top max-w-fit top-[0] w-[108%]"
                  src="/assets/images/home/brand__scissors-bird-head-back.webp"
                  alt=""
                />
              </div>
            </div>

            {/* cloud */}
            <div
              data-js="cloud-layer"
              className="absolute inline-flex justify-center items-center left-[-10%]"
            >
              <div
                data-js="cloud-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="cloud-main"
                  className="relative md:w-[800px] w-[40vw] "
                  src="/assets/images/home/brand__cloud-lg.webp"
                  alt=""
                />
              </div>
            </div>

            {/* hand */}
            <div
              data-js="hand-layer"
              className="absolute inline-flex justify-center items-center left-0 md:left-[10%]"
            >
              <div
                data-js="hand-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="hand-body"
                  className="relative md:w-[188px] w-[26vw] "
                  src="/assets/images/home/brand__hand.webp"
                  alt=""
                />
                <img
                  data-js="hand-leaf"
                  className="object-top object-contain absolute origin-top max-w-fit left-[-50%] bottom-[-30%] w-[97.97%]"
                  src="/assets/images/home/brand__leaf.webp"
                  alt=""
                />
              </div>
            </div>

            {/* tractor */}
            <div
              data-js="tractor-layer"
              className="absolute inline-flex justify-center items-center right-[20%]"
            >
              <div
                data-js="tractor-inner"
                className="flex justify-center items-center relative"
              >
                <div
                  data-js="tractor-flu"
                  className="flex justify-center items-center relative"
                >
                  <img
                    data-js="tractor-back"
                    className="absolute w-[70.7%] top-[-2%] right-[25%]"
                    src="/assets/images/home/brand__tractor-back.webp"
                    alt=""
                  />
                  <img
                    data-js="tractor-butter"
                    className="absolute w-[38.53%] top-[-50%] right-[20%]"
                    src="/assets/images/home/brand__butter-tube.webp"
                    alt=""
                  />
                  <img
                    data-js="tractor-shampoo"
                    className="absolute w-[39.52%] top-[-50%] right-[55%]"
                    src="/assets/images/home/brand__shampoo-bottle.webp"
                    alt=""
                  />
                  <img
                    data-js="tractor-bar"
                    className="absolute w-[44.46%] top-[-12%] right-1/3"
                    src="/assets/images/home/brand__body-bar.webp"
                    alt=""
                  />
                  <img
                    data-js="tractor-lavender"
                    className="absolute w-[51.58%] top-[-50%] right-0"
                    src="/assets/images/home/brand__lavender.webp"
                    alt=""
                  />
                  <img
                    data-js="tractor-front"
                    className="relative md:w-[303px] w-[40vw] "
                    src="/assets/images/home/brand__tractor-front.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* brando */}
            <div
              data-js="brando-layer"
              className="absolute inline-flex justify-center items-center left-0"
            >
              <div
                data-js="brando-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="brando-main"
                  className="relative md:w-[400px] w-[26vw] "
                  src="/assets/images/home/brand__o-lg.webp"
                  alt=""
                />
              </div>
            </div>

            {/* girl */}
            <div
              data-js="girl-layer"
              className="absolute inline-flex justify-center items-center md:right-[10%]"
            >
              <div
                data-js="girl-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="girl-head"
                  className="relative md:w-[400px] w-[60vw] "
                  src="/assets/images/home/brand__frame-girl-head.webp"
                  alt=""
                />
                <img
                  data-js="girl-arm"
                  className="w-[91%] right-[45%] absolute"
                  src="/assets/images/home/brand__frame-girl-arm.webp"
                  alt=""
                />
              </div>
            </div>

            {/* mirror */}
            <div
              data-js="mirror-layer"
              className="absolute inline-flex justify-center items-center bottom-0 left-0 origin-bottom"
            >
              <div
                data-js="mirror-inner"
                className="flex justify-center items-end relative"
              >
                <img
                  data-js="mirror-main"
                  className="absolute w-[33%] left-[10%] origin-bottom"
                  src="/assets/images/home/brand__mirror.webp"
                  alt=""
                />
                <img
                  data-js="mirror-mountain"
                  className="relative md:w-[410px] w-[55vw] origin-bottom"
                  src="/assets/images/home/brand__mountain.webp"
                  alt=""
                />
                <img
                  data-js="mirror-bottles"
                  className="relative md:w-[288px] w-[42vw] -ml-px origin-bottom"
                  src="/assets/images/home/brand__bottles.webp"
                  alt=""
                />
              </div>
            </div>

            {/* cloud02 */}
            <div
              data-js="cloud02-layer"
              className="absolute inline-flex justify-center items-center bottom-0 md:bottom-[-10%] left-[20%]"
            >
              <div
                data-js="cloud02-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="cloud02-main"
                  className="relative md:w-[1000px] w-[210vw] "
                  src="/assets/images/home/brand__cloud-lg.webp"
                  alt=""
                />
              </div>
            </div>

            {/* cloud03 */}
            <div
              data-js="cloud03-layer"
              className="absolute inline-flex justify-center items-center md:top-[-15%] top-[-5%] right-[-10%]"
            >
              <div
                data-js="cloud03-inner"
                className="flex justify-center items-center relative"
              >
                <img
                  data-js="cloud03-main"
                  className="relative md:w-[900px] w-[210vw] "
                  src="/assets/images/home/brand__cloud-lg.webp"
                  alt=""
                />
              </div>
            </div>

            {/* balloon02 */}
            <div
              data-js="balloon02-layer"
              className="absolute inline-flex justify-center items-center"
            >
              <div
                data-js="balloon02-inner"
                className="flex justify-center items-center "
              >
                <img
                  data-js="balloon02-flower"
                  className="object-top object-contain max-w-fit w-[30vw] md:w-[320px]"
                  src="/assets/images/home/brand__balloon.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="fixed inset-0 leading-loose">
            {/* Text 01 */}
            <div
              data-js="text01-layer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div
                data-js="text01-inner"
                className="flex justify-center items-center font-bold [text-shadow:2px_2px_2px_#fff]"
              >
                <p>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    1994年、NY SOHOに誕生した
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    化学物質を一切使用しない<strong>世界初</strong>の
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    クリーンエアサロン。
                  </span>
                </p>
              </div>
            </div>
            {/* Text 02 */}
            <div
              data-js="text02-layer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div
                data-js="text02-inner"
                className="flex justify-center items-center font-bold [text-shadow:2px_2px_2px_#fff]"
              >
                <p>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    john masters organicsのはじまりから、
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    いまも<strong>変わらない想い</strong>。
                  </span>
                </p>
              </div>
            </div>
            {/* Text 03 */}
            <div
              data-js="text03-layer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div
                data-js="text03-inner"
                className="flex justify-center items-center font-bold [text-shadow:2px_2px_2px_#fff]"
              >
                <p>
                  <span
                    className="block text-[5.5vw] md:text-[44px]"
                    data-splitting
                  >
                    ONE EARTH
                  </span>
                  <span
                    className="block text-[5.5vw] md:text-[44px]"
                    data-splitting
                  >
                    地球に敬意を。
                  </span>
                </p>
              </div>
            </div>
            {/* Text 04 */}
            <div
              data-js="text04-layer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div
                data-js="text04-inner"
                className="flex justify-center items-center font-bold [text-shadow:2px_2px_2px_#fff]"
              >
                <p>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    私たちから、あなたへ。
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    そしてあなたから、あなたに関わる人々へ、
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    自分を慈しむように、<strong>自然を大切</strong> にする。
                  </span>
                </p>
              </div>
            </div>
            {/* Text 05 */}
            <div
              data-js="text05-layer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div
                data-js="text05-inner"
                className="flex justify-start items-center font-bold [text-shadow:2px_2px_2px_#fff] md:w-[60%]"
              >
                <p>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    自然は私たちに幸福感をもたらし、
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    身も心も豊かにしてくれる。
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    自分を慈しむように、<strong>自然を大切</strong> にする。
                  </span>
                </p>
              </div>
            </div>
            {/* Text 06 */}
            <div
              data-js="text06-layer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div
                data-js="text06-inner"
                className="flex justify-start items-center font-bold [text-shadow:2px_2px_2px_#fff] md:w-[60%]"
              >
                <p>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    green beauty
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    オーガニックコスメを通じて、
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    <strong>人と地球の未来に</strong> 貢献すること。
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    それが私たちのミッション。
                  </span>
                </p>
              </div>
            </div>
            {/* Text 07 */}
            <div
              data-js="text07-layer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div
                data-js="text07-inner"
                className="flex justify-start items-center font-bold [text-shadow:2px_2px_2px_#fff] md:w-[60%]"
              >
                <p>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    美しい未来を、願うのではなく、<strong>自らの手で</strong>。
                  </span>
                </p>
              </div>
            </div>
            {/* Text 08 */}
            <div
              data-js="text08-layer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <div
                data-js="text08-inner"
                className="flex justify-end items-center font-bold [text-shadow:2px_2px_2px_#fff] md:w-[60%]"
              >
                <p>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    john masters organics が届けるもの。
                  </span>
                  <span
                    className="block text-[4.6vw] md:text-[32px]"
                    data-splitting
                  >
                    あなたが感じた<strong>美しさや心地よさ</strong>。
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute inset-0 p-5 flex items-center justify-center">
              <div className="w-full max-w-[1400px] grid grid-cols-2">
                <div className="w-full relative">
                  {/* Text 09 */}
                  <div
                    data-js="text09-inner"
                    className="flex justify-end items-center absolute inset-0 font-bold [text-shadow:2px_2px_2px_#fff]"
                  >
                    <p>
                      <span
                        className="block text-[4.6vw] md:text-[32px]"
                        data-splitting
                      >
                        そのすべてが、
                      </span>
                      <span
                        className="block text-[4.6vw] md:text-[32px]"
                        data-splitting
                      >
                        green beauty という輪となり、広がっていく。
                      </span>
                    </p>
                  </div>
                  {/* Text 10 */}
                  <div
                    data-js="text10-inner"
                    className="flex justify-end items-center absolute inset-0 font-bold "
                  >
                    <p>
                      <span
                        className="block text-[4.6vw] md:text-[32px]"
                        data-splitting
                      >
                        green beauty community を、社会へ。
                      </span>
                      <span data-js="text10-button" className="flex mt-5">
                        <a href="/" className="h-12 px-5 bg-black text-white flex items-center justify-center leading-none font-inter relative z-50">green beauty action</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 inset-x-0 pointer-events-none">
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
      <div className="footer"></div>
    </>
  );
}
