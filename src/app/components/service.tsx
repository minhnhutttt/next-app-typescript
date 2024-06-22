"use client";

const Service = () => {
  return (
    <>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="max-w-[1200px] mx-auto text-[calc(18px_+_2vw)] text-center leading-[1.2] uppercase">
            WEB DESIGN / APP DESIGN / UX / UI / WEB application / marketing /
            iOS Android App / System development
          </div>
        </div>
      </section>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="font-anton text-[calc(24px_+_12vw)]  mb-[64px] sticky top-[3rem]">
            <h2 className="text-center uppercase leading-none" translate="no">
              our Service
            </h2>
          </div>
          <div className="flex flex-col gap-[16px]">
            <a
              className="sticky top-[10rem] block w-full p-[8%] bg-[#c9b5ab]"
              href="/web-design/"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Web Design
              </div>
              <div className="text-[21px] max-md:text-[18px] max-w-[600px]">
                We design a variety of systems from corporate websites to web
                applications. iOS Android app design is also available.
              </div>
            </a>
            <a
              className="sticky top-[10rem] block w-full p-[8%] bg-[#ab9247]"
              href="/development/"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Development
              </div>
              <div className="text-[21px] max-md:text-[18px] max-w-[600px]">
                We develop various systems from web applications to app
                development.
              </div>
            </a>
            <a
              className="sticky top-[10rem] block w-full p-[8%] bg-[#97b0bd]"
              href="/digital-marketing/"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Digital marketing
              </div>
              <div className="text-[21px] max-md:text-[18px] max-w-[600px]">
                We build and execute promotion strategies that logically capture
                the essence of your business by utilizing various channels in
                the digital domain.
              </div>
            </a>
            <a
              className="sticky top-[10rem] block w-full p-[8%] bg-[#cbc7b7]"
              href="/hosting/"
            >
              <div
                className="font-anton text-[calc(24px_+_2vw)] uppercase"
                translate="no"
              >
                Hosting
              </div>
              <div className="text-[21px] max-md:text-[18px] max-w-[600px]">
                We select and adjust the optimal hosting environment for
                providing different services from corporate websites to web
                applications.
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
