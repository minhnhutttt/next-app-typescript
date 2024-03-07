export default function Footer() {
    return (
      <div className="relative mt-10 md:mt-[60px]">
        <div className="w-[93.5%] border-t border-r md:rounded-tr-[160px] rounded-tr-[80px] border-white/50 pl-14 lg:pl-[360px] pt-5 md:pt-7">
          <div className="flex gap-6 pl-10 pr-5">
            <div className="flex-1">
              <div className="border-b border-white/50 ">
              <div className="py-6"><img className="max-md:w-[150px]" src="/images/last-work.png" alt="" /></div>
                <div className="flex gap-5 md:mt-[40px] mt-4 mb-12 md:mb-[168px] max-md:flex-wrap">
                  <figure>
                    <img className="rounded-[20px]" src="/images/image-last-work.png" alt="" />
                  </figure>
                  <figure>
                    <img className="rounded-[20px]" src="/images/image-last-work.png" alt="" />
                  </figure>
                  <figure>
                    <img className="rounded-[20px]" src="/images/image-last-work.png" alt="" />
                  </figure>
                </div>
              </div>
              <div className="md:text-[14px] text-[12px] text-right px-9 py-5">
              Copyright 2024 Ardorex Inc.
              </div>
            </div>
            <figure className="flex items-end py-9">
              <img className="max-md:w-[30px]" src="/images/ardrex-ver.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    );
  }
  