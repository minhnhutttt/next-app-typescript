export default function PageHead() {
    return (
        <div className="relative max-md:px-[28px] md:pl-[66px] md:pr-8 md:mb-12">
        <div className="pt-16 md:pt-[86px]">
          <div className="mt-3 flex max-md:flex-col max-md:gap-6 justify-between md:items-center w-full pb-5">
            <figure className="max-md:w-full">
              <img className="w-full max-w-[558px]" src="/images/fv-text.png" alt="" />
            </figure>
            <figure>
              <img className="max-md:max-w-[240px]" src="/images/deco-page.png" alt="" />
            </figure>
          </div>
          <span className="bg-[#FFC01D]/[0.5] h-px block max-md:hidden"></span>
        </div>
      </div>
    );
  }
  