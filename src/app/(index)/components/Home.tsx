export default function Home() {
    return (
      <div data-js="initial-overlay_preload" className="relative">
        <div data-js="initial-overlay" className="fixed bg-white inset-0"></div>
        <div
      data-js="scenes"
      className="relative flex h-screen w-full origin-center items-center justify-center overflow-hidden"
    >
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-5">
                <h1 data-js="text-brand" className="text-center text-[16px] md:text-[20px] leading-none">john<br />masters<br />organics</h1>
                <p data-js="text-heading" className="text-center text-[30px] md:text-[54px] leading-none">ONE EARTH</p>
                <p data-js="text-heading02" className="text-center text-[20px] md:text-[28px] leading-none">地球に敬意を。</p>
            </div>
            </div>
        </div>

      </div>
    );
  }
  